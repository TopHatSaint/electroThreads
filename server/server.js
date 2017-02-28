// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');
var passport = require('passport');
var auth0 = require('passport-auth0');

// CONFIG
// ============================================================
var config = require('./config.js');

// INITILIZE APP
// ============================================================
var app = module.exports = express();

// INITILIZE DEPENDENCIES
// ============================================================
app.use(express.static('./public'));
app.use(bodyParser.json());

// AUTH0 SETUP
//=============================================================
app.use(session({
  resave: true,
  saveUninitialized:  true,
  secret: config.secret
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new auth0(config.authConfig ,function(accessToken, refreshToken, extraParams, profile, done) {
  console.log(profile);
  return done(null, profile);
}));
passport.serializeUser(function(user, done) {
  console.log('serializing', user)
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// MASSIVE SETUP
// ============================================================
var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
  connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');
//DB SETUP
//=============================================================
var dbSetup = require('./services/dbSetup');
dbSetup.run();
// CONTROLLERS
// ============================================================
var serverCtrl = require('./controllers/serverCtrl.js');
var userCtrl = require('./controllers/userCtrl');
var orderCtrl = require('./controllers/orderCtrl');

// ENDPOINTS
// ============================================================

//AUTH0 ENDPOINTS
//=============================================================
app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback',
passport.authenticate('auth0', {successRedirect: '/#/items'}),
function(req,res) {
  res.status(200).send(req.user);
})

app.get('/auth/me', function(req,res) {
  if(!req.user) return res.sendStatus(404);

  res.staus(200).send(req.user);
})

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

//POLICIES //
//================================================================
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401)
  .send();
  return next();
}
//PRODUCTS ENDPOINTS
//================================================================
app.get('/api/products', serverCtrl.getClothes);
app.post('/api/products/', serverCtrl.createNewClothes);
app.delete('/api/products/:productId', serverCtrl.deleteClothes);
app.put('/api/products/:productId', serverCtrl.updateClothes);
//USER ENDPOINTS
//================================================================
app.get('/api/me', userCtrl.me);
app.put('/api/user/current', isAuthed, userCtrl.update);
//ORDER ENDPOINTS
//================================================================
app.post('/api/order/add', orderCtrl.addToCart);
app.put('/api/order/update/:id', orderCtrl.updateItemInCart);
app.delete('/api/order/delete/:id', orderCtrl.deleteFromCart);
// LISTEN
// ===============================================================
var port = config.PORT;
app.listen(port, function() {
  console.log('listening on port ', port);
});

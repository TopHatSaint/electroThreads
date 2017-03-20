// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');
var passport = require('passport');
var auth0 = require('passport-auth0');
var config = require('./config.js');
var stripe = require("stripe")(config.STRIPE_KEYS.secretKey);


// CONFIG
// ============================================================


// INITILIZE APP
// ============================================================
var app = module.exports = express();

// INITILIZE DEPENDENCIES
// ============================================================
app.use(express.static('./public'));
app.use(bodyParser.json());
//STRIPE SETUP
//=============================================================
// payment
app.post('/api/payment', function(req, res, next){
  console.log("body", req.body);

  //convert amount to pennies
  const chargeAmt = req.body.amount;
  const amountArray = chargeAmt.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if(amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
    	break;
    } else {
    	pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));
  console.log("Pennies: ");
  console.log(convertedAmt);

  const charge = stripe.charges.create({
  amount: convertedAmt, // amount in cents, again
  currency: 'usd',
  source: req.body.payment.token,
  description: 'Test charge for ElectroThreads'
}, function(err, charge) {
     res.sendStatus(200);
  // if (err && err.type === 'StripeCardError') {
  //   // The card has been declined
  // }
});
});

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
  db.user.search_email([profile.displayName], function(err, user) {
  if (err) {
    return done(err);
  }
  else if (!user.length) {
    db.user.create([profile.nickname, profile.displayName], function(err, user) {
      if (err) {
        return done(err);
      }
      console.log('User created');

      db.order.insert([user[0].user_id], function(err, order) {
        if (err) {
          console.log('DB Create, durring user create: ', err);
        }

        user[0].order_id = order[0].order_id;
        return done(null, user[0]);
      })
    })
  }
  else {
    console.log('User found');
    db.order.read_incomplete([user[0].user_id], function(err, order) {
      if (err) {
        return console.log("Find User Auth, Order not found", err);
      }

      console.log('order: ', order);
      user[0].order_id = order[0].order_id;
      return done(null, user[0]);
    });
  }
});

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
//STRIPE ENDPOINTS
//=============================================================

//=============================================================
app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback',
passport.authenticate('auth0', {successRedirect: '/#/landingPage'}))

app.get('/auth/me', function(req,res) {
  if(!req.user) return res.sendStatus(404);

  return res.staus(200).send(req.user);
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
app.get('/api/product/:id', serverCtrl.getProduct)
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
app.get('/api/order', orderCtrl.read);
app.post('/api/order/add', orderCtrl.addToCart);
app.put('/api/order/update/:id', orderCtrl.updateItemInCart);
app.delete('/api/order/delete/:id', orderCtrl.deleteFromCart);
app.put('/api/order/complete', orderCtrl.complete);

// LISTEN
// ===============================================================
var port = config.PORT;
app.listen(port, function() {
  console.log('listening on port ', port);
});

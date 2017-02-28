var app = require('../server.js');
var db = app.get('db');



module.exports = {
  //CRUD METHODS
  // ===================================================================
  createNewClothes: (req, res) => {
    db.createTable([
      req.body.name,
      req.body.price,
      req.body.imageUrl,
      req.body.sizingImageUrl
    ], function(err, table) {
      if(err) {
        console.error(err);
        return res.send(err);
      } else {
        res.send(results);
      }
    });
  },
  getClothes: (req, res) => {
    db.product.get_clothes([],
    function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      } else {
        res.send(results);
      }
    })
  },
  deleteClothes: (req, res) => {
    db.product.delete_clothes([req.params.productId], function(err, results) {
        if (err) {
            console.error(err);
            return res.send(results);
        }
        return res.send(results);
    });
  },
  updateClothes: (req, res) => {
    db.product.update_clothes([
      req.body.name,
      req.body.price,
      req.body.imageUrl,
      req.body.sizingImageUrl,
      req.params.ID
    ], function(err, results){
      if (err){
         console.error(err);
         return res.send(err);
       }
       return res.send(results);
    })
  }





}

// INITILIZE SERVICE
// ============================================================
angular.module("app").service("mainService", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getProducts = function() {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function(response) {
      // console.log(response);
      return response.data
    });
  };
  this.getCollection = function(id) {
    return $http({
      method: 'GET',
      url: '/api/product/' + id
    }).then(function(response) {
      console.table(response)
        return response.data
      console.table(response.data)
    })
  };

  // OTHER FUNCTIONS
  // ============================================================

});

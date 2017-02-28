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
      console.log(response);
      return response.data
    });
  };
  // this.getCollection = function(id) {
  //   return $http({
  //     method: 'GET',
  //     url: '/api/collection?_id='+id
  //   });
  // };
  // this.createCollection = function(collection) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/collection',
  //     data: collection
  //   });
  // };
  // this.editCollection = function(id, collection) {
  //   return $http({
  //     method: 'PUT',
  //     url: "/api/collection/" + id,
  //     data: collection
  //   });
  // };
  // this.deleteCollection = function(id) {
  //   return $http({
  //     method: 'DELETE',
  //     url: '/api/collection/' + id
  //   });
  // };
  // OTHER FUNCTIONS
  // ============================================================

});
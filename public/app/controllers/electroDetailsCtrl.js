// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("electroDetailsCtrl", function($scope, $state, $stateParams, mainService, cartService) {
  // VARIABLES
  // ============================================================
  // var id = $stateParams.id
  // console.log(id);
  mainService.getCollection($stateParams.id).then(function(response) {
     console.log(response[0]);
     console.table(response);
     $scope.singleProduct = response[0];
  });

  // FUNCTIONS
  // ============================================================
  $scope.addToCart = function(id, qty) {
    cartService.addToCart(id, qty).then(function(response) {
      console.log(response);
      $state.go("cart")
    });
  }
});

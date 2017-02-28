// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("landingPageCtrl", function($scope , mainService, $state) {
  // VARIABLES
  // ============================================================
      mainService.getProducts().then(function(response) {
        console.log(response);
        $scope.products = response;
      }); // FUNCTIONS
  // ============================================================
});

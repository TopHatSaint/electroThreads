// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("landingPageCtrl", function($scope , mainService, $state) {
  // VARIABLES
  // ============================================================
      mainService.getProducts().then(function(response) {
        console.table(response);
        $scope.products = response;
      }); // FUNCTIONS
  // ============================================================
});

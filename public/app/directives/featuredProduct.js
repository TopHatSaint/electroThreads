// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('featuredProduct', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/views/featuredProductTmpl.html',
    controller: 'landingPageCtrl',
    link: function(scope, element, att) {

    },
    scope: {
      product: "="
    }
  };
});

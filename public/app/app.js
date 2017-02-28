
// ============================================================
var app = angular.module("app",["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
  // INITILIZE STATES
  // ============================================================
  $stateProvider
    // HOME STATE
    .state('landingPage', {
      url: '/landingPage',
      templateUrl: './views/landingPage.html',
      controller: 'landingPageCtrl'
    })
    // MONTHLY BOX STATE
    .state('monthlyBox', {
      url: '/monthlyBox',
      templateUrl: './views/monthlyBox.html',
      controller: 'monthlyBoxCtrl'
    })
    // DETAILS STATE
    .state('electroDetails', {
      url: '/electroDetails/:id',
      templateUrl: './views/electroDetails.html',
      controller: 'electroDetailsCtrl'
    })
    // CART STATE
    .state('cart', {
      url: '/cart',
      templateUrl: './views/cart.html',
      controller: 'cartCtrl'
    });



  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/landingPage');
});

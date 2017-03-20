// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("cartCtrl", function($scope, cartService, stripe, $http, $state) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
  $scope.getTotal = function() {
    console.table($scope.orderData)
  var total = 0;
  for (var i = 0; i < $scope.orderData.products.length; i++) {
    total += $scope.orderData.products[i].price * $scope.orderData.products[i].qty
  }
  $scope.total = total;
}

$scope.getOrder = function() {
  cartService.getOrder().then(function(response) {
      console.table(response);
    $scope.orderData = response;
    $scope.getTotal();
  });
}
$scope.getOrder();

$scope.updateItem = function(id, qty) {
  console.table(id, qty);
  cartService.updateItem(id, qty).then(function(response) {
    $scope.getTotal();
  });
};

$scope.deleteItem = function(id) {
  cartService.deleteItem(id).then(function(response) {
    console.table(response);
    $scope.getOrder();
  });
};

$scope.submit = function() {
  console.log('Submiting order');
  cartService.completeOrder().then(function(response) {
    $scope.getOrder();
  });
};
//==========STRIPE==================

  $scope.payment = {};

  $scope.charge = function (payment, total) {
    console.log("TEST", payment, total);
    return stripe.card.createToken($scope.payment.card)
    .then(function (response) {
      console.log('token created for card ending in ', response.card.last4);
      var payment = angular.copy($scope.payment);
      payment.card = void 0;
      payment.token = response.id;

      return $http({
        method: 'POST',
        url: '/api/payment',
        data: {
          amount: total,
          payment: payment
        }
      })
    })
    .then(function(payment) {
      console.log('successfully submitted payment for $', payment);
      $state.go('landingPage');
    })
    .catch(function (err) {
       if (err.type && /^Stripe/.test(err.type)) {
         console.log('Stripe error: ', err.message);
         alert(err.message)
       }
       else {
         console.log('Other error occurred, possibly with your API', err.message);
         alert(err.message)
       }
     });
 };

});

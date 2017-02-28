// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('magicNav', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/views/magicNavTmpl.html',
    contoller: function($scope){
      $scope.showNav = false;
    },
    link: function(scope, element, att) {
        $(window).scroll(function(){
          var scrollPosition = $(this).scrollTop();
          console.log(scrollPosition)
          if(scrollPosition > 100){
            $(".magicNavWrapper").css({
              "top": "0px",
              "position":"fixed"
            })
          } else {
            $(".magicNavWrapper").css({
              "top": "-7vh",
              "position":"fixed"
              })
          }
          $(".searchBar").hover( function(){
            $(".searchBarWrap").addClass("searchBarShow")
          })
            $(".searchBarWrap").mouseleave( function(){
                $(".searchBarWrap").removeClass("searchBarShow")
            })
        })



    }
  };
});

app.directive('focusMe', function($timeout) {
    return {
        restrict: 'AC',
        link: function(scope, element, attrs) {
            scope.$watch(attrs.focusMe, function(value) {
              if(value === true) { 
                $timeout(function() {
                  element[0].focus();
                });
              }
            });
        }
    };
});
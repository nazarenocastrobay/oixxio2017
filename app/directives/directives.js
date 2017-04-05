
angular.module('app.oixxio')
.directive('compile', ['$compile', function ($compile) {
  console.log('adentro;');
  return function(scope, element, attrs) {
    scope.$watch(
      function(scope) {
        return scope.$eval(attrs.compile);

      },
      function(value) {
        element.html(value);
        $compile(element.contents())(scope);
      }
   )};
  }]);

'use strict'

const app = angular.module("AlertMessages", []);

app.controller("ControllerMasssage", function ($scope) {
   $scope.showAlert = function () {
      $scope.alertMessage = {
         type: "success",
         text: "Consulta Enviada.",
         delay: 5
      };
   };
});

app.directive("alertMessage", function ($compile) {
   return {
      restrict: "E",
      scope: {
         alert: "="
      },
      link: function (scope, element) {
         scope.$watch('alert', function () {
            updateAlert();
         });

         function updateAlert() {
            var html = "";

            if (scope.alert) {
               var icon = 'ok-sign';

               html = "<div class='alert alert-" + scope.alert.type + "' role='alert'>";
               html += scope.alert.text;
               html += "</div>";
            }

            var newElement = angular.element(html);
            var compiledElement = $compile(newElement)(scope);

            element.html(compiledElement);

            if (scope.alert && scope.alert.delay > 0) {
               setTimeout(function () {
                  scope.alert = null;
                  scope.$apply();
               }, scope.alert.delay * 1000);
            }
         }
      }
   }
});
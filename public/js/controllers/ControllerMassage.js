app.controller("ControllerMasssage", function ($scope) {
   $scope.showAlert = function () {
      $scope.alertMessage = {
         type: "success",
         text: "Consulta Enviada.",
         delay: 5
      };
   };
});
var app = angular.module('app');

app.controller('CadastroController', function($scope, $location) {
  $scope.reserva = {};

  $scope.locais = ['Florianópolis/Capoeiras', 'Florianópolis/Centro', 'Londrina/Centro', 'Londrina/Gleba Palhano'];
  $scope.carros = ['Renault Logan', 'Volkswagem Jetta', 'Fiat Punto'];

  $scope.salvar = function salvar() {
    console.log($scope.reserva);
  }

  $scope.cancelar = function cancelar() {
    $location.path('/');
  }

});

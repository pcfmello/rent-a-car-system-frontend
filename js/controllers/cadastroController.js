var app = angular.module('app');

app.controller('CadastroController', function($scope, $location, $routeParams) {
  var idReserva = $routeParams.id // ID enviado por quem requisitou a rota
  if(idReserva) {
    console.log('editar contato | id =>', idReserva);
  } else {
    console.log('cadastrar contato');
  }

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

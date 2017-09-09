var app = angular.module('app');

app.controller('CadastroController', function($scope, $location, $routeParams, $http) {
  var idReserva = $routeParams.id // ID enviado por quem requisitou a rota
  if(idReserva) {
    console.log('editar contato | id =>', idReserva);
  } else {
    console.log('cadastrar contato');
  }

  $scope.reserva = {};
  $scope.locais = [];
  $scope.carros = [];

  // Requisição AJAX para obter a lista de filiais do backend
  $http.get('http://localhost:5000/filiais')
    .then(function(response) {
      $scope.locais = response.data;
    });

  // Requisição AJAX para obter a lista de carros do backend
  $http.get('http://localhost:5000/carros')
    .then(function(response) {
      $scope.carros = response.data;
    });

  $scope.salvar = function salvar() {
    console.log($scope.reserva);
    $http.post('http://localhost:5000/reservas', $scope.reserva)
      .then(function(response) {
          console.log(response);
      });

  }

  $scope.cancelar = function cancelar() {
    $location.path('/');
  }

});

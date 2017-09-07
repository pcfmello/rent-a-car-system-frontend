var app = angular.module('app');

app.controller('ListaController', function($scope, $location, $http) {
  var modalExcluir = $('#confirmaExclusao');

  $scope.reservas = [];

  // Requisição AJAX para obter a lista de reservas do backend
  $http.get('http://localhost:5000/reservas')
    .then(function(response) {
      $scope.reservas = response.data;
    });

  $scope.cadastrar = function cadastrar() {
    $location.path('/cadastro');
  }

  $scope.editar = function editar(id) {
    $location.path('/cadastro/' + id);
  }

  $scope.abreModalExclusao = function abreModalExclusao(reserva, indice) {
    $scope.reserva = reserva;
    $scope.indiceParaExcluir = indice;
    modalExcluir.modal('show');
  }

  $scope.excluir = function excluir(indice) {
    $scope.reservas.splice(indice, 1);
    modalExcluir.modal('hide');
  }

});

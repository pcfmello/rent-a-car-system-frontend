var app = angular.module('app');

app.controller('ListaController', function($scope, $location, $http) {
  var modalExcluir = $('#confirmaExclusao');

  $scope.reservas = [];
  $scope.reserva = {};

  // Requisição AJAX para obter a lista de reservas do backend
  $http.get('http://localhost:5000/reservas')
    .then(function(response) {
      $scope.reservas = response.data;
    });

  $scope.cadastrar = function cadastrar() {
    $location.path('/cadastro');
  }

  // Edita um cadastro passando seu ID por parâmetro
  $scope.editar = function editar(id) {
    $location.path('/cadastro/' + id);
  }

  $scope.abreModalExclusao = function abreModalExclusao(reserva, indice) {
    $scope.reserva = reserva;
    $scope.reserva.indice = indice;
    modalExcluir.modal('show');
  }

  $scope.excluir = function excluir() {
    $http.delete('http://localhost:5000/reservas/' + $scope.reserva._id)
      .then(function(response) {
        // Deleta o objeto reserva da lista
        $scope.reservas.splice($scope.reserva.indice, 1);
        $scope.reserva = {};
      });
    modalExcluir.modal('hide');
  }

});

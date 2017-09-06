var app = angular.module('app');

app.controller('ListaController', function($scope, $location) {
  var modalExcluir = $('#confirmaExclusao');

  $scope.reservas = [
    {
      local : 'Centro',
      carro : 'Golf',
      dataInicio : '12/02/2012',
      dataFim : '15/12/2012',
      responsavel : 'Lucas',
      descricao : 'Alugado para passeio'

    },

    {
      local : 'Sul',
      carro : 'Logan',
      dataInicio : '25/05/2015',
      dataFim : '15/12/2018',
      responsavel : 'Paulo',
      descricao : 'Alugado para trabalho'

    },

    {
      local : 'Norte',
      carro : 'Pali Weekend',
      dataInicio : '09/11/2013',
      dataFim : '15/12/2015',
      responsavel : 'Naiara',
      descricao : 'Alugado para férias'
    }
  ];

  $scope.cadastrar = function cadastrar() {
    $location.path('/cadastro');
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

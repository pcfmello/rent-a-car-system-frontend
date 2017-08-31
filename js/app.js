// Criando um módulo com AngularJS
var app = angular.module('app', []);

// Criando um controller, com o nome ListController
app.controller('ListController', function($scope) {
  
  $scope.lista = [
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
      carro : 'Golf',
      dataInicio : '12/02/2012',
      dataFim : '15/12/2012',
      responsavel : 'Lucas',
      descricao : 'Alugado para passeio'

    },

    {
      local : 'Norte',
      carro : 'Golf',
      dataInicio : '12/02/2012',
      dataFim : '15/12/2012',
      responsavel : 'Lucas',
      descricao : 'Alugado para passeio'
    }
  ];
 
});



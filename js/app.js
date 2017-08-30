// Criando um módulo com AngularJS
var app = angular.module('app', []);

// Criando um controller, com o nome ListController
app.controller('ListController', function($scope) {
  
  // Criando uma variável de escopo de view(para ser acessada na view)
  $scope.nome = 'Hello World!';
  
  // Criando um objeto de escopo da view(para ser acessada na view)
  $scope.carro = {};
  
  // Setando atributos no objeto criado
  $scope.carro.marca = 'Renault';
  $scope.carro.modelo = 'Logan';
  
});

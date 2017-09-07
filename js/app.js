// Criando um módulo com AngularJS
var app = angular.module('app', ['ngRoute']);

// Configurando o arquivo de rotas
app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when( '/', {
      templateUrl: 'views/lista.html',
      controller:  'ListaController'
    })
    .when('/cadastro', {
      templateUrl: 'views/cadastro.html',
      controller : 'CadastroController'
    })
    .when('/cadastro/:id', {
      templateUrl: 'views/cadastro.html',
      controller : 'CadastroController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

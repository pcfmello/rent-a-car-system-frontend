var app = angular.module('app');

app.controller('CadastroController', function($scope, $location, $routeParams, $http) {
  var idReserva = $routeParams.id // ID enviado por quem requisitou a rota
  if(idReserva) {
    // Requisição AJAX para obter a reserva pelo ID
    $http.get('http://localhost:5000/reservas/' + idReserva)
      .then(function(response) {
        $scope.reserva = response.data;
        $scope.reserva.dataInicio = new Date($scope.reserva.dataInicio);
        $scope.reserva.dataFim = new Date($scope.reserva.dataFim);
      });
  } else {
    $scope.reserva = {};
  }

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

  // Requisição AJAX para salvar ou atualizar a reserva do backend
  $scope.salvar = function salvar(formularioEhValido) {
    if(!formularioEhValido) return;
    if($scope.reserva._id) {
      $http.put('http://localhost:5000/reservas', $scope.reserva)
        .then(function(response) {
            $location.path('/');
        });
    } else {
      $http.post('http://localhost:5000/reservas', $scope.reserva)
        .then(function(response) {
          $location.path('/');
      });
    }
  }

  $scope.cancelar = function cancelar() {
    $location.path('/');
  }
});

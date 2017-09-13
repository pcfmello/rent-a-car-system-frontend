var app = angular.module('app');

app.controller('CadastroController', function($scope, $location, $routeParams, $http) {
  // Inicializa JQuery-UI Datepicker no input #data
  $("#data").datepicker({
    minDate: '0', // Seta a data mínima para o dia corrente
  });

  // Inicializa o JQuery Timepicker no input #dataInicio
  $('.componente-hora').timepicker({
    wrapHours: true, // Formato 24hs (22:30)
    timeFormat: 'H:i' // Formato hora:minuto
  });

  $scope.locais = [];
  var idReserva = $routeParams.id // ID enviado por quem requisitou a rota

  // Verifica se existe cadastro para editar ou cria um novo cadastro
  if(idReserva) {
    // Requisição AJAX para obter a reserva pelo ID
    $http.get('http://localhost:5000/reservas/' + idReserva)
      .then(function(response) {
        $scope.reserva = response.data;
        $scope.reserva.horaInicio = converteDataHoraParaString($scope.reserva.horaInicio);
        $scope.reserva.horaFim = converteDataHoraParaString($scope.reserva.horaFim);
      });
  } else {
    $scope.reserva = {};
  }

  // Requisição AJAX para obter a lista de filiais do backend
  $http.get('http://localhost:5000/locais')
    .then(function(response) {
      $scope.locais = response.data;
    });

  function converteStringParaDataHora(dataTexto, horaTexto) {
    var dataSplit = dataTexto.split('/');
    var horaSplit = horaTexto.split(':');
    return new Date(Date.UTC(dataSplit[2], dataSplit[1], dataSplit[0],
      horaSplit[0], horaSplit[1], 0, 0));
  }

  function converteDataHoraParaString(dataHora) {
    var horas = dataHora.split('T')[1];
    var hora = Number(horas.split(':')[0]);
    var minuto = horas.split(':')[1];
    return hora + ':' + minuto;
  }

  // Requisição AJAX para salvar ou atualizar a reserva do backend
  $scope.salvar = function salvar(formularioEhValido) {
    $scope.reservaJaExiste = false;

    var horaInicio =
        converteStringParaDataHora($scope.reserva.data, $scope.reserva.horaInicio);
    var horaFim =
        converteStringParaDataHora($scope.reserva.data, $scope.reserva.horaFim);

    // Consulta se há reservas com esse local, veículo e entre as datas e horários
    $http.post('http://localhost:5000/reservas/consulta', {
        local: $scope.reserva.local,
        carro: $scope.reserva.carro,
        data: $scope.reserva.data,
        horaInicio: horaInicio,
        horaFim: horaFim
      })
      .then(function(response) {
        console.log(response);
        $scope.reservaJaExiste = response.data;
        // Se reserva está disponível, cria/altera uma reserva
        if(!$scope.reservaJaExiste) {
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
        } else {
          $scope.reservaJaExiste = true;
          console.log("Reserva já existe");
        }
      });


  }

  $scope.cancelar = function cancelar() {
    $location.path('/');
  }
});

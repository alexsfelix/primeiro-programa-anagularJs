angular.module("lista-telefonica", []);
angular.module("lista-telefonica").controller("controller-lista-telefonica", function ($scope) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        { nome: "Alexsandro", telefone: "9999999", operadora: "Vivo", cor: "green" }
    ];

    $scope.operadoras = [
        { nome: "Oi", codigo: 14 },
        { nome: "Vivo", codigo: 15 },
        { nome: "Tim", codigo: 41 },
    ];

    $scope.adcContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    }

    $scope.classe = "selecionado";

    $scope.apagarContato = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    }

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    }
});
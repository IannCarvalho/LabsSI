angular.module("main").controller("clientes-ctrl", function ($scope, $http, $serviceClientes){

	$scope.clientes = $serviceClientes.clientes;

	$http.get("/clientes")
    .then(function (clientes) {
        $serviceClientes.clientes = clientes.data;
    })
    .catch(function (erro) {
        console.log(erro);
    });	

	$scope.emailRepetido = function (email) {
    	array = $serviceClientes.clientes
    	
    	for(var i=0; i<array.length; i++){
            if(array[i].email == email){
                return true;
            }
        }
        return false;
    };

    $scope.addCliente = function (clienteForm) {
    	if($scope.emailRepetido(clienteForm.email)){
    		alert("Email já utilizado")
    	}else{
    	var clienteRequest = {
    		email: clienteForm.email,
    		senha: clienteForm.senha,
    		nome: clienteForm.nome
    	}
    	$http.post("/cliente", clienteRequest)
	    .then(function() {
			alert("Usuário cadastrado com sucesso");
            $http.get("/clientes")
            .then(function (clientes) {
                $serviceClientes.clientes = clientes.data;
                $scope.clientes = $serviceClientes.clientes
                location.reload();

            })
            .catch(function (erro) {
                console.log(erro);
            });
		})
		.catch(function (erro) {
			console.log(erro);
		});
    	}
    };

    $scope.logarCliente = function (loginForm) {
    	var clienteRequest = {
    		email: loginForm.email,
    		senha: loginForm.senha,
    	}
    	$http.put("/cliente", clienteRequest)
	    .then(function(cliente) {
			alert("Bem-vindo, " + cliente.data.nome);
            location.reload();
		})
		.catch(function (erro) {
			alert("Usuário inexistente");
		});
    };


});	
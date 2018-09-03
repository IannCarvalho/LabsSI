angular.module("main").controller("artistas-ctrl", function ($scope, $http, $serviceArtistas, $serviceClientes){

    $scope.artistas = $serviceArtistas.artistas;

    $http.get("/artistas")
    .then(function (artistas) {
        $serviceArtistas.artistas = artistas.data;
        $scope.artistas = $serviceArtistas.artistas;
        $http.get("/clientes")
        .then(function (clientes) {
            $serviceClientes.clientes = clientes.data;
        })
        .catch(function (erro) {
            console.log(erro);
        });
    })
    .catch(function (erro) {
        console.log(erro);
    });

	$scope.addArtista = function (artistaForm) {
		if($scope.artistaRepetido(artistaForm.nome)){
			alert("Nome já utilizado")
		}else{
        var artistaRequest = {
            nota: artistaForm.nota,
            favoritado: artistaForm.favoritado,
            url: artistaForm.url,
            nome: artistaForm.nome
        }
        $http.post("/artista", artistaRequest)
        .then(function() {
            alert("Artista adicionado com sucesso");
            $http.get("/artistas")
            .then(function (artistas) {
                $serviceArtistas.artistas = artistas.data;
                $scope.artistas = $serviceArtistas.artistas;
                $http.get("/clientes")
                .then(function (clientes) {
                    $serviceClientes.clientes = clientes.data;
                    location.reload();  
                })
                .catch(function (erro) {
                    console.log(erro);
                });
            })
            .catch(function (erro) {
                console.log(erro);
            });
        })
        .catch(function (erro) {
            console.log(erro);
        });}
    };

   $scope.artistaRepetido = function (artistaNome) {
	   array = $serviceArtistas.artistas
   	
	   for(var i=0; i<array.length; i++){
		   if(array[i].nome == artistaNome){
			   return true;
		   }
	   }
	   	return false;
   }

    $scope.favoritar = function (artistaForm) {
        if(confirm("Tem certeza que deseja executar essa ação?") === true){
            var artistaRequest = {
                nota: artistaForm.nota,
                favoritado: artistaForm.favoritado,
                url: artistaForm.url,
                nome: artistaForm.nome
            }
            $http.put("/artista", artistaRequest)
            .then(function() {
                alert("Artista (des)favoritado com sucesso");
            })
            .catch(function (erro) {
                console.log(erro);
            });
        }
       
        $http.get("/artistas")
        .then(function (artistas) {
            $serviceArtistas.artistas = artistas.data;
            $scope.artistas = $serviceArtistas.artistas;
            $http.get("/clientes")
            .then(function (clientes) {
                $serviceClientes.clientes = clientes.data;
                location.reload();
            })
            .catch(function (erro) {
                console.log(erro);
            });
        })
        .catch(function (erro) {
            console.log(erro);
        });
        
    };

   
});


angular.module("main").controller("musicas-ctrl", function ($scope, $http, $serviceMusicas, $serviceArtistas, $serviceClientes){

	$scope.musicas = $serviceMusicas.musicas;
    $scope.artistas = $serviceArtistas.artistas;
    
    $http.get("/musicas")
    .then(function (musicas) {
        $serviceMusicas.musicas = musicas.data;
        $scope.musicas = $serviceMusicas.musicas;
        $http.get("/artistas")
        .then(function (artistas) {
            $scope.artistas = artistas.data;
            $serviceArtistas.artistas = artistas.data;
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
    })
    .catch(function (erro) {
        console.log(erro);
    });

    $scope.addMusica = function (musicaForm) {
    	if($scope.musicaNomeRepetido(musicaForm.nome)){
    		alert("Nome já utilizado")
    	}else{
        var musicaRequest = {
            nome: musicaForm.nome,
            artista: musicaForm.artista,
            album: musicaForm.album,
            lancamento: musicaForm.lancamento,
            duracao: musicaForm.duracao
        }
		$http.post("/musica", musicaRequest)
        .then(function() {
            alert("Música adicionada");
            $http.get("/musicas")
            .then(function (musicas) {
                $serviceMusicas.musicas = musicas.data;
                $scope.musicas = $serviceMusicas.musicas;
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
            });
        })
        .catch(function (erro) {
            console.log(erro);
        });}
    };

    $scope.musicaNomeRepetido = function (musicaNome) {
    	array = $scope.musicas
    	
    	for(var i=0; i<array.length; i++){
            if(array[i].nome == musicaNome){
                return true;
            }
        }
        return false;
    }

});
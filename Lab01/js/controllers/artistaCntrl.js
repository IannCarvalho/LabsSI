app.controller("artistaCntrl", function ($scope, musicas){
    $scope.app = "ARTISTAS";

    $scope.artistas = musicas.artistas;    

    $scope.existe = false;
    $scope.adicionou = false;
    $scope.jaFavoritou = false;
    
    $scope.notas = ["A","B","C","D","E","F"];

    $scope.adicionarArtista = function (artista) {
        adicionou = musicas.adicionarArtista(artista, $scope.existe);

        if(adicionou){
            $scope.existe = false;
            $scope.adicionou = true;
            delete $scope.artista;
            $scope.artistaForm.$setPristine();
        }else{
            $scope.existe = true;
            $scope.adicionou = false;
        }
    }

    $scope.favoritarArtistas = function (artista) {
        if(confirm("Tem certeza que deseja executar essa ação?") === true){
            musicas.favoritarArtistas(artista);
        }
        $scope.jaFavoritou = true;
    }

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
    };

    $scope.ultimaTocada = function (artista) {
        musicas.ultimaTocada(artista);
    }

}) ;
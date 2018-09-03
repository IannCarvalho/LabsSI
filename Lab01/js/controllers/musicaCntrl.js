app.controller("musicaCntrl", function ($scope, musicas){
    $scope.app = "MÚSICAS";
    
    $scope.artistas = musicas.artistas;
    $scope.playlists = musicas.playlists;

    $scope.existe = false;
    $scope.temMusica = false;
    $scope.adicionou = false;

    $scope.adicionarMusica = function (artista, musica, album) {
        adicionou = musicas.adicionarMusica(artista, musica, album);

        if(adicionou){
            $scope.existe = false;
            $scope.adicionou = true;
            delete $scope.musica;
            delete $scope.artista;
            delete $scope.album;
            $scope.musicaForm.$setPristine();
        }else{
            $scope.existe = true;
            $scope.adicionou = false;
        }
    }

    $scope.todasAsMusicas = function (artistas) {
        return musicas.todasAsMusicas(artistas);
    }

    $scope.adicionarMusicaEmPlaylist = function (playlist, musica){
        adicionou = musicas.adicionarMusicaEmPlaylist(playlist, musica);

        if(!adicionou){
            $scope.temMusica = true;
        }else{
            $scope.temMusica = false;
        }
    }

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
    };
}) ;
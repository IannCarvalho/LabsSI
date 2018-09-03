app.controller("playlistCntrl", function ($scope, musicas){
    $scope.app = "PLAYLISTS";
    
    $scope.playlists = musicas.playlists;

    $scope.existe = false;
    $scope.adicionou = false;

    $scope.adicionarPlaylist = function (playlist) {
        adicionou = musicas.adicionarPlaylist(playlist);

        if(adicionou){
            $scope.existe = false;
            $scope.adicionou = true;
            delete $scope.playlist;
            $scope.playlistForm.$setPristine(); 
        }else{
            $scope.existe = true;
            $scope.adicionou = false;
        }
    }

    $scope.removeMusicaDePlaylist = function (playlist, msc){
        if(confirm("Tem certeza que deseja executar essa ação?") === true){
            musicas.removeMusicaDePlaylist(playlist, msc);
        }
    } 

    $scope.removePlaylist = function (playlist){
        if(confirm("Tem certeza que deseja executar essa ação?") === true){
            $scope.playlists = musicas.removePlaylist(playlist);
        }
    }

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
    };
}) ;
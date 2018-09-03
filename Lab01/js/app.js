var app = angular.module("musicas", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");

    $stateProvider.state("artista", {
        url:"/home",
        templateUrl:"artista.html",
        controller:"artistaCntrl"
    }).state("musica",{
        url:"/musica",
        templateUrl:"musica.html",
        controller:"musicaCntrl" 
    }).state("playlist", {
        url:"/playlist",
        templateUrl:"playlist.html",
        controller:"playlistCntrl"
    });
});
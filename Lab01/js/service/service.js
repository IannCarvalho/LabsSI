app.service("musicas", function(){

    this.artistas = [
        {nome:"Diplo", imagem:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Diplo_2014_Press_Photo_%28cropped%29.jpg/1200px-Diplo_2014_Press_Photo_%28cropped%29.jpg", albuns:[{nome: "Biggie Bounce", mscs:[{nome:"Biggie Bounce", ano:"2014", duracao:"03:44"}]}], favorito: false, ultima: "Biggie Bounce"},
        {nome:"Taylor", imagem:"http://www.singers.com/people/images/TaylorSwift.jpeg", albuns:[{nome: "Look what you made me do", mscs:[{nome:"Look what you made me do", ano:"2017", duracao:"04:15"}]}], favorito: false, ultima: "Look what you made me do"}
    ];

    this.playlists = [
        {nome:"<3",  mscs:[{nome:"Biggie Bounce", ano:"2014", duracao:"03:44"}],}
    ];
    
    this.jaTemArtista = (artista) => {
        for(i in this.artistas){
            if(this.artistas[i].nome == artista.nome){
                return true;
            }
        }
        return false;
    }

    this.jaTemAlbum = (artista, album) => {
        for(var i=0; i<artista.albuns.length; i++){
            if(artista.albuns[i].nome === album){
                return artista.albuns[i];
            }
        }
        return null;
    }

    this.jaTemPlaylist = (playlist) => {
        for(var i=0; i<this.playlists.length; i++){
            if(this.playlists[i].nome === playlist.nome){
                return playlist[i];
            }
        }
        return null;
    }

    this.jaTemMusica = (musica, mscs) => {
        for(var i=0; i<mscs.length; i++){
            if(mscs[i].nome === musica.nome){
                return true;
            }
        }
        return false;
    }

    this.adicionarArtista = (artista, existe) => {
        jaTem = this.jaTemArtista(artista);
        if(!jaTem){
            artista.albuns = [];
            artista.ultima = "Nenhuma música ainda adicionada";
            if(artista.imagem === undefined){
                artista.imagem = "https://pbs.twimg.com/profile_images/1445009723/anonimo2_400x400.jpg";
            }
            this.artistas.push(artista);
            return true;
        }
        return false;
    }

    this.adicionarMusica = (artista, musica, album) => {
        albumDaVez = this.jaTemAlbum(artista, album);

        if(albumDaVez === null){
            mscs = [musica];
            newAlbum = {nome:album, mscs:mscs};
            artista.ultima = musica.nome;
            artista.albuns.push(newAlbum);
            return true;
        }else{
            jaTemMusica = this.jaTemMusica(musica, albumDaVez.mscs);
            if(!jaTemMusica){
                artista.ultima = musica.nome;                
                albumDaVez.mscs.push(musica);
                return true;
            }else{
                return false;
            }
        }
    };

    this.adicionarPlaylist = (playlist) => {
        jaTem = this.jaTemPlaylist(playlist);
        if(jaTem === null){
            playlist.mscs = []
            this.playlists.push(playlist);
            return true;
        }
        return false;
    };

    this.favoritarArtistas = (artista) => {
        if (!artista.favorito){
            artista.favorito = true;
        }else{
            artista.favorito = false;
        } 
    };

    this.todasAsMusicas = (artistas) => {
        todasAsMusicas = [];
        for(var i=0; i<artistas.length; i++){
            for(var y=0; y<artistas[i].albuns.length; y++){
                for(var j=0; j<artistas[i].albuns[y].mscs.length; j++){
                   todasAsMusicas.push(artistas[i].albuns[y].mscs[j]); 
                }
            }
        }
        return todasAsMusicas;
    }

    this.adicionarMusicaEmPlaylist = (playlist, musica) => {
        jaTemMusica = this.jaTemMusica(musica, playlist.mscs);

        if(!jaTemMusica){
            playlist.mscs.push(musica);
            return true;
        }else{
            return false;
        }
    }
    
    this.removeMusicaDePlaylist = (playlist, msc) => {
        function isntMusica(mscDaVez){
            return (mscDaVez.nome !== msc.nome);
        }
        playlist.mscs = playlist.mscs.filter(isntMusica);
    }

    this.removePlaylist = (playlist) => {
        function isntPlaylist(playlistDaVez){
            return (playlist.nome !== playlistDaVez.nome);
        }
        this.playlists = this.playlists.filter(isntPlaylist);
        return this.playlists;
    }
});
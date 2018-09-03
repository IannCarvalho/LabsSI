package br.com.musiteca.ws.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Cliente {

	@Id
	private String id;
	
	private String email;
	private String senha;
	private String nome;
	
	@ManyToMany(cascade = CascadeType.ALL)
	private List<Artista> artistas;
	
	@ManyToMany(cascade = CascadeType.ALL)
	private List<Musica> musicas;
	
	@ManyToMany(cascade = CascadeType.ALL)
	private List<Playlist> playlists;
	
	public Cliente() {
		this.artistas = new ArrayList<>();
		this.musicas = new ArrayList<>();
		this.playlists = new ArrayList<>();
	}

	public Cliente(String email, String senha, String nome) {
		this.email = email;
		this.senha = senha;
		this.nome = nome;
		this.artistas = new ArrayList<>();
		this.musicas = new ArrayList<>();
		this.playlists = new ArrayList<>();
		this.id = email + senha;
	}

	public String getEmail() {
		return email;
	}

	public String getSenha() {
		return senha;
	}

	public String getNome() {
		return nome;
	}

	public List<Artista> getArtistas() {
		return artistas;
	}

	public List<Musica> getMusicas() {
		return musicas;
	}

	public List<Playlist> getPlaylists() {
		return playlists;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setArtistas(List<Artista> artistas) {
		this.artistas = artistas;
	}

	public void setMusicas(List<Musica> musicas) {
		this.musicas = musicas;
	}

	public void setPlaylists(List<Playlist> playlists) {
		this.playlists = playlists;
	}

}

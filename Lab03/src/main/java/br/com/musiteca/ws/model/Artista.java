package br.com.musiteca.ws.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Artista {
	
	private String nota;
	private boolean favoritado;
	private String url;
	private String nome;
	
	@Id
	@GeneratedValue
	private Integer id;	
	
	@ManyToMany(cascade = CascadeType.ALL)
	private List<Album> albuns;
	
	@ManyToMany(cascade = CascadeType.ALL)
	private List<Musica> musicasRecentes;
	
	public Artista() {
		this.albuns = new ArrayList<>();
		this.musicasRecentes = new ArrayList<>();
	}
	
	public Artista(String nota, boolean favoritado, String url, String nome) {
		this.nota = nota;
		this.favoritado = favoritado;
		this.url = url;
		this.nome = nome;
		this.albuns = new ArrayList<>();
		this.musicasRecentes = new ArrayList<>();
	}

	public String getNota() {
		return nota;
	}

	public boolean isFavoritado() {
		return favoritado;
	}

	public String getUrl() {
		return url;
	}

	public String getNome() {
		return nome;
	}

	public List<Album> getAlbuns() {
		return albuns;
	}

	public List<Musica> getMusicasRecentes() {
		return musicasRecentes;
	}

	public void setNota(String nota) {
		this.nota = nota;
	}

	public void setFavoritado(boolean favoritado) {
		this.favoritado = favoritado;
	}

	public void setUrl(String foto) {
		this.url = foto;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setAlbuns(List<Album> albuns) {
		this.albuns = albuns;
	}

	public void setMusicasRecentes(List<Musica> musicasRecentes) {
		this.musicasRecentes = musicasRecentes;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
}

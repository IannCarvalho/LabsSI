package br.com.musiteca.ws.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Album {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	private String nome;
	
	@ManyToMany(cascade = CascadeType.ALL)
	private List<Musica> tracklist;
	
	public Album() {
		this.tracklist = new ArrayList<>();
	}
	
	public Album(String nome) {
		this.nome = nome;
		this.tracklist = new ArrayList<>();
	}

	public String getNome() {
		return nome;
	}

	public List<Musica> getTracklist() {
		return tracklist;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setTracklist(List<Musica> tracklist) {
		this.tracklist = tracklist;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
}

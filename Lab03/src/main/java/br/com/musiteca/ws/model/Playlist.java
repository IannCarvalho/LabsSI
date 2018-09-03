package br.com.musiteca.ws.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Playlist {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	private String nome;
	
	@ElementCollection
	private List<String> tracklist;
	
	public Playlist() {
		this.tracklist = new ArrayList<>();
	}
	
	public Playlist(String nome) {
		this.nome = nome;
		this.tracklist = new ArrayList<>();
	}

	public String getNome() {
		return nome;
	}

	public List<String> getTracklist() {
		return tracklist;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setTracklist(List<String> tracklist) {
		this.tracklist = tracklist;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

}

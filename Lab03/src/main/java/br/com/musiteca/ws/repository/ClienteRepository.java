package br.com.musiteca.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.musiteca.ws.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente,String> {

}

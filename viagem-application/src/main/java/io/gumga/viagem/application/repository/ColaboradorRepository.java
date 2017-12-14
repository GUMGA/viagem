package io.gumga.viagem.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import io.gumga.viagem.domain.model.Colaborador;
import org.springframework.stereotype.Repository;

@Repository
public interface ColaboradorRepository extends GumgaCrudRepository<Colaborador, String> {}
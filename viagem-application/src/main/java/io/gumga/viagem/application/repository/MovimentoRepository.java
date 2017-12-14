package io.gumga.viagem.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import io.gumga.viagem.domain.model.Movimento;
import org.springframework.stereotype.Repository;

@Repository
public interface MovimentoRepository extends GumgaCrudRepository<Movimento, String> {}
package io.gumga.viagem.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import io.gumga.viagem.domain.model.Destino;
import org.springframework.stereotype.Repository;

@Repository
public interface DestinoRepository extends GumgaCrudRepository<Destino, Long> {}
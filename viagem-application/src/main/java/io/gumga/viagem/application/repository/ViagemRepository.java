package io.gumga.viagem.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import io.gumga.viagem.domain.model.Viagem;
import org.springframework.stereotype.Repository;

@Repository
public interface ViagemRepository extends GumgaCrudRepository<Viagem, String> {}
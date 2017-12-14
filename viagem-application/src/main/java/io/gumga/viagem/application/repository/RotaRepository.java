package io.gumga.viagem.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import io.gumga.viagem.domain.model.Rota;
import org.springframework.stereotype.Repository;

@Repository
public interface RotaRepository extends GumgaCrudRepository<Rota, String> {}
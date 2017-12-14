package io.gumga.viagem.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import io.gumga.viagem.domain.model.Studio;
import org.springframework.stereotype.Repository;

@Repository
public interface StudioRepository extends GumgaCrudRepository<Studio, String> {}
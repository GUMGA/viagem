package io.gumga.viagem.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import io.gumga.viagem.domain.model.Fornecedor;
import org.springframework.stereotype.Repository;

@Repository
public interface FornecedorRepository extends GumgaCrudRepository<Fornecedor, String> {}
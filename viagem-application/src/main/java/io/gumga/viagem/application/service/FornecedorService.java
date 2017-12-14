package io.gumga.viagem.application.service;

import io.gumga.application.GumgaService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import io.gumga.viagem.application.repository.FornecedorRepository;
import io.gumga.viagem.domain.model.Fornecedor;


@Service
@Transactional
public class FornecedorService extends GumgaService<Fornecedor, String> {

    private final static Logger LOG = LoggerFactory.getLogger(FornecedorService.class);
    private final FornecedorRepository repositoryFornecedor;

    @Autowired
    public FornecedorService(FornecedorRepository repository) {
        super(repository);
        this.repositoryFornecedor = repository;
    }

}
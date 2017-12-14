package io.gumga.viagem.application.service;

import io.gumga.application.GumgaService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import io.gumga.viagem.application.repository.ColaboradorRepository;
import io.gumga.viagem.domain.model.Colaborador;


@Service
@Transactional
public class ColaboradorService extends GumgaService<Colaborador, String> {

    private final static Logger LOG = LoggerFactory.getLogger(ColaboradorService.class);
    private final ColaboradorRepository repositoryColaborador;

    @Autowired
    public ColaboradorService(ColaboradorRepository repository) {
        super(repository);
        this.repositoryColaborador = repository;
    }

}
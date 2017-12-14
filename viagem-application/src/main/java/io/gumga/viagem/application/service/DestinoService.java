package io.gumga.viagem.application.service;

import io.gumga.application.GumgaService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import io.gumga.viagem.application.repository.DestinoRepository;
import io.gumga.viagem.domain.model.Destino;


@Service
@Transactional
public class DestinoService extends GumgaService<Destino, Long> {

    private final static Logger LOG = LoggerFactory.getLogger(DestinoService.class);
    private final DestinoRepository repositoryDestino;

    @Autowired
    public DestinoService(DestinoRepository repository) {
        super(repository);
        this.repositoryDestino = repository;
    }

}
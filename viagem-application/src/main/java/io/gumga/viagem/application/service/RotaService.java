package io.gumga.viagem.application.service;

import io.gumga.application.GumgaService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import io.gumga.viagem.application.repository.RotaRepository;
import io.gumga.viagem.domain.model.Rota;


@Service
@Transactional
public class RotaService extends GumgaService<Rota, String> {

    private final static Logger LOG = LoggerFactory.getLogger(RotaService.class);
    private final RotaRepository repositoryRota;

    @Autowired
    public RotaService(RotaRepository repository) {
        super(repository);
        this.repositoryRota = repository;
    }

}
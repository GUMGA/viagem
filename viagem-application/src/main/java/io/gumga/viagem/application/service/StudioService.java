package io.gumga.viagem.application.service;

import io.gumga.application.GumgaService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import io.gumga.viagem.application.repository.StudioRepository;
import io.gumga.viagem.domain.model.Studio;


@Service
@Transactional
public class StudioService extends GumgaService<Studio, String> {

    private final static Logger LOG = LoggerFactory.getLogger(StudioService.class);
    private final StudioRepository repositoryStudio;

    @Autowired
    public StudioService(StudioRepository repository) {
        super(repository);
        this.repositoryStudio = repository;
    }

}
package io.gumga.viagem.application.service;

import io.gumga.application.GumgaService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import io.gumga.viagem.application.repository.MovimentoRepository;
import io.gumga.viagem.domain.model.Movimento;


@Service
@Transactional
public class MovimentoService extends GumgaService<Movimento, String> {

    private final static Logger LOG = LoggerFactory.getLogger(MovimentoService.class);
    private final MovimentoRepository repositoryMovimento;

    @Autowired
    public MovimentoService(MovimentoRepository repository) {
        super(repository);
        this.repositoryMovimento = repository;
    }

}
package io.gumga.viagem.application.service;

import io.gumga.application.GumgaService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.hibernate.Hibernate;

import io.gumga.viagem.application.repository.ViagemRepository;
import io.gumga.viagem.domain.model.Viagem;

import io.gumga.viagem.domain.model.Rota;
import io.gumga.viagem.domain.model.Colaborador;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ViagemService extends GumgaService<Viagem, String> {

    private final ViagemRepository repository;

    @Autowired
    private ColaboradorService colaboradorService;

    @Autowired
    private DestinoService destinoService;

    @Autowired
    private RotaService rotaService;

    @Autowired
    public ViagemService(ViagemRepository repository) {
        super(repository);
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public Viagem loadViagemFat(String id) {
        Viagem obj = repository.findOne(id);
        Hibernate.initialize(obj.getRota());
        Hibernate.initialize(obj.getColaboradores());
        return obj;
    }

    @Transactional(readOnly = true)
    public Long count() {
        return repository.count();
    }

    @Override
    @Transactional
    public Viagem save(Viagem resource) {
        for (Rota rota : resource.getRota()) {
            rota = rotaService.view(rota.getId());
        }
        return super.save(resource);
    }

}
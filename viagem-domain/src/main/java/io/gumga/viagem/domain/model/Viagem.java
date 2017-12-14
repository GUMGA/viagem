package io.gumga.viagem.domain.model;

import io.gumga.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESSÁRIOS
import io.gumga.domain.GumgaModelUUID;
import io.gumga.domain.GumgaMultitenancy;

import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import javax.validation.constraints.*;

import io.gumga.domain.domains.*;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.Columns;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@Audited
@Entity
@Table(name = "viagem")
public class Viagem extends GumgaModelUUID {

    @Version
    private Integer version;

    @OneToMany
    private List<Rota> rota;

    @ManyToMany
    private List<Colaborador> colaboradores;

    @Column(name = "nome")
    private String nome;

    @Column(name = "objetivo", length = 500)
    private String objetivo;

    @Columns(columns = {
            @Column(name = "receipt_name"),
            @Column(name = "receipt_size"),
            @Column(name = "receipt_type"),
            @Column(name = "receipt_bytes", length = 100 * 1024 * 1024)
    })
    private GumgaFile comprovante;


    public Viagem() {
    }

    public List<Rota> getRota() {

        return this.rota;
    }
    public void setRota(List<Rota> rota) {
        this.rota = rota;
    }

    public List<Colaborador> getColaboradores() {
        return this.colaboradores;
    }
    public void setColaboradores(List<Colaborador> colaboradores) {

        this.colaboradores = colaboradores;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getObjetivo() {
        return objetivo;
    }
    public void setObjetivo(String objetivo) {
        this.objetivo = objetivo;
    }

    public GumgaFile getComprovante() {
        return comprovante;
    }
    public void setComprovante(GumgaFile comprovante) {
        this.comprovante = comprovante;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }
}

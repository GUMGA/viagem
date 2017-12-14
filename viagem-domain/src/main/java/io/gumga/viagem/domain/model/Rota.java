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
import org.hibernate.annotations.Columns;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@Audited
@Entity
@Table(name = "rota")
public class Rota extends GumgaModelUUID {

    @Version
    private Integer version;

    @ManyToOne
    private Destino destino;

    @Column(name = "nome")
    private String nome;

    @Column(name = "data")
    private Date data;

    @Column(name = "observacao", length = 500)
    private String observacao;

    public Rota() {
    }

    public Destino getDestino() {
        return this.destino;
    }

    public void setDestino(Destino destino) {
        this.destino = destino;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }
}

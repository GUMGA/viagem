package io.gumga.viagem.domain.model;
import io.gumga.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESSÁRIOS
import io.gumga.domain.GumgaMultitenancy;

import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import javax.validation.constraints.*;

import io.gumga.domain.customfields.GumgaCustomizableModel;
import io.gumga.domain.domains.*;
import org.hibernate.annotations.Columns;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Destino")
@Audited
@Entity
@Table(name = "destino")
public class Destino extends GumgaCustomizableModel<Long> {

    @Version
    private Integer version;

    @Column(name = "nome")
    private String nome;

    @Columns(columns = {
            @Column(name = "cod_postal"),
            @Column(name = "tipo_logradouro"),
            @Column(name = "logradouro"),
            @Column(name = "numero"),
            @Column(name = "informacao"),
            @Column(name = "bairro"),
            @Column(name = "localizacao"),
            @Column(name = "estado"),
            @Column(name = "cidade"),
            @Column(name = "latitude"),
            @Column(name = "longitude"),
            @Column(name = "codIbge"),
            @Column(name = "codEstado")
    })
    private GumgaAddress endereco;

    @Column(name = "telefone")
    private String telefone;

    public Destino() {
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public GumgaAddress getEndereco() {
        return endereco;
    }

    public void setEndereco(GumgaAddress endereco) {
        this.endereco = endereco;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
}

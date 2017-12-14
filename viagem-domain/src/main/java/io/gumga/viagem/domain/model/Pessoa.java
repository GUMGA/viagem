package io.gumga.viagem.domain.model;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import io.gumga.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESSÁRIOS
import io.gumga.domain.GumgaModelUUID;
import io.gumga.domain.GumgaMultitenancy;

import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import javax.validation.constraints.*;

import io.gumga.domain.domains.*;
import io.gumga.domain.domains.usertypes.GumgaImageUserType;
import org.hibernate.annotations.Columns;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@Audited
@Entity
@Table(name = "pessoa")
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = Colaborador.class, name = "Colaborador"),
        @JsonSubTypes.Type(value = Fornecedor.class, name = "Fornecedor")
})
public class Pessoa extends GumgaModelUUID {

    @Version
    private Integer version;

    @Column(name = "nome")
    private String nome;
    @Column(name = "email")
    private GumgaEMail email;

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

    @Columns(columns = {
            @Column(name = "foto_name"),
            @Column(name = "foto_size"),
            @Column(name = "foto_type"),
            @Column(name = "foto_bytes", length = 50 * 1024 * 1024, columnDefinition = "BLOB")
    })
    private GumgaImage foto;




    public Pessoa() {
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public GumgaEMail getEmail() {
        return email;
    }

    public void setEmail(GumgaEMail email) {
        this.email = email;
    }

    public GumgaAddress getEndereco() {
        return endereco;
    }

    public void setEndereco(GumgaAddress endereco) {
        this.endereco = endereco;
    }

    @JsonGetter
    public String getType() {
        return this.getClass().getSimpleName();
    }

    public GumgaImage getFoto() {
        return foto;
    }
    public void setFoto(GumgaImage foto) {
        this.foto = foto;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }
}

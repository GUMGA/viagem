package io.gumga.viagem.domain.model;

import io.gumga.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESSÁRIOS
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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Colaborador")
@Audited
@Entity
@Table(name = "colaborador")
public class Colaborador extends Pessoa {

    @Column(name = "cargo")
    public String cargo;

    @Column(name = "numeroCnh")
    private String numeroCnh;

    @Column(name = "celular")
    private GumgaPhoneNumber celular;


    public Colaborador() {
    }

    public String getCargo() {
        return cargo;
    }
    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getNumeroCnh() {
        return numeroCnh;
    }
    public void setNumeroCnh(String numeroCnh) {
        this.numeroCnh = numeroCnh;
    }

    public GumgaPhoneNumber getCelular() {
        return celular;
    }
    public void setCelular(GumgaPhoneNumber celular) {
        this.celular = celular;
    }
}

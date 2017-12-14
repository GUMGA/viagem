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
@Table(name = "movimento")
public class Movimento extends GumgaModelUUID {

    @Version
    private Integer version;

	@ManyToOne
	private Viagem viagem;

    @Column(name = "tipoMovimento")
	private TipoMovimento tipoMovimento;

	@ManyToOne
	private Fornecedor fornecedor;

	@Column(name = "valor")
    private GumgaMoney valor;

	@Column(name = "observacao")
    private String observacao;

	public Movimento() {
	}

	public Viagem getViagem() {
		return this.viagem;
	}
	public void setViagem(Viagem viagem) {
		this.viagem = viagem;
	}

	public TipoMovimento getTipoMovimento() {
		return this.tipoMovimento;
	}
	public void setTipoMovimento(TipoMovimento tipoMovimento) {
		this.tipoMovimento = tipoMovimento;
	}

	public Fornecedor getFornecedor() {
		return this.fornecedor;
	}
	public void setFornecedor(Fornecedor fornecedor) {
		this.fornecedor = fornecedor;
	}

    public GumgaMoney getValor() {
        return valor;
    }

    public void setValor(GumgaMoney valor) {
        this.valor = valor;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }
}

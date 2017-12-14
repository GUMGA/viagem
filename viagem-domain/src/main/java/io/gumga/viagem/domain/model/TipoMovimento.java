package io.gumga.viagem.domain.model;

public enum TipoMovimento {

	RECEITA("receita"),
	DESPESA("despesa");
   
    private final String description; 
    
    TipoMovimento(String description) { 
       this.description = description; 
    } 
    
    public String getDescription() {    
        return description; 
    } 
    
    public String toString() {
        return description; 
    }
}
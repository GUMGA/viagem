package io.gumga.viagem.domain.model;

public enum TipoPessoa {

	FISICO("fisico"),
	JURIDICO("juridico");

    private final String description;

    TipoPessoa(String description) {
       this.description = description; 
    } 
    
    public String getDescription() {    
        return description; 
    } 
    
    public String toString() {
        return description; 
    }
}
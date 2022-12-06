class Atleta {
	constructor(nome,idade,peso,altura,notas){
  this.nome = nome;
  this.idade = idade;
  this.peso = peso;
	this.altura = altura;
	this.notas = notas;
  }
  
   //faz com que o array seja ordenado numericamente e de ordem crescente.
   crescente(a, b){
     return (a - b) 
   }
   
  //calcular a categoria do atleta;
  calculaCategoria(){
  	if ( this.idade > 30 || this.idade < 9 ) return "Sem categoria";
    if ( this.idade > 15 ) return  "Categoria: Adulto";
    if ( this.idade > 13)	return  "Categoria: Intermediário"; 
    if ( this.idade > 11 ) return  "Categoria: Juvenil";
    return "Categoria: Infantil";
  }
  
  //calcular o IMC do atleta
  calculaIMC(){
  	let IMC = this.peso / (this.altura * this.altura);
  	return "IMC: " + IMC;
  }
  
  //calcular a média válida do atleta
	calculaMediaValida(){
  	 
     let notas =  atleta.notas.sort(this.crescente);
     let media =  0;
     notas = notas.slice(1,4);
     notas.forEach (function (nota){
         media += nota;
     })
     
     media = media/ notas.length;
  
  
  
  return "Média válida: " + media;
  
  }
  
  //retorna o nome do atleta
	obtemNomeAtleta(){
  	return "Nome: " + this.nome;
  }
  
  //retorna a idade do atleta
	obtemIdadeAtleta(){
  	return "Idade: " + this.idade;
  }
  
  //retorna o peso do atleta
	obtemPesoAtleta(){
  	return "Peso: " + this.peso + " kg";
  }
  
  //retorna o Altura
	obtemAlturaAtleta(){
  	return "Altura: " + this.altura + " m";
  }
  
  //retorna as notas do atleta
	obtemNotasAtleta(){
  	return "Notas: " + this.notas;
  }
  
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemAlturaAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.calculaCategoria());
console.log(atleta.calculaIMC());
console.log(atleta.calculaMediaValida());
let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   
   function crescente(a, b){
     return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
   }
   
   atletas.forEach (function (atleta){
       
     let notas =  atleta.notas.sort(crescente);
     let media =  0;
     notas = notas.slice(1,4);
     notas.forEach (function (nota){
         media += nota;
     })
       
      media = media/ notas.length;
     
     console.log(`Atleta: ${atleta.nome} \n Notas Obtidas: ${atleta.notas.sort()} \n Média Válida: ${media}`);
       
   });
   

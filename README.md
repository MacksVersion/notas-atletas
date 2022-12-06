<h1 align="center"> Projeto de certificação DEVstart </h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=codigo&message=Javascript&color=blue&style=for-the-badge&logo=javascript"/>
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>


Aplicação capaz de receber informações de um atleta, bem como calcular parâmetros e exibi-los para o usuário.

# Descrição do Projeto de Certificação 01 "notas-atletas.js"

<p align="justify">
Em uma determinada competição de ginástica artística, vários atletas realizam apresentações para uma banca composta por cinco jurados. Cada jurado é responsável por avaliar um critério em específico, sendo eles o tempo de duração da apresentação, originalidade da coreografia, postura do atleta, dificuldade das acrobacias e sincronismo.

A competição em questão possui a seguinte regra de avaliação:

Cada jurado pode fornecer uma nota de um (1) a dez (10);
A média é calculada com base nas três notas do meio, desconsiderando a maior e menor nota.
O organizador da competição contratou a sua equipe para criar uma aplicação capaz de receber o nome e notas dos atletas e realizar o devido cálculo. Você foi o encarregado de criar a solução utilizando a linguagem JavaScript.

</p>

### Especificações
<p align="justify">
- A função devera ser capaz de receber uma matriz de objetos contendo o nome do atleta e as cinco notas atribuídas. <br/>
- A função deverá calcular a média das notas sem considerar a maior e menor nota do atleta. <br/>
- Por fim, deverá apresentar ao usuário o nome de cada atleta, seguido das notas e da média calculada.<br/>
</p>

# Descrição do Projeto de Certificação 02 "dados-atletas.js"
<p align="justify">
Os organizadores da competição realizada durante o projeto anterior gostaram muito da sua solução proposta e do seu perfil de desenvolvimento. Com isso, eles resolveram fazer uma nova encomenda utilizando a linguagem JavaScript, onde você deverá criar um software capaz de receber informações dos atletas e exibir a categoria, IMC, média calculada e demais informações capturadas.
</p>


### Especificações
<p align="justify">
Criar uma classe Atleta para concentrar os atributos e métodos dos atletas.
  
- A classe deverá receber os seguintes atributos::<br/>
. nome<br/>
. idade<br/>
. peso<br/>
. altura<br/>
. notas<br/>
  
- A classe deverá possuir os seguintes métodos<br/>
. calculaCategoria(), para calcular a categoria do atleta;<br/>
. calculaIMC(), para calcular o IMC do atleta;<br/>
. calculaMediaValida(), para calcular a média válida do atleta.<br/>
. obtemNomeAtleta(), que retorna o nome do atleta<br/>
. obtemIdadeAtleta(), que retorna a idade do atleta<br/>
. obtemPesoAtleta(), que retorna o peso do atleta<br/>
. obtemNotasAtleta(), que retorna as notas do atleta<br/>
. obtemCategoria(), que retorna a categoria do atleta<br/>
. obtemIMC(), que retorna o IMC do atleta<br/>
. obtemMediaValida(), que retorna a média válida do atleta<br/>

- Utilize as seguintes regras para calcular a categoria<br/>
. Infantil: 9 a 11 anos<br/>
. Juvenil: 12 e 13 anos<br/>
. Intermediário: 14 e 15 anos<br/>
. Adulto: 16 a 30 anos<br/>
. Sem categoria: demais idades<br/>

- Para calcular o IMC:<br/>
. Fórmula: imc = peso / (altura x altura)<br/>
  
- Para calcular a média válida:<br/>
. Utilize o metodologia abordada no Projeto de Certificação 1.<br/>

</p>

# Autor
[<img src="https://avatars.githubusercontent.com/u/107284806?v=4" width=115><br><sub>Rodrigo Augusto de Abreu</sub>](https://github.com/MacksVersion) 

<p align="center">  
  <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="180" width="200">
</p>

 <h1>Debugging</h1>
 <p><b>Objetivo</b>: O objetivo deste repositório é reunir os principais conceitos e práticas utilizadas pela línguagem Javascript com o intuito de fixar e aprimorar os conhecimentos em questões tão cotidianamente usuais ao trabalhar.</p>
  <p>É válido ressaltar que grande parte dos conceitos, exercícios e exemplos presentes neste repositório foram retirados e traduzidos para pt-br, do site <a href ="https://www.freecodecamp.org/learn">FreeCodeCamp.org</a>.</p>

<h2>Conceito</h2>
  <p>A depuração é o processo de analisar seu código, encontrar problemas e corrigi-los. Os problemas no código geralmente vêm em três formas: erros de sintaxe que impedem a execução do programa, erros de tempo de execução nos quais o código tem um comportamento inesperado ou erros lógicos nos quais o código não faz o que você pretendia.</p>
  
<h2>Use typeof para verificar o tipo de uma variável</h2>
  <p>Você pode usar typeof para verificar a estrutura de dados, ou tipo, de uma variável. Isso é útil na depuração ao trabalhar com vários tipos de dados. Se você acha que está adicionando dois números, mas na verdade um deles é uma string, os resultados podem ser inesperados. Erros de tipo podem estar ocultos em cálculos ou chamadas de função. Tenha cuidado especialmente ao acessar e trabalhar com dados externos na forma de um objeto JavaScript Object Notation (JSON).<br>Alguns exemplos utilizando Typeof:</br></p>

```
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
```

<p>Em ordem, o console exibirá as strings string, number, object e object.</p>

<p>O JavaScript reconhece sete tipos de dados primitivos (imutáveis): Boolean, Null, Undefined, Number, String, Symbol (novo com ES6) e BigInt (novo com ES2020) e um tipo para itens mutáveis: Object. Observe que em JavaScript, arrays são tecnicamente um tipo de objeto.</p>


<h2>Capturar nomes de variáveis e funções com erros ortográficos</h2>
  <p>Os métodos <code>console.log()</code> e <code>typeof</code> são as duas principais formas de verificar valores intermediários e tipos de saída de programa. Agora é hora de entrar nas formas comuns que os bugs assumem. Um problema de nível de sintaxe que os digitadores rápidos podem lamentar é o humilde erro de ortografia. Caracteres transpostos, ausentes ou capitalizados incorretamente em um nome de variável ou função farão com que o navegador procure um objeto que não existe - e reclame na forma de um erro de referência. Variáveis JavaScript e nomes de funções diferenciam maiúsculas de minúsculas.</p>

<p><b>Corrija os dois erros de ortografia no código para que o cálculo <code>netWorkingCapital</code> funcione</b>:</p>

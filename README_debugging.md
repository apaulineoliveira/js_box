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

```
// 'i' and 'e' trocados por "receivables" e faltando o 's' in "payables"

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

```
<p>A saída no console será: Net working capital is: 2</p>

<h2>Capturar parênteses, colchetes, chaves e aspas não fechados</h2>
   <p>Outro erro de sintaxe a ser observado é que todos os <b>parênteses</b> de abertura, <b>colchetes</b>, <b>chaves</b> e <b>aspas</b> têm um par de fechamento. O esquecimento de uma peça tende a acontecer quando você está editando o código existente e inserindo itens com um dos tipos de par. Além disso, tome cuidado ao aninhar blocos de código em outros, como adicionar uma função de retorno (callback) de chamada como argumento a um método.</p> 
   
   <p>Uma maneira de evitar esse erro é, assim que o caractere de abertura for digitado, incluir imediatamente a correspondência de fechamento, mover o cursor de volta entre eles e continuar codificando. Felizmente, a maioria dos editores de código modernos gera a segunda metade do par automaticamente. Corrijindo os erros de dois pares no código abaixo:</p>
   
```
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```
   
<h2>Capturar o uso misto de aspas simples e duplas</h2>
  <p>O JavaScript permite o uso de aspas simples (') e duplas (") para declarar uma string. Decidir qual delas usar geralmente se resume à preferência pessoal, com algumas exceções.Ter duas opções é ótimo quando uma string tem contrações ou outro trecho de texto entre aspas. Apenas tome cuidado para não fechar a string muito cedo, o que causa um erro de sintaxe.</p>
  
 <p>Aqui estão alguns exemplos de mistura de aspas:</p>
 
 ```
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```
<p>As duas primeiras estão corretas, mas a terceira está incorreta.Claro, não há problema em usar apenas um estilo de aspas. Você pode escapar das aspas dentro da string usando o caractere de escape de barra invertida (\):</p>

```
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

<h2>Capturar argumentos passados na ordem errada ao chamar uma função</h2>
  <p>Continuando a discussão sobre a chamada de funções, o próximo bug a ser observado é quando os argumentos de uma função são fornecidos na ordem incorreta. Se os argumentos forem de tipos diferentes, como uma função que espera uma matriz e um número inteiro, isso provavelmente gerará um erro de tempo de execução. Se os argumentos forem do mesmo tipo (todos inteiros, por exemplo), a lógica do código não fará sentido. Certifique-se de fornecer todos os argumentos necessários, na ordem correta para evitar esses problemas.</p>
  <p>A função raiseToPower eleva uma base a um expoente. Infelizmente, não é chamado corretamente - corrija o código para que o valor de power seja o 8 esperado:</p>
  
 ```
 function raiseToPower(b, e) {
  return Math.pow(b, e);
}
```
  <ul>
<li>A função acima é usada para elevar o número base <code>b</code> à potência do expoente <code>e</code> </li>
<li>A função deve ser chamada especificamente com variáveis na ordem correta. Caso contrário, a função irá misturar ambas as variáveis e retornará uma resposta indesejada</li>
<li>Certifique-se de que a variável <code>power</code> esteja implementando a função <code>raiseToPower</code> corretamente.</li>
  </ul>

```
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```
<h2>Se surpreendendo ao encontrar erros ao usar indexação</h2>
  <p>Os erros <b>Off by one errors</b> (às vezes chamados de OBOE) surgem quando você está tentando direcionar um índice específico de uma string ou array (para fatiar ou acessar um segmento) ou ao fazer um loop sobre os índices deles. A indexação JavaScript começa em zero, não em um, o que significa que o último índice é sempre um a menos que o comprimento do item. Se você tentar acessar um índice igual ao comprimento, o programa pode lançar um erro de referência "índice fora do intervalo" ou imprimir indefinido.</p>
  <p>Quando você usa métodos de string ou array que usam intervalos de índice como argumentos, é útil ler a documentação e entender se eles são inclusivos (o item no índice fornecido faz parte do que é retornado) ou não. Aqui estão alguns exemplos de erros off by one:</p>
  
  ```
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}
```

<p>O primeiro exemplo é repetido muitas vezes e o segundo é repetido poucas vezes (falta o primeiro índice, 0). O terceiro exemplo está <b>correto</b>.</p>
  

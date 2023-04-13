<p align="center">  
  <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="180" width="200">
</p>

<b>Guia de conteúdo</b>
1. [Convertendo temperatura de Celsius para Fahrenheit](#celsiustofahrenheit)
2. [Inverter uma String](#inverteremstring)
3. [Fatorializar um número](#fatorializarumnumero)


<h2 align="center">Estrutura de Dados e Algorítimo: Problemas e Soluções</h2><br></br>

<div id="celsiustofahrenheit"/>
<h2>Convertendo temperatura de Celsius para Fahrenheit</h2>
  <p><b>Observação</b>: A fórumula para converter Celsius para Fahrenheit é a temperatura em Celsius vezes 9/5, mais 32. Para solucionar esse desafio é importante perceber em primeira instância <b>a ordem de operação</b>, usando parênteses quando necessário.</p>
   <p><b>Solução</b>:</p>
   
   ```
   function convertCtoF(celsius) {
        let fahrenheit = celsius * (9 / 5) + 32;
        return fahrenheit;
   }
   
   convertCtoF(30); 
   ```
   <div id="inverteremstring"/>
   <h2>Inverter uma String</h2>
   <p>Inverta a string fornecida e retorne a string invertida. Por exemplo, <code>"olá"</code> deve se tornar <code>"olleh"</code>.</p>
   <p><b>Dica</b>: Uma maneira possível de resolver esse desafio é criar uma <b>nova string</b> (inicializando-a com uma string em branco “”) e, em seguida, iterar a string começando do último caractere até o primeiro caractere e concatenar cada caractere na nova string. todos os caracteres na string, você retorna a nova string.</p>
   <p><b>Primeira alternativa de solução</b>:</p>
   
   ```
   function reverseString(str) {
   let reversedStr = "";
   for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
```
  <p><b>Segunda alternativa de solução:</b></p>
  
  ```
  function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
  ```
<div id="fatorializarumnumero"/>
<h2>Fatorializar um número</h2>
  <p>Retorna o fatorial do inteiro fornecido;<br></br>Se o inteiro for representado pela letra n, um fatorial é o produto de todos os inteiros positivos menores ou iguais a n. Os fatoriais são frequentemente representados com a notação abreviada <code>n!</code>. Por exemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120</p>
  <p><b>Primeira alternativa de solução:</b></p>
   
   ```
   function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

factorialize(5);
   ```
   
<h2>Encontre a palavra mais longa em uma string</h2>   
  <p><b>Explicação</b>: É necessário passar por cada palavra e descobrir qual é a mais longa e retornar o comprimento dessa palavra.</p><br>
  <p><b>Primeira solução:</b></p>

```
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
```
  <p>Explicação passo a passo do código: Pegue a string e converta-a em uma matriz de palavras (<code>str.split(' ')</code>); Declare uma variável para acompanhar o comprimento máximo (<code>let maxLength</code>) e faça um loop de 0 até o comprimento da matriz de palavras. Em seguida, verifique a palavra mais longa comparando a palavra atual com a anterior ( <code>words[i].length > maxLength</code> ). No final do loop apenas retorne o valor numérico da variável <code>maxLength</code>.</p>
  <p><b>Segunda solução (usando métodos):</b></p>
  
  ```
  function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}
  ```
  
  <p>Explicação passo a passo do código:</p>
    <ul>
       <li>Fornecemos a <code>Math.max</code> o comprimento de cada palavra como argumento e ele simplesmente retornará o maior de todos.</li>
       <li>Agora analisando dentro dos parênteses: <code>str.split(" ")</code> divide a string em uma matriz, usando espaços como separadores. Ele retorna este array: ["O","rápido,"marrom","raposa","pular","sobre","o","preguiçoso","cachorro"].</li>
       <li>Em seguida, faremos outro array, feito a partir dos comprimentos de cada elemento do array <code>str.split(" ")</code> com <code>map()</code>.</li>
  <li><code>str.split(" ").map(word => word.length)</code> retorna [3, 5, 5, 3, 6, 4, 3, 4, 3]. Por fim, passamos o array como argumento para a função Math.max com o operador spread <code>...</code>.</li>
    </ul>


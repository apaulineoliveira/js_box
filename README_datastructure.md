<p align="center">  
  <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="180" width="200">
</p>

<b>Guia de conteúdo</b>
1. [Convertendo temperatura de Celsius para Fahrenheit](#celsiustofahrenheit)
2. [Inverter uma String](#inverteremstring)
3. [Fatorializar um número](#fatorializarumnumero)
4. [Encontre a palavra mais longa em uma string](#palavramaislonga)
5. [Retornar os maiores números em matrizes](#maioresnumerosemmatrizes)
6. [Confirmando o final](#confirmeofinal)
7. [Repetir uma string](#repetirumastring)
8. []()

<br>
<h2 align="center">Estrutura de Dados e Algorítimo: Problemas e Soluções</h2><br></br>

<div id="celsiustofahrenheit"/>
<h3>Convertendo temperatura de Celsius para Fahrenheit</h3>
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
   <h3>Inverter uma String</h3>
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
<h3>Fatorializar um número</h3>
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
<div id="palavramaislonga"/>   
<h3>Encontre a palavra mais longa em uma string</h3>   
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
  <p>Explicando passo a passo do código: Pegue a string e converta-a em uma matriz de palavras (<code>str.split(' ')</code>); Declare uma variável para acompanhar o comprimento máximo (<code>let maxLength</code>) e faça um loop de 0 até o comprimento da matriz de palavras. Em seguida, verifique a palavra mais longa comparando a palavra atual com a anterior ( <code>words[i].length > maxLength</code> ). No final do loop apenas retorne o valor numérico da variável <code>maxLength</code>.</p>
  <p><b>Segunda solução (usando métodos):</b></p>
  
  ```
  function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}
  ```
  
  <p><b>Explicando passo a passo do código</b>:</p>
    <ul>
       <li>Fornecemos a <code>Math.max</code> o comprimento de cada palavra como argumento e ele simplesmente retornará o maior de todos.</li>
       <li>Agora analisando dentro dos parênteses: <code>str.split(" ")</code> divide a string em uma matriz, usando espaços como separadores. Ele retorna este array: ["O","rápido,"marrom","raposa","pular","sobre","o","preguiçoso","cachorro"].</li>
       <li>Em seguida, faremos outro array, feito a partir dos comprimentos de cada elemento do array <code>str.split(" ")</code> com <code>map()</code>.</li>
  <li><code>str.split(" ").map(word => word.length)</code> retorna [3, 5, 5, 3, 6, 4, 3, 4, 3]. Por fim, passamos o array como argumento para a função Math.max com o operador spread <code>...</code>.</li>
    </ul>

<div id="maioresnumerosemmatrizes"/>
<h3>Retornar os maiores números em matrizes</h3>
    <p>Retornar um array que consista no maior número de cada sub-array fornecido. Para simplificar, o array fornecido conterá exatamente 4 sub-arrays; Lembre-se de que você pode iterar por meio de um array com um loop for simples e acessar cada membro com a sintaxe de array arr[i].</p>
   <p><b>Solução:</b></p>
   
   ````
    function largestOfFour(arr) {
    const results = [];
    
    for (let i = 0; i < arr.length; i++) {
       let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}
````
  <p><b>Explicando passo a passo do código</b>:</p>
    <ul>
       <li>Crie uma variável para armazenar os resultados como uma matriz;</li>
       <li>Crie um loop externo para iterar na matriz externa;</li>
       <li>Crie uma segunda variável para conter o maior número e inicialize-a com o primeiro número. Isso deve estar fora de um loop interno para que não seja reatribuído até encontrarmos um número maior;</li>
       <li>Crie o referido loop interno para trabalhar com os sub-arrays;</li>
       <li>Verifique se o elemento da submatriz é maior que o maior número atualmente armazenado. Em caso afirmativo, atualize o número na variável;</li>
       <li>Após o loop interno, salve o maior número na posição correspondente dentro da matriz de resultados;</li>
       <li>E, finalmente, retorne o referido array.</li>
    </ul>

<div id="confirmeofinal"/>
<h3>Confirmando o final</h3> 
  <p>Verifique se uma string (primeiro argumento, str) termina com a string de destino fornecida (segundo argumento, target). <br></br> A FreeCodeCamp fala que este desafio pode ser resolvido com o método <code>.endsWith()</code>, que foi introduzido no ES2015. Mas, para o mesmo, seria mais interessante o uso de métodos de substrings do JS.</p>
  <b>Solução:</b>
  
  ```
  function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding("He has to give me a new name", "name");
  ```
<p><b>Explicando passo a passo do código</b>:</p>
    <ul>
       <li>Primeiro usamos o método slice para copiar a string;</li>
       <li>Para obter os últimos caracteres em str equivalentes ao comprimento do alvo (target), usamos o método slice;</li>
       <li>O primeiro parâmetro dentro do método slice é o índice incial e o segundo parâmetro seria o índice final;</li>
       <li>Por exemplo, str.slice(10,17) retornaria para mim. Neste caso, incluímos apenas um parâmetro que copiará tudo do índice inicial;</li>
       <li>Subtraímos o comprimento de str e o comprimento do alvo (target), dessa forma, obteremos os últimos caracteres restantes equivalentes ao comprimento do alvo;</li>
       <li>Por fim, comparamos o resultado de retorno de slice com o target e verificamos se eles têm os mesmos caracteres.</li>
    </ul>


<div id="repetirumastring"/>
<h3>Repetir uma string</h3>
  <p>Repetir uma determinada string str (primeiro argumento) por <b>num</b>(segundo argumento). Retornar uma string vazia se num for um número positivo.<br></br> Para a finalidade deste desafio, não use o método interno <code>.repeat( )</code>.</p>
   <p><b>Primeira solução:</b>:</p>
   
   ```
   function repeatStringNumTimes(str, num) {
   let accumulatedStr = "";

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}
   ```

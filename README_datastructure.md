<p align="center">  
  <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="100" width="100">
</p>
<br></br>

<b>Guia de conteúdo</b>
1. [Convertendo temperatura de Celsius para Fahrenheit](#celsiustofahrenheit)
2. [Inverter uma String](#inverteremstring)
3. [Fatorializar um número](#fatorializarumnumero)
4. [Encontre a palavra mais longa em uma string](#palavramaislonga)
5. [Retornar os maiores números em matrizes](#maioresnumerosemmatrizes)
6. [Confirmando o final](#confirmeofinal)
7. [Repetir uma string](#repetirumastring)
8. [Truncar uma string](#truncarumastring)
9. [Teste de validação](#testedevalidade)
10. [Valor primitivo booleano](#primitivobooleano)
11. [Case sentence](#casesentence)
12. [Slice e Splice](#slicesplice)
13. [Removendo valores falsos de uma função](#removendofalsos)
14. [A qual índice pertence](#qualindicepertence)
15. [Igualdade](#igualdade)





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
  <p>Repetir uma determinada string <code>str</code> (primeiro argumento) por <code>num</code>(segundo argumento) de vezes. Retornar uma string vazia se num for um número positivo.<br></br> Para a finalidade deste desafio, não use o método interno <code>.repeat( )</code>.</p>
  
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
<p><b>Explicando passo a passo do código</b>:</p>
    <ul>
      <li>Crie uma variável de string vazia para armazenar a palavra repetida (let accumulatedStr = "";);</li>
      <li>Use um loop for para repetir o código quantas vezes forem necessárias de acordo com o número;</li>
      <li>Em seguida, adicionamos a string à variável criada na etapa um, dentro do loop;</li>
      <li><No final do loop, retorne a variável para a palavra repetida.</li>
    </ul>



<div id="truncarumastring"/>
<h3>Truncar uma string</h3>
  <p>Trunque uma string (primeiro argumento) se ela for maior que o comprimento máximo da string fornecida (segundo argumento). Retorne a string truncada com <code>... </code> final. Para este desafio será necessário usar o método <code>slice()</code> e especificar onde começar e parar.</p>
  
  <p><b>Primeira solução:</b></p>
  
  ```
  function truncateString(str, num) {
    if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
  ```
<p><b>Explicando passo a passo do código</b>:</p>
<ul> 
  <li>Começamos com uma simples instrução if para determinar um dos dois resultados;</li>
  <li>Se o comprimento da string for maior que o num que queremos truncá-la, retornarmos uma fatia (slice) da string começando no caractere 0 e terminando em num. Em seguida, acrescentamos nosso '...' ao final da string;</li>
  <li>No entanto, se a situação acima não for verdadeira, isso significa que o comprimento de string é menor que nosso número de truncamento. Portanto, podemos apenas retornar a string.</li>
  <li></li>
</ul>
  
<p><b>Segunda solução:</b></p>

```
  function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
```
<ul>
  <li>Esta solução é muito semelhante à solução básica. Para determinar a nova string, usamos um operador ternário. Em nossa operação ternária, se str.length for maior que num, retornamos uma nova string que é uma fatia de nossa string começando no caractere 0 e terminando em num e o '...' é anexado ao final de nossa nova string . Se str.length for menor ou igual a num, retornamos a string sem nenhum truncamento.</li>
</ul>

<p><b>Nota</b>: Para entender o código acima, você precisa entender como funciona um Operador Ternário. O Operador Ternário é frequentemente usado como um atalho para a instrução if e segue este formato: <code>condição ? expr1: expr2</code>. Se a condição for avaliada como verdadeira, o operador retornará o valor de expr1. Caso contrário retornará o valor de expr2.</p>

<div id="testedevalidade"/>
<h3>Teste de validação</h3>
  <p>Crie uma função que examine um array <b>arr</b> e retorne o primeiro elemento nele que passe em um "teste de validade". Isso significa que, dado um elemento <b>x</b>, o teste de validade é aprovado se func (x) for verdadeira. Se nenhum elemento passar no teste, retornará indefinido.</p>
  
``````
      function findElement(arr, func) {
        let num = 0;
       
       for (let i = 0; i < arr.length; i++) {
          num = arr[i];
          if (func(num)) {
              return num;
          }
        }
        
        return undefined;
      }
``````

<p><b>Explicando passo a passo do código</b></p>
 <ul>
      <li>A variável <code>num</code> está sendo passada para a função, então a definimos para cada índice em nosso array (num = arr[i]);</li>
      <li>A função pré-definida já verifica cada número para nós, portanto, se for "verdadeiro", retornamos esse número;</li>
      <li>Se nenhum dos números da matriz passar no teste da função retornamos indefinido (undefined).</li> 
    </ul>
    
 
<div id="primitivobooleano"/>
<h3>Valor primitivo booleano</h3>
  <p>Verifique se um valor é classificado como um primitivo booleano; Primitivas booleanas são verdadeiras e falsas (true e false ou true or false).</p>
    
    
     function booWho(bool) {
          return typeof bool === "boolean";     
     }
     booWho(null);
   


<p><b>Explicando o código:</b></p>
  <ul>
      <li>Usa o operador typeof para verificar se a variável é booleana. Se for, retornará verdadeiro. Caso contrário, se for qualquer outro tipo retornará false.</li>
  </ul>


<div id="casesentence"/>
<h3>Case Sentence</h3>
  <p>Retorne a string fornecida com a primeira letra de cada palavra em maiúscula. Certifique-se de que o restante da palavra esteja em letras minúsculas.</p>
 
 <p>Primeira solução - Utilizando <b>REGEX</b> </p>

   ``` 
  function titleCase(str) {
    return str
      .toLowerCase()
      .replace(/(^|\s)\S/g, L => L.toUpperCase());
}
   ````
<p><b>Explicando o código:</b></p>
    <p>A solução funciona primeiro colocando todos os caracteres em letras minúsculas na string, e em seguida, apenas colocando em letras maiúsculas o primeiro caractere de cada palavra</p>
    <ul>
       <li>Deixando toda a string minúscula usando <code>str.toLowerCase()</code></li>
       <li>Substitua o primeiro caractere de cada palavra por maiúsculo usando <code>.replace</code></li>
       <li>Pesquise o caractere no início de cada palavra, ou seja, corresponda a qualquer caractere após um espaço ou corresponda ao primeiro caractere de toda a string, usando o seguinte padrão:<br></li>
    <h3>Explicação Regex:</h3>
       <li>(\S) Encontre todos os caracteres que não sejam espaços em branco;</li>
       <li>(^) No início da string;</li>
       <li>(\s) Ou depois de qualquer caractere de espaço em branco</li>
       <li>O modificador <code>g</code> procura outro padrão de palavra semelhante em toda a string e os substitui.</li>
    </ul>



<div id="slicesplice"/>
<h3>Slice e Splice</h3>
  <p>Você recebe dois arrays e um indíce; Copie cada elemento da primeira matriz para a segunda matriz, em ordem. Comece inserindo elementos no índice <code>n</code> da segunda matriz. Por fim, retorne a matriz resultante.</p>
    <p><b>Primeira Solução</b>:</p>
    
    
    function frankenSplice(arr1, arr2, n) {
       let localArray = arr2.slice();
       for (let i = 0; i < arr1.length; i++) {
          localArray.splice(n, 0, arr1[i]);
          n++;
        }
        return localArray;
    }
   
   <p><b>Explicando o código:</b></p>
    <ul>
      <li>Nosso objetivo é pegar todos os elementos de arr1 e inseri-los em arr2 começando com a posição de índice n. Ao mesmo tempo, devemos garantir que nem arr nem arr2 tenham sofrido mutação.</li>
      <li>Usando a função slice( ) podemos criar uma réplica exata de arr2 e atribuir o resultado da operação a uma variável, localArray;</li>
      <li>Agora que temos um array no qual podemos mudar, podemos iterar em cada item do primeiro array;</li>
      <li>Incrementamos o índice n em um. Isso garantirá que cada item de arr1 seja inserido em localArray na posição de índice adequada;</li>
      <li>Por fim, retornamos o localArray e finalizamos a função.</li>
    </ul>

<div id="removendofalsos"/>
<h3>Removendo valores falsos de uma função</h3>
  <p>Remova todos os valores falsos de uma matriz. Retorne uma nova matriz, entretanto, não modifique a matriz original.<br>Os valores falsos em js são: false, null, 0, "", undefined, and NaN. Dica: Tente converter cada valor em um booleano.</p>
  <p><b>Primeira Solução</b>:</p>
  
  ```
  function bouncer(arr) {
  return arr.filter(Boolean);
}
  ```
  <p><b>Explicando o código:</b></p>
     <p>O método <code>Array.prototype.filter</code> espera uma função que retorne um valor booleano que receba um único argumento e retorne verdadeiro para o valor verdadeiro ou falso para o valor falso. Portanto, passamos a função booleana integrada.</p>
 
 
<div id="qualindicepertence"/> 
<h3>A qual índice pertence</h3>
  <p>Retorna o índice mais baixo no qual um valor (segundo argumento) deve ser inserido em um array (primeiro argumento) depois de classificado. Por exemplo, <code>getIndexToIns([1,2,3,4], 1.5)</code> deve retornar 1 porque é maior que 1 (índice 0), mas menor que 2 (índice 1). Da mesma forma, getIndexToIns([20,3,5], 19) deve retornar 2 porque, uma vez que a matriz foi classificada, ela se parecerá com [3,5,20] e 19 é menor que 20 (índice 2) e maior que 5 ( índice 1).</p>
  
  <p><b>Primeira Solução</b></p>
  
  ```
  function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}
  ```
   <p><b>Explicando o código:</b></p>
      <p>Primeiro foi classificado o array usando <code>.sort(callbackFunction)</code> para classificá-lo do menor para o maior, da esqueda para a direita. Em seguida, foi usado um loop for para comparar os itens na matriz começando pelo menor; quando um item na matriz é maior que o número com o qual estamos comparando, retornamos o índice.</p>
  
<p><b>Segunda Solução</b></p>  
  
  ```
  function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}
  ```
  <p><b>Explicando o código:</b></p>
    <p>Conte o número de entradas que são menores que o novo valor <code>num</code>.O novo valor seria inserido após esses valores.</p>
    
    
<div id="#igualdade"/>
<h3>Igualdade</h3>
  <p>Retorne <code>true</code> se a string no primeiro elemento do array contiver todas as letras da string no segundo elemento do array. Por exemplo, <code>["hello", "Hello"]</code> deve retornar <code>true</code> porque todas as letras da segunda string estão presentes na primeira, ignorando maiúsculas e minúsculas. Os argumentos <code>["hello", "hey"]</code> devem retornar <code>false</code> porque a string hello não contém um y. Por fim, <code>["Alien", "line"]</code> deve retornar verdadeiro porque todas as letras na linha estão presentes em Alien.</p>
  

<p align="center">  
  <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="180" width="200">
</p>

<p>É válido ressaltar que todos os conteúdos desse readme foram retirados do site oficial da <b>MDN</b>.</p>

<b>Guia de conteúdo</b>
1. [Array](#array)
2. [Exemplo prático do funcionamento do método pop( )](#pop)
3. [Removendo itens com o método splice( )](#splice)
4. [Adicionando itens usando splice( )](#itensusandosplice)
5. [Copiando itens do array utilizando <b>slice</b>( )](#copiandoarraycomslice)
6. [Copiando array com Spread Operator](#copiandocomspreadoperator)
7. [Combinando array com Spread Operator](#combinandoarraycomspreadoperator)
8. [Verificando a presença de um elemento com indexOf( )](#indexof)
9. [Iterar todos os itens de uma matriz usando Loops For](#iterarcomloops)
10. [Crie matrizes multidimensionais complexas](#matrizmultidimensional)
11. [](#)
12. [](#)
13. [](#)
14. [](#)
15. [](#)
16. [](#)
17. [](#)
18. [](#)
19. [](#)
20. [](#)
<br></br>

<div id="array"></div>
<h1>Array</h1>
  <p>Segundo a documentação da <a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays">MDN</a> entende-se arrays como uma lista de objetos que contém múltiplos valores armazenados em uma lista.</p>
  <p>Ambos push( ) e unshift( ) têm métodos correspondentes que são praticamente opostos funcionais: pop( ) e shift( ). Como você já deve ter adivinhado, em vez de adicionar, pop( ) remove um elemento do final de um array, enquanto shift() remove um elemento do início. A principal diferença entre pop( ) e shift( ) e seus primos push( ) e unshift( ), é que nenhum dos métodos aceita parâmetros e cada um permite apenas que uma matriz seja modificada por um único elemento por vez.</p>
  
  <div id="pop">Exemplo prático do funcionamento do método pop()</div>
  <h3>Exemplo prático do funcionamento do método pop( )</h3><br>

     let greetings = ['whats up?', 'hello', 'see ya!'];
     greetings.pop();
     
 <p><code>greetings</code> teria então o valor de <code>['whats up?', 'hello']</code>. Uma vez que o respectivo método elimina o último item do array.</p>
   
  <li>Com o método shift() retornaria: <code>['hello']</code>.</li>
  <li>Também podemos retornar o valor do elemento removido com qualquer método como este:</li>
  
  ```
  let popped = greetings.pop();
  ```
  <p>Neste caso <code>greetings</code> teria o valor [ ] e <code>popped</code> teria o valor <code>hello</code>.
  
  <div id="splice"></div>  
  <h2>Removendo itens com o método splice( )</h2>
    <p>Com este método é possível remover itens em qualquer posição do array; o mesmo pode receber até 3 parâmetros. O primeiro parâmetro de splice() representa o índice no array do qual começar a remover elementos, enquanto o segundo parâmetro indica o número de elementos a serem excluídos. Por exemplo: </p>    
 
    let array = ['today', 'was', 'not', 'so', 'great'];
    array.splice(2, 2);    
  <p>Aqui foi removido 2 elementos, começando com o terceiro elemento (no índice 2). O array então teria o valor ['today', 'was', 'great'].</p>
  <p>O splice() não apenas modifica o array em que está sendo chamado, mas também retorna um novo array contendo o valor dos elementos removidos:</p>
  
  ```
  let array = ['I', 'am', 'feeling', 'really', 'happy'];
  let newArray = array.splice(3, 2);
  ```
  <p><code>newArray</code> tem o valor <code>['really', 'happy']</code>.</p>
  
  <div id="itensusandosplice"></div>
  <h3>Adicionando itens usando Splice( )</h3>
    <p>No último tópico foi mencionado que o método Splice() pode levar até três parâmetros. É possível usar o terceiro parâmetro, composto por um ou mais elementos, para adicionar à matriz. Isso pode ser incrivelmente útil para alternar rapidamente um elemento ou um conjunto de elementos, para outro.</p>
    
  ```
  const numbers = [10, 11, 12, 12, 15];
  const startIndex = 3;
  const amountToDelete = 1;
  numbers.splice(startIndex, amountToDelete, 13, 14);
  console.log(numbers);
  ```
  
  <p>A segunda ocorrência de 12 é removida e adicionamos 13 e 14 no mesmo índice. A matriz de números agora seria <code>[10, 11, 12, 13, 14, 15]</code>.</p>
  
  <div id="copiandoarraycomslice"></div>
  <h2>Copiando itens do array utilizando <b>slice()</b></h2>
    <p>O método slice não modifica um array; o mesmo copia ou extrai um determinado número de elementos para um novo array. Este método leva apenas dois parâmetros, o primeiro é o índice no qual irá iniciar a extração e o segundo é o índice no qual irá parar a extração(a extração ocorrerá até, mas não incluindo o elemento neste índice). Como é possível visualizar abaixo:

        
        let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
        let todaysWeather = weatherConditions.slice(1, 3);
        
<code>todaysWeather</code> teria o valor de ['snow', 'sleet'];</p>

<div id="copiandocomspreadoperator"></div>
<h2>Copiando um array com o Spread Operator</h2>
  <p>É possível copiar um array utilizando Spread Operator.</p>
    
      let thisArray = [true, true, undefined, false, null];
      let thatArray = [...thisArray];
 <p><code>thisArray</code> permanece inalterado e <code>thatArray</code> contém os mesmos elementos que <code>thisArray</code>.</p>
 
 <div id="combinandoarraycomspreadoperator"></div>
 <h3>Combinando array com Spread Operator</h3>
    <p>Habitualmente é possível combinar arrays através de concatenação, entretanto, dessa forma só seria possível combinar o final de um array com o início de outro. Porém, com o spread operator é possível combiná-las substituindo os seus índices no array. Como é possível conferir abaixo. É possível observar que <code>thatArray</code> teria o valor de: <code>['brasil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']</code>:</p>
      
      
      let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
      let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
    
  <div id="indexof"></div>
  <h2>Verificando a presença de um elemento com indexOf()</h2>
    <p>Como os arrays podem ser alterados e modificados a qualquer momento, não há garantia sobre onde um dado específico estará em um determinado array ou se esse elemento ainda existe. Felizmente o Javascript fornece outro método integrado: <code>indexOf()</code>, que permite verificar rápida e facilmente a presença de um elemento em um array.<code>indexOf()</code> recebe um elemento como parâmetro e, quando chamado, retorna a posição ou índice desse elemento, ou <code>-1</code> se o elemento não existir no array. Como é possível ver abaixo:</p>
    
   ``` 
   let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
   fruits.indexOf('dates');
   fruits.indexOf('oranges');
   fruits.indexOf('pears');
   ```
   
  <div id="iterarcomloops">
  <h2>Iterar todos os itens de uma matriz usando Loops For</h2>
      <p>JavaScript oferece vários métodos integrados que iteram sobre arrays de maneiras ligeiramente diferentes para obter resultados diferentes, como: every(), forEach(), map(), etc, no entanto, a técnica que é mais flexível e nos oferece o maior quantidade de controle é um <b>loop for</b> simples.</p>
  
      
````
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
greaterThanTen([2, 12, 8, 14, 80, 0, 1]); 
````
  
  
  
  
  
<div id="matrizmultidimensional">
  <h2>Criando matrizes multidimensionais complexas</h2>
    <p>Uma das características mais úteis e poderosas quando se trata de arrays é sua capacidade multidimensional. Os arrays podem conter outras arrays cada uma com os seus próprios níveis arbritrários de profundidade, sendo cada array com seus próprios níveis. Essa estrutura complexa também pode ser chamada de matriz aninhada.</p>
    
  
 <h2>Adicionar Pares de Valor-Chave(Key-Value) a Objetos JavaScript</h2>
    <p>Basicamente, objetos são apenas coleções de chave-valor. Em outras palavras, são pedaços de dados (valores) mapeados para identificadores únicos chamados de  propriedades (chaves). Exemplo:</p>
  
  ```
  const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
  };
  ```
  <p>O código acima define um objeto de personagem de videogame <b>Tekken</b> chamado <code>tekkenCharacter</code>. Ele tem três propriedades, cada uma mapeando para um valor específico. Se você quiser adicionar uma propriedade adicional, como <code>"origin"</code>, isso pode ser feito atribuindo origem ao objeto:</p>   
  
  ```
  tekkenCharacter.origin = 'South Korea';
  ```
  <p>Acima foi usado a notação de ponto (dot notation). Se você observar, o objeto tekkenCharacter, ele agora incluirá a propriedade <code>origin</code>. Adicionando mais uma propriedade ao objeto <code>tekkenCharacter</code> seria da seguinte forma:</p>
  
  
     tekkenCharacter['hair color'] = 'dyed orange';

  
  
  <p>O objeto final ficaria da seguinte forma:</p>
  
  
  ```
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
   ```
  
  <h2>Modificar um objeto aninhado dentro de um objeto</h2>
      <p>As propriedades de um objeto podem ser aninhadas em uma profundidade arbitrária e seus valores podem ser de qualquer tipo de dado suportado pelo JS, incluindo arrays e até mesmo outros objetos.</p>
  
  ```
  let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
```

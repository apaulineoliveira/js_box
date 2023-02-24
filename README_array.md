<p align="center">  
  <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="180" width="200">
</p>

<h1>Array</h1>
  <p>Segundo a documentação da <a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays">MDN</a> entende-se arrays como uma lista de objetos que contém múltiplos valores armazenados em uma lista.</p>
  <p>Ambos push() e unshift() têm métodos correspondentes que são praticamente opostos funcionais: pop() e shift(). Como você já deve ter adivinhado, em vez de adicionar, pop() remove um elemento do final de um array, enquanto shift() remove um elemento do início. A principal diferença entre pop() e shift() e seus primos push() e unshift(), é que nenhum dos métodos aceita parâmetros e cada um permite apenas que uma matriz seja modificada por um único elemento por vez.</p>
  
  <h3>Exemplo prático do funcionamento do método pop()</h3><br>

     let greetings = ['whats up?', 'hello', 'see ya!'];
     greetings.pop();
     
 <p><code>greetings</code> teria então o valor de <code>['whats up?', 'hello']</code>. Uma vez que o respectivo método elimina o último item do array.</p>
   
  

<img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="180" width="200">

<h1>Estrutura de Dados e Algorítimo</h1>

<h2>Convertendo temperatura de Celsius para Fahrenheit </h2>
  <p><b>Observação</b>: A fórumula para converter Celsius para Fahrenheit é a temperatura em Celsius vezes 9/5, mais 32. Para solucionar esse desafio é importante perceber em primeira instância <b>a ordem de operação</b>, usando parênteses quando necessário.</p>
   <p><b>Solução</b>:</p>
   
   ```
   function convertCtoF(celsius) {
        let fahrenheit = celsius * (9 / 5) + 32;
        return fahrenheit;
   }
   
   convertCtoF(30); 
   ```
   
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

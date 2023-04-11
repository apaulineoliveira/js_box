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
   


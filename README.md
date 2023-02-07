
  <p><b>🏒 Objetivo</b>: O objetivo deste repositório é reunir os principais conceitos e práticas utilizadas pela línguagem Javascript com o intuito de fixar e aprimorar os conhecimentos em questões tão cotidianamente usuais ao trabalhar.</p>
  <p>É válido ressaltar que grande parte dos conceitos, exercícios e exemplos presentes neste repositório foram retirados do site <b>FreeCodeCamp.org</b>.</p>
  
<p align="center">  
  <img src="https://cdn.pixabay.com/photo/2022/03/21/21/44/file-7084007_960_720.png" height="180" width="200">
</p>

<h2>Regex</h2>
<h3>Carácter curinga</h3>
    <p>O carácter curinga serve para criar uma combinação de expressões que comumente são aceitáveis. Segundo a definição da FreeCodeCamp compreende por carácter curinga como:<br></br> "O curinga também é chamado de ponto e ponto. Você pode usar o caractere curinga como qualquer outro caractere no regex. Por exemplo, se você quiser corresponder a hug, huh, hut e hum, poderá usar a expressão regular /hu./ para corresponder às quatro palavras." <br></br>Como o exemplo retirado da <a href ="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-anything-with-wildcard-period">FreeCodeCamp</a>:</p>
    
```
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);</code>
```
<p>Ambas as chamadas de teste retornariam <b>true</b></b>.

<h3>Combine um único personagem com múltiplas possibilidades</h3>
    <p>Você pode procurar um padrão literal com alguma flexibilidade com classes de caracteres. As classes de caracteres permitem que você defina um grupo de caracteres que deseja corresponder, colocando-os entre colchetes ([ e ]).<br>
Por exemplo, você deseja combinar "bag, big e bug", mas não "bog". Você pode criar o regex /b[aiu]g/ para fazer isso. O [aiu] é a classe de caracteres que corresponderá apenas aos caracteres a, i ou u.</p>

 ```
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

```
<p>Em ordem, as quatro chamadas de correspondência retornariam os valores ["big"], ["bag"], ["bug"] e nulo.</p>

<h3>⌨️ Exercitando...</h3>
  <p>Use uma classe de caracteres com vogais (a, e, i, o, u) em sua vogal regex Regex para encontrar todas as vogais na string quoteSample.
Observação: certifique-se de combinar as vogais maiúsculas e minúsculas.</p>

```
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 
```
<h2>Combinar letras do alfabeto</h2>
  <p>Dentro de um conjunto de caracteres, você pode definir um intervalo de caracteres para correspondência usando um hífen: <code>-</code>.Por exemplo, para corresponder letras minúsculas de a a e, você usaria [a-e].</p>

```
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

```
<p>Em ordem, as três chamadas de correspondência retornariam os valores ["cat"], ["bat"] e nulo.</p>

<h3>⌨️ Exercitando...</h3>
  <p>Combine todas as letras na string quoteSample.Nota: Certifique-se de combinar letras maiúsculas e minúsculas.</p>
  
```
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex); 
```

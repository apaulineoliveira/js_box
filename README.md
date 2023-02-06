
  <p><b>Objetivo</b>: O objetivo deste repositório é reunir os principais conceitos e práticas utilizadas pela línguagem Javascript com o intuito de fixar e aprimorar os conhecimentos em questões tão cotidianamente usuais ao trabalhar.</p>
  
<p align="center">  
  <img src="https://cdn.pixabay.com/photo/2022/03/21/21/44/file-7084007_960_720.png" height="180" width="200">
</p>

<h2>Regex</h2>
  <h3>Wildcard Period (Período curinga)</h3>
    <p>O carácter curinga serve para criar uma combinação de expressões que comumente são aceitáveis. Segundo a definição da FreeCodeCamp compreende por carácter curinga como:<br></br> "O curinga também é chamado de ponto e ponto. Você pode usar o caractere curinga como qualquer outro caractere no regex. Por exemplo, se você quiser corresponder a hug, huh, hut e hum, poderá usar a expressão regular /hu./ para corresponder às quatro palavras." <br></br>Como o exemplo retirado da <a href ="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-anything-with-wildcard-period">FreeCodeCamp</a>:</p

<code>let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);</code>

Ambas as chamadas de teste retornariam <b>true</b>.
 <h3>Match Single Character with Multiple Possibilities (Combine um único personagem com múltiplas possibilidades)</h3>
    <p>Você pode procurar um padrão literal com alguma flexibilidade com classes de caracteres. As classes de caracteres permitem que você defina um grupo de caracteres que deseja corresponder, colocando-os entre colchetes ([ e ]).<br>
Por exemplo, você deseja combinar "bag, big e bug", mas não "bog". Você pode criar o regex /b[aiu]g/ para fazer isso. O [aiu] é a classe de caracteres que corresponderá apenas aos caracteres a, i ou u.</p>


  <p><b>🏒 Objetivo</b>: O objetivo deste repositório é reunir os principais conceitos e práticas utilizadas pela línguagem Javascript com o intuito de fixar e aprimorar os conhecimentos em questões tão cotidianamente usuais ao trabalhar.</p>
  <p>É válido ressaltar que grande parte dos conceitos, exercícios e exemplos presentes neste repositório foram retirados do site <b>FreeCodeCamp.org</b>.</p>
  
<p align="center">  
  <img src="https://cdn.pixabay.com/photo/2022/03/21/21/44/file-7084007_960_720.png" height="180" width="200">
</p>

<h2>Regex</h2>
<h3>Caracter curinga</h3>
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

<p><b>Solução:</b></p>

```
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 
```
<h2>Combinar letras do alfabeto</h2>
  <p>Dentro de um conjunto de caracteres, você pode definir um intervalo de caracteres para correspondência usando um hífen: <code>-</code>.Por exemplo, para corresponder letras minúsculas de a a e, você usaria [a-e].</p>
  
<p><b>Solução:</b></p>

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

<p><b>Solução:</b></p>

```
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex); 
```
<p>⚠️ O método <code>match</code> especifica uma expressão regular e localiza o conteúdo do objeto String em que está aplicada essa expressão. Para saber se essa correspondência atendida ou não, é retornado um valor booleano (true ou false). <b>Fonte:</b> <a href= "https://www.devmedia.com.br/conceitos-basicos-sobre-expressoes-regulares-em-java/27539#:~:text=O%20m%C3%A9todo%20matches%20especifica%20uma,booleano%20(true%20ou%20false).">DEVMEDIA</a></p>

<h2>Combinar Números e Letras do Alfabeto</h2>
  <p>O uso do hífen <code>(-)</code> para corresponder a um intervalo de caracteres não se limita a letras. Ele também funciona para corresponder a um intervalo de números. Por exemplo, /[0-5]/ corresponde a qualquer número entre 0 e 5, incluindo 0 e 5. Além disso, é possível combinar uma variedade de letras e números em um único conjunto de caracteres.</p>
  
<p><b>Solução:</b></p>  
  
```
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```
<h3>⌨️ Exercitando...</h3>
  <p>Crie um único regex que corresponda a um intervalo de letras entre <code>h e s</code> e a um intervalo de números entre <code>2 e 6</code>. Lembre-se de incluir os sinalizadores apropriados no regex.</p>
  
<p><b>Solução:</b></p>  
  
```
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result = quoteSample.match(myRegex); 
```
<h2>Correspondência de caracteres únicos não especificados</h2>
  <p>O conjunto de caracteres que não deseja corresponder são chamados de <b></b>conjuntos de caracteres negados. Para criá-los basta colocar um caracter de circunflexo (^) após o colchete de abertura e antes dos caracteres que não deseja corresponder. Por exemplo, <code>/[^aeiou]/gi</code> corresponde a todos os caracteres que <b>não</b> são vogais. Observe que caracteres como ., !, [, @, / e espaço em branco são correspondidos - o conjunto de caracteres de vogal negada exclui apenas os caracteres de vogal.</p> 

<h3>⌨️ Exercitando...</h3>
  <p>Crie um único regex que corresponda a todos os caracteres que não sejam um número ou uma vogal. Lembre-se de incluir os sinalizadores apropriados no regex.</p>
  
<p><b>Solução:</b></p>
  
```
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; 
let result = quoteSample.match(myRegex); 

```
<p><b>⚠️ Legenda sobre os sinalizadores</b>:</p>
  <li><code>i</code>: Ignora letras maiúsculas e minúsculas da pesquisa/correspondência</li>
  <li><code>g</code>: Recupera vários valores; padrão é definido para retornar a primeira correspondência encontrada</li>
  <li><code>^</code>: Nega as correspondências seguindo este emblema</li>
  
  
<h2>Corresponder a caracteres que ocorrem uma ou mais vezes</h2>
  <p>Às vezes, é preciso corresponder a um caractere (ou grupo de caracteres) que aparece uma ou mais vezes seguidas. Isso significa que ocorre pelo menos uma vez e pode ser repetido. É possível usar o caractere <code>+</code> para verificar se esse é o caso. Lembre-se, o caractere ou padrão deve estar presente consecutivamente. Ou seja, o caracter tem que repetir um após o outro.</p>
  <p>Por exemplo, <code>/a+/g</code> encontraria uma correspondência em abc e retornaria ["a"]. Por causa do +, ele também encontraria uma única correspondência em <b>aabc</b> e retornaria ["aa"].</p>
  <p>Se, em vez disso, estivesse verificando a string <b>abab</b>, encontraria duas correspondências e retornaria ["a", "a"] porque os caracteres <code>a</code> não estão em uma linha - há um b entre eles. Finalmente, como não há <code>a</code> na string bcd, ele não encontraria uma correspondência.</p>
  
  <h3>⌨️ Exercitando...</h3>
    <p>Você deseja encontrar correspondências quando a letra <code>s</code> ocorre uma ou mais vezes na palavra <b>Mississippi</b>. Escreva um regex que use o sinal +.</p>

<p><b>Solução:</b></p>

```
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

```
<h2>Corresponder a caracteres que ocorram zero ou mais vezes</h2>
  <p>Há uma opção que corresponde a caracteres que ocorrem zero ou mais vezes. O caractere para fazer isso é o asterisco ou estrela: <code>*</code>.</p>
  
```
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

```
<p>Em ordem, as três chamadas de correspondência retornariam os valores ["goooooooo"], ["g"] e nulo.</p>

<h3>Exercitando...</h3>
  <p>Ambos alloFor este desafio, chewieQuote foi inicializado como a string Aaaaaaaaaaaaaaaaarrrgh! Por trás das cenas. Crie um regex chewieRegex que use o caractere * para corresponder a um caractere A maiúsculo imediatamente seguido por zero ou mais caracteres a minúsculos em chewieQuote. Seu regex não precisa de sinalizadores ou classes de caracteres e não deve corresponder a nenhuma das outras aspas.w para qualquer número de ocorrências da mesma letra seguidas, por exemplo,</p>
  
<p><b>Solução:</b></p>

```
let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);

```

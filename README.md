
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

<h3>⌨️ Exercitando...</h3>
  <p>Ambos alloFor este desafio, chewieQuote foi inicializado como a string Aaaaaaaaaaaaaaaaarrrgh! Por trás das cenas. Crie um regex chewieRegex que use o caractere * para corresponder a um caractere A maiúsculo imediatamente seguido por zero ou mais caracteres a minúsculos em chewieQuote. Seu regex não precisa de sinalizadores ou classes de caracteres e não deve corresponder a nenhuma das outras aspas.w para qualquer número de ocorrências da mesma letra seguidas, por exemplo,</p>
  
<p><b>Solução:</b></p>

```
let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);

```
<p>Os desafios anteriores mostraram que as expressões regulares podem ser usadas para procurar várias correspondências. Eles também são usados para procurar padrões em posições específicas em strings.</p>

<h2>Correspondência de padrões iniciais de string</h2>
  <p>Assim como o circunflexo <code>^</code> dentro de um conjunto de colchetes é utilizado para criar um conjunto de caracteres negados, fora dos colchetes o circunflexo é utilizado para procurar padrões no início de strings. Exemplo:</p>
  
```

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);

```

<p>A primeira chamada de teste retornaria true, enquanto a segunda retornaria false.</p>

<h2>Correspondência de padrões de string de finalização</h2>
  <p>Também existe uma maneira de procurar padrões no final das strings. Você pode pesquisar o final das strings usando o caractere cifrão $ no final do regex.</p>

```
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```
<p>A primeira chamada de teste retornaria true, enquanto a segunda retornaria false.</p>

<h2>Combine todas as letras e números</h2>
  <p>A classe de caracteres mais próxima em JavaScript para corresponder ao alfabeto é \w. Este atalho é igual a [A-Za-z0-9_]. Esta classe de caracteres corresponde a letras maiúsculas e minúsculas mais números. Observe que essa classe de caracteres também inclui o caractere de sublinhado (_).</p>
  
```
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

```
<p>Todas essas quatro chamadas de teste retornariam true. Essas classes de caracteres de atalho também são conhecidas como classes de caracteres abreviados.</p>

<h3>⌨️ Exercitando...</h3>
  <p>Use a classe de caractere abreviada <code>\w</code> para contar o número de caracteres alfanuméricos em várias aspas e strings.</p>
  
<p><b>Solução:</b></p>

```
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

```
<h2>Combine tudo menos letras e números</h2>
  <p>No apontamento anterior foi mostrado um atalho para corresponder alfanuméricos <code>[A-Za-z0-9_]</code> usando <code>\w</code>. Um padrão natural que você pode querer pesquisar é o oposto dos alfanuméricos. Você pode procurar o oposto do <code>\w</code> com <code>\W</code>. Observe que o padrão oposto usa uma letra <b>maiúscula</b>. Este atalho é o mesmo que [^A-Za-z0-9_].</p>
  
```
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);

```
<p>A primeira chamada de correspondência retornaria o valor ["%"] e a segunda retornaria ["!"].</p>

<h3>⌨️ Exercitando...</h3>
  <p>Use a classe de caractere abreviada <code>\W</code> para contar o número de caracteres não alfanuméricos em várias aspas e strings.</p>
  
<p><b>Solução:</b></p>

```
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W+/g;
let result = quoteSample.match(nonAlphabetRegex).length;
```

<h2>Corresponder a todos os números</h2>
  <p>O atalho para procurar caracteres de dígitos é <code>\d</code>, com um d minúsculo. Isso é igual à classe de caracteres [0-9], que procura um único caractere de qualquer número entre zero e nove.</p>
  <p>Use a classe de caractere abreviada <code>\d</code> para contar quantos dígitos existem nos títulos dos filmes. Números escritos ("seis" em vez de 6) não contam.</p>
  
```
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result = movieName.match(numRegex).length;

```

<h2>Corresponder a todos os não-números</h2>
  <p>É também possível procurar por não-dígitos usando um atalho semelhante que usa um D maiúsculo. O atalho para procurar caracteres que não sejam dígitos é <code>\D</code>. Isso é igual à classe de caracteres [^0-9], que procura um único caractere que não seja um número entre zero e nove.</p>
  <p>Use a classe de caractere abreviada para não-dígitos \D para contar quantos não-dígitos existem em títulos de filmes.</p>
  
 ```
 let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/gi; 
let result = movieName.match(noNumRegex).length;

```
<h3>⌨️ Exercitando...</h3>
  <h3>Restringir possíveis nomes de usuário</h3>
  <p>Escopo: Os nomes de usuário são usados em toda parte na Internet. São eles que dão aos usuários uma identidade única em seus sites favoritos.Você precisa verificar todos os nomes de usuário em um banco de dados.</p>
  <p>Aqui estão algumas regras simples que os usuários devem seguir ao criar seu nome de usuário:</p>
  <ul>
    <li>Os nomes de usuário só podem usar caracteres alfanuméricos;</li>
    <li>Os únicos números no nome de usuário devem estar no final. Pode haver zero ou mais deles no final. O nome de usuário não pode começar com o número;</li>
    <li>As letras do nome de usuário podem ser minúsculas e maiúsculas;</li>
    <li>Os nomes de usuário devem ter pelo menos dois caracteres. Um nome de usuário de dois caracteres só pode usar letras do alfabeto como caracteres.</li>
  </ul>
  
<p>Altere o regex userCheck para ajustar as restrições listadas acima:</p>
  
  <p><b>Solução:</b<</p>
  
```
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```

<h2>Corresponder ao espaço em branco</h2>
  <p>Além de letras e números também é possível combinar o espaço em branco ou os espaços entre as letras. Você pode procurar espaços em branco usando <code>\s</code>, que é um s minúsculo. Esse padrão não apenas corresponde a espaços em branco, mas também a caracteres de retorno de carro, tabulação, alimentação de formulário e nova linha. Você pode considerá-la semelhante à classe de caracteres <code>[ \r\t\f\n\v]</code>.</p>
  
```
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

<p>Altere a contagem de regex WhiteSpace para procurar vários caracteres de espaço em branco em uma string.</p>

```
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);

```

<h2>Corresponder caracteres sem espaço em branco</h2>
  <p>Você também pode pesquisar tudo, exceto espaços em branco. Pesquise por não-espaço em branco usando <code>\S</code>, que é um <code>s</code> maiúsculo. Esse padrão não corresponderá a espaços em branco, retorno de carro, tabulação, alimentação de formulário e caracteres de nova linha. Você pode pensar nisso como sendo semelhante à classe de caracteres [^ \r\t\f\n\v].</p>
  
```
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
```

<p>O valor retornado pelo método <code>.length</code> seria 32.</p>

<h2>Especifique o número superior e inferior de correspondências</h2>
  <p>Lembre-se de que você usa o sinal de mais <code>+</code> para procurar um ou mais caracteres e o asterisco <code>*</code> para procurar zero ou mais caracteres. Estes são convenientes, mas às vezes você deseja combinar uma certa variedade de padrões.Por exemplo, para corresponder apenas à letra <code>a</code> que aparece entre 3 e 5 vezes na string <code>ah</code>, sua regex seria <code>/a{3,5}h/</code>.</p>
  
```
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
```

<p>A primeira chamada de teste retornaria <code>true</code>, enquanto a segunda retornaria <code>false</code>.</p>

<h2>Especifique apenas o menor número de correspondências</h2>
  <p>É possível especificar o número inferior e superior de padrões com especificadores de quantidade usando colchetes. Às vezes, você deseja especificar apenas o número inferior de padrões sem limite superior. Para especificar apenas o menor número de padrões, mantenha o primeiro número seguido por uma vírgula.</p>
  <p>Por exemplo, para corresponder apenas a string <code>hah</code> com a letra <code>a</code> aparecendo pelo menos 3 vezes, seu regex seria <code>/ha{3,}h/</code>.</p>

```
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```
<p>Em ordem, as três chamadas de teste retornariam true, false e true.</p>

<h3>⌨️ Exercitando...</h3>
  
  <p><b>Solução</b></p>
  
```
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result = haRegex.test(haStr);
```

<h2>Especifique o número exato de correspondências</h2>
  <p>Você pode especificar o número inferior e superior de padrões com especificadores de quantidade usando colchetes. Às vezes, você deseja apenas um número específico de correspondências. Para especificar um certo número de padrões, basta colocar esse número entre as chaves.<br> Por exemplo, para combinar apenas a palavra <code>hah</code> com a letra <code>a</code> 3 vezes, sua regex seria <code>/ha{3}h/</code>.</p>
  
```
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
```
<p>Em ordem, as três chamadas de teste retornariam false, true e false.</p>

<h3>⌨️ Exercitando...</h3>
  <p>Altere o regex <code>timRegex</code> para corresponder à palavra Timber somente quando ela tiver quatro letras <code>m</code>.</p>
  
  <p><b>Solução</b></p>
  
```
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result = timRegex.test(timStr);
```

<h2>Verificar se há todos ou nenhum</h2>
  <p>Às vezes, os padrões que você deseja pesquisar podem ter partes que podem ou não existir. No entanto, pode ser importante verificá-los, no entanto. Você pode especificar a possível existência de um elemento com um ponto de interrogação, <code>?</code>. Isso verifica se há zero ou um dos elementos anteriores. Você pode pensar neste símbolo como dizendo que o elemento anterior é opcional.<br></br> 
Por exemplo, existem pequenas diferenças no inglês americano e britânico e você pode usar o ponto de interrogação para corresponder a ambas as grafias.</p>

```
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```
<p>Ambos os usos do método de teste retornariam true.</p>

<h3>⌨️ Exercitando...</h3>
  <p>Altere o regex <code>timRegex</code> para corresponder à palavra Timber somente quando ela tiver quatro letras <code>m</code>.</p>
  
  <p><b>Solução</b></p>
  <p>Altere o regex favRegex para corresponder à versão da palavra em inglês americano (favorite) e inglês britânico (favourite).</p>
  
  <p><b>Solução:</b></p>
  
  ```
  let favWord = "favorite";
  let favRegex = /favou?rite/;
  let result = favRegex.test(favWord);  
  ```
  
  

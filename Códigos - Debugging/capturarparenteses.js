//Capturar parênteses, colchetes, chaves e aspas não fechados

//Um erro de sintaxe a ser observado é que todos os parênteses de abertura, colchetes, chaves e aspas têm um par de fechamento. O esquecimento de uma peça tende a acontecer quando você está editando o código existente e inserindo itens com um dos tipos de par. Uma maneira de evitar esse erro é, assim que o caractere de abertura for digitado, incluir imediatamente a correspondência de fechamento, mover o cursor de volta entre eles e continuar codificando. Felizmente, a maioria dos editores de código modernos gera a segunda metade do par automaticamente. Corrijindo os erros de dois pares no código abaixo://


let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
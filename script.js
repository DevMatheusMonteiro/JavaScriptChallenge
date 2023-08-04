/*1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");*/

/*2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let number1 = 2;
let number2 = 5;
let sum = number1 + number2;
alert(sum);*/

/*3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let number = 6;

if (typeof number == "number") {
  alert("É um número");
} else {
  alert("Não é um número");
}*/

/*4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let string = "Hello World!";

if (typeof string == "string") {
  alert("É uma string");
} else {
  alert("Não é uma string");
}*/

/*5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let bool = "Hello World!" == 6;

if (typeof bool == "boolean") {
  alert("É um booleano");
} else {
  alert("Não é um booleano");
}*/

/* 
    6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
    7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
    8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
    9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
    10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/
let numberOne, numberTwo, operation;

let keepRunning = true;
let result;
let attempts = 0;

function numberValidation(numberOne, numberTwo) {
  let message = "Informe valores numéricos válidos!\n";

  if (isNaN(numberOne) && isNaN(numberTwo)) {
    return `${message}Os dois números estão inválidos!`;
  } else if (isNaN(numberOne)) {
    return `${message}O número um está inválido!`;
  } else {
    return `${message}O número dois está inválido!`;
  }
}

while (keepRunning) {
  numberOne = Number(prompt("Digite o primeiro número"));

  operation = prompt(`
    Informe a operação desejada:
    +: soma
    -: subração
    *: multiplicação
    /: divisão
    %: resto da divisão`);

  numberTwo = Number(prompt("Digite o segundo número"));

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    alert(numberValidation(numberOne, numberTwo));
    attempts++;
  } else {
    switch (operation) {
      case "+":
        result = numberOne + numberTwo;
        alert("A soma é: " + result);
        keepRunning = false;
        break;

      case "-":
        result = numberOne - numberTwo;
        alert("A subtração é: " + result);
        keepRunning = false;
        break;

      case "*":
        result = numberOne * numberTwo;
        alert("A multiplicação é: " + result);
        keepRunning = false;
        break;

      case "/":
        if (numberTwo != 0) {
          result = numberOne / numberTwo;
          alert("A divisão é: " + result);
          keepRunning = false;
        } else {
          alert("Não é possível dividir por 0");
          attempts++;
        }
        break;

      case "%":
        if (numberTwo != 0) {
          result = numberOne % numberTwo;
          alert("O resto da divisão é: " + result);
          keepRunning = false;
        } else {
          alert("Não é possível dividir por 0");
          attempts++;
        }
        break;

      default:
        alert("Operação inválida, tente novamente!");
        attempts++;
        break;
    }
  }

  if (attempts == 3) {
    let option;

    while (option != 2 && option != 1) {
      option = Number(
        prompt(`
        Deseja continuar tentando?
        1 - Sim
        2 - Não`)
      );
      switch (option) {
        case 1:
          attempts = 0;
          break;
        case 2:
          keepRunning = false;
          break;
        default:
          alert("Opção inválida, tente novamente!");
          break;
      }
    }
  }
}

if (attempts == 3) {
  alert("Encerrado!");
} else {
  if (result % 2 == 0) {
    alert(`O resultado(${result}) é par`);
  } else {
    alert(`O resultado(${result}) não é par`);
  }

  if (result % 2 != 0) {
    alert(`O resultado(${result}) é ímpar`);
  } else {
    alert(`O resultado(${result}) não é ímpar`);
  }
}

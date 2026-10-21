var mesDigitado = "nóphk";

switch(mesDigitado) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
    case "Abril":
    case "Maio":
    case "Junho":
    case "Julho":
    case "Agosto":
    case "Setembro":
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Parabéns, você digitou corretamente: " + mesDigitado);
        break;
    default: 
    console.log("Você digitou errado, tente novamente.");
    break;
}
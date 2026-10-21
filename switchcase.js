var letraDigitada = "G";

switch(letraDigitada) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("VOGAL!");
        break;
    default:
        console.log("CONSOANTE!\n\n")
}

var escolhaMenu = 3;

switch(letraDigitada) {
    case 1:
        console.log("ENTRAR");
        break;
    case 2:
        console.log("CADASTRAR");
        break;
    case 3:
        console.log("EDITAR");
        break;
    case 0:
        console.log("SAIR");
        break;
    default:
        console.log("DIGITE UMA OPÇÃO VÁLIDA!");
        break;
}
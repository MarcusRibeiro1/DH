// Desenvolver um microondas super veloz, com 5 opções de comida e seus tempos pré definidos.

    let pipoca = 10;
    let macarrao = 8;
    let carne = 15;
    let feijao = 12;
    let brigadeiro = 8;
    let opcoes = ['pipoca', 'macarrao', 'carne', 'feijao', 'brigadeiro']
    
function esquentandoPrato(tempo,prato){
    let pratoEscolhido = prato;


if (tempo < pratoEscolhido){
    console.log("Tempo insuficiente," +  "\n Prato pronto, bom apetite!!!");
}

else if((tempo >= pratoEscolhido) && (tempo <= pratoEscolhido * 2)){
    console.log("Prato pronto, bom apetite!!!");
}

else if ((tempo > pratoEscolhido * 2) && (tempo <= pratoEscolhido * 3)){
    console.log("Sua comida queimou," + "\n Prato pronto, bom apetite!!!");
}

else if (tempo > pratoEscolhido * 3){
    console.log("kabumm" + "\n Prato pronto, bom apetite!!!");
}

else if (prato != opcoes){
    console.log("Prato inexistente")
}
else {
    console.log("Ler o manual de uso")
}

}

esquentandoPrato(31,pipoca);


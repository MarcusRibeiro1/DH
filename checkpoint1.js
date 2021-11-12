let pronto = 'Prato pronto, bom apetite!!!';
function microondas(prato, tempo){
    switch(prato){
        case 'pipoca':
            mensagem(tempo,10);
            break;
        case 'macarrao':
            mensagem(tempo,18);
            break;
        case 'carne':
            mensagem(tempo,15);
            break;
        case 'feijao':
            mensagem(tempo,12);
            break;
        case 'brigadeiro':
            mensagem(tempo,8);
            break;
        default:
            console.log('Prato inexistente\n' + pronto);        
}

function mensagem(tempo,tempoIdeal){
    tempo<tempoIdeal? console.log("Tempo insuficiente\n" + pronto):
    tempo>tempoIdeal*2 && tempo<=tempoIdeal*3? console.log("Comida queimou\n" + pronto):
    tempo>tempoIdeal*3? console.log("Kabumm\n" + pronto):
    console.log(pronto)
}
}

microondas('pipoca',9)
microondas('pipoca',20)
microondas('pipoca',30)
microondas('pipoca',40)
microondas('ovo',45)
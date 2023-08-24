const NAME = 'Camila';

function getEventoAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 3);

    if (numeroAleatorio === 0) {
        return "Maratona";
    } else if (numeroAleatorio === 1) {
        return "Triathlon";
    } else {
        return "Pentathlon";
    }
}

const evento = getEventoAleatorio();
console.log(evento);

function getDiasTreino(evento) {
    if (evento === "Maratona") {
        return 50;
    } else if (evento === "Triathlon") {
        return 100;
    } else if (evento === "Pentathlon") {
        return 200;
    } else {
        return "Evento desconhecido";
    }
}

function logEvento(nome, evento) {
    console.log(`${nome} vai participar do evento: ${evento}`);
}

function logTempo(nome, dias) {
    console.log(`${nome} vai treinar por ${dias} dias`);
}

const eventoEscolhido = getEventoAleatorio();
const diasTreino = getDiasTreino(eventoEscolhido);

const nomeParticipante = "Camila";
logEvento(nomeParticipante, eventoEscolhido);
logTempo(nomeParticipante, diasTreino);




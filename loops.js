const lugaresQueVisitei = ["Cairns", "Sidney", "Curitiba", "Rio de Janeiro", "Bahia"];

for (let i = 0; i < lugaresQueVisitei.length; i++) {
    console.log("Eu já visitei " + lugaresQueVisitei[i] + "!");
}

const lugaresAmiguinho = ["Nova York", "Tóquio", "Londres", "Sidney", "Bangkok"];


const lugaresEmComum = [];
for (let i = 0; i < lugaresQueVisitei.length; i++) {
    for (let j = 0; j < lugaresAmiguinho.length; j++) {
        if (lugaresQueVisitei[i] === lugaresAmiguinho[j]) {
            lugaresEmComum.push(lugaresQueVisitei[i]);
        }
    }
}

if (lugaresEmComum.length > 0) {
    console.log("Lugares em comum:");
    for (let k = 0; k < lugaresEmComum.length; k++) {
        console.log("- " + lugaresEmComum[k]);
    }
} else {
    console.log("Vocês não visitaram nenhum lugar em comum.");
}


const amigosDoFace = ["Camila", "Rebeca", "Pedro", "Dantoni", "Robson"];
const amigosDoFaceDoKaian = ["Robson", "Rafael", "Pedro", "Amanda", "Rebeca"];

const amigosEmComum = [];

for (let i = 0; i < amigosDoFace.length; i++) {
    for (let j = 0; j < amigosDoFaceDoKaian.length; j++) {
        if (amigosDoFace[i] === amigosDoFaceDoKaian[j]) {
            amigosEmComum.push(amigosDoFace[i]);
        }
    }
}

if (amigosEmComum.length > 0) {
    console.log("Amigos em comum no Facebook:");
    for (let k = 0; k < amigosEmComum.length; k++) {
        console.log("- " + amigosEmComum[k]);
    }
} else {
    console.log("Vocês não têm amigos em comum no Facebook.");
}


const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número entre 1 e 100
let tentativas = 0;

for (let i = 1; i <= 10; i++) {
    const palpiteAtual = parseInt(prompt("Tente adivinhar o número secreto (entre 1 e 100):"));

    if (palpiteAtual === numeroSecreto) {
        console.log(`Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${i} tentativa(s).`);
        break; 
    } else {
        console.log(`Tentativa ${i}: Palpite errado.`);
        tentativas++;

        if (tentativas >= 5) {
            console.log("O jogo terminou sem vencedores. O número secreto era: " + numeroSecreto);
            break; 
        }
    }
}

console.log("O número secreto era: " + numeroSecreto);
console.log("Obrigado por participar do jogo!");

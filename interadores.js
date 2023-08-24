//Iteradores
const hobbies = ['jogar', 'estudar idiomas', 'assistir série'];

hobbies.forEach(function (hobby) {
    console.log("Olá, eu sou o hobby " + hobby + "!");
});

const bookTitles = hobbies.map(function (hobby) {
    return "O incrível mundo de " + hobby;
});
console.log(bookTitles);

const dHobbies = hobbies.filter(function (hobby) {
    return hobby[0] === 'd';
});

console.log(dHobbies);

const runningPosition = hobbies.findIndex(function (hobby) {
    return hobby === 'correr';
});
console.log("Correr está na posição: " + runningPosition);

const allHobbies = hobbies.reduce(function (accumulator, hobby) {
    return accumulator + " e " + hobby;
}, "");

console.log("Meus hobbies são: " + allHobbies);

const hasVHobby = hobbies.some(function (hobby) {
    return hobby[0] === 'v';
});

console.log("Eu tenho um hobby que começa com 'v'? " + hasVHobby);

const allShort = hobbies.every(function (hobby) { return hobby.length < 15; });
console.log("Todos os meus hobbies têm menos de 15 letras? " + allShort);

const fiveLetterHobby = hobbies.find(function (hobby) {
    return hobby.length === 5;
});
console.log("Meu primeiro hobby com 5 letras é: " + fiveLetterHobby);


const firstThreeHobbies = hobbies.slice(0, 3); console.log("Meus três primeiros hobbies são: ",
    firstThreeHobbies);
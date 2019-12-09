// Code your solutions in this file

const cards = [];

function writeCards(names, e) {
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${e} gift!`);
    }
    return cards;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n--);
    }
}

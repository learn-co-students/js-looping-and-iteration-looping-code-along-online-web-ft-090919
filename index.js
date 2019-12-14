// writeCards(["Ada", "Brendan", "Ali"], "birthday");

// [
//   "Thank you, Ada, for the wonderful birthday gift!",
//   "Thank you, Brendan, for the wonderful birthday gift!",
//   "Thank you, Ali, for the wonderful birthday gift!"
// ];

const names = ["Ada", "Brendan", "Ali"]

function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}
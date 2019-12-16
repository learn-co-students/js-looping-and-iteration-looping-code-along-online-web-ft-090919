// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     } 

//     return gifts;
// }

// wrapGifts(gifts);

const people = ["Lisa", "Kaitlyn", "Jan"]
const event = "surprise"

function writeCards(people, event) {
    var thank_you = []
    for (let i = 0; i < people.length; i++) {
      thank_you.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
    }
 return thank_you
}



function countDown(n) {
    while (n > -1) {
    console.log(n--);
    }
}




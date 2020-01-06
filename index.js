// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
 
wrapGifts(gifts);

function writeCards(names, event) {
   let thankYouCards = []
  for (let i = 0; i < names.length; i++) {
  thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  
  return thankYouCards;
}

writeCards(names, event);

function countDown( startingNumber ) {
  while ( startingNumber > 0 ) {
    console.log( startingNumber );
    startingNumber -= 1;
  }
  console.log( startingNumber );
}
// Code your solutions in this file


function writeCards(names, eventName) {
    const thankYous = []
    for (let i = 0; i < names.length; i++) {
     const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
   thankYous.push(message)
    }
    return thankYous
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}


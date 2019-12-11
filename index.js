// Code your solutions in this file 

function writeCards(names, eventName) {
    const newArray = [];
    for (let index = 0; index < names.length; index++) {
        
        
        newArray.push(`Thank you, ${names[index]}, for the wonderful ${eventName} gift!`)
    }

    return newArray;
}

function countDown(fromNumber) {
    let i = 0;
    while (fromNumber >= i) {
        console.log(fromNumber)
        fromNumber --
    }
}
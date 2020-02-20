// Code your solutions in this file
function writeCards(names, celebration){
    const messages = []
    for(let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${celebration} gift!`);
    }
    return messages;
}

function countDown(x){
    while(x >= 0){
        console.log(x);
        x--;
    }
}

function writeCards(people, event) {
    let messages = [];
    for (let i = 0; i < people.length; i++) {
        let message = `Thank you, ${people[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}

function countDown(i) {
    while (i >= 0) {
        console.log(i--)
    }
}
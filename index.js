// Code your solutions in this file

const names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names, event_name) {
    for (let i = 0; i < names.length; i++) {
        console.log("Thank you, ${names[i]}, for the wonderful ${event_name} gift!");
    }

    return names;
}

writeCards(names, "surprise");



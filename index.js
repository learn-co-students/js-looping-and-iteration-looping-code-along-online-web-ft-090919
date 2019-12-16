

function writeCards(names, event) {
  let output = []
  for(let i = 0; i < names.length; i++) {
    output.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return output;
}


function countDown(number) {
  let currentNumber = number
  while(currentNumber >= 0) {
    console.log(currentNumber)
    currentNumber--
  }
}
// Code your solutions in this file
function writeCards(array, event_name) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    let message = `Thank you, ${array[i]}, for the wonderful ${event_name} gift!`;
    output.push(message);
  }
  return output;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}

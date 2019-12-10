function writeCards(names) {
  let array = [];

  for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return array;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num -= 1;
  }
}

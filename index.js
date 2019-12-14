

function writeCards(names, event){
  let arry = []
  for (let i=0; i < names.length ; i++){
    arry.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return arry
}


function countDown(num){
  while(num >= 0){
    console.log(num--);

  }
}

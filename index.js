function writeCards(array, string){
    const arr = []
    for( let i = 0; i < array.length; i++ ){
       arr.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
    }
    return arr
}

function countDown(num){
    while(num >= 0){
        console.log(num--);
    }
}
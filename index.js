// Code your solutions in this file
function writeCards(array) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return newArray;
}

function countDown(num) {
    for(let i = 0; i <= num; i++) {
        console.log(i);
    }
}

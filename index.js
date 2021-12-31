// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);

const senders = ["Charlie", "Rachel", "Ben"];

function writeCards(senders) {
    for (let s = 0; s < senders.length; s++) {
    console.log(`Thank you, ${senders[s]}, for the wonderful birthday gift!`);
    debugger;
}
 
return senders;
}
writeCards(senders);

const n = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    function countDown() {
        let countDown = 11;
        while (countDown > 0) {
            console.log(countDown--);
        }
countDown(10);
}
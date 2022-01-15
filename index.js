
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

function writeCards(names) {
    const messages = [];
    for (let n = 0; n < names.length; n++) {
        messages.push(`Thank you, ${names[n]}, for the wonderful surprise gift!`);
    } return messages;
}

function countDown() {
    let n = 10;
    while (n >= 0) {
        console.log(n--);
    }
}
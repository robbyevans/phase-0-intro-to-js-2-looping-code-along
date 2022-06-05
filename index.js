//arrays noma sana

// const myArray=["jonny", "walker", "jack","Daniel"];

function writeCards(myArray,msg) {
    let message=[];
  for (let i = 0; i < myArray.length; i++) {
    message.push(`Thank you, ${myArray[i]}, for the wonderful ${msg} gift!`);
}
return(message);

}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")
// writeCards(["jonny", "walker", "jack","Daniel"],'wassup')
// writeCards(myArray,'Congratulations!');
function countDown() {
    let startNumber = 10;
    while (startNumber >= 0) {
      console.log(startNumber--);
    }
  }
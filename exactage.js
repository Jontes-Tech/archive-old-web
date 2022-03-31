// Javascript that calculates my current age using Unix Time Code, since only loosers update their sites every year lol.
var myage =((Date.now() / 1000 - 1233516011) / 31557600).toFixed(); // gets rough age
document.getElementById('age').innerHTML = myage; // replaces text to rough age
function exactage() { // function that gets called on mouse over.
    alert("Well, actually it's "+(Date.now() / 1000 - 1233516011) / 31557600); // creates popup.
}
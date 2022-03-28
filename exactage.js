var myage =((Date.now() / 1000 - 1233516011) / 31557600).toFixed();
document.getElementById('age').innerHTML = myage;
var myexactage =((Date.now() / 1000 - 1233516011) / 31557600);
function exactage() {
    alert("Well, actually it's "+(Date.now() / 1000 - 1233516011) / 31557600);
}
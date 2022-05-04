function pageOnline() {
    console.log("Working")
    window.location.replace("./app");
  }
function pageOffline() {
    console.log("Not Working")
    setTimeout(function(){
      location.reload();}, 5000);
}
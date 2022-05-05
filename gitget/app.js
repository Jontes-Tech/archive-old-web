function pageOnline() {
    console.log("Working")
    window.location.replace("./ssh_key");
  }
function pageOffline() {
    console.log("Not Working")
    setTimeout(function(){
      location.reload();}, 5000);
}
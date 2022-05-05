let username = prompt("Let's Configure it your Username!", "Enter Username");
let email = prompt("Let's Configure it your Email", "Enter Mail");
fetch('http://localhost:8080/config?mail=' + email + "&name=" + username)
"use strict";

let myRequest = new Request("http://localhost:8888/.netlify/functions/age")

fetch(myRequest)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data.age)
    });
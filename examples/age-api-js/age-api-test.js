"use strict";

let myRequest = new Request("https://jontes.page/.netlify/functions/age")

fetch(myRequest)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data.age)
    });
"use strict"

const BASE_URL = "https://sophisticated-humane-dandelion.glitch.me/"
const form = document.querySelector("form")
const img = document.querySelector("input[type='url']")
const title = document.querySelector("input[type='text']")
const price = document.querySelector("input[type='number']")

form.addEventListener("submit", function(e){
    e.preventDefault()

    var inputData = {
        image: img.value, 
        title: title.value, 
        price: price.value
    }
    
    if(img.value, title.value, price. value){
    fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputData)
    })
    .then(resp => resp.json())
    .then(data => {
        alert(data.msg),
        window.location.href = "products.html"
    })
    .catch(error => console.log(error))
    } else {
        alert("Užpildykite visus laukelius")
    }

})
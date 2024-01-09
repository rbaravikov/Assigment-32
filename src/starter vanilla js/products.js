"use strict"

const BASE_URL = "https://sophisticated-humane-dandelion.glitch.me/"
const app = document.getElementById("app")

fetch(BASE_URL)
.then(resp => resp.json())
.then(data => {
    data.forEach(x => {
        var newProduct = document.createElement("div")
        newProduct.classList.add("product")
        newProduct.innerHTML = 
        `
            <img src="${x.image}" alt="${x.title}">
            <p>${x.title}</p>
            <p class="price">€${x.price}</p>
            <button class="button">Ištrinti</button>
        `
        var button = newProduct.querySelector("button")
        button.addEventListener("click", function(){
           deleteProduct(x.id)
        })
        app.append(newProduct)
    })
})
.catch(error => console.log(error))

function deleteProduct(id){
    fetch(BASE_URL + "/" + id, {
        method: "DELETE"
    })
    .then(resp => resp.json())
    .then(data => location.reload())
}
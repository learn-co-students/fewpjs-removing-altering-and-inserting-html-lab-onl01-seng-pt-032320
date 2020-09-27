// Write your code here!
const element = document.querySelector("main#main");
element.remove()

// const newHeader

// let newHeader = document.querySelector("h1#victory");
let newHeader = document.createElement('h1');
    newHeader.id = "victory";
    newHeader.innerHTML = "Jharell is the champion";
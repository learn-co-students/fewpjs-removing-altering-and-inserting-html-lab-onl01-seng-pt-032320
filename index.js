// Write your code here!
document.querySelector('main').remove();

let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Sydney is the champion";
document.body.appendChild(newHeader);
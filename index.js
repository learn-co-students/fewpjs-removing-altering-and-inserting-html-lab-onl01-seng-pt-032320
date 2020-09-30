

document.querySelector("main#main").remove()// finds the element, in this case main) and removes it.


const newHeader = document.createElement("h1") // sets the variable NewHeader equal to an new element on this document called "h1"

newHeader.id = "victory" // refers to the variable set previously and makes its id "victory"
newHeader.innerHTML = "Flatiron School is the champion!" //makes the h1 element read "Flatiron is the champion!"

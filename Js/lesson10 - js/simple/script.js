console.log("hello world")
let form = document.getElementById("userForm")

form.addEventListener("submit",submitForm)

function submitForm(e){
    e.preventDefault()
    
    let lastName = document.getElementById("lname")
    let firstName = document.getElementById("fname")

    addUserToDOM(firstName.value, lastName.value)
    firstName.value = ""
    lastName.value = ""
}

function addUserToDOM(firstName,lastName){
    let li = document.createElement("li")
    li.innerText = firstName + " " + lastName
    let ul = document.getElementById("users")
    ul.appendChild(li)
}
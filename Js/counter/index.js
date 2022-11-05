// let form = document.querySelector("form")

// form.addEventListener("submit", onSubmit)

// function onSubmit(e){
//     e.preventDefault()

//     let incValue = parseInt(document.querySelector("input").value)

//     let p = document.querySelector("p")
//     let number = parseInt(p.textContent) + incValue
//     p.textContent = number
// }


let input = document.querySelector("input")

input.addEventListener("input", onInput)

function onInput(e){
    let span = document.querySelector("span")
    span.textContent = e.target.value
}
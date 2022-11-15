// let btn = document.querySelector("button")

// btn.addEventListener("click", btnClick)

// function btnClick(){
//     console.log("hello")
// }


// let colors = ["red","green","blue"]

// let num = colors.find((color) =>{
//     return color == "blue"
// })

// console.log(num)

// let colors = ["red","green","blue","orange"]

// for(let i = 0; i < colors.length; i++){
//     let div = document.createElement("div")
//     div.textContent = colors[i]
//     div.classList.add(colors[i])

//     let btnDelete = document.createElement("button")
//     btnDelete.textContent = "del"
//     btnDelete.addEventListener("click", ()=>{
//         div.remove()
//     })

//     div.appendChild(btnDelete)

//     document.body.appendChild(div)
// }

// let colors = ["red","green","blue","orange"]

// let text = colors.map( c => "<div class='"+ c +"'>"+ c +"<button>del</button></div>")

// text.forEach(b => document.body.innerHTML += b)

// let btns = document.querySelectorAll("button")
// btns.forEach(b =>{
//     b.addEventListener("click", ()=>{
//         let parent = b.parentElement
//         parent.remove()
//     })
// })

// text.forEach((b) => {
//     document.body.innerHTML += b
// })

// text.forEach(addTextToBody)

// function addTextToBody(b){
//     document.body.innerHTML += b
// }

// let insertTextToBody = (b)=>{
//     document.body.innerHTML += b
// }
// text.forEach(insertTextToBody)


let btns = document.querySelectorAll(".calculator .btn-list button")

btns.forEach(b => b.addEventListener("click", btnClick))

let ac = document.querySelector("#ac")
ac.removeEventListener("click", btnClick)
ac.addEventListener("click", clear)

let eq = document.querySelector("#eq")
eq.removeEventListener("click", btnClick)
eq.addEventListener("click", calculate)

//--------functions-------------------
function calculate(){
    let resultEl = document.querySelector(".result")
    resultEl.value = eval(resultEl.value)
}
function clear(){
    document.querySelector(".result").value = ""
}
function btnClick(){
    let resultEl = document.querySelector(".result")
    resultEl.value += this.textContent
}





//---------------question 1----------------

// const headers = document.querySelectorAll("h1")

// for(let i = 0; i < headers.length; i++){
//     console.log(headers[i].textContent)
//     headers[i].textContent = "you got hack"
// }

//---------------question 2----------------
// const images = document.querySelectorAll("img")

// for(let i = 0; i < images.length; i++){
//     console.log(images[i].getAttribute("src"))
//     images[i].setAttribute("src","https://wallpaperaccess.com/full/2308532.jpg")
//     images[i].setAttribute("width","200px")
//     images[i].setAttribute("height","200px")
// }

//---------------question 3----------------
// const headers = document.querySelectorAll("h1")

// for(let i = 1; i < headers.length; i+=2){
//     headers[i].remove()
// }

//---------------question 4----------------
// const headers = document.querySelectorAll("h1")
// const inputs = document.querySelectorAll("input")

// for(let i = 0; i < headers.length; i++){
//     inputs[i].value = headers[i].textContent!
// }


//-------------------Events----------------

// const btn = document.querySelector("button")!

// btn.addEventListener("click", btnClick )

// function btnClick(){
//     if(confirm("do you eat?")){
//         alert("ok i relax")
//     }else{
//         alert("you are not good")
//     }
// }




//-------------------question 1----------------
// const btn = document.querySelector("button")!
// btn.addEventListener("click", ()=> alert("thank you for click on me"))


//-------------------question 2----------------
// const btn = document.querySelector("button")!
// btn.addEventListener("click",
// ()=> alert(document.querySelector("h1")!.textContent))

//-------------------question 3----------------

//  const btn = document.querySelector("button")!

//  btn.addEventListener("click",()=>{
//      const input = document.querySelector("input")!
//     alert(input.value)
//  })


//-------------------question 3+----------------

const form = document.querySelector("form")!
form.addEventListener("submit", onSubmit )

function onSubmit(e:Event){
    e.preventDefault()

    const input = document.querySelector("input")!
    let h1 = document.createElement("h1")
    h1.textContent = input.value
    document.body.appendChild(h1)
}




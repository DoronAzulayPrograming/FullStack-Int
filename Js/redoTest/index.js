let data = [
    "https://cdn.pixabay.com/photo/2022/11/09/15/37/black-naped-oriole-7580879_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/08/02/14/31/disc-golf-7360497_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/10/01/15/51/gartenbank-7491775_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/02/06/15/58/squirrel-6997505_960_720.jpg",
]

document.querySelector(".link-galery").style.display = "flex";

data.forEach( src =>{
    let img = document.createElement("img")
    img.setAttribute("src", src)
    img.addEventListener("click", imgClick)

    let container = document.querySelector(".link-galery")
    container.appendChild(img)
    
})

function imgClick(){
    document.querySelector(".link-galery").style.display = "none";
    document.querySelector(".page").style.display = "flex";

    document.querySelector(".page img").setAttribute("src", this.getAttribute("src"))
}

let form = document.querySelector(".new-msg")
form.addEventListener("submit", onSubmit)

function onSubmit(e){
    e.preventDefault()

    let msgContainer = document.querySelector(".msgs")

    let msg = createMsg(this)

    if(msgContainer.children.length % 2 == 0)
        msg.classList.add("right")
    else msg.classList.add("left")

    msgContainer.appendChild(msg)
}

function createMsg(form){
    
    let div = document.createElement("div")
    div.classList.add("msg")

    let span = document.createElement("span")
    span.textContent = form.querySelector("input").value

    div.appendChild(span)
    return div
}
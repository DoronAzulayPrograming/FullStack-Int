let rows = document.querySelectorAll("tbody tr")

let sum = 0
for(let i = 0; i < rows.length; i += 1){
    let cells = rows[i].children
    sum += parseInt(cells[2].innerText)
}

document.getElementById("sum").innerText = sum + "$"

let form = document.getElementById("add-product-form")

form.addEventListener("submit", onSubmit)

function onSubmit(ev){
    ev.preventDefault()
    let price = addProduct()
    addValue(price)
}

function addValue(value){
    let sumEl = document.getElementById("sum")
    let sum = parseInt(sumEl.innerText.replace("$",""))
    sum += parseInt(value)
    sumEl.innerText = sum + "$"
}

function addProduct(){

    //get form inputs
    let nameInput = document.getElementById("p-name")
    let priceInput = document.getElementById("p-price")
    let imgInput = document.getElementById("p-img")
    
    //create row and two cells
    let row = document.createElement("tr")
    let td1 = document.createElement("td")
    let img = document.createElement("img")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")

    //fill the value in the cells
    img.setAttribute("src",imgInput.value)
    td1.appendChild(img)
    td2.innerText = nameInput.value
    td3.innerText = priceInput.value

    //append cells into row
    row.appendChild(td1)
    row.appendChild(td2)
    row.appendChild(td3)

    //get tbody
    let tbody = document.querySelector("tbody")
    
    //add the new row to tbody
    tbody.appendChild(row)

    //reset the form
    let price = priceInput.value
    nameInput.value = ""
    priceInput.value = ""

    return price
}
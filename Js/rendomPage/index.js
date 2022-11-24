let products = [
    {id: 1, name:"iphone-x", price:1200, details:"sadsad"},
    {id: 2, name:"nokia-x", price:2200, details:"sadsad"},
    {id: 3, name:"redmi-x", price:3200, details:"sadsad"},
    {id: 4, name:"iphone-x10", price:4200, details:"sadsad"},
]
showData()

function showData(){
    products.forEach(p=>{
        let row = craeteProduct(p)
        document.querySelector("table tbody").appendChild(row)
    })
}

function craeteProduct(p){
    let row = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let link = document.createElement("a")

    td1.textContent = p.id
    
    link.textContent = p.name
    link.setAttribute("href", "product.html?id=" + p.id)
    td2.appendChild(link)

    td3.textContent = p.price

    row.appendChild(td1)
    row.appendChild(td2)
    row.appendChild(td3)

    return row
}
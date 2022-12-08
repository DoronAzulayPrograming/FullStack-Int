import express from "express"

const PORT = 8000
const app = express()
 
let products = [
    { id: 1, name: "iphone-4", category: "phones", price: 6100 },
    { id: 2, name: "red-xt", category: "phones", price: 4150 },
    { id: 3, name: "xiomi-t7", category: "phones", price: 1700 },
    { id: 4, name: "redmi-7", category: "phones", price: 500 },
    { id: 5, name: "macbook-air", category: "laptop", price: 4900 },
    { id: 6, name: "macbook-pro", category: "laptop", price: 13600 },
    { id: 7, name: "dell-topA", category: "laptop", price: 4200 },
    { id: 8, name: "samsung 34inc 1080p", category: "tv", price: 31900 },
    { id: 9, name: "lg smart led", category: "tv", price: 21500 },
    { id: 10, name: "panasonic A9", category: "tv", price: 14200 },
]

app.get("/",(req, res)=>{
    res.send("Hello World")
})

app.get("/api/products",(req,res)=>{
    if(!req.query.id){
        res.send(products)
    }else{
        const id = Number(req.query.id)
        let product = products.find(p=>p.id == id)
        res.send(product)
    }
})

// app.get("/api/products",(req,res)=>{
//     res.send(products)
// })

// app.get("/api/products/:id", (req,res)=>{
//     const id = Number(req.params.id)
//     let product = products.find(p=>p.id == id)
//     res.send(product)
// })

app.delete("/api/products/:id",(req,res)=>{
    const id = Number(req.params.id)
    products = products.filter(p=> p.id != id)

    res.send(req.params.id)
})

app.listen(PORT, ()=>{
    console.log("active at port:"+PORT)
})






const express = require("express");
const faker = require("faker");

const router = express.Router();

router.get("/",(req,res)=>{
    const productos = [];
    const {size} = req.query;
    const limit = size || 10;
    for (let index=0; index<limit; index++){
        productos.push({
            nombre:faker.commerce.productName(),
            precio: parseInt(faker.commerce.price(),10),
            imagen: faker.image.imageUrl(),
        });
    }
    res.json(productos);
})

router.get("/:id",(req,res)=>{
    const {id} = req.params;
    res.json({
        id,
        name: 'produc. 1',
        precio: 35
    });
})

router.post('/',(req,res)=>{
    const body = req.body;
    res.json({
        message: 'created',
        data: body
    });
})

module.exports = router;
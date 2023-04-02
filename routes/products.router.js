const express = require("express");
//const faker = require("faker");
const ProductsService = require('./../services/product.service')

const router = express.Router();
const service = new ProductsService();

router.get("/",(req,res)=>{
    const productos = service.find();
    res.json(productos);
})

router.get("/:id",(req,res)=>{
    const {id} = req.params;
    const producto = service.findOne(id);
    res.json(producto);
})

router.post('/',(req,res)=>{
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json(newProduct);
})

router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const body = req.body;
    const product = service.update(id,body);
    res.json(product);
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    const rta = service.delete(id,body);
    res.json(rta);
})

module.exports = router;
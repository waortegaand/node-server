const express = require("express");
//const faker = require("faker");
const ProductsService = require('./../services/product.service')

const router = express.Router();
const service = new ProductsService();

router.get("/",async (req,res)=>{
    const productos = await service.find();
    res.json(productos);
})

router.get("/:id", async (req,res)=>{
    const {id} = req.params;
    const producto = await service.findOne(id);
    res.json(producto);
})

router.post('/', async (req,res)=>{
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
})

router.patch('/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const body = req.body;
        const product = await service.update(id,body);
        res.json(product);
    }catch(error){
        res.status(404).json({
            //message:console.error(res)            
            message : error.message
        })
    }
})

router.delete('/:id', async (req,res)=>{
    const {id} = req.params;
    const rta = await service.delete(id,body);
    res.json(rta);
})

module.exports = router;
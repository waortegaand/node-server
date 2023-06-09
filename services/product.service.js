const faker = require("faker");

class ProductsService{
    constructor(){
        this.products = [];
        this.generate();
    }

    async generate(){
        const limit = 5;
        for (let index=0; index<limit; index++){
            this.products.push({
                id: faker.datatype.uuid(),
                nombre:faker.commerce.productName(),
                precio: parseInt(faker.commerce.price(),10),
                imagen: faker.image.imageUrl(),
            });
        }
    }

    async create(data){
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }
    // Simulacion de retardo de 5 ms
    find(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.products);
            },5000);
        })
    }

    async findOne(id){
        //const name = this.getTotal(); // Generacion de error de prueba
        return this.products.find(item=>item.id==id);
    }

    async update(id, changes){
        const index = this.products.findIndex(item=>item.id==id);
        if(index==-1){
            throw new Error('Product not found');
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }

    async delete(id){
        const index = this.products.findIndex(item=>item.id==id);
        if(index==-1){
            throw new Error('Product not found');
        }
        this.products.splice(index,1);
        return {id}
    }
}

module.exports = ProductsService;
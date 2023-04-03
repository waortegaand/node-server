const express = require("express");
const routerApi = require('./routes');
const { errorHandler, logErrors} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Express Server!");
})

app.get("/root",(req,res)=>{
    res.send("Ruta Raiz");
})

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

/*
app.get("/usuario",(req,res)=>{
    const {limit, offset} = req.query;
    if(limit,offset){
        res.json({
            limit,
            offset
        });
    }else{
        res.send("Sin parametros");
    }
})
*/

app.listen(port, ()=>{
    console.log("Puerto: " + port);
})

const express=require('express')
const app=express()


require('dotenv').config()

// const dotenv=require('dotenv')
// dotenv.config()


require('express-async-errors')

const connectDB=require('./db/conexion')
const productsRouter=require('./routes/products')

const Products =require('./models/product')






const unPuerto= process.env.PUERTO

const iniciar=async ()=>{
    try{
       // await connectDB(process.env.MONGO_URL)
        app.listen(unPuerto,console.log('el servidor se inicio'))
    }catch(error){
        console.log(error)
    }
    
}

app.get('/',(req,res)=>{
    res.send('hola mundo')
})

app.use('/pepe',productsRouter)

iniciar()
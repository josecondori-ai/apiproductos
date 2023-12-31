const mongoose= require('mongoose')
const productsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'nombre del producto']
    },
    price:{
        type:Number,
        required:[true,'nombre del producto']

    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5,
          
    },
    createdAt:{
        type:Date,
        default:Date.now()

    },
    company:{
        type:String,
        enum:{
            values:['ikea','liddy','caressa','marcos'],
            message:'{value} no tiene stock'

        }
    },
    img:{
        type:String
    }
})

module.exports=mongoose.model('Product',productsSchema)

// const miColleccion=mongoose.model('Product',productsSchema)
// module.exports= miColleccion


//MERN MONGO EXPRESS REACT NODEJS

//CRUD USUARIOS PRODUCTS
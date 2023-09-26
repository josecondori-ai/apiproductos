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
            enum:['ikea','liddy','sodimac','easy'],
            message:'{value} no tiene stock'

        }
    }
})

module.exports=mongoose.model('Product',productsSchema)

// const miColleccion=mongoose.model('Product',productsSchema)
// module.exports= miColleccion


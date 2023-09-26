const express=require('express')
const router=express.Router()

const{getAllProduct,getAllProductStatics}
=require('../controllers/products')

router.route('/').get(getAllProduct)
router.route('/statico').get(getAllProductStatics)

module.exports=router
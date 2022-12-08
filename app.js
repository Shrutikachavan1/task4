const express=require('express');
const router= express.Router();
const {createProduct,getAllProduct,getProductById,updateProductById,DeleteProduct,update} = require('./controller/prodController')


// router.post("/createproduct",createProduct);
// router.get("createproduct",(req,res)=>{
//     res.render('create',{errmsg:'',succmsg:''});
// })




router.get("/createproduct",(req,res)=>{
    res.render("create");
});



router.get("/getproduct",getAllProduct);
router.post("/createproduct",createProduct);
router.post("/update",update);
router.get("/updateproduct/:id",updateProductById);
router.get(`/deleteproduct/:id`,DeleteProduct);

// router.get("/allProducts",getAllProduct);
// router.post("/create",createProduct)
// router.get("/getproduct/:id",getProductById);
// router.put("/updateproduct/:id",updateProductById);
// router.delete("/deleteproduct/:id",DeleteProduct);

module.exports = router;
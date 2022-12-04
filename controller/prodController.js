// const { find } = require('../model/products');
const productModel=require('../model/products')

const createProduct= async(req,res)=>{
    console.log('object');
    const productData=req.body;
    let insert= new productModel(productData);
    insert.save((err)=>{
        if(err) console.log(err)
        else{
            res.redirect("/getproduct",201,{
                products:" ",
            })
        }
    })
}

const getAllProduct= (req,res)=>{
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
    productModel.find({}, (err,data)=>{
        if(err){
            res.send("Can't Find Product")
        } else{
            res.render("seeProducts",{products:data});
        }
    })
}

const getProductById= async(req,res)=>{
    console.log('ggggggggggggggggggggggggg');
    let productid=req.params.id;
    let product= await productModel.findById(productid);
    
    if(!product){
        res.status(404).send("Product with id not found")
    }else{

        res.send(product)
    }
}
const updateProductById=async(req,res)=>{
    let productid=req.params.id;
    let updateData=req.body;
    console.log(updateData)
    productModel.updateOne({_id:productid},{$set:updateData},(err)=>{
        if (err) console.log(err)
        else{
            res.render("/getproduct",200,{products:" "})
        }
    })
}
const DeleteProduct=(req,res)=>{
    let productid=req.params.id;
    productModel.deleteOne({_id:productid},(err)=>{
       if(err){ res.send("Something Went wrong")}
       else {
           res.redirect("/getproduct");
       }
    })
}
module.exports={createProduct, getAllProduct,getProductById,updateProductById,DeleteProduct}
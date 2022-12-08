const productModel=require('../model/products')

const createProduct= async(req,res)=>{
    // console.log('object');
    const productData=req.body;
    let insert= new productModel(productData);
    insert.save((err)=>{
        if(err) console.log(err)
        else{
            res.redirect("/getproduct",201,{
                prods:" ",
            })
        }
    })
}

function getAllProduct (req,res){
    // console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
    productModel.find({}, (err,data)=>{
        if(err){
            res.send("Can't Find Product")
        } else{
            res.render("seeProducts",{prods:data});
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
// const updateProductById=async(req,res)=>{
//     let productid=req.params.id;
//     let updateData=req.body;
//     console.log(updateData)
//     productModel.updateOne({_id:productid},{$set:updateData},(err)=>{
//         if (err) console.log(err)
//         else{
//             res.render("/getproduct",200,{prods:" "})
//         }
//     })
// }

// EDIT PRODUCT DETAILS
function updateProductById(req, res){
    let pid= req.params.id;
    // /console.log(pid);
   
    productModel.findOne({ _id: pid }) //findAndModify
      .then((result) => {
        console.log(result);
        res.render("edit", { prods: result, errmsg: "", succmsg: "", msg: pid });
        console.log(pid);
      })
      .catch((err) => console.log(err));
  }
  function update(req, res) {
    let { pname, price, description, quantity, image, _id } = req.body;
  
    productModel
      .updateOne(
        {_id:_id },
        {
          $set: {
            pname: pname,
            Price: price,
            Description: description,
            Quantity: quantity,
            Image: image,
          },
        }
      )
      .then((data1) => {
        res.render("edit", {
          prods: "",
          succmsg: "Product  is Successfully updated !!!!!!!",
          msg: "",
          errmsg: "",
        });
      })
      .catch((err) => {
        res.render("/getproduct", {
          prods: "",
          succmsg: "",
          errmsg: "something went wrong",
          msg: "",
        });
      });
  }
  
const DeleteProduct=(req,res)=>{
    let productid=req.params.id;
    // console.log(productid);
    productModel.deleteOne({_id:productid},(err)=>{
       if(err){ res.send("Something Went wrong")}
       else {
           res.redirect("/getproduct");
       }
    })
}
module.exports={createProduct, getAllProduct,getProductById,updateProductById,DeleteProduct,update}
import Product from "../../model/productModel/productsSchema"

export const updateProd = async(product :  any , id : String) => {
    const productUpdate = await Product.findByIdAndUpdate(id,product,{
        new : true 
    })
    await productUpdate?.save()
   return productUpdate
    
}
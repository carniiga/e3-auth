import Product from "../../model/productModel/productsSchema"

export const deleteProd = async(id : string) => {
     try {
     const find = await Product.findByIdAndDelete(id)
     console.log(find)
     } catch (error) {
          console.log(error)
     }

}
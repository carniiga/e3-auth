import Product from "../../model/productModel/productsSchema";

export const getAllProducts = async () => {
    const getProducts = await Product.find();
    if(getAllProducts.length < 0 ){
        return "no hay productos "
    }
    return getProducts;
}

export const getProductById = async(id : string) => {
    const findProd = await Product.findById(id)
    return findProd
}

export const getProductByName = async (name : string) => {
    const findProd = await Product.findOne({name : name })
    return findProd
}  
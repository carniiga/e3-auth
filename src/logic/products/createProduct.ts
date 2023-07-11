import Product from "../../model/productModel/productsSchema";

export const createProd = async (product: any ) : Promise <any>  => {
    const {name , price , description , imgUrl , } = product;
    const newProduct  = await  Product.create({name , price , description , imgUrl});
    return newProduct;
};
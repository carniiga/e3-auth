import { createProd } from "../../../logic/products/createProduct";
import { deleteProd } from "../../../logic/products/deleteProduct";
import { getAllProducts, getProductById, getProductByName } from "../../../logic/products/findProducts";
import { updateProd } from "../../../logic/products/updateProduct";
import { Response, Request} from "express";

export const getProductsCtrl = async ( req : Request , res : Response ) =>{
    const allProducts = await  getAllProducts();
    res.send(allProducts).json() 
};
export const createProductCtrl = async(req : Request , res : Response) => {
    const productInput = req.body
    const newProd = await createProd(productInput)
    res.send(newProd).json()
};
export const getProductByIdCtrl = async (req : Request , res : Response)=>{
    const productId = req.params.productId
    const find = await getProductById(productId)
    res.send(find).json()
    
};

export const getProductByNameCtrl = async(req:Request , res : Response)=>{
    const productName = req.params.productName;
    const findProd = await getProductByName(productName)
    res.send(findProd)
};

export const updateProductCtrl = async (req : Request , res : Response) =>{
    const productId = req.params.productId;
    const productInput = req.body;
    const updated = await updateProd(productInput, productId)
    res.send(updated).json()
};

export const deleteProductCtrl = async (req : Request , res : Response)=>{
    const productId = req.params.productId;
    await deleteProd(productId)
    res.send(`el producto con el id : ${productId} se ha eliminado.`)
};
  
   

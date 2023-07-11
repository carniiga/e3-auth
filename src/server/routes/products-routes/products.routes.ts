import { Router } from "express";
import * as productsCtrl from "../../controllers/products-controllers/productController";
import { verifyToken } from "../../controllers/user-controllers/userController";
export const productsRouter = Router();

productsRouter.post("/products/create",verifyToken, productsCtrl.createProductCtrl);

// productsRouter.use(verifyToken)
productsRouter.get("/products"  ,verifyToken ,productsCtrl.getProductsCtrl);
productsRouter.get("/product/find/:productId",verifyToken, productsCtrl.getProductByIdCtrl);
productsRouter.get("/products/:productName",verifyToken ,productsCtrl.getProductByNameCtrl);
productsRouter.put("/products/updateProduct/:productId",verifyToken , productsCtrl.updateProductCtrl)
productsRouter.delete("/products/deleteProd/:productId",verifyToken , productsCtrl.deleteProductCtrl)

import express from 'express';
import productController from '../controllers/productController.js';


const router =express.Router();

router.get("/", productController.getProducts);

router.get("/", (req, res) => {
    res.send("Product Route");
});

router.get("/one", productController.getProductById);

router.post("/", productController.createProduct);

router.put("/:id", (req, res) => {
    res.send(`Product with id ${req.params.id} updated successfully`);
});

export default router;


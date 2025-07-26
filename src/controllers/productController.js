import productService from "../services/productService.js";


const getProducts = (req, res) => {
   const products = productService.getProducts();
   res.status(200).json(products);
};

const createProduct = (req, res) => {
    res.send("Product created successfully");
};

const getProductById = (req, res) => {
    res.send("one product");
};

export default { getProducts, createProduct, getProductById };

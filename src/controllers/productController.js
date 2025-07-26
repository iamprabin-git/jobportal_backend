import productService from "../services/productService.js";


const getProducts = (req, res) => {

   const products = productService.getProducts(req.query);
   res.status(200).json(products);
};

const createProduct = (req, res) => {
 productService.createProduct(req.body);
    res.json(req.body);
    res.status(201).send("Product created successfully");
};

const getProductById = (req, res) => {
    const id = req.params.id;

    const product = productService.getProductById(id);
   res.json(product);
};

export default { getProducts, createProduct, getProductById };

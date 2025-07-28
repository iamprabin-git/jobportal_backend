import fs from "fs";
import Product from "../models/Product.js";

const rawData = fs.readFileSync("./src/data/products.json", "utf-8");
    const products = JSON.parse(rawData);
const getProducts = (query) => {
    
    const filteredProducts = products.filter((product) => product.brand === query.brand );
    return filteredProducts;
};

const getProductById = (id) => {
    const foundProduct = products.find((product) => product.id == id);
    return foundProduct ? { ...foundProduct } : null;
};

const createProduct = (data) => {
  Product.create(data);
};


export default { getProducts, getProductById, createProduct };
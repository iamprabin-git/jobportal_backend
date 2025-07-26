import fs from "fs";
const rawData = fs.readFileSync("./src/data/products.json", "utf-8");
    const products = JSON.parse(rawData);
const getProducts = () => {
    
    const filteredProducts = products.filter((product) => product.price < 1000);
    return filteredProducts;
};

const getProductById = (id) => {
    const foundProduct = products.find((product) => product.id == id);
    return foundProduct ? { ...foundProduct } : null;
};

export default { getProducts, getProductById };
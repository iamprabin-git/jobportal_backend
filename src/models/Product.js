import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    description: {
        type: String,
        required: true, 
    },
    price: {
        type: Number,
        required: true,
    },
    discountPercentage: {
        type: Number,
       default: 0,
    },
    rating: {
        type: Number,
        default: 5,
    },
    stock:{
        type: Number,
        required: true,
        default: 1,
    },
    brand: {
        type: String,
        
    },
    category: {
        type: String,   
        required: true,
    },
    
    images: [String],
    createdAt: { type: Date, default: Date.now() },
});

const model = mongoose.model("Product", productSchema);

export default model;
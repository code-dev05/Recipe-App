import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    name: {type: String, required: true},
    ingredients: [{type: String, required: true}],
    
})
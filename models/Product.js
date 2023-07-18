import { model, Schema } from "mongoose";
const ProductSchema = new Schema({
title: {type: String, required:true},
description:String,
price: {type: Number, requried:true},
});


export const Product = model('Product', ProductSchema);
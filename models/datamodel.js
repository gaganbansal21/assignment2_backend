import mongoose, { Schema } from "mongoose";

const dataModel = new Schema({
  image : String,
  currentPrice : Number,
  model :String,
  tempprice : Number,
  variants: [
    {
      color: String,
      image: String,
    }
  ],
  rating: Number
});

const productSchema = mongoose.model("productSchema", dataModel);

export default productSchema;
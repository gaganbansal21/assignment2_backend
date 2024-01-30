import mongoose, { Schema } from "mongoose";

const dataModel = new Schema({
  image : String,
  currentPrice : Number,
  model :String,
  tempprice : Number,
  variant: [
    {
      color: String,
      imageUrl: String,
    }
  ],
});

const productSchema = mongoose.model("productSchema", dataModel);

export default productSchema;
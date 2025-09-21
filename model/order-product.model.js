import mongoose from "mongoose";

const orderProductSchema = new mongoose.Schema(
  {
    order_id: String,
    product_id: String,
    size_id: String,
    product_title: String,
    size: String,
    price: Number,
    discountPercentage: Number,
    quantity: Number,
  },
  {
    timestamps: true,
  }
);

orderProductSchema.index({ order_id: 1, product_id: 1 });

const OrderProduct = mongoose.model("order-product", orderProductSchema, "order-product");

export default OrderProduct;
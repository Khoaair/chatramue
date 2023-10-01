import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    productName: { type: String, require: true },
    desc: { type: String, require: true },
    price: { type: Number, require: true },
    user: { type: String, require: true },
  },
  { timestamps: true }
);

export default mongoose.models.Product ??
  mongoose.model('Product', productSchema);

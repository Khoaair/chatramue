import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, require: true },
    desc: { type: String, require: true },
    price: { type: Number, require: true },
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);

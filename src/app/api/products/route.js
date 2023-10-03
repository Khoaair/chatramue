import Product from '@/app/models/Product';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const POST = async request => {
  const body = await request.json();
  const newProduct = new Product(body);
  try {
    await connect();
    await newProduct.save();
    return new NextResponse('Product has been created', { status: 201 });
  } catch (error) {
    return new NextResponse('Database Err', { status: 500 });
  }
};

export const GET = async request => {
  try {
    await connect();

    const products = await Product.find();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Err', { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    return new NextResponse('Database Err', { status: 500 });
  }
};

import Product from '@/app/models/Product';
import { connect } from 'mongoose';
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

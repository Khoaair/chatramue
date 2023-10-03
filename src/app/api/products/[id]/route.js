import Product from '@/app/models/Product';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    await Product.findByIdAndDelete(id);
    return new NextResponse('Product has been deleted', { status: 200 });
  } catch (error) {
    return new NextResponse('Database Err', { status: 500 });
  }
};

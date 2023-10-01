'use client';
import { useSession } from 'next-auth/react';
import style from './page.module.scss';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const NewProduct = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [goToProduct, setGoToProduct] = useState(false);
  const createProduct = async e => {
    e.preventDefault();
    const productName = e.target[0].value;
    const desc = e.target[1].value;
    const price = e.target[2].value;
    const user = session.user.name;
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify({
          productName,
          desc,
          price,
          user,
        }),
      });
      if (res.ok) {
        toast.success('Product has been created');
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className={style.product}>
      <h1 className={style.product__title}>New Product</h1>
      <form className={style.product__form} onSubmit={createProduct}>
        <label>Product name</label>
        <input type='text' placeholder='product name' />
        <label>Description</label>
        <textarea placeholder='description'></textarea>
        <label>Price</label>
        <input type='number' placeholder='price' />
        <button type='submit' className='btn-primary'>
          Save
        </button>
      </form>
    </div>
  );
};
export default NewProduct;

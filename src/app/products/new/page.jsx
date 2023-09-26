'use client';
import { useState } from 'react';
import style from './page.module.scss';
import { connect } from 'mongoose';

const NewProduct = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');

  const createProduct = async e => {
    e.preventDefault();
    try {
      await connect();
    } catch (error) {}
  };
  return (
    <div className={style.product}>
      <h1 className={style.product__title}>New Product</h1>
      <form className={style.product__form} onSubmit={e => createProduct(e)}>
        <label>Product name</label>
        <input
          type='text'
          placeholder='product name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label>Description</label>
        <textarea
          placeholder='description'
          value={desc}
          onChange={e => setDesc(e.target.value)}
        ></textarea>
        <label>Price</label>
        <input
          type='number'
          placeholder='price'
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <button type='submit' className='btn-primary'>
          Save
        </button>
      </form>
    </div>
  );
};
export default NewProduct;

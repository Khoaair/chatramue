'use client';
import Link from 'next/link';
import styles from './page.module.scss';

const Products = () => {
  return (
    <div className={styles.products}>
      <Link href={'/products/new'} className={styles.products__btn}>
        Add new product
      </Link>
    </div>
  );
};
export default Products;

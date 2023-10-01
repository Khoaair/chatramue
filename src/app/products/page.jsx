import Link from 'next/link';
import styles from './page.module.scss';
import DataTable from '@/utils/DataTable';

const GetProducts = async () => {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const Products = async () => {
  const products = await GetProducts();
  return (
    <div className={styles.products}>
      <Link href={'/products/new'} className={styles.products__btn}>
        Add new product
      </Link>
      {/* <table className='basic'>
        <thead>
          <tr>
            <td>Product name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr>
              <td>{product.productName}</td>
              <td>button</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <DataTable />
    </div>
  );
};
export default Products;

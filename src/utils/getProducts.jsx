import { toast } from 'react-toastify';

export const getProducts = async () => {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });
  if (!res.ok) {
    toast.error('Failed to fetch data');
  }
  return await res.json();
};

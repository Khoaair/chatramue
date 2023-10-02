'use client';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import styles from './page.module.scss';
import Link from 'next/link';
import { getProducts } from '@/utils/getProducts';

const columns = [
  { field: '_id', headerName: 'ID', width: 120 },
  {
    field: 'productName',
    headerName: 'Product Name',
    width: 240,
    editable: true,
  },
  {
    field: 'desc',
    headerName: 'Description',
    width: 500,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price(VND)',
    type: 'number',
    width: 180,
    editable: true,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: params => {
      return (
        <>
          <Link href={'/products/eidt'} className={styles.table__edit}>
            Edit
          </Link>
        </>
      );
    },
  },
];

const DataTable = async () => {
  const products = await getProducts();
  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        sx={{
          marginTop: '1.2rem',
          fontSize: '1.6rem',
          '& .MuiTablePagination-input': {
            fontSize: '1.6rem',
          },
          '& .MuiTablePagination-selectLabel': {
            fontSize: '1.6rem',
          },
          '& .MuiTablePagination-displayedRows': {
            fontSize: '1.6rem',
          },
        }}
        rows={products}
        getRowId={r => r._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataTable;

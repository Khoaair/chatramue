'use client';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import styles from './page.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const deleteProduct = async id => {
  try {
    await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    });
    toast.success('Product has been deleted');
  } catch (error) {
    toast.error(error);
  }
};

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
        <div className={styles.table__action}>
          <Link href={`/products/${params.id}`} className={styles.table__edit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
          <button
            className={styles.table__delete}
            onClick={() => deleteProduct(params.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      );
    },
  },
];

const DataTable = products => {
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
        rows={products.products}
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

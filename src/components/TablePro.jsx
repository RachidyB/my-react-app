import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import apiService from '../services/apiService';

export default function TablePro() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiService.getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await apiService.deleteProduct(productId);
      setProducts((prevProducts) => prevProducts.filter((product) => product.ID !== productId));
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nom</TableCell>
            <TableCell align="right">Prix</TableCell>
            <TableCell align="right">Categorie</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">StockDisponible</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.ID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {product.ID}
              </TableCell>
              <TableCell align="right">{product.Nom}</TableCell>
              <TableCell align="right">{product.Prix}</TableCell>
              <TableCell align="right">{product.Categorie}</TableCell>
              <TableCell align="right">{product.Image}</TableCell>
              <TableCell align="right">{product.StockDisponible}</TableCell>
              <TableCell align="right">{product.Description}</TableCell>
              <TableCell align="right">
                <Button variant="contained">Modifier</Button>
                <Button variant="contained" onClick={() => handleDelete(product.ID)}>
                  Supprimer
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

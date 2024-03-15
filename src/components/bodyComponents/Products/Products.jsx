import React, { useState } from "react";
import { Typography, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import productList from "./productList";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState(productList);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });
  const [openForm, setOpenForm] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    if (
      newProduct.name &&
      newProduct.category &&
      newProduct.price &&
      newProduct.stock
    ) {
      if (editMode) {
        const updatedProducts = products.map((product) =>
          product.id === selectedProductId ? { ...newProduct, id: selectedProductId } : product
        );
        setProducts(updatedProducts);
        setEditMode(false);
        setSelectedProductId(null);
      } else {
        const id = products.length + 1;
        setProducts([...products, { id, ...newProduct }]);
      }
      setNewProduct({ name: "", category: "", price: "", stock: "" });
      setOpenForm(false);
    } else {
      alert("Please fill in all fields to add or update a product.");
    }
  };

  const handleEditProduct = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setNewProduct(productToEdit);
    setOpenForm(true);
    setEditMode(true);
    setSelectedProductId(id);
  };

  const handleOpenForm = () => {
    setOpenForm(true);
    setEditMode(false);
    setSelectedProductId(null);
    setNewProduct({ name: "", category: "", price: "", stock: "" });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "price", headerName: "Price", width: 120 },
    { field: "stock", headerName: "Stock", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (cellData) => (
        <div>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ marginRight: 1 }} // Add little space between buttons
            onClick={() => handleEditProduct(cellData.row.id)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => handleDeleteProduct(cellData.row.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenForm}
        style={{ marginBottom: "1rem" }}
      >
        Add Product
      </Button>
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogTitle>{editMode ? "Update Product" : "Add New Product"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Stock"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenForm(false)}>Cancel</Button>
          <Button onClick={handleAddProduct} variant="contained" color="primary">
            {editMode ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

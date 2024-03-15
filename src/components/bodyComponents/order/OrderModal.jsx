import { DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function OrderModal({ order }) {
  console.log("the order lists are :\n", order.products[0].product.name);

  const [products, setProducts] = useState(order.products);
  const [status, setStatus] = useState("");

  const handleDeleteProductFromOrder = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const handleApproveOrder = () => {
    setStatus("Approved");
  };

  const handleRejectOrder = () => {
    setStatus("Rejected");
  };

  const isOrderEmpty = products.length === 0;

  const tableRows = products.map((orderProduct, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{orderProduct.product.name}</TableCell>
        <TableCell>{orderProduct.quantity}</TableCell>
        <TableCell>{orderProduct.product.stock}</TableCell>
        <TableCell>
          <IconButton
            onClick={() => handleDeleteProductFromOrder(orderProduct.product.id)}
          >
            <DeleteOutline color="error" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
      }}
    >
      <Box sx={{ color: "black", display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" sx={{ m: 3 }}>
          OrderList
        </Typography>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "30%",
            m: 3,
          }}
        >
          <Typography variant="subtitle1">Name </Typography>
          <Typography variant="subtitle1" color={"grey"}>
            Himanshu Shukla
          </Typography>
        </Paper>
        
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "30%",
            m: 3,
          }}
        >
          <Typography variant="subtitle1">Mobile </Typography>
          <Typography variant="subtitle1" color={"grey"}>
            +91 1234567890
          </Typography>
        </Paper>
        <Box>
          <TableContainer sx={{ marginBottom: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Stock Availability</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* loop through the product list */}
                {tableRows}
              </TableBody>
            </Table>
          </TableContainer>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              m: 0,
            }}
          >
            <Button
              variant="contained"
              sx={{ bgcolor: "error.main", m: 3, px: 12 }}
              onClick={handleRejectOrder}
              disabled={isOrderEmpty}
            >
              {status === "Rejected" ? "Rejected" : "Reject"}
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#4caf50", m: 3, px: 12 }}
              onClick={handleApproveOrder}
              disabled={isOrderEmpty}
            >
              {status === "Approved" ? "Approved" : "Approve"}
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

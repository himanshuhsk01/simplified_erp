import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

export default function Overview() {
  return (
    <Box>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Total Product</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  16430
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Today sell</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  6356
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Yesterday sell</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  5600
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Total sell</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  11956
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Product Reserved</TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  6000
                </Typography>
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

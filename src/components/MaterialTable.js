import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function MaterialTable(props) {
  const gkp = true;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course name</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Product Code</TableCell>
            <TableCell align="right">Approved</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => {
            // Add a console.log statement for debugging
            console.log("Debugging row:", row);

            return (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.selectedDate}</TableCell>
                <TableCell align="right">{row.productCode}</TableCell>
                {/* Render True or False based on row.approved */}
                <TableCell align="right">{row.approved}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

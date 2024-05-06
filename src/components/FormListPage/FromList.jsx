import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { FormContext } from "../../context/InvoiceContext";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "BillingAddress", headerName: "Billing Address", width: 130 },
  { field: "CustomerName", headerName: "Customer Name", width: 130 },
  {
    field: "GSTIN",
    headerName: "GSTIN",
    type: "number",
    width: 90,
  },
  {
    field: "InvoiceNumber",
    headerName: "Invoice Number",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    // valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

export default function FromList() {
  const { invoicesData } = React.useContext(FormContext);
  console.log("invoicesData on", invoicesData);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={invoicesData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

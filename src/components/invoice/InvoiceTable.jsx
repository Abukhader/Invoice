import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./Data";
import { useContext } from "react";
import { useTheme } from "@mui/material";
import { ColorModeContext } from "../../theme";



export default function InvoiceTable() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          // @ts-ignore
          columns={columns}
          rows={rows}
          // @ts-ignore
          sx={{
            '& .MuiDataGrid-row': {
              '&:nth-of-type(even)': {
                backgroundColor: theme.palette.primary 
              },
              '&:nth-of-type(odd)': {
                // @ts-ignore
                backgroundColor: theme.palette.lightColor.main
              }
            },
            '.MuiDataGrid-columnHeaderTitle': {
              fontWeight: "bold"
            },
            '& .MuiDataGrid-footerContainer': {
                display: "none"
              },
          }}
        />
      </div>
      
    )
  }
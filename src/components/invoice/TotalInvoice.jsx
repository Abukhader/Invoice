import { useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useContext, useMemo } from "react";
import { ColorModeContext } from "../../theme";

export default function TotalInvoice() {

    const rows = [
        { id: 1, col1: "الرصيد السابق", col2: " الرصيد الجديد", col3: " مصاريف الشحن", col4:"حسم الاقلام", col5: "الحسم", col6: "نسبة الحسم" },
        { id: 2, col1: "0.00", col2: 27.00, col3: "0.00", col4:"0.00", col5: "0.00", col6: "0.00" },
    ];

    const columns = useMemo(()=> [
        {field: "col1", headerName: "", width: 220, align: "center", headerAlign: "center",},
        {field: "col2", headerName: "", width: 220, align: "center", headerAlign: "center",},
        {field: "col3", headerName: "", width: 220, align: "center", headerAlign: "center",},
        {field: "col4", headerName: "المجموع", width: 220, align: "center", headerAlign: "center",},
        {field: "col5", headerName: "27.00", width: 220, align: "center", headerAlign: "center",},
        {field: "col6", headerName: "", width: 220, align: "center", headerAlign: "center",},
    ], []) 

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
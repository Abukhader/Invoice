import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, useTheme } from '@mui/material';


const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];


export const rows = [
    { id: 1, col1: 1, col2: "", col3: "زيت مازولا", col4: "1", col5: formattedDate, col6: "قنينة", col7: "الكفالة", col8: "المستودع الرئيسي الاول ", col9: 10.00, col10: 10.00, col11: 0, col12: "" },
    { id: 2, col1: 2, col2: "54322", col3: "زيت الخير", col4: "1", col5: formattedDate, col6: "قطعة", col7: "الكفالة", col8: "المستودع الرئيسي الاول ", col9: 10.00, col10: 10.00, col11: 0, col12:  ""},
    { id: 3, col1: 3, col2: "123334", col3: "عصير يومي", col4: "1", col5: formattedDate, col6: "علبة", col7: "الكفالة", col8: "المستودع الرئيسي الاول ", col9: 7.00, col10: 7.00, col11: 0, col12: "" },
];


export const columns = [
    { field: "col1", headerName: "#",  align: "center", headerAlign: "center", type: "number", sx: { fontWeight: "bold" } },
    { field: "col2", headerName: "الرمز", align: "center", headerAlign: "center", type: "textfield",editable: "true", },    
    { field: "col3", headerName: "المنتج", align: "center", headerAlign: "center" },
    { field: "col4", headerName: "الكمية", align: "center",  headerAlign: "center",},
    { field: "col5", headerName: "انتهاء الصلاحية", align: "center",  headerAlign: "center", width: 150},
    { field: "col6", headerName: "الواحدة", align: "center",  headerAlign: "center",},
    {
      field: "col7",
      headerName: "الكفالة",
      align: "center",
      headerAlign: "center",
      type: "singleSelect",
      valueOptions: ["الكفالة"],
      editable: "true",
    },
    {
      field: "col8",
      headerName: "المستودع",
      align: "center",
      headerAlign: "center",
      type: "singleSelect",
      valueOptions: ["المستودع الرئيسي الاول ","المستودع الرئيسي الثاني " ],
      editable: "true",
      width: 200
    },
    { field: "col9", headerName: "السعر الافرادي", align: "center", headerAlign: "center", type: "number", width: 130 },
    { field: "col10", headerName: "السعر الاجمالي", align: "center", headerAlign: "center", type: "number", width: 130 },
    { field: "col11", headerName: "الحسم %", align: "center", headerAlign: "center", type: "number" },
    { 
      field: "col12", 
      headerName: '',
      align: "center",  
      headerAlign: "center",
      renderHeader: () => <AddIcon sx={{
        fontSize: "25px",
        width: "35px",
        height: "25px",
        color: "white",
        // @ts-ignore
        bgcolor: "#813ce8",
        borderRadius: "5px"
      }}/>,
      renderCell: (params) => (
          <IconButton>
            <DeleteIcon sx={{color:"red", opacity: ".5"}}/>
          </IconButton>
      ),
    },
  ];
  

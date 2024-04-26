import { Box, Container, Stack, Typography } from '@mui/material'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ChecklistIcon from '@mui/icons-material/Checklist';
export default function Footer() {
  return (
        <Stack direction={"row"} mx={1}>
            <Box sx={{
                p: "5px",
                m: 1,
                width: "150px",
                borderRadius: "2px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
                bgcolor: "rgba(144, 238, 144, .4)",
                color: "#008000",
                cursor: "pointer"
            }}>
                <PersonAddAltIcon />
                <Typography sx={{fontSize: "15px"}}>
                    اضافة زبون
                </Typography>
            </Box>
            <Box sx={{
                p: "5px",
                m: 1,
                width: "150px",
                borderRadius: "2px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
                bgcolor: "rgba(255, 228, 178, .4)",
                color: "orange",
                cursor: "pointer"
            }}>
                <PersonAddAltIcon />
                <Typography sx={{fontSize: "15px"}}>
                     اضافة مورد
                </Typography>
            </Box>
            <Box sx={{
                p: "5px",
                m: 1,
                width: "150px",
                borderRadius: "2px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
                bgcolor: "rgba(135, 206, 235, .4)",
                color: "rgb(105, 156, 255)",
                cursor: "pointer"
            }}>
                <CreateNewFolderIcon/>
                <Typography sx={{fontSize: "15px"}}>
                    اضافة حساب
                </Typography>
            </Box>
            <Box sx={{
                p: "5px",
                m: 1,
                width: "150px",
                borderRadius: "2px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
                bgcolor: "rgba(138, 127, 142, .3)",
                color: "rgb(138, 127, 142)",
                cursor: "pointer"
            }}>
                <ChecklistIcon />
                <Typography sx={{fontSize: "15px"}}>
                    كشف حساب
                </Typography>
            </Box>
        </Stack>
  )
}

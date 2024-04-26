import { Button, Stack, Typography, useTheme } from '@mui/material';
import { ColorModeContext } from "../../theme";
import { useContext } from 'react';

export default function Header2() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Stack alignItems="right" justifyContent="right" sx={{ m: 2, mb: 0, p: 2, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
            <Typography fontWeight={"bold"} variant='h4'>فاتورة شراء</Typography>
            <Stack direction={"row"}>
                <Button sx={{
                    // @ts-ignore
                    color: theme.palette.myColor.main,
                    "&:hover": {
                        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.3)"
                    }
                }}>لوحة التحكم</Button>
                <Typography variant="subtitle1">|</Typography>
                <Button sx={{
                    // @ts-ignore
                    color: theme.palette.myColor.main,
                    "&:hover": {
                        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.3)"
                    }
                }}>ادارة فواتير المشتريات</Button>
                <Typography variant="subtitle1">|</Typography>
                <Button sx={{
                    // @ts-ignore
                    color: theme.palette.myColor.main,
                    "&:hover": {
                        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.3)"
                    }
                }}>فاتورة شراء</Button>
            </Stack>
        </Stack>
    );
}

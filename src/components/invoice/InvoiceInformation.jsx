import { CheckBox } from '@mui/icons-material';
import { Box, Checkbox, FormControlLabel, FormGroup, Grid, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
export default function InvoiceInformation() {


    const [account, setAccount] = useState("");
    const accounts = ["مشتريات بغرض البيع قيمة المشتريات-341", "بدون اسم"];
    const [payment, setPayment] = useState("");
    const paymentMethods = ["اجل", "مدفوع"];
    const [client, setClient] = useState("");
    const clients = ["سارة سوري 12345", "محمد 11111"];
    const [someDate, setSomeDate] = useState("");
    const [invoiceNumber, setInvoiceNumber] = useState("9"); // حالة لتخزين قيمة رقم الفاتورة
    const handleInvoiceNumberChange = (e) => {
        setInvoiceNumber(e.target.value);
    };

    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    };

    useEffect(() => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        setSomeDate(formattedDate);
    }, []);

    return (
        <Box mx={3}>
            <Typography variant='h4' className='title'>
                معلومات الفاتورة
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={4}>
                    <Typography variant="subtitle1" component="label">
                        الاسم
                    </Typography>
                    <TextField className='text-field'
                        type='text'
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={2}>
                    <Typography variant="subtitle1" component="label">
                        التاريخ
                    </Typography>
                    <TextField
                        type='date'
                        value={someDate}
                        onChange={(e) => setSomeDate(e.target.value)}
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Typography variant="subtitle1" component="label">
                        رقم الفاتورة
                    </Typography>
                    <TextField
                        type='number'
                        variant='outlined'
                        size='small'
                        placeholder='رقم الفاتورة'
                        fullWidth
                        value={invoiceNumber}
                        onChange={handleInvoiceNumberChange}
                        disabled
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Typography variant="subtitle1" component="label">
                        طريقة الدفع
                    </Typography>
                    <TextField
                        select
                        value={payment}
                        onChange={e => setPayment(e.target.value)}
                        variant='outlined'
                        size='small'
                        fullWidth
                    >
                        {paymentMethods.map((method) => (
                            <MenuItem key={method} value={method}>
                                {method}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Typography variant="subtitle1" component="label">
                        حساب العميل
                    </Typography>
                    <TextField
                        value={client}
                        onChange={e => setClient(e.target.value)}
                        variant='outlined'
                        size='small'
                        fullWidth
                    >
                        {clients.map((client) => (
                            <MenuItem key={client} value={client}>
                                {client}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={6} sm={8} md={6} lg={4}>
                    <Typography variant="subtitle1" component="label">
                        الحساب المقابل
                    </Typography>
                    <TextField
                        select
                        value={account}
                        onChange={e => setAccount(e.target.value)}
                        variant='outlined'
                        size='small'
                        fullWidth
                    >
                        {accounts.map((acc) => (
                            <MenuItem key={acc} value={acc}>
                                {acc}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Typography variant="subtitle1" component="label">
                        العملة
                    </Typography>
                    <TextField
                        type='number'
                        variant='outlined'
                        size='small'
                        InputProps={{
                            startAdornment:
                                <InputAdornment position='start'>SP</InputAdornment>
                        }}
                        fullWidth
                        disabled
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Typography variant="subtitle1" component="label">
                        التعادل
                    </Typography>
                    <TextField
                        type='number'
                        value={1}
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}  >
                    <Typography variant="subtitle1" component="label">
                        المكافئ
                    </Typography>
                    <TextField
                        type='number'
                        value={1}
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={4}>
                    <Typography variant="subtitle1" component="label">
                        البيان
                    </Typography>
                    <TextField
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={4}>
                    <Typography variant="subtitle1" component="label">
                        المستند
                    </Typography>
                    <TextField
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={4}>
                    <Typography variant="subtitle1" component="label">
                        الوثيقة
                    </Typography>
                    <TextField
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                </Grid>
            </Grid>
            <hr style={{ border: 'none', borderTop: '1px dotted #ccc', width: '100%', margin: '20px 0' }} />


            <FormGroup sx={{ width: "180px" }}>
            <FormControlLabel
                label={
                    <Typography sx={{m: 2}} variant="body1" fontWeight="bold">
                        يوجد دفعة
                    </Typography>
                }
                control={<Checkbox checked={checked} onChange={handleChange} />}
            />
        </FormGroup>

        <hr style={{ border: 'none', borderTop: '1px dotted #ccc', width: '100%', margin: '20px 0' }} />
        </Box>
    );
}

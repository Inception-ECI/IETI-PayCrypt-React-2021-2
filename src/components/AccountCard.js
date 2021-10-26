import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


export const AccountCard = ({ bank, headline, number, creationDate, balance, removeFunction, index }) => {
    return (
        <Card sx={{ maxWidth: 1000, margin: 'auto', marginTop: 5 }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={11}>
                        <Typography gutterBottom variant="h5" component="div">
                            {bank}
                        </Typography>
                        <Typography variant="body2" component="div" color="text.secondary">
                            Account number: {number}
                        </Typography>
                        <Typography variant="body2" component="div" color="text.secondary">
                            Creation date: {creationDate}
                        </Typography>
                        <Typography variant="body2" component="div" color="text.secondary">
                            Balance: {balance}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <input
                            type="image"
                            src="minus.jpg"
                            alt="Delete"
                            style={{ width: "25px", marginTop: "100%", marginLeft: "40%" }}
                            onClick={() => { removeFunction(index) }}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export const AccountCard = ({ bank, headline, number, creationDate, balance }) => {
    return (
        <Card sx={{ maxWidth: 1000, margin: 'auto', marginTop: 5 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {bank}
                    </Typography>
                    {/* <Typography variant="h6" component="div" color="text.secondary">
                        {headline}
                    </Typography> */}
                    <Typography variant="body2" component="div" color="text.secondary">
                        Account number: {number}
                    </Typography>
                    <Typography variant="body2" component="div" color="text.secondary">
                        Creation date: {creationDate}
                    </Typography>
                    <Typography variant="body2" component="div" color="text.secondary">
                        Balance: {balance}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
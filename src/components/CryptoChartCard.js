import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';


export const CryptoChartCard = ({image, crypto, value}) => {
    return (
        <Card sx={{ maxWidth: 1000, marginLeft: 40, marginTop: 5, backgroundColor: "rgba(18,30,149,0.1)", borderRadius: 5}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={crypto}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {crypto}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {value}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
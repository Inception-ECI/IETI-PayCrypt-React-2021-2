import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea} from '@mui/material';


export const CryptoChartCard = ({image, crypto, value}) => {
    return (
        <Card sx={{ maxWidth: 66, marginTop: 4, marginLeft:15, marginRight:-15, borderRadius: 6}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="60"
                    image={image}
                    alt={crypto}
                />
                
            </CardActionArea>
        </Card>
    );
}
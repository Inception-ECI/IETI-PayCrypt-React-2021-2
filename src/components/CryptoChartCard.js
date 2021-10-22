import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CryptoChartCard() {
  return (
    <Card sx={{ maxWidth: 1000, marginLeft: 40}}>
      <CardMedia
        component="img"
        height="440"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="Bitcoin Chart"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            What is Bitcoin?
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Bitcoin is the first digital object that cannot be copied, duplicated, pirated or forged.
            Those are the primary attributes that give its unique value. Bitcoin is the first digitally scarce thing
            known to mankind, and within its inner workings is a Mathematical mechanism that should make Bitcoin's value
            continue to rise. Each bitcoin is mined from so-called "blocks". A block is a 1MB piece of information that
            describes all transactions that take place within a period of time. A new block is generated roughly every
            10 minutes. The Bitcoin network has been generating blocks, uninterrupted ever since its inception.
            The first block (genesis block) was generated on the 3rd of January 2009 and the reward for mining it was 50 bitcoins
            (BTC). Every subsequent block had the same mining reward but on every 210,000 generated blocks there is an event
            called "halving" which cuts, in half, the reward value distributed to miners from that moment on. In other words
            from block 210,000 onwards the reward is halved to 25 BTC; from block 420,000 onwards, it's halved to 12.5 BTC;
            and so on. Since blocks are generated every 10 minutes, "halving events" take place every 35,000 hours:
            almost exactly every 4 years.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="mailto:user@mail.com">Share</Button>
        <Button size="small" href="https://stats.buybitcoinworldwide.com/stock-to-flow/">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CryptoChartCard
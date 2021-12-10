import React from "react";
import Navbar from "./Navbar";
import {CryptoChartCard} from "./CryptoChartCard";
import{TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';


const data = [
    {NameCryto:'Bitcoin', cryptoInitial: 'BTC', image: '/static/images/bitcoin.jpeg', value:'62902.24'},
    {NameCryto:'Ethereum', cryptoInitial: 'ETH', image: '/static/images/ethereum.jpeg', value:'4602.18'},
    {NameCryto:'Binance Coin', cryptoInitial: 'BNB', image: '/static/images/BNB.png', value:'562.1'},
    {NameCryto:'Solan', cryptoInitial: 'SOL', image: '/static/images/solana.png', value:'207.23'},
    {NameCryto:'Tether', cryptoInitial: 'USDT', image: '/static/images/tether.png', value:'0.997687'},
    {NameCryto:'Cardano', cryptoInitial: 'ADA', image: '/static/images/cardano.jpg', value:'2.12'},
    {NameCryto:'XRP', cryptoInitial: 'XRP', image: '/static/images/xrp.png', value:'1,21278'},
    {NameCryto:'Polkadot', cryptoInitial: 'XDOT', image: '/static/images/polkadot.jpg', value:'52.43'}
];
    



function Home() {

    return(
        <> 
            <Navbar />
            <h1 className='center'>Currency Value Portfolio</h1>
            <div className ='home'>
                <TableContainer>
                    <Table className="table table-hover">
                        <TableHead>
                        <TableRow className="table-active">
                            <TableCell>NameCryto</TableCell>
                            <TableCell>CryptoInitial</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Value</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(celda=>(
                                <TableRow>
                                    <TableCell>{celda.NameCryto}</TableCell>
                                    <TableCell>{celda.cryptoInitial}</TableCell>
                                    <TableCell>{celda.image}</TableCell>
                                    <TableCell >{celda.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        
            </div>
        
        </>
         
    );

}

export default Home
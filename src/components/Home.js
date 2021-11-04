import React from "react";
import Navbar from "./Navbar";
import {CryptoChartCard} from "./CryptoChartCard";
import {ApiCriptoRequest} from "./ApiCriptoRequest";

function Home() {


    const CryptoInfo = [
        {
            image: '/static/images/bitcoin.jpeg',
            crypto: 'Bitcoin',
            cryptoInitial: 'BTC',
            value:'62902.24',
        },{
            image: '/static/images/ethereum.jpeg',
            crypto: 'Ethereum',
            cryptoInitial: 'ETH',
            value: '4602.18',
        },{
            image: '/static/images/BNB.png',
            crypto: 'Binance Coin',
            cryptoInitial: 'BNB',
            value: '562.1',
        },{
            image: '/static/images/solana.png',
            crypto: 'Solana',
            cryptoInitial: 'SOL',
            value: '207.23',
        },{
            image: '/static/images/tether.png',
            crypto: 'Tether',
            cryptoInitial: 'USDT',
            value: '0.997687',
        },{
            image: '/static/images/cardano.jpg',
            crypto: 'Cardano',
            cryptoInitial: 'ADA',
            value: '2.12',
        },{
            image: '/static/images/xrp.png',
            crypto: 'XRP',
            cryptoInitial: 'XRP',
            value: '1,21278	',
        },{
            image: '/static/images/polkadot.jpg',
            crypto: 'Polkadot',
            cryptoInitial: 'DOT',
            value: '52.43',
        }
    ];
    

    return (
        <>
            <Navbar />
            <h1 className='home-h1'>Currency Value Portafolio</h1>
            <div className='home-content' >
                {CryptoInfo.map((item, index) => {
                    return (
                        <CryptoChartCard
                            image={item.image}
                            crypto= {item.crypto + ' - ' + item.cryptoInitial}
                            value={'$' + item.value}
                        />
                    );
                })}
            </div>
        </>
    );

}

export default Home
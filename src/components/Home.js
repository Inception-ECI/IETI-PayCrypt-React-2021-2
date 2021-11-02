import React from "react";
import Navbar from "./Navbar";
import {CryptoChartCard} from "./CryptoChartCard";

function Home() {

    const CryptoInfo = [
        {
            image: '/static/images/bitcoin.jpeg',
            crypto: 'Bitcoin',
            cryptoInitial: 'BTC',
            value: '47,202.48',
        },{
            image: '/static/images/ethereum.jpeg',
            crypto: 'Ethereum',
            cryptoInitial: 'ETH',
            value: '3,383.95',
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
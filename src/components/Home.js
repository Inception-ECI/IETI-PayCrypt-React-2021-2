import React from "react";
import Navbar from "./Navbar";
import CryptoChartCard from "./CryptoChartCard";

function Home() {

    return (
        <>
            <Navbar />
            <div className='home-content'>
                <CryptoChartCard />
            </div>
        </>
    );

}

export default Home
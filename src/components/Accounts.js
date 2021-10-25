import React from "react";
import Navbar from "./Navbar";
import { AccountCard } from "./AccountCard";

export const Accounts = () => {

    const AccountsInfo = [
        {
            bank: "Bank of America",
            headline: "",
            number: 123456789,
            creationDate: "25/12/2019",
            balance: 100000,
        },
        {
            bank: "Chase",
            headline: "",
            number: 567891234,
            creationDate: "13/12/2019",
            balance: 200000,
        },
        {
            bank: "Wells Fargo",
            headline: "",
            number: 897654321,
            creationDate: "05/12/2019",
            balance: 300000,
        }
    ];

    return (
        <>
            <Navbar />
            <h1 className='accounts-h1'>User Accounts</h1>
            <div className='home-content' >
                {AccountsInfo.map((account, index) => {
                    return (
                        <div className='accounts-card' key={index}>
                            <AccountCard
                                bank={account.bank}
                                headline={account.headline}
                                number={account.number}
                                creationDate={account.creationDate}
                                balance={account.balance}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );

}
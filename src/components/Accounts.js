import React, { useState } from "react";
import Navbar from "./Navbar";
import { AccountCard } from "./AccountCard";
import { Popup } from './Popup';

export const Accounts = () => {

    const [Accounts, setAccounts] = useState([
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
    ]);

    const [isOpen, setIsOpen] = useState(false);

    function RemoveAccount(index) {
        setAccounts(Accounts.filter((_, i) => i !== index));
    }

    function AddAccount(event) {
        event.preventDefault();
        setAccounts([{
            bank: event.target.bank.value,
            headline: event.target.headline.value,
            number: 10,
            creationDate: "05/12/2019",
            balance: 0,
        }, ...Accounts]);
        event.target.reset();
        togglePopup();
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar />
            <h1 className='accounts-h1'>User Accounts</h1>
            <input
                type="image"
                src="plus.png"
                style={{ width: "1.5%", marginTop: "10px", marginLeft: "48.75%" }}
                onClick={togglePopup}
            />
            <div className='home-content' >
                {Accounts.map((account, index) => {
                    return (
                        <div className='accounts-card' key={index}>
                            <AccountCard
                                bank={account.bank}
                                headline={account.headline}
                                number={account.number}
                                creationDate={account.creationDate}
                                balance={account.balance}
                                removeFunction={RemoveAccount}
                                index={index}
                            />
                        </div>
                    );
                })}
                {isOpen && <Popup
                    content={<>
                        <form onSubmit={AddAccount}>
                            <div class="center">
                                <h1>Add Account</h1>
                                <div>
                                    <input type="text" placeholder="Bank" name="bank" required />
                                </div>
                                <div>
                                    <input type="text" placeholder="Headline" name="headline" required />
                                </div>
                                <div>
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </>}
                    handleClose={togglePopup}
                />}
            </div>
        </>
    );
}

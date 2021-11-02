import React, {useState} from "react";
import Navbar from "./Navbar";
import {AccountCard} from "./AccountCard";
import {Popup} from './Popup';
import {ApiConnectionRequest} from "./ApiConnectionRequest";

export const Accounts = () => {

    const [accounts, setAccounts] = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    function RemoveAccount(index) {
        setAccounts(Accounts.filter((_, i) => i !== index));
    }

    function AddAccount(event) {
        event.preventDefault();

        let accountDto = {
            currencyCode: event.target.currency.value,
            balance: 0,
            state: "ACTIVE",
            creationDate: Date.now(),
        }
        ApiConnectionRequest.lookup(
            "POST",
            "/v1/account",
            accountDto,
            (data) => {
                loadAccountsInfo(data)
            }
        )
        event.target.reset();
        togglePopup();
        window.location.reload();
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const getFormattedDate = (dateString) => {

        let date = new Date(Date.parse(dateString));
        try {
            return date.toISOString().slice(0, 10);
        } catch (e) {
            return date;
        }
    }

    function loadAccountsInfo(data) {
        console.log(data.data);
        setAccounts(data.data)
    }

    const getAccounts = () => {

        ApiConnectionRequest.lookup(
            "GET",
            "/v1/account/all",
            "",
            (data) => {
                loadAccountsInfo(data)
            }
        )
    };

    function loadAccountData() {
        getAccounts();
        return (
            accounts.map((account, index) => {
                    return (
                        <div className='accounts-card' key={index}>
                            <AccountCard
                                bank={account.currencyCode}
                                headline=""
                                number={account.id}
                                creationDate={getFormattedDate(account.creationDate)}
                                balance={account.balance}
                                removeFunction={RemoveAccount}
                                index={account.id}
                            />
                        </div>
                    )
                }
            )
        )
    }

    return (
        <>
            <Navbar/>
            <h1 className='accounts-h1'>User Accounts</h1>
            <input
                type="image"
                src="plus.png"
                style={{width: "1.5%", marginTop: "10px", marginLeft: "48.75%"}}
                onClick={togglePopup}
                alt={"Add"}
            />
            <div className='home-content'>
                {loadAccountData()}
                {isOpen && <Popup
                    content={<>
                        <form onSubmit={AddAccount}>
                            <div className="center">
                                <h1>Add Account</h1>
                                <div>
                                    <input type="text" placeholder="Currency" name="currency" required/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Account Number" name="AccountNumber" required/>
                                </div>
                                <div>
                                    <input type="submit" value="Submit"/>
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

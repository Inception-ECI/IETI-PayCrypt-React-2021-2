import React, {useState} from "react";
import Navbar from "./Navbar";
import {ApiConnectionRequest} from "./ApiConnectionRequest";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export const Transactions = () => {

    const [transactions, setTransactions] = useState([]);

    function loadTransactionsInfo(data) {
        setTransactions(data.data)
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const getTransactions = () => {

        ApiConnectionRequest.lookup(
            "GET",
            "/v1/transaction/all",
            "",
            async (data) => {
                await sleep(2000);
                loadTransactionsInfo(data)
            }
        )
    };

    function handleOrderButtonClick(orderId) {
        ApiConnectionRequest.setCookie("py-ord", orderId);
        window.location.href = "/order";
    }

    function loadTransactionsData() {
        getTransactions();
        return (
            <TableContainer component={Paper} sx={{minWidth: 30, maxWidth: 1900, marginLeft: "6%", backgroundColor: "rgba(18,30,149,0.1)", borderRadius: 5}}>
                <Table aria-label="Transaction Report">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{minWidth: 360, maxWidth: 360}}>Creation Date</TableCell>
                            <TableCell sx={{minWidth: 360, maxWidth: 360}}>No. Origin Account</TableCell>
                            <TableCell sx={{minWidth: 360, maxWidth: 360}}>No. Destination Account</TableCell>
                            <TableCell sx={{minWidth: 360, maxWidth: 360}}>State</TableCell>
                            <TableCell sx={{minWidth: 360, maxWidth: 360}}>Order</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map((transaction) => (
                            <TableRow
                                key={transaction.id}
                            >
                                <TableCell>{transaction.creationDate}</TableCell>
                                <TableCell>{transaction.targetUserId}</TableCell>
                                <TableCell>{transaction.sourceUserId}</TableCell>
                                <TableCell>{transaction.state}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => { handleOrderButtonClick(transaction.orderId)}}>
                                        {transaction.orderId}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    return (
        <>
            <Navbar/>
            <div>
                <h1 className="center">Transactions Report</h1>
                <br/>
                {loadTransactionsData()}
            </div>
        </>
    );

}
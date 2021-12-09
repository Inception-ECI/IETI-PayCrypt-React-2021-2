import React, {useState} from "react";
import Navbar from "./Navbar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {InputLabel, Select, Stack, TextField} from "@mui/material";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MenuItem from "@mui/material/MenuItem";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {ApiConnectionRequest} from "./ApiConnectionRequest";

toast.configure()
export const CreatePaymentLink = () => {

    const [accountId, setAccountId] = useState("");

    const [accountType, setAccountType] = useState("");

    const [amount, setAmount] = useState("0");

    const [amountUsd, setAmountUsd] = useState("0");

    const [paymentLink, setPaymentLink] = useState("No Payment Link Generated");

    const [accounts, setAccounts] = useState([]);

    function loadPaymentLink(orderId) {
        let paymentLinkBuilder = "";

        paymentLinkBuilder += ApiConnectionRequest.REACT_PROTOCOL;
        paymentLinkBuilder += ApiConnectionRequest.REACT_HOST
        paymentLinkBuilder += "/payment-link/" + orderId

        setPaymentLink(paymentLinkBuilder);
        toast.success("Payment Link Generated! ", {position: toast.POSITION.TOP_CENTER})
    }

    function copyToClipboard() {

        navigator.clipboard.writeText(paymentLink)
        toast.info("Payment Link Copied to clipboard", {position: toast.POSITION.TOP_CENTER})
    }

    function handleGenerateLinkButton() {
        toast.info("Generating Payment Link", {position: toast.POSITION.TOP_CENTER})
        let orderDto = {
            targetAccount: accountId,
            targetValue: amount
        };
        ApiConnectionRequest.lookup(
            "POST",
            "/v1/payment/link",
            orderDto,
            (data) => {
                loadPaymentLink(data.data)
            }
        )
    }

    function handleAccountSelect(event) {
        setAccountId(event.target.value)

        for (let account of accounts) {
            if (account.id === event.target.value) {
                setAccountType(account.currencyCode);
                break;
            }
        }
    }

    function handleCurrencySelect() {

        let conversionDto = {
            sourceCurrency: "USD",
            targetCurrency: accountType,
            sourceValue: amountUsd + "0"
        };

        ApiConnectionRequest.lookup(
            "POST",
            "/v1/conversion",
            conversionDto,
            async (data) => {
                await sleep(2000);
                setAmount(data.data.value)
            }
        )
    }

    function handleAmountSelect(event) {
        setAmountUsd(event.target.value)
        handleCurrencySelect();
    }

    function loadAccountsInfo(data) {
        setAccounts(data.data)
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const getAccounts = () => {

        ApiConnectionRequest.lookup(
            "GET",
            "/v1/account/all",
            "",
            async (data) => {
                await sleep(2000);
                loadAccountsInfo(data)
            }
        )
    };

    function loadAccountData() {
        getAccounts();
        return (
            accounts.map((account, index) => {
                    return (
                        <MenuItem value={account.id}>
                            Account: {account.id} Currency: {account.currencyCode}
                        </MenuItem>
                    )
                }
            )
        )
    }

    return (
        <>
            <Navbar/>
            <div>
                <h1 className="center">Create Payment Link</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <Card sx={{
                    minWidth: 275,
                    maxWidth: 900,
                    backgroundColor: "rgba(18,30,149,0.1)",
                    borderRadius: 5,
                    marginLeft: 108,
                }}>
                    <CardContent>
                        <Stack spacing={2}>
                            <Typography variant="h5" component="div">
                                No. Destination Account
                            </Typography>
                            <br/>
                            <InputLabel id="accountsLabel">Accounts</InputLabel>
                            <Select
                                labelId="accountsLabel"
                                defaultValue=""
                                onChange={handleAccountSelect}
                            >
                                {loadAccountData()}
                            </Select>
                        </Stack>
                        <br/>
                        <br/>
                        <Stack direction="row" spacing={10}>
                            <Stack spacing={2} sx={{minWidth: 300}}>
                                <Typography variant="h5" component="div">
                                    Total ( {accountType} ):
                                </Typography>
                                <TextField id="TotalAmount"
                                           disabled={true}
                                           type="number"
                                           label="Amount"
                                           variant="outlined"
                                           value={amount}
                                           onChange={handleAmountSelect}
                                           sx={{backgroundColor: "rgba(255,255,255,0.3)"}}
                                />
                            </Stack>
                            <Stack spacing={2} sx={{minWidth: 300}}>
                                <Typography variant="h5" component="div">
                                    Total ( USD ):
                                </Typography>
                                <TextField id="TotalAmount"
                                           type="number"
                                           label="Amount"
                                           variant="outlined"
                                           onChange={handleAmountSelect}
                                           sx={{backgroundColor: "rgba(255,255,255,0.3)"}}
                                />
                            </Stack>
                        </Stack>
                        <br/>
                        <br/>
                        <Stack spacing={2}>
                            <Button
                                startIcon={<AttachMoneyIcon/>}
                                sx={{backgroundColor: "rgb(12,76,38)", color: "white", borderRadius: 3}}
                                onClick={handleGenerateLinkButton}
                            >
                                Generate Payment Link
                            </Button>
                            <Stack direction="row" spacing={1}>
                                <TextField
                                    disabled
                                    id="outlined-read-only-input"
                                    label="Payment Link"
                                    defaultValue={paymentLink}
                                    value={paymentLink}
                                    sx={{minWidth: 650, backgroundColor: "rgba(255,255,255,0.4)"}}
                                />
                                <Button
                                    startIcon={<ContentPasteIcon/>}
                                    sx={{backgroundColor: "rgb(185,169,231)", color: "white", borderRadius: 3, minWidth: 210}}
                                    onClick={copyToClipboard}
                                >
                                    Copy Payment Link
                                </Button>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            </div>
        </>
    );

}
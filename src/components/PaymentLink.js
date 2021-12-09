import React, {useState} from "react";
import {ApiConnectionRequest} from "./ApiConnectionRequest";
import {CardHeader, Select, Stack, TextField} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Button from "@mui/material/Button";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
export const PaymentLink = () => {

    const AvailableCurrencies = [
        {
            id: "SELECT",
        },
        {
            id: "COP",
        }, {
            id: "USD",
        }, {
            id: "EUR",
        }, {
            id: "ARS",
        }, {
            id: "BRL",
        }
    ];

    const AvailableDocumentType = [
        {
            id: "CC",
        }, {
            id: "CE",
        }
    ];

    const [order, setOrder] = useState("");

    const [currencyId, setCurrencyId] = useState("");

    const [orderValue, setOrderValue] = useState("0");

    function handleCurrencySelect(event) {

        let conversionDto = {
            sourceCurrency: order.targetCurrencyCode,
            targetCurrency: event.target.value,
            sourceValue: order.targetValue
        };

        console.log(conversionDto)

        ApiConnectionRequest.lookup(
            "POST",
            "/v1/conversion",
            conversionDto,
            async (data) => {
                setOrderValue(data.data.value)
                setCurrencyId(conversionDto.targetCurrency)
            }
        )
    }

    function loadOrderInfo(data) {
        setOrder(data.data);
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const getOrder = () => {

        let orderId = ApiConnectionRequest.getCookie("py-ord");

        ApiConnectionRequest.lookup(
            "GET",
            "/v1/order/" + orderId,
            "",
            async (data) => {
                await sleep(2000);
                loadOrderInfo(data)
            }
        )
    };

    const updateOrderInfo = () => {

        let orderId = ApiConnectionRequest.getCookie("py-ord");

        console.log(orderId);

        let orderDto = {
            id: orderId,
            sourceCurrencyCode: currencyId
        };

        ApiConnectionRequest.lookup(
            "POST",
            "/v1/payment/update-source",
            orderDto,
            async (data) => {
                await sleep(2000);
                pay()
            }
        )
    }

    function pay() {
        let orderId = ApiConnectionRequest.getCookie("py-ord");

        let orderDto = {
            paymentToken: orderId
        };

        ApiConnectionRequest.lookup(
            "POST",
            "/v1/payment/pay",
            orderDto,
            async (data) => {
                await sleep(2000);
                toast.success("Payment Generation Successful", {position: toast.POSITION.TOP_CENTER})
            }
        )
    }

    function handlePay() {
        toast.info("Generating Payment", {position: toast.POSITION.TOP_CENTER})
        updateOrderInfo();
    }

    const cardSx = {
        maxWidth: 1600, borderRadius: 5, marginLeft: 55, marginTop: 5, backgroundColor: "rgba(18,30,149,0.1)"
    }

    function loadOrder() {

        let path = window.location.href
        let orderPathId = path.split("/").slice(-1);
        ApiConnectionRequest.setCookie("py-ord", orderPathId)

        getOrder()

        return (
            <div>
                <Card sx={cardSx}>
                    <CardHeader
                        title="Payment Details"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="/static/images/PaymentImg.png"
                        alt="Paella dish"
                    />
                    <CardContent sx={{marginLeft: 65}}>
                        <Stack direction="row" spacing={2}>
                            <Stack spacing={2}>
                                <TextField
                                    disabled
                                    id="targetCoin"
                                    label="Target Currency"
                                    defaultValue={AvailableCurrencies[1].id}
                                    value={order.targetCurrencyCode}
                                />
                                <TextField
                                    disabled
                                    id="total"
                                    label="Target Total"
                                    defaultValue={"0"}
                                    value={order.targetValue}
                                />
                            </Stack>
                            <Stack spacing={2}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Source Currency"
                                    defaultValue={AvailableCurrencies[0].id}
                                    onChange={handleCurrencySelect}
                                >
                                    {AvailableCurrencies.map((currency, index) => {
                                        return (
                                            <MenuItem value={currency.id} key={currency.id}>{currency.id}</MenuItem>
                                        )
                                    })}
                                </Select>
                                <TextField
                                    disabled
                                    id="totalSource"
                                    label="Total"
                                    defaultValue="0"
                                    value={orderValue}
                                />
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>

                <Card sx={cardSx}>
                    <CardHeader
                        title="Payment Method"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="/static/images/finalPayment.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Stack spacing={2}>
                            <Stack direction="row" spacing={2}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Source Currency"
                                    variant={"filled"}
                                    defaultValue={AvailableDocumentType[1].id}
                                >
                                    {AvailableDocumentType.map((docType, index) => {
                                        return (
                                            <MenuItem value={docType.id} key={docType.id}>{docType.id}</MenuItem>
                                        )
                                    })}
                                </Select>
                                <TextField
                                    required
                                    id="card-document"
                                    label="Identification Number"
                                    defaultValue=""
                                    variant="filled"
                                />
                            </Stack>
                            <TextField
                                required
                                id="card-name"
                                label="Card Name"
                                defaultValue=""
                                variant="filled"
                            />
                            <TextField
                                required
                                id="card-number"
                                label="Card Number"
                                defaultValue=""
                                variant="filled"
                            />
                            <TextField
                                required
                                id="card-code"
                                label="Security Code"
                                defaultValue=""
                                type="number"
                                variant="filled"
                            />
                            <TextField
                                required
                                id="card-exp"
                                label="Expiration Date"
                                defaultValue="02/26"
                                variant="filled"
                            />
                            <TextField
                                required
                                id="card-mobile"
                                label="Mobile Phone"
                                defaultValue=""
                                variant="filled"
                            />
                            <Button
                                startIcon={<AttachMoneyIcon/>}
                                sx={{backgroundColor: "rgb(12,76,38)", color: "white", borderRadius: 3}}
                                onClick={handlePay}
                            >
                                Pay
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </div>
        )
    }


    return (
        <>
            {loadOrder()}
        </>
    );
}
import React, {useState} from "react";
import {ApiConnectionRequest} from "./ApiConnectionRequest";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export const AfterPayment = () => {

    const [order, setOrder] = useState("");

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
                <CardMedia
                    component="img"
                    height="100"
                    image="/static/images/Paycrypt2.png"
                    alt="Paycrypt"
                />

                <Typography variant="h1" component="div" className="center" gutterBottom sx={{marginLeft: 75}}>
                    Payment Completed!
                </Typography>
                <Card sx={cardSx}>
                    <CardMedia
                        component="img"
                        height="300"
                        image="/static/images/success.jpg"
                        alt="Paella dish"
                    />
                    <CardContent sx={{marginLeft: 20}}>

                        <Typography variant="h6" color="text.primary">
                            The Order with id: {order.id} is in state:
                        </Typography>
                        <br/>
                        <Typography variant="h3" color="text.primary">
                            {order.orderState}
                        </Typography>
                        <br/>
                        <Typography variant="h5" color="text.secondary">
                            {order.sourceCurrencyCode}: {order.sourceValue}
                            <ArrowForwardIosIcon/>
                            {order.targetCurrencyCode}: {order.targetValue}
                        </Typography>
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
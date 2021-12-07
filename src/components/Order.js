import React, {useState} from "react";
import Navbar from "./Navbar";
import {ApiConnectionRequest} from "./ApiConnectionRequest";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {CardHeader} from "@mui/material";
import Card from "@mui/material/Card";

export const Order = () => {

    const [order, setOrder] = useState("");

    function loadOrderInfo(data) {
        setOrder(data.data);
    }

    const getOrder = () => {

        let orderId = ApiConnectionRequest.getCookie("py-ord");

        ApiConnectionRequest.lookup(
            "GET",
            "/v1/order/" + orderId,
            "",
            (data) => {
                loadOrderInfo(data)
            }
        )
    };

    function loadOrderData() {
        getOrder();
        return (
            <Card sx={{maxWidth: 600, marginLeft: "40%", backgroundColor: "rgba(18,30,149,0.1)", borderRadius: 5}}>
                <CardHeader
                    title={"OrderId: " + order.id}
                    subheader={"CreationDate: " + order.creationDate}
                />
                <CardContent>
                    <Typography variant="h4" color="text.primary">
                        {order.orderState}
                    </Typography>
                    <br/>
                    <Typography variant="body1" color="text.secondary">
                        {order.sourceCurrencyCode}: {order.sourceValue}
                    </Typography>
                    <DoubleArrowIcon/>
                    <Typography variant="body1" color="text.secondary">
                        {order.targetCurrencyCode}: {order.targetValue}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    return (
        <>
            <Navbar/>
            <div>
                <h1 className="center">Order Report Status</h1>
                <br/>
                <br/>
                <br/>
                {loadOrderData()}
            </div>
        </>
    );

}
import axios from "axios";
import * as React from 'react';

export class ApiConnectionRequest {

    static CONTENT_TYPE = 'application/json';

    static HOST = 'localhost:8090';

    static PROTOCOL = 'http://';

    static TOKEN_TYPE = 'Bearer ';

    static ACCESS_CONTROL_ALLOW_ORIGIN = '*';

    static setCookie(cookieName, cookieValue) {
        document.cookie = cookieName + '=' + cookieValue + ";path=/";
    }

    static getCookie(cookieName) {
        let name = cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === '') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length)
            }
        }
        return "";
    }

    static lookup(httpMethod, endpoint, sendData, callback) {

        const headers = {
            "Content-Type": this.CONTENT_TYPE,
            "Authorization": this.TOKEN_TYPE + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MTRjZjhmNTk1NTQ5YzI1MWJhODMxMjAiLCJyb2xlcyI6IlVzZXIiLCJpYXQiOjE2MzU4NzU4NzYsImV4cCI6MTYzNTg3NzY3Nn0.WPnX0Kn99jbYHj2wgXq1If43Gh6sdkjHhzjCHw1P8d0",
            "Access-Control-Allow-Origin": "*",
        };
        axios({
            method: httpMethod,
            headers: headers,
            url: this.PROTOCOL + this.HOST + endpoint,
            data: sendData,
        }).then(
            (data) => callback(data)
        );
    }

}
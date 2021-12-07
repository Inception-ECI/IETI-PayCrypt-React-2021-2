import axios from "axios";

export class ApiConnectionRequest {

    static CONTENT_TYPE = 'application/json';

    static HOST = 'localhost:8080';

    static PROTOCOL = 'http://';

    static TOKEN_TYPE = 'Bearer ';

    static setCookie(cookieName, cookieValue) {
        document.cookie = cookieName + '=' + cookieValue + ";path=/";
    }

    static getCookie(cookieName) {
        let match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
        if (match) {
            return(match[2]);
        }
        else{
            return "";
        }
    }

    static lookup(httpMethod, endpoint, sendData, callback) {

        const headers = {
            "Content-Type": this.CONTENT_TYPE,
            "Authorization": this.TOKEN_TYPE + this.getCookie("loginToken"),
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
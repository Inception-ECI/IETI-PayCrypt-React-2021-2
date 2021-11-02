import axios from "axios";

export class ApiConnectionRequest {

    static CONTENT_TYPE = 'application/json';

    static HOST = 'localhost:8090';

    static PROTOCOL = 'http://';

    static TOKEN_TYPE = 'Bearer ';

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
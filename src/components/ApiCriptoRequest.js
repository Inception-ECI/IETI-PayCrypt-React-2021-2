import axios from "axios";

export class ApiCriptoRequest {

    static lookup(cripto){
        axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/'+cripto+'/usd.json')
        .then(res => {
            console.log(res.data.usd)
            return res.data.usd
        })
    }

}
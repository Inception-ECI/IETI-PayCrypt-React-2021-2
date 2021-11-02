import "../login/Login.css"

import user from "../img/usuario.png"
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Password() {


    return (
        <>
            <div id="principallogin">
                <div id="login">
                    <br/>
                    <h1>Password recovery</h1>
                    <br/>
                    <img id="logoLogin" src={user} alt=""/>
                    <p>To begin changing your password
                        <br/>
                        please enter your phone or e-mail
                    </p>
                    <form id="formsign">
                        <div className="mb-3">
                            <input type="text" placeholder="E-mail" className="form-control"
                                   id="phoneEmail"/>
                        </div>
                        <button type="submit" id="buttonsign" className="btn btn-primary">Submit</button>
                        <br/>
                        <br/>
                        <label className="form-check-label" for="exampleCheck1">Don't have an account ?</label>
                        <Link to="/signup"> Sign Up</Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Password;
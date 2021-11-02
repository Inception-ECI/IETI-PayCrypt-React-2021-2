import "../login/Login.css"

import user from "../img/usuario-verificado.png"
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {


    return (
        <>
            <div id="principallogin">
                <div id="login">
                    <br/>
                    <h1>Login</h1>
                    <br/>
                    <img id="logoLogin" src={user} alt=""/>
                    <form id="formsign">
                        <div className="mb-3">
                            <input type="text" placeholder="E-mail" className="form-control" id="phoneEmail"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" placeholder="Password" className="form-control"
                                   id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" id="buttonsign" className="btn btn-primary">Login</button>
                        <br/>
                        <Link to="/password">Forgot password/username ?</Link>
                        <br/>
                        <label className="form-check-label" for="exampleCheck1">Don't have an account ?</label>
                        <Link to="/signup"> Sign Up</Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
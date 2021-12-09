import "../login/Login.css"

import user from "../img/usuario-verificado.png"
import {Link} from 'react-router-dom';
import {useState} from "react";
import {ApiConnectionRequest} from "../ApiConnectionRequest";
import './Login.css';
import {TextField} from "@mui/material";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleAfterLogin = (data) => {
        ApiConnectionRequest.setCookie("loginToken", data.token);
        window.location.href = "/home";
    }

    const handleLogin = (event) => {
        event.preventDefault();
        let loginDto = {
            email: "user.email@email.com",
            password: "lacontraseña"
        }
        ApiConnectionRequest.setCookie("ac-py", "1")
        ApiConnectionRequest.lookup(
            "POST",
            "/v1/auth",
            loginDto,
            (data) => {
                handleAfterLogin(data.data);
            }
        )
    }

    return (
        <>
            <div id="principallogin">
                <div id="login">
                    <br/>
                    <h1>Login</h1>
                    <br/>
                    <img id="logoLogin" src={user} alt=""/>
                    <form id="formsign" onSubmit={handleLogin}>
                        <TextField
                            id="outlined-textarea"
                            label="Email"
                            placeholder="email"
                            onChange={handleEmailChange}
                            sx={{width: 220, color: 'white'}}
                            size="small"
                            multiline
                        />
                        <br/>
                        <br/>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            placeholder="password"
                            onChange={handlePasswordChange}
                            sx={{width: 220}}
                            size="small"
                        />
                        <br/>
                        <br/>
                        <Button
                            variant="outlined"
                            startIcon={<LoginIcon />}
                            sx={{color: 'white', borderColor: 'white'}}
                            onClick={handleLogin}>
                            Login
                        </Button>
                        <br/>
                        <br/>
                        <Link to="/password">Forgot password/username ?</Link>
                        <br/>
                        <label className="form-check-label">Don't have an account ?</label>
                        <Link to="/signup"> Sign Up</Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
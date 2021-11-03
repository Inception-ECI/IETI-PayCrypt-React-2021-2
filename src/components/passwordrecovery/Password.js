import "../login/Login.css"

import user from "../img/usuario.png"
import {Link} from 'react-router-dom';
import {TextField} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";

function Password() {

    return (
        <>
            <div id="principallogin">
                <div id="login">
                    <br/>
                    <h1>Password recovery</h1>
                    <br/>
                    <br/>
                    <img id="logoLogin" src={user} alt=""/>
                    <br/>
                    <p>To begin changing your password
                        <br/>
                        please enter your phone or e-mail
                    </p>
                    <br/>
                    <br/>
                    <form id="formsign">
                        <div className="mb-3">
                            <TextField
                                id="outlined-textarea"
                                label="Email"
                                placeholder="email"
                                sx={{width: 220, color: 'white'}}
                                size="small"
                                multiline
                            />
                        </div>
                        <br/>
                        <br/>
                        <Button
                            variant="outlined"
                            startIcon={<LoginIcon />}
                            sx={{color: 'white', borderColor: 'white'}}>
                            Submit
                        </Button>
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
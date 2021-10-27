import Navbar from "../Navbar"
import "../login/Login.css"

import user from "../img/usuario.png"
import { Link} from 'react-router-dom';


function Password() {  

    
    return (
        <>
            <div id="principallogin">
                <Navbar />
                <div id="login">
                    <br />
                    <h1>Password recovery</h1>
                    <br />
                    <img  id="logoLogin" src={user} alt="" />
                    <p>To begin changing your password
                        <br/>
                    please enter your phone or e-mail
                    </p>
                    <form id="formsign">
                        <div class="mb-3">
                            <input type="text" placeholder="Phone number or E-mail" class="form-control" id="phoneEmail" />
                        </div>
                        <button type="submit" id="buttonsign" class="btn btn-primary">Submit</button>
                        <br />
                        <Link to="/login"> Back to Log in?</Link>
                        <br />
                        <label class="form-check-label" for="exampleCheck1">Don't have an account?</label>
                        <Link to="/signup">Sign Up</Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Password;
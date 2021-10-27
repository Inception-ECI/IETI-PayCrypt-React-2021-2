import Navbar from "../Navbar"
import "../login/Login.css"

import user from "../img/usuario-verificado.png"
import { Link} from 'react-router-dom';


function Login() {  

    
    return (
        <>
            <div id="principallogin">
                <Navbar />
                <div id="login">
                    <br />
                    <h1>Login</h1>
                    <br />
                    <img  id="logoLogin" src={user} alt="" />
                    <form id="formsign">
                        <div class="mb-3">
                            <input type="text" placeholder="Username / E-mail" class="form-control" id="phoneEmail" />
                        </div>
                        <div class="mb-3">
                            <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            
                            
                        </div>
                        <button type="submit" id="buttonsign" class="btn btn-primary">Login</button>
                        <br />
                        <Link to="/password">Forgot password/username type here?</Link>
                        <br />
                        <label class="form-check-label" for="exampleCheck1">Don't have an account?</label>
                        <Link to="/signup">Sign Up</Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
import Navbar from "../Navbar";

import "../signup/Signup.css"

import { Link} from 'react-router-dom';



function Signup() {  
    
    return (
        <>
            <div id="principalsign">
                <Navbar />
                <div id="signup">
                    <h1>Sign Up</h1>
                    <form id="formsign">
                        <div class="mb-3">
                            <input type="text" placeholder="First name" class="form-control" id="firstName" />
                        </div>
                        <div class="mb-3">
                            <input type="text" placeholder="Last name" class="form-control" id="lastName" />
                        </div>
                        <div class="mb-3">
                            <select id="disabledSelect" class="form-select">
                                <option>Disabled select</option>
                                <option>Disabled select</option>
                                <option>Disabled select</option>
                                <option>Disabled select</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <input type="text" placeholder="Phone number or E-mail" class="form-control" id="phoneEmail" />
                        </div>
                        <div class="mb-3">
                            <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">I accept </label>
                            <a href=""> terms and conditions and privacy policy</a>
                        </div>
                        <button type="submit" id="buttonsign" class="btn btn-primary">Open Account</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
import "../signup/Signup.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {

    return (
        <>
            <div id="principalsign">
                <div id="signup">
                    <br/>
                    <h1>Sign Up</h1>
                    <br/>
                    <form id="formsign">
                        <div className="mb-3">
                            <input type="text" placeholder="First name" className="form-control" id="firstName"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder="Last name" className="form-control" id="lastName"/>
                        </div>
                        <div className="mb-3">
                            <select id="disabledSelect" className="form-select">
                                <option>Disabled select</option>
                                <option>Disabled select</option>
                                <option>Disabled select</option>
                                <option>Disabled select</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder="Phone number or E-mail" className="form-control"
                                   id="phoneEmail"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" placeholder="Password" className="form-control"
                                   id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">I accept </label>
                            <a href=""> terms and conditions and privacy policy</a>
                        </div>
                        <button type="submit" id="buttonsign" className="btn btn-primary">Open Account</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
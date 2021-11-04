import "../signup/Signup.css"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import {TextField} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";

function Signup() {

    return (
        <>
            <div id="principalsign">
                <div id="signup">
                    <br/>
                    <br/>
                    <h1>Sign Up <AssignmentIndIcon /> </h1>
                    <br/>
                    <form id="formsign">
                        <div className="mb-3">
                            <TextField
                                id="outlined-textarea"
                                label="First Name"
                                placeholder="first name"
                                sx={{width: 220, color: 'white'}}
                                size="small"
                                multiline
                            />
                        </div>
                        <br/>
                        <div className="mb-3">
                            <TextField
                                id="outlined-textarea"
                                label="Last Name"
                                placeholder="last name"
                                sx={{width: 220, color: 'white'}}
                                size="small"
                                multiline
                            />
                        </div>
                        <br/>
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
                        <div className="mb-3">
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                placeholder="password"
                                sx={{width: 220}}
                                size="small"
                            />
                        </div>
                        <br/>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">I accept </label>
                            <a href="/#"> terms and conditions and privacy policy</a>
                        </div>
                        <br/>
                        <Button
                            variant="outlined"
                            startIcon={<LoginIcon />}
                            sx={{color: 'white', borderColor: 'white'}}>
                            Open Account
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
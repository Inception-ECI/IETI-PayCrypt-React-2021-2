import Navbar from "../Navbar"
import React from 'react'
import "../generatelink/Generate.css"

function Generate() {  
    return (
        <>
            <div id="generate">
                <Navbar />
                <div id="generatelink">
                    <br />
                    <h1>SATISFACTORY GENERATED PAYMENT</h1>
                    <br />
                    <form id="formsign">
                    <p>sharing link</p>
                        <div class="mb-3">
                            <input type="text" placeholder="Link" class="form-control" id="Link" />
                        </div>
                        <button type="submit" id="buttonsign" class="btn btn-primary">Copy linkk</button>
                        <br />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Generate;
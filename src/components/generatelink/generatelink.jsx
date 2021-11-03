import Navbar from "../Navbar"
import React from 'react'
import "../generatelink/generatelink.css"

function generatelink() {  
    return (
        <>
            <div id="generate">
                <Navbar />
                <div id="generatelink">
                    <br />
                    <h1>Generate Link</h1>
                    <br />
                    <form id="formsign">
                        <div class="mb-3">
                            <input type="text" placeholder="Link" class="form-control" id="Link" />
                        </div>
                        <button type="submit" id="buttonsign" class="btn btn-primary">Generate Link</button>
                        <br />
                    </form>
                </div>
            </div>
        </>
    );
}

export default generatelink;
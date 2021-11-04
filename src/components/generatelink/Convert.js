import Navbar from "../Navbar"
import * as React from "react"
import Grid from '@mui/material/Grid';

function Convert() {  
    return (
        <>
            <div id="convert">
                <Navbar/>          
                <div id="convert">
                <Grid container spacing={1} rowSpacing={-100}>
                        <form id="formcovert">
                            <div class="mb-3">
                                <input type="text" placeholder="Link" class="form-control" id="Link" />
                            </div>
                            <button type="submit" id="buttonsign" class="btn btn-primary">SATISFACTORY GENERATED PAYMENT</button>
                            <br />
                        </form>
                        <Grid container spacing={1} rowSpacing={-100}></Grid>
                        <form id="formsign">
                            <div class="mb-3">
                                <input type="text" placeholder="Link" class="form-control" id="Link" />
                            </div>
                            <button type="submit" id="buttonsign" class="btn btn-primary">SATISFACTORY GENERATED PAYMENT</button>
                            <br />
                        </form>
                </Grid>
                </div>
            </div>
        </>
    );
}

export default Convert;
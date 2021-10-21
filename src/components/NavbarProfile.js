import React from "react";
import Avatar from "@mui/material/Avatar";

export const NavbarProfile = ({username, userid, profilePic}) => {

    return (
        //The idea here is to load the information of the logged User
        <>
            <Avatar
                className='nav-bar-profile'
                alt={username}
                src={profilePic}
                sx={{width:100, height: 100}}/>
            {/*UserId*/}
            <br/>
            <span className='nav-bar-profile-text'>Id: {userid}</span>
            <br/>
            {/*UserName*/}
            <span className='nav-bar-profile-text'>Username: {username}</span>
        </>
    );
}
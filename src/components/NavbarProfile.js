import React, {useState} from "react";
import Avatar from "@mui/material/Avatar";
import {ApiConnectionRequest} from "./ApiConnectionRequest"

export const NavbarProfile = ({userEmail}) => {

    const [username, setUsername] = useState("");
    const [userid, setUserid] = useState("");
    const [profilePic, setProfilePic] = useState("");

    function loadProfileInfo(data) {
        let user = data.data;
        setUsername(user.name)
        setUserid(user.id)
        setProfilePic(user.id)
    }

    const getProfileInfo = () => {
        if (username.length <= 0){
            ApiConnectionRequest.lookup(
                "GET",
                "/v1/user/" + userEmail,
                "",
                (data) => {
                    loadProfileInfo(data)
                }
            )
        }
        return (
            <Avatar
                className='nav-bar-profile'
                alt={username}
                src={"/static/images/profilePic.png"}
                sx={{width: 100, height: 100}}/>
        );
    };

    return (
        //The idea here is to load the information of the logged User
        <>
            {getProfileInfo()}
            <br/>
            {/*UserName*/}
            <span className='nav-bar-profile-text'>{username}</span>
            <br/>
            <br/>
            {/*UserId*/}
            <span className='nav-bar-profile-text'>{userid}</span>
        </>
    );
}
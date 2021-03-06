import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import './Navbar.css';
import {IconContext} from "react-icons";
import { NavbarProfile } from "./NavbarProfile";
import ReactSearchBox from "react-search-box";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const SidebarData = [
        {
            title: 'Home',
            path: '/home',
            icon: <MdIcons.MdHome/>,
            cName: 'nav-text'
        },{
            title: 'Transaction Report',
            path: '/transactions',
            icon: <MdIcons.MdAssignment/>,
            cName: 'nav-text'
        },
        {
            title: 'Affiliated Accounts',
            path: '/accounts',
            icon: <MdIcons.MdAccountBalance/>,
            cName: 'nav-text'
        },
        {
            title: 'Generate Link',
            path: '/generate-payment-link',
            icon: <MdIcons.MdMonetizationOn/>,
            cName: 'nav-text'
        }
    ];

    const data = [
        {
            key: "home",
            value: "Home",
        },
        {
            key: "Trans",
            value: "Transaction Report",
        },
        {
            key: "Affi",
            value: "Affiliated Accounts",
        },
        {
            key: "Gen",
            value: "Generate Link",
        },
        {
            key: "Supp",
            value: "Support",
        },
    ];

    const delete_cookie = function (name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    const handleLogOut = () => {
        delete_cookie("loginToken");
        window.location.href = "/";
    }

    return (
        <>
            <IconContext.Provider value={{color: '#ffffff'}}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    <div className='nav-search-box'>
                        <ReactSearchBox
                            placeholder="Search resources..."
                            value="Doe"
                            data={data}
                            onChange={""} onSelect={""}/>
                    </div>
                    <div className='nav-idiom-changer'>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue={10}
                            label="Age" sx={{
                                color: "black",
                                bgcolor: 'white',
                                boxShadow: 90,
                                borderRadius: 90,
                                height: 40,
                            }}>
                            <MenuItem value={10}>ENG</MenuItem>
                            <MenuItem value={20}>ESP</MenuItem>
                            <MenuItem value={30}>POR</MenuItem>
                        </Select>
                        <Button variant="contained" href="/logout" sx={{marginLeft: 2}} onClick={handleLogOut}>
                            Sign Out
                        </Button>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        <hr/>
                        <div className='nav-profile-content'>
                            <NavbarProfile
                                userEmail="user.email@email.com"
                            />
                        </div>
                        <hr/>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        <hr/>
                        <li className='nav-text'>
                            <a href='mailto:pay.crypt.inc@gmail.com' >
                                <MdIcons.MdHelp/>
                                <span>Support</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar
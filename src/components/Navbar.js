import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import './Navbar.css';
import {IconContext} from "react-icons";
import { NavbarProfile } from "./NavbarProfile";

function Navbar() {

    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    const SidebarData = [
        {
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

    return (
        <>
            <IconContext.Provider value={{color: '#ffffff'}}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
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
                                username="Default Profile"
                                userid="Default Id"
                                profilePic="Profile Picture"
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
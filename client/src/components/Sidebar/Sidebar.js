import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen, setIsOpen }) {



    return (
        <div className="Sidebar" style={{ width: `${isOpen ? "30%" : "15%"}` }} >

            <div className="SidebarMenu">
                <div className="SidebarItem">
                    <NavLink exact="true" activeClassName='active' onClick={() => setIsOpen(false)} className="SidebarLinks" to='/questions'>Questions</NavLink>
                </div>
                <div className="SidebarItem">
                    <NavLink exact="true" activeClassName='active' onClick={() => setIsOpen(false)} className="SidebarLinks" to='/tags'>Tags</NavLink>
                </div>
                {/* <div className="SidebarItem">
                    <NavLink exact="true" activeClassName='active' onClick={() => setIsOpen(false)} className="SidebarLinks" to='/users'>Users</NavLink>
                </div>
                <div className="SidebarItem">
                    <NavLink exact="true" activeClassName='active' onClick={() => setIsOpen(false)} className="SidebarLinks" to='/jobs'>Jobs</NavLink>
                </div> */}

            </div>
        </div >
    )
}

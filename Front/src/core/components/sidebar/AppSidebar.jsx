import React from 'react';
import logoGpac from '../../../assets/images/Logo.svg';
import dashboard_icon from '../../../assets/images/menu/dashboard.svg'; 
import job_orders_icon from '../../../assets/images/menu/job_orders.svg'; 
import market_icon from '../../../assets/images/menu/market.svg'; 
import companies_icon from '../../../assets/images/menu/companies.svg'; 
import projects_icon from '../../../assets/images/menu/projects.svg'; 
import map_icon from '../../../assets/images/menu/map.svg'; 
import tasks_tool_icon from '../../../assets/images/menu/tasks_tool.svg'; 
import sendouts_icon from '../../../assets/images/menu/sendouts.svg'; 

import './AppSidebar.css';

import AppActualTime from '../../../components/actual_time/AppActualTime';
import { NavLink } from 'react-router-dom';


function AppSidebar() {
    return (
        <div className="sidebar-fixed-height">
            <div className="my-3 mb-md-5">
                <img src={logoGpac} alt="GPAC logo" className="mx-auto img-fluid d-block" />
            </div>
            <div className="menu-container">
                <ul className="nav flex-column">
                    <li className="nav-item option-sidebar py-2">
                        <NavLink className="nav-link" to="/dashboard">
                            <img src={dashboard_icon} alt="Dashboard" className="menu_icon" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item option-sidebar py-2">
                        <NavLink className="nav-link" to="/job_orders">
                            <img src={job_orders_icon} alt="Job Orders" className="menu_icon" />
                            Job Orders
                        </NavLink>
                    </li>
                    <li className="nav-item option-sidebar py-2">
                        <NavLink className="nav-link" to="/market">
                            <img src={market_icon} alt="Market" className="menu_icon"/>
                            Market
                        </NavLink>
                    </li>
                    <li className="nav-item option-sidebar py-2">
                        <NavLink className="nav-link" to="/companies">
                            <img src={companies_icon} alt="Market" className="menu_icon" />
                            Companies
                        </NavLink>
                    </li>
                    <li className="nav-item option-sidebar py-2">
                        <NavLink className="nav-link" to="/projects">
                            <img src={projects_icon} alt="S. Projects" className="menu_icon" />
                            S. Projects
                        </NavLink>
                    </li>
                    <li className="nav-item option-sidebar py-2">
                        <NavLink className="nav-link" to="/map">
                            <img src={map_icon} alt="Map" className="menu_icon" />
                            Map
                        </NavLink>
                    </li>
                    <li className="nav-item option-sidebar py-2">
                        <NavLink className="nav-link" to="/tasks_tools">
                            <img src={tasks_tool_icon} alt="Tasks Tool" className="menu_icon" />
                            Tasks Tool
                        </NavLink>
                    </li>
                    <li className="nav-item option-sidebar py-2">
                        <NavLink className="nav-link" to="/sendouts">
                            <img src={sendouts_icon} alt="Sendouts" className="menu_icon" />
                            Sendouts
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
            <div className="my-5 actual-time w-100 d-none d-md-block">
                <AppActualTime/>
            </div>
        </div>
    );
}

export default AppSidebar;
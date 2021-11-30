import React, { Component } from 'react';
import './Sidebar.css'
import { AiOutlineLineChart } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
import {AiOutlineUsergroupAdd} from "react-icons/ai";
class Sidebar extends Component {
    render(){
        return (
            <div className="Sidebar">
                <div className="SidebarWrapper">
                    <div className="SidebarMenu">
                        <h3 className="SidebarTitle">Overview</h3>
                        <ul className="SidebarList">
                        <li className="SidebarListItem active">
                                <AiOutlineLineChart />
                                Home
                            </li>
                            <li className="SidebarListItem">
                                <AiOutlineLineChart />
                                Statistics
                            </li>
                        </ul>
                    </div>

                    <div className="SidebarMenu">
                        <h3 className="SidebarTitle">Conformance Checking</h3>
                        <ul className="SidebarList">
                            <li className="SidebarListItem">
                                <AiOutlineLineChart />
                                Resource-Activities
                            </li>
                            <li className="SidebarListItem">
                                <AiOutlineUpload />
                                Resource-Roles
                            </li>
                            <li className="SidebarListItem">
                                <AiOutlineUsergroupAdd />
                                Resource-Handover
                            </li>
                            <li className="SidebarListItem">
                                <AiOutlineLineChart />
                                Resource-Subcontracts
                            </li>
                            <li className="SidebarListItem">
                                <AiOutlineUpload />
                                Resource-WorkingTogether
                            </li>
                            <li className="SidebarListItem">
                                <AiOutlineUsergroupAdd />
                                Resource-Performance
                            </li>
                        </ul>
                    </div>

                    <div className="SidebarMenu">
                        <h3 className="SidebarTitle">Event Log</h3>
                        <ul className="SidebarList">
                            <li className="SidebarListItem">
                                <AiOutlineUpload />
                                Upload 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar
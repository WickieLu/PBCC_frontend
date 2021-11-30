import React, { Component } from 'react';
import { MenuItems } from './Menuitems'
import { Button } from '../Button';
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">RBCC Group02</h1>

                {/*This is the a menu icon which is visible when the scrreen size is too small. Use the Font Awesome CDN(check public/index.html)*/}
                <div className="menu-icon" onClick={this.handleClick}>
                    {/*change the menu icon from hamburger bars to X by clicking, click again it goes back*/}
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {/*Here go through all the data in the array, then utilize map, finally return a new array */}
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}> 
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}     
                </ul>
                <Button>Button</Button>
            </nav>
        )
    }
}

export default Navbar
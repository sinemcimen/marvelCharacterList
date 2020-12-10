import React from 'react';
import '../main.css';
import logo from '../image/marvelLogo.png'

export class Header extends React.Component{
    render(){
        return(
            <div className="topHeader">
                <div className="pageLogo"><img src={logo} className="topLogo"/></div>
            </div>
        )
    }
}
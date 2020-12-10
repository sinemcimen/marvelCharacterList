import React from 'react';
import '../main.css';
import pageBack from '../image/bg.jpg';

export class PageTitle extends React.Component{
    render(){
        return(
            <div className="breadCrumbs">
                <div className="dark"></div>
                <div className="background-image">
                    <img src={pageBack} className="breadCrbs"/>
                </div>
                <div className="crumbs">
                    <h1>MARVEL CHARACTERS</h1>
                </div>
                    
                
            </div>
        )
    }
}
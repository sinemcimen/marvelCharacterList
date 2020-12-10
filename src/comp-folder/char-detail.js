import React from 'react';
import '../main.css';
import {useLocation} from 'react-router-dom';
import { MD5 } from 'crypto-js';
import react, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function CharDetail() {
    let location = useLocation()
    console.log(location)
    const[comics, setComics] = useState([])
    const[loading, setLoading] = useState(true)
    console.log(location)

    const getComics = async () => {
        const ts = Math.floor(new Date().getTime()/1000.0).toString();
        const apikey = "dc4bd0eeff85fd5891311cb86cc0bee2";
        const secretKey = "159f5be2938b57d605f20e5908a54df9df9347f5";

        const token = MD5(ts+secretKey+apikey).toString();

        await fetch(location.state.resourceURI+"/comics?ts="+ts+"&apikey="+apikey+"&hash="+token)
        .then(response => response.json()
        .then(data => {setComics(data.data.results);  console.log(data.data.results);setLoading(false)}))
    }
    console.log(getComics);
    useEffect(() => {getComics()}, []);
    return(
        <div className="detail-page full-container">
            <div className="skew">
            <div className="container">
                <div className="charPic"><img src={location.state.thumbnail.path+"/portrait_incredible."+location.state.thumbnail.extension}/></div>
                <div className="charName">{location.state.name}</div>
                <div className="desc">{location.state.description}</div>
                
                <h1 className="comTitle"><Link to="/" className="homeLink">Home</Link> / COMICS</h1>
                <div className="detailCom">{comics.map(x => (<div>
                    <img className="comList" src={x.thumbnail.path+"."+x.thumbnail.extension}/>
                    <br/>
                    <p>{x.title}</p>
                     </div>))}

                </div>
            </div>
            </div>
        </div>
    );
}

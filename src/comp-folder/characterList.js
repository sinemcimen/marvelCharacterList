import { MD5 } from 'crypto-js';
import react, { useEffect, useState } from 'react'
import '../main.css';
import {PageTitle} from './headerPageTitle';
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroller';

export default function MChrcts() {
    const [chars, setCharacterData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const [hasMoreCharacter, setHasMoreCharacter] = useState(true);

    const GetCharacters = async () => {
  
      const url = "https://gateway.marvel.com/v1/public/characters?limit=30&";
      const ts = Math.floor(new Date().getTime()/1000.0).toString();
      const apikey = "dc4bd0eeff85fd5891311cb86cc0bee2";
      const secretKey = "159f5be2938b57d605f20e5908a54df9df9347f5";
    
      const token = MD5(ts+secretKey+apikey).toString();
    
      if(hasMoreCharacter == true){
        await fetch(url+"offset="+offset+"&ts="+ts+"&apikey="+apikey+"&hash="+token)
      .then(response => response.json())
      .then(data => {const characters = data.data.results
        console.log(characters);
        setCharacterData(chars.concat(characters));
        console.log("charsssssssss: ", chars)
        setLoading(false);
        if (offset != 1500) {
          setOffset(offset+30)
        }
        else{
          setHasMoreCharacter(false)
        }
      })
      }
      
    }

    var items = [];
  chars.map(x => {
    items.push(<Link to={{
      pathname:"/character/"+x.id,
      state: x
    }}><div className="characterCard" key={x.id}>
        <div className="cards-pic"><img src={x.thumbnail.path+"/landscape_xlarge."+x.thumbnail.extension} alt={x.name}/></div>
        <div className="card-ch-name">{x.name}</div>
    </div>
    </Link>)
  })

  useEffect(() => {GetCharacters()}, [])

        return(
        <div className="full-container">
        <PageTitle/>
          <div className="container">
            <div className="ch-title">MARVEL CHARACTERS LIST</div>
            {loading ? "LOADING" :<InfiniteScroll
                pageStart={0}
                loadMore={GetCharacters}
                hasMore={hasMoreCharacter}
                loader={<div className="loader" key={0}>Loading ...</div>}> {items}
                  
                </InfiniteScroll>}
          </div>
        </div>
        )
    }
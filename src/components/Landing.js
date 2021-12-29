import React,{useEffect,useState} from 'react';

// components 
import Coin from './Coin';
import Loading from './Loading';

// Api
import { getCoin } from '../services/api';

// style 
import {
     Container,
     Name,
     Symbol,
     Currentprice,
     Changeprice,
     Marketcap
}from "./landingElement";

import {Header,
Searchbox,
Div
} from "./landingElement"

const Landing = () => {

     const [coin , setCoin] = useState([]);
     const [search , setSearch] = useState("");

     useEffect(()=>{
          const fetchAPI = async ()=>{
               const data = await getCoin();
               console.log(data);
               setCoin(data)
          }
          fetchAPI();
     },[])

     const changeHnadler= event=>{
          setSearch(event.target.value)
     }

     const searchCoin = coin.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

     return (
          <div>
               <Header>Digital currency</Header>
               <Searchbox type="text" placeholder="Search ..." value={search} onChange={changeHnadler} />
               {coin.length ? 
                    <Div>
                         {searchCoin.map(coin => <Coin 
                              key={coin.id}
                              name={coin.name}
                              symbol={coin.symbol}
                              img = {coin.image}
                              price = {coin.current_price}
                              marketcap ={coin.market_cap}
                              pricechange = {coin.market_cap_change_percentage_24h}
                         />)}
                    </Div>
                    :<Loading/>
               }
                     
               
               
          </div>
     );
};

export default Landing;
import React from 'react';

import {
     Container,
     Image,
     Name,
     Symbol,
     Currentprice,
     Changeprice,
     Marketcap
}from "./coinElement";

const Coin = (props) => {
     return (
          <div>
               
               <Container>
                    <Image src={props.img} alt="imgcoin" />
                    <Name>{props.name}</Name>
                    <Symbol>{props.symbol.toUpperCase()}</Symbol>
                    <Currentprice>${props.price.toLocaleString()}</Currentprice>
                    < Changeprice changeprice = {props.pricechange} > {props.pricechange.toFixed(2)} %</Changeprice>
                    <Marketcap>${props.marketcap.toLocaleString()} </Marketcap>

               </Container>

          </div>
     );
};

export default Coin;
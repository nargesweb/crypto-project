import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 15px 20px;
    color: #272c30;
    text-align : left;
    border : 1px solid #e5e5e5;
    border-radius: 5px;
    margin: 20px;
    box-shadow: -3px 3px 10px #e6e6e6;
    background : #fff;
`;

export const Image = styled.img `
     width :30px;
`;

export const Name = styled.span `
     width: 140px;
    margin-left : 40px;
`;

export const Symbol = styled.span `
     width: 100px;
`;

export const Currentprice = styled.span `
     width: 100px;
`;

export const Changeprice = styled.span `
     width: 100px;
     font-weight: 600;
     color :${props =>(props.changeprice > 0 ? "#1d5e19" : "#a30000")}
`;
export const Marketcap = styled.span ``;
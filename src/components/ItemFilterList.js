import styled from "styled-components";
import Product from "./Product"
import React from "react";
import { popularProducts } from "../data";
import { MyCartContext } from "./Context";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`



const ItemFilterList = () => {
    const { itemFilterList } = MyCartContext()

        return (
            <Container>
            {
            itemFilterList.length >= 1 
            ? itemFilterList.map((item, index) => 
            < Product product={item} key={index}/>)
             : popularProducts.map((item, index) => 
             < Product product={item} key={index}/>)
             }
             </Container>     
        )
    
}

export default ItemFilterList
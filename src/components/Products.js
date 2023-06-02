import styled from "styled-components";
import Product from "./Product"
import React from "react";
import { popularProducts } from "../data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`



const Products = () => {
    return(
        <Container>
            {
            popularProducts.map((item, index) =>  
            < Product product={item} key={index}/>)
            }
        </Container>
        
    )
}

export default Products;
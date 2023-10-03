import styled from "styled-components";
import { categories } from "../data"
import CategoryItem from "./CategoryItem";
import {mobile} from "../responsive"
import React from "react";
import { useSwiper } from 'swiper/react';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({padding: "0px", flexDirection:"column"})}
`;

const Categories = () => {
    const swiper = useSwiper();

    return (
        <>
    <Container>
        {
        categories.map((item)=>
            <CategoryItem item={item} key={item.id}/>
    )}
    </Container>
    
    {/* <button onClick={() => swiper.slideNext()}>Slide to the next slide</button> */}


    </>
    )
};

export default Categories; 
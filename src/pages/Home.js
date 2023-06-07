import Slider from '../components/Slider';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
    width: 100%;
    height: 100%;
`

const Home = ()=>{
    return(
        <Overlay>
            <Announcement/>
            <Navbar type="Home"/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Overlay>
    )
}

export default Home;
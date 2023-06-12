import Slider from '../components/Slider';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import React from "react";

const Home = ()=>{
    return(
        <>
            <Announcement/>
            <Navbar type="Home"/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default Home;
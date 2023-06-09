import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';
import {mobile} from "../responsive";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MyCartContext } from './Context';

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2,justifyContent: "center"})}
`
const Language = styled.span`
    font-size: 16px;
    cursor: pointer;
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    outline: none;

    ${mobile({width: "50px"})}
`
const Logo = styled.h1`
    font-weight: bold;
    background-color: var(--color-1);
    background-image: var(--gradient);
    background-size: 200% auto;
    background-position: 200% center;
    background-position-x: 200%;
    animation: bg 4s linear forwards;
    
    ${mobile({fontSize: "24px"})}
`
const MenuIcon = styled(Link)` 
    font-size: 16px;
    color: black;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;

    &:hover {
        color: blue;
    }
`

const MenuIconActive = styled(Link)` 
    font-size: 16px;
    color: black;
    cursor: pointer;
    margin-left: 15px;
    // text-decoration: none;
    background-color: #ffd100;
    border-radius: 50px; 
    padding: 10px;
    transition: all 0.3s;
    // transform: translate(100px, 0px)
    &:hover {
        background-color: white;
        color: black;
        box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.5);
    }
`

const TextScroll = styled.span`
    position: fixed;
    display: ${props => props.y === true ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    top: 50%;
    // right: 1%;
    width: 50px;
    z-index: 100;
    transform: translate(0px, 0px);
    transition: 850ms;
`

const WishListScroll = styled.span`
    position: fixed;
    display: ${props => props.overlay === true ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    top: 56%;
    // right: 5%
    width: 50px;
    z-index: 100;
    transform: ${props => props.show > 0 ? 'translate(0px, 0px)' : 'translate(100px, 0px)'};
    transition: 850ms;
    }
`

const Navbar = ({type})=>{

    const {chooseCart,itemFilterList,
        setShowCart,showCart,
        showOverlay
    } = MyCartContext()

    const fnText = ()=>{
        if (chooseCart.length > 0){
            if(window.scrollY >= 500) setShowCart(true)
            else setShowCart(false)
    }
        
    }
    window.addEventListener('scroll', fnText);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search..."/>
                        <SearchIcon style={{color: "gray",fontSize:25,cursor: "pointer"}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>TG SNEAKER.</Logo>
                </Center>
                <Right>
                    <MenuIcon to="/">HOME</MenuIcon>
                    <MenuIcon to="/Register">REGISTER</MenuIcon>
                    <MenuIcon to="/Login">SIGN IN</MenuIcon>
                    <MenuIcon to="/Cart">
                        <Badge badgeContent={chooseCart.length} color="primary">
                            <ShoppingCartIcon/>
                        </Badge>
                    </MenuIcon>
                    {type === "Home" && 
                 <>
                    { chooseCart.length >= 1 && <>
                        { showCart === true &&
                        <TextScroll y={showCart} show={chooseCart.length}>
                        <MenuIconActive to="/Cart">
                            <Badge badgeContent={chooseCart.length} color="primary">
                                <ShoppingCartIcon/>
                            </Badge>
                        </MenuIconActive>
                        </TextScroll>}
                        </>
                    }
                        <WishListScroll show={itemFilterList.length} overlay={showOverlay}>
                            <MenuIconActive to="/ProductList">
                                <Badge badgeContent={itemFilterList.length} color="primary">
                                    <FavoriteIcon/>
                                </Badge>
                            </MenuIconActive>
                        </WishListScroll>
                 </>
                }
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React from "react";
import { MyCartContext } from "./Context";
import { Link } from "react-router-dom"; 

const Info= styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
`

const Container = styled.div`
    flex: 1;
    position: relative; // คือกำหนดตำแหน่งแรกของ element ให้ตามที่เรียงไว้แต่แรก
    margin: 5px;
    min-width: 310px;
    max-width: 310px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;

    &:hover ${Info}{ // คือรับ props จาก Info ด้านบนที่เป็น <div>
        opacity: 2;
    }
    &:hover img{
        
        transform: scale(1.1);
    }

`
const Circle= styled.div`
    width: 210px;
    height: 210px;
    border-radius: 50%;
    box-shadow: 2px 2px 0px 2px rgba(255, 174, 0, 0.5);
    position: absolute;
`

const Image= styled.img`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    transform: scale(1);
    z-index: 3;
    object-fit: cover;
    transition: all 0.5s ease;
`
const Icon= styled.span`
    width: 45px;
    height: 45px;
    border-radius: 20%;
    background-color: #ffd100;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 7px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

// const Text= styled.div`
//     position: absolute;
//     z-index: 10;
//     bottom: 10%;
//     color: red;
//     font-weight: 800;
// `




const Product = ({product}) => {  // product คือรับ props มาจาก products 
    
    const {addToCart,chooseItem,chooseCurrentItem,setShowCart,showCart} = MyCartContext();
    // const { image } = product ; // props คือค่าที่ส่งมา และ { image คือดึงเฉพาะตัวที่จะใช้มา }

    return (
        <Container>
            <Circle/>
            <Image src={product.image} />
            <Info>
                <Icon onClick={()=>{addToCart(product);setShowCart(true)}}>
                    <ShoppingCartOutlinedIcon/>
                </Icon>
                <Link to="/Product" style={{color: "black"}}>
                    <Icon onClick={()=>{chooseItem(product)}}>
                        <SearchOutlinedIcon/>
                    </Icon>
                </Link>
                
                <Icon onClick={()=>{
                    chooseCurrentItem(product)}}>
                    <FavoriteBorderOutlinedIcon/>
                </Icon>      
            </Info>
        </Container>
    )
}

export default Product;
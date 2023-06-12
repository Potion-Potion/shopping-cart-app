import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React, { useEffect, useState } from "react";
import { MyCartContext } from "./Context";
import { Link } from "react-router-dom";
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { Oval } from 'react-loader-spinner'

const Info = styled.div`
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
    position: relative;  // คือกำหนดตำแหน่งแรกของ element ให้ตามที่เรียงไว้แต่แรก
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
        // transform: scale(1.2)
        ${props => props.show === false && 'transform: scale(1.2)'}
    }

`
const Circle = styled.div`
    width: 210px;
    height: 210px;
    border-radius: 50%;
    box-shadow: 2px 2px 0px 2px rgba(255, 174, 0, 0.5);
    position: absolute;
`

const Image = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    transform: scale(1);
    z-index: 1;
    object-fit: cover;
    transition: all 0.5s ease;
`
const Icon = styled.span`
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

const CheckContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
`

const CheckCart = styled.div`
    width: 50%;
    height: 70%;
    background-color: white;
    border-radius: 5%;
    overflow: hidden;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const CheckInfoCon = styled.div`
    // background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 60%;
    gap: 50px;
`
const CheckInfo = styled.div`
`

const CheckImage = styled.img`
    max-width: 300px;
    height: 80%;
    object-fit: cover;
    `

const CheckTitle = styled.h2`
`

const CheckDesc = styled.h4`
    margin-top: 10px;
    display: flex;
    gap: 10px;
`

const CheckWrap = styled.div`
    // background-color: green;
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: Column;
    // margin-top: 20px;
    // padding: 20px;
    // margin: 20px 20px;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 3px;
`

const CheckBtn = styled.button`
    height: 100px;
    width: 100%;
    background-color: ${props => props.color};
    font-size: 30px;
    font-weight: 500;
    border: none;
    color: white;
    cursor: pointer;
`

const Close = styled.button`
    width: 100px;
    height: 100px;
    z-index: 99;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 15%;
    right: 15%;
    font-size: 50px;
    font-weight: bold;
    border: 3px solid black;
    cursor: pointer;

`

const AmountContainer = styled.div`
    display: flex;
    // background-color: red;
    position: relative;
    // height: 100px;
    align-items: center;
    font-weight: 700;
    // width: 500px;
    // height 100px;
    gap: 5px;
`

const Amount = styled.div`
    width: 30px;
    max-height: 30px;
    border-radius: 10px;
    // border: 1px solid teal;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`



const Product = ({ product }) => {  // product คือรับ props มาจาก products 

    const { addToCart, chooseItem,
        chooseCurrentItem, setShowCart,
        setShowOverlay, showOverlay,
        toggleWishList, itemWishlist,
        addWishListCart,timeLoading,loading
    } = MyCartContext();
    // const { image } = itemWishlist ; // props คือค่าที่ส่งมา และ { image คือดึงเฉพาะตัวที่จะใช้มา }


    // async function test(item) {
    //     try {
    //         setLoading(true);
    //         setTimeout(()=>{
    //         addWishListCart(item);
    //         setShowOverlay(false);
    //         setLoading(false);
    //         setShowCart(true);
    //         }, 2000);
            
    //         } catch (error) {
    //         console.log(error);
    //     }
    // }



    return (
        <Container show={showOverlay}>
            {showOverlay === true && itemWishlist.map((item) => (
        <CheckContainer>
            <Close onClick={() => { setShowOverlay(!showOverlay); }}>
                X
            </Close>
            <CheckCart>
                {loading === true ?
                <Oval
                    height={150}
                    width={150}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                /> :
                
                loading ===  false &&
                    <CheckWrap>
                        <CheckInfoCon style={{ marginBottom: '20px' }}>
                            <CheckImage src={item.image} />
                            <CheckInfo>
                                <CheckTitle>
                                    Fashion Sneaker
                                </CheckTitle>
                                <CheckDesc>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                </CheckDesc>
                                <CheckDesc>
                                    $ {item.price}.00
                                </CheckDesc>
                            </CheckInfo>
                        </CheckInfoCon>
                        <Hr />
                        <CheckInfoCon>
                            <CheckInfo flex={"flex"} style={{ padding: '20px' }}>
                                <AmountContainer>
                                    <Add onClick={() => {
                                        toggleWishList(item, "increment")
                                    }}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: "black",
                                            color: 'white',
                                            borderRadius: "20px",
                                            padding: '3px'
                                        }} />
                                    {itemWishlist.length === 0
                                        ? <Amount>0</Amount>
                                        : <Amount>{item.quantity}</Amount>
                                    }
                                    <Remove onClick={() => {
                                        if (itemWishlist) {
                                            toggleWishList(item, "Decrement")
                                        }
                                    }}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: "black",
                                            color: 'white',
                                            borderRadius: "20px",
                                            padding: '3px'
                                        }} />
                                    <>
                                        {item.quantity === 10 &&
                                            <div style=
                                                {{
                                                    position: "absolute",
                                                    color: 'red',
                                                    top: "40px",
                                                    left: '47px'
                                                }}>
                                                Full
                                            </div>
                                        }
                                    </>
                                </AmountContainer>
                            </CheckInfo>
                            <CheckInfo style={{ padding: '20px' }}>
                                <CheckDesc style={{ fontSize: '20px' }}>{<h4 style={{ color: 'red' }}>{item.quantity}</h4>} items in Your Cart</CheckDesc>
                                <CheckDesc style={{ fontSize: '20px' }}>
                                    subtotal: $
                                    <h4 style={{ color: 'red' }}>{item.quantity * item.price}</h4>
                                </CheckDesc>
                            </CheckInfo>
                        </CheckInfoCon>
                        {/* <Link to="/Cart">
                        </Link> */}
                            <CheckBtn color={'green'} onClick={() => {
                                timeLoading(item);
                            }}>
                                CONFIRM & ADD ITEMS TO CART
                            </CheckBtn>
                        <CheckBtn color={'black'} style={{ marginTop: '20px' }}
                            onClick={() => { setShowOverlay(!showOverlay); }}>
                            CONTINUE SHOPPING
                        </CheckBtn>
                    </CheckWrap> } 
            </CheckCart>
        </CheckContainer>
    ))}
            <Circle />
            <Image src={product.image} />
            {showOverlay === false &&
                <Info>
                    <Icon onClick={() => {
                        addToCart(product);
                    }}>
                        <ShoppingCartOutlinedIcon />
                    </Icon>
                    <Link to="/Product" style={{ color: "black" }}>
                        <Icon onClick={() => { chooseItem(product) }}>
                            <SearchOutlinedIcon />
                        </Icon>
                    </Link>

                    <Icon onClick={() => {
                        chooseCurrentItem(product)
                    }}>
                        <FavoriteBorderOutlinedIcon />
                    </Icon>
                </Info>
            }
            {/* </CheckCart> */}
        </Container>
    )
}

export default Product;
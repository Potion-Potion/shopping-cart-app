import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import {Link} from "react-router-dom";
import {MyCartContext} from "../components/Context";

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    padding: 20px;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: 2px solid black;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
    &:hover {
        background-color: black;
        color: white;
    }
`
// const ButtonShop = styled.button`
//     padding: 10px;
//     font-weight: 600;
//     cursor: pointer;
//     border: ${props=>props.type === "filled" && "none"};
//     background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
//     color: ${props=>props.type === "filled" && "white"};
// `

const TopTexts = styled.div`
`

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
padding-right: 40px;
margin: 0 5px;
color: black;
&:hover{ color: blue;}
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Empty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
    font-weight: bold;
`

const Info = styled.div`
    margin-top: 5px;
    flex: 3;
`

const DeleteBox = styled.div`
    display: flex;
    justify-content: right;
    padding: 0px 5px 0px 0px;
`

const DeleteButton = styled.button`
    border: solid 1px black;
    outline: none;
    color: black;
    font-weight: 600;
    padding: 7px 4px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: red;
        color: white;
        border: solid 1px red;
    }
`

const Product = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    height: 200px;
`
const Image = styled.img`
    width: 200px;
    object-fit: cover;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
`
const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize = styled.span``

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 10px 12px;
`
const ProductMaxBG = styled.div`
    display: flex;
    align-items: center;
`

const ProductMax = styled.span`
    position: absolute;
    margin-left: 5px;
    font-size: 24px;
    color: red;
    padding: 10px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`



const Cart = () => {
    const {chooseCart,toggleQuantity,
        setChooseCart,setItemFilterList,
        itemFilterList,itemWishlist} = MyCartContext()
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <Link to="/ProductList">
                        <TopButton onClick={()=>{setItemFilterList("")}}>CONTINUE SHOPPING</TopButton>
                    </Link>
                    <TopTexts>
                            <Link to="/Product">
                                <TopText>Shopping Bag ({itemWishlist.length})</TopText>
                            </Link>
                            <Link to="/ProductList">
                                 <TopText>Your Wishlist ({itemFilterList.length})</TopText>
                            </Link>   
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                    <DeleteBox>
                        <DeleteButton onClick={()=>{setChooseCart([])}}>CLEAR ALL</DeleteButton>
                    </DeleteBox>                     
                        {chooseCart.map((item, index)=>{
                                return(
                                    <>
                                    <Product key={index}>
                                        <ProductDetail>
                                            <Image src={item.image}/>
                                            <Details>
                                                <ProductName><b>Product:</b>  JESSIE THUNDER SHOES</ProductName>
                                                <ProductId><b>ID:</b>  93813718293</ProductId>
                                                <ProductColor color="blue"/>
                                                <ProductSize><b>Size:</b>  37.5</ProductSize>
                                            </Details>
                                        </ProductDetail>
                                        <PriceDetail>
                                            <ProductAmountContainer>
                                               <Add onClick={()=>{toggleQuantity(item,"increment")}} style={{cursor: "pointer",color: "white",background: "gray",borderRadius: "50%"}}/>
                                               <ProductAmount>
                                                    {item.quantity}
                                               </ProductAmount>
                                               <Remove onClick={()=>{toggleQuantity(item,"Decrement")}} style={{cursor: "pointer",color: "white",background: "gray",borderRadius: "50%"}}/> 
                                               {item.quantity === 10 && 
                                                <ProductMaxBG>
                                                    <ProductMax>Max</ProductMax>
                                                </ProductMaxBG>
                                                }
                                            </ProductAmountContainer>
                                            <ProductPrice>$ {item.price*item.quantity}</ProductPrice>
                                        </PriceDetail>
                                    </Product>
                                    <Hr/>
                                    </>
                        )})}{chooseCart.length === 0 && <Hr/>}
                        {chooseCart.length === 0 &&<Empty>There are no items in this cart</Empty>}
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
    
}


export default Cart;
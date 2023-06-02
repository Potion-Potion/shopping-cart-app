import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import React from "react";
import { MyCartContext } from "../components/Context";
import {Link} from "react-router-dom";


const Container=styled.div``
const Wrapper=styled.div`
    padding: 50px;
    display: flex;
    margin: 0px 150px;
`
const ImgContainer=styled.div`
    flex: 1;
`
const Image=styled.img`
    width: 100%
    height: 90vh;
    object-fit: cover;
`
const InfoContainer=styled.div`
    flex: 2;
    padding: 0px 50px;
`
const NumberButton=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`
const NumberPage=styled.button`
    cursor: pointer;
    margin: 0px 7px;
    padding: 5px;
    width: 30px;
    font-size: 15px;
    border-radius: 30%;
    border: 2px solid teal; 
    background-color: white;
    color: black;
    &:hover{
        background-color: teal;
        color: white;
    }
` 

const Title=styled.h1`
    font-weight: 200;
`
const Desc=styled.p`
    margin:20px 0px;
`
const Price=styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`

`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 3px;
    cursor: pointer;
`
const FilterSize = styled.select``
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    display: flex;
    width: 30%;
    // align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    position: relative;
    height: 100px;
    // background-color: red;
    // align-items: center;
    font-weight: 700;
    width: 50%;
    height 100px;
`
const Amount = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 12px 20px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Product = () =>{

    const {toggleWishList,itemWishlist,addWishListCart} = MyCartContext();

    return(
        <Container>
            <Navbar/>
            <Announcement/>
            { itemWishlist.length > 0 ?
            itemWishlist.map((item) => 
            <Wrapper>
                <ImgContainer>
                    <Image src={item.image}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Fashion Sneaker</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                         tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud
                    </Desc>
                    <Price>
                        $ 50
                    </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="darkblue"></FilterColor>
                            <FilterColor color="gray"></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>US</FilterSizeOption>
                                <FilterSizeOption>UK</FilterSizeOption>
                                <FilterSizeOption>EU</FilterSizeOption>
                                <FilterSizeOption>JPN</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                            <AmountContainer>
                            {/* <div style={{backgroundColor: 'red'
                            ,display: 'flex',
                            height: "100%",
                            width: '100%'

}}> */}
                                    <Add onClick={()=>{
                                            toggleWishList(item,"increment")  
                                        }}
                                        style={{cursor: "pointer"}}/>
                                        {itemWishlist.length === 0
                                        ? <Amount>0</Amount>
                                        : <Amount>{item.quantity}</Amount>
                                        }
                                    <Remove onClick={()=>{
                                        if (item) {
                                            toggleWishList(item,"Decrement")
                                        }
                                    }} 
                                    style={{cursor: "pointer"}}/>  
                                    { item.quantity === 10 &&
                                    <div style=
                                    {{position: "absolute",
                                    color: 'red',
                                    top: "40px",
                                    left: '32px'
                                    }}>
                                    Full
                                    </div>
                                    }
                            {/* </div> */}
                            </AmountContainer>
                        <Link to="/Cart">
                        <Button onClick={()=>{addWishListCart(item)}}>ADD TO CART</Button>
                        </Link>
                       
                    </AddContainer>
                </InfoContainer>
                </Wrapper>
             ): itemWishlist }
            <Hr/>
            <Newsletter/>
            <Footer/>
        </Container>

    )
}

export default Product;
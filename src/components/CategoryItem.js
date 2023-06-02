import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom"; 
import { popularProducts } from "../data";
import { MyCartContext } from './Context';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 13px;
    object-fit: cover;   // การทำให้รูปได้สัดส่วน
`;
const Info = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`; 
const BgTitle = styled.div`
    padding: 10px;
    background-color: rgb(60, 60, 60,0.8);
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`
const Title = styled.h1`
    color: white;
    text-align: center;
    
`;
const Button = styled.button`
    position: absolute;
    border:none;
    padding: 10px; 
    background-color: white;
    color: gray;
    cursor: pointer;
    margin-top: 30px;
    transition: all 0.2s;
    &:hover{
        transform: scale(1.1);
        font-size: 14px;
        font-weight: 800;
        color: black;
        border-radius: 5px;
    }
`;

const Bgbtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const CategoryItem = ({item}) => { // ใส่ {เพื่อที่จะเข้าถึง property แต่ละตัว}
    const { setItemFilterList } = MyCartContext()
    const filterItem = (item)=>{
        const filterItems = popularProducts.filter((items) =>{
            return(
            items.type === item.type
        )}) 
        setItemFilterList(filterItems);
    }
    
    return (
        <Container>
            <Image src={item.image} alt="image"/>
            <Info>
                <BgTitle>
                <Title>{item.title}</Title>
                </BgTitle>
                <Link to="/ProductList" style={{color: "black"}}>
                    <Bgbtn>
                        <Button onClick={()=>{filterItem(item)}}>SHOP NOW</Button>
                    </Bgbtn>
                </Link>
            </Info>
        </Container>
    )
}

export default CategoryItem
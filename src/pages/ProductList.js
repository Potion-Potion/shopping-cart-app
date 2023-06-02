import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ItemFilterList from "../components/ItemFilterList";
import React from "react";
import { popularProducts } from "../data";
import {MyCartContext} from "../components/Context";

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option`
`

const ProductList = () => {

    const { setItemFilterList} = MyCartContext()

    const filterProducts = (e)=>{
        const value = e.target.value
        value !== "All"
        ? setItemFilterList(popularProducts.filter(item => item.type === value))
        : setItemFilterList("")
    }

    return(
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Running Sneaker</Title>
            <FilterContainer>
                <Filter>
                <FilterText>Filter Products :</FilterText>
                <Select onChange={filterProducts}>
                    <Option disabled selected>
                        Style
                    </Option>
                    <Option>All</Option>
                    <Option>Running</Option>
                    <Option>Training</Option>
                    <Option>Fashion</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>US</Option>
                    <Option>UK</Option>
                    <Option>EU</Option>
                    <Option>JPN</Option>
                </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products :</FilterText>
                    <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <ItemFilterList/>
            <Newsletter/>
        </Container>
    )
}

export default ProductList;
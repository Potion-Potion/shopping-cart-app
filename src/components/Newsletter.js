import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components'
import React from "react";

const Container = styled.div`
    height: 43vh;
    background-color: #fcf5f5;
    display: flex;
    margin: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    margin: 30px;
    font-size: 50px;
`

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    height: 40px;
    background-color: white;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    outline: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: blue;
    color: white;
    cursor: pointer;
`

const Newsletter = () => {
    return(
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Your email" type="email"/>
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    )

}

export default Newsletter;
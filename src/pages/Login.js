import styled from "styled-components"
import {mobile} from "../responsive"
import React from "react";
import {Link} from "react-router-dom"

const NavContainer = styled.div`
    width: 100vw;
    height: 100vh;
`
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Right = styled.div`
    flex: 1;
    margin: 25px 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "flex-start"})};
`
const MenuIcon = styled(Link)` 
    z-index: 90;
    font-size: 16px;
    color: black;
    cursor: pointer;
    margin-left: 30px;
    text-decoration: none;
    &:hover {
        color: blue;
    }
` 

const Wrapper = styled.div`
    min-width: 280px;
    text-align: center;
    padding: 20px;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 80%;
    margin:10px 0;
    padding: 10px;
    outline: none;
`

const Button = styled.button`
    border:none;
    width: 40%;
    padding: 15px 20px;
    background-color: black;
    color: white;
    cursor: pointer;
`




const Login = () => {
    return (
        <NavContainer>
        <Right>
            <MenuIcon to="/">HOME</MenuIcon>
            <MenuIcon to="/Register">REGISTER</MenuIcon>   
            <MenuIcon to="/Login">SIGN IN</MenuIcon>
        </Right>
        <Container>
        <Wrapper>
                <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password" type="password"/>
                <Button>LOGIN</Button>
                <Link to="/Register" style={{marginTop: "15px",color: "black"}}>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link to="/Register" style={{marginTop: "5px",color: "black"}}>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
        </Container>
        </NavContainer>
    )

}

export default Login;
import styled from "styled-components";
import {mobile} from "../responsive"
import React, { useState } from "react";
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
    width: 40%;
    padding: 20px;
    background-color: white;
`
const Title = styled.h1`
    text-align: center;
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
// const Box = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex-wrap: wrap;
// `

const Error = styled.small`
    color: red;
    padding-top: 2px;
    
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:20px 10px 0px 0px;
    padding: 10px;
    outline: none;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    border:none;
    padding: 15px 20px;
    background-color: black;
    color: white;
    cursor: pointer
`



const Register = () => {

    const [name, setName] = useState("")
    const [lastName, setLastname] = useState("")
    const [userName, setuserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const [ErrorName, setErrorName] = useState("")
    const [ErrorLastName, setErrorLastName] = useState("")
    const [ErrorUserName, setErrorUserName] = useState("")
    const [ErrorEmail, setErrorEmail] = useState("")
    const [ErrorPassWord, setErrorPassWord] = useState("")
    const [ErrorConfirmPassWord, setErrorConfirmPassWord] = useState("")

const validationForm = (e) => {
    e.preventDefault()

    name.length <= 6 
    ? setErrorName("Name must be longer than 6 characters")
    : setErrorName("")        

    lastName.length <= 6
    ? setErrorLastName("Lastname must be longer than 6 characters")
    : setErrorLastName("")

    userName.length <= 6
    ? setErrorUserName("Username must be longer than 6 characters")
    : setErrorUserName("")
    
    email.includes("@") 
    ? setErrorEmail("")
    : setErrorEmail("Email is not valid")
    password.length <= 8
    ? setErrorPassWord("Name must be longer than 8 characters")
    : setErrorPassWord("")
    
    confirmPassword === password
    ? setErrorConfirmPassWord("")
    : setErrorConfirmPassWord("Passwords does not match")
    
}

    return(
            <NavContainer>
            <Right>
                <MenuIcon to="/">HOME</MenuIcon>
                <MenuIcon to="/Register">REGISTER</MenuIcon>   
                <MenuIcon to="/Login">SIGN IN</MenuIcon>
            </Right>     
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form onSubmit={validationForm}>
                            <Input placeholder="name" value={name} maxLength="20" onChange={e => setName(e.target.value)}/>
                            <Error>{ErrorName}</Error>

                            <Input placeholder="last name" value={lastName} maxLength="20" onChange={e => setLastname(e.target.value)} />
                            <Error>{ErrorLastName}</Error>

                            <Input placeholder="username" value={userName} maxLength="20" onChange={e => setuserName(e.target.value)}/>
                            <Error>{ErrorUserName}</Error>

                            <Input placeholder="email" type="email" value={email} maxLength="30" onChange={e => setEmail(e.target.value)}/>
                            <Error>{ErrorEmail}</Error>

                            <Input placeholder="password" type="password" maxLength="15" value={password} onChange={e => setPassword(e.target.value)}/>
                            <Error>{ErrorPassWord}</Error>
                       
                            <Input placeholder="confirm password" type="password" maxLength="15" value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)}/>
                            <Error>{ErrorConfirmPassWord}</Error>

                        <Agreement>
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b style={{textDecoration: "underline",cursor: "pointer"}}>PRIVACY POLICY</b>
                        </Agreement>
                        <Button type="submit">CREATE</Button>
                    </Form>
                </Wrapper>
            </Container>
            </NavContainer>
    
    )

}

export default Register;
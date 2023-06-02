import styled from 'styled-components'
import Facebook from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import React from "react";

const Container = styled.div`
    display: flex;
    
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex
`
const SocialIcon = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
`

const Left = styled.div`
    flex: 1;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    cursor: pointer;
    &:hover {
        color: blue;
        text-decoration: underline;
    }

`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
    cursor: pointer;
`

const Footer = () => {
    return(
        <Container>
            <Left>
                <Logo>TG.</Logo>
                <Desc>
                    LOREM IPSUM GENERATOR
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <TwitterIcon/>        
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <PinterestIcon/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Sneaker</ListItem>
                    <ListItem>Woman Sneaker</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style={{marginRight: "10px"}} />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style={{marginRight: "10px"}}/>+1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutlineIcon style={{marginRight: "10px"}}/>contact@TG.dev
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer;
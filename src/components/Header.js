import React,{useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { Fade } from "react-awesome-reveal";
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {
const [burgerStatus, setBurgerStatus] =useState(false)
const cars = useSelector(selectCars)


  return (
    
    <Container>
      <a>
        <img src='/images/logo.svg' alt=''/>
      </a>

      <Menu>
        {cars && cars.map((car,index) => (
        
        <a key={index} href='#'>{car}</a>
        ))}
       


      </Menu>
<RightMenu>
  <a href='https://shop.tesla.com/'>Shop</a>
  <a href='https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US'>Telsa Account</a>
  <CustomMenu onClick={() => setBurgerStatus(true)}/>
  
</RightMenu>
<BurgerNav show={burgerStatus} >
  <CloseWrapper onClick={() => setBurgerStatus(false)}>

  <CustomClose/>
  </CloseWrapper>
  

  <li><a href='https://www.tesla.com/models'>Model - S</a></li>
  <li><a href='https://www.tesla.com/model3'>Model - 3</a></li>
  <li><a href='https://www.tesla.com/modelx'>Model - X</a></li>
  <li><a href='https://www.tesla.com/modely'>Model - Y</a></li>

  
  <li><a href='https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=95621&range=200'>Existing Inventory</a></li>
  <li><a href='https://www.tesla.com/inventory/used/m3?arrangeby=plh&zip=95621'>Used Inventory</a></li>
  <li><a href='https://www.tesla.com/tradein'>Trade-In Inventory</a></li>
  <li><a href='https://www.tesla.com/cybertruck'>Cybertruck Inventory</a></li>
  <li><a href='https://www.tesla.com/roadster'>Roadster Inventory</a></li>
</BurgerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items: center;
  justify-content:space-between;
  padding:0 20px;
  top:0 ;
  left:0;
  right:0;
  z-index:1;
`

const Menu = styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;



a {
font-weight: 600;
text-transform:uppercase;
padding:0 10px;
flex-wrap:nowrap;
}

@media(max-width:768px) {
  display:none;
}

`
const RightMenu = styled.div`
display:flex;
align-items:center;

a {
  font-weight: 600;  
  text-transform:uppercase;
  margin-right:10px;
  
  
  }
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
text-align:start;
flex-direction:column;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s;

li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0, .2);

  a{
    font-weight:600
  }
}

`
const CustomClose = styled(CloseIcon)`
cursor:pointer;

`

const CloseWrapper =styled.div`
display:flex;
justify-content:flex-end;
`
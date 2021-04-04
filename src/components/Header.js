import React from 'react'
import styled from 'styled-components'
// import {Car} from '@styled-icons/boxicons-regular/Car'

class Header extends React.Component {

    render() {

        return( 

            <Container>
{/* <Car/> */}
<Button onClick={this.props.paginaHome}>Página Inicial</Button>
<Button onClick={this.props.paginaVendas}>Página Vendas</Button>
<Button onClick={this.props.paginaCompras}>Página Compras</Button>


            </Container>

        )
    }
}




export default Header



const Container = styled.div`
height:100px;
background-color:#33658A;
display:flex;
justify-content:space-evenly;



`


const Button = styled.button`
background-color:#33658A;
/* border: white; */
color:white;
font-weight:bold;
font-size:16px;
border: none;
&:hover{
cursor:pointer;
}


`
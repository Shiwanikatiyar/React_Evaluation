import { Button, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {AuthContext} from '../Context/AuthContextProvider'


const links = [
    {
        to: '/',
        label: 'HOME'
    },
    {
        to: '/login',
        label:'LOGIN'
    },
]


function Navbar() {


  return (
    <Container maxW={'100%'} border={'1px solid'} background={'lightpink'}style={{height: "60px"}}>
        <Flex justifyContent={'space-around'} py={'1em'}>
        {
            links?.map((link)=>(
                <Link to={link.to} key ={link.to}>{link.label}</Link>
            ))
        }
           <Button colorScheme='pink' variant={'outline'}> LOGOUT</Button>
        </Flex>
    </Container>
  )
}

export default Navbar
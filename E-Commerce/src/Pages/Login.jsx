import { Container,Input,Heading, VStack, Button } from '@chakra-ui/react';
import React, { useContext } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {AuthContext} from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom';

function Login() {
const [email, setEmail] = useState('');
const[password,setPassword] =useState('');



const {login,
    AuthDetails:{isLoggedIn},}= useContext(AuthContext)


async function handleClick(){
    try {
        let res = await axios ({
            method: "post",
            url:`https://reqres.in/api/login`,
            data : {
                email,password
            },
        })
        login(res?.data?.token)
    } catch (error) {
        console.log(error)
    }
}
if(isLoggedIn){
    return <Navigate to ='/' />
}
  return (
    <Container>
        <VStack spacing={4}>
        <Heading> Login Page</Heading>
        <Input placeholder='Enter your email'
        type='email'
        value={email}
        onChange={(e) =>{
            setEmail(e.target.value)
        }}
        size='lg' />
        <Input placeholder='Enter password'
        type='password'
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        size='lg' />
        <Button colorScheme='pink' variant={'outline'} onClick={handleClick} >Login</Button>
    
        </VStack>
    </Container>
  )
}

export default Login
import React from "react";
import {
    Box, 
    Button,
    Divider,
    FormControl, 
    Input, 
    InputGroup,  
    InputLeftElement, 
    Stack
   } from '@chakra-ui/react'   
import { LockIcon, EmailIcon } from '@chakra-ui/icons'


function Login () {
    return (
    <Box w='30%' mx='auto'>
     <form action="submit">
        <Stack spacing={3}>
            <FormControl isRequired>
            <InputGroup>
                <InputLeftElement children={<EmailIcon/>}/>
                <Input placeholder='Email'/>
            </InputGroup>
            </FormControl>
            <FormControl isRequired>
            <InputGroup>
                <InputLeftElement children={<LockIcon/>}/>
                <Input placeholder='Password'/>
            </InputGroup>
            </FormControl>
                        
            <Button type="submit" variant="solid" variantColor="red">Login</Button>
        </Stack>

     </form>
    </Box>

    )
}

export default Login
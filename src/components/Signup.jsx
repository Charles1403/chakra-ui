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
import { InfoIcon, LockIcon, EmailIcon } from '@chakra-ui/icons'


function Signup () {
    return (
    <Box w='30%' mx='auto'>
     <form action="submit">
        <Stack spacing={3}>
            <FormControl isRequired>
            <InputGroup>
                <InputLeftElement children={<InfoIcon/>}/>
                <Input placeholder='Firstname'/>
            </InputGroup>
            </FormControl>
            <FormControl isRequired>
            <InputGroup>
                <InputLeftElement children={<InfoIcon/>}/>
                <Input placeholder='Lastname'/>
            </InputGroup>
            </FormControl>
            <Divider />
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
                        
            <Button type="submit" variant="solid" variantColor="red">Sign up with Google</Button>
        </Stack>

     </form>
    </Box>

    )
}

export default Signup
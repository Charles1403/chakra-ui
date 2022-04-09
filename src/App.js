import { Box, Flex } from '@chakra-ui/react';
import './App.css';
import Form from './form';

function App() {
  return (
    <Flex direction='column' align='center' justify='center'>
        <Box w='100%' h='100%' mx='auto' my={100}>
        <Form />
    </Box>
    </Flex>
    
  );
}

export default App;

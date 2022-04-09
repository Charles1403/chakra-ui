import { Box,Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'

export default function Form() {
  return (
     <Box minHeight="100vh">
            <Tabs variant="enclosed-colored" isFitted>
                <TabList>
                    <Tab>Sign up</Tab>
                    <Tab>Log in</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Signup/>
                    </TabPanel>
                    <TabPanel>
                        <Login/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
     </Box>
  )
}

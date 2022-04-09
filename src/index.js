import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, theme } from "@chakra-ui/react";


const container = document.getElementById('root')
const root =  createRoot(container)

root.render(
  <React.StrictMode>
          <ChakraProvider resetCSS theme={theme}>
                <App />
            </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals()
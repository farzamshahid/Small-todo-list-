import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
const config = { initialColorMode: 'dark' }
const theme = extendTheme({ config })
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();

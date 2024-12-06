import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from './store';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
    <Provider store={store}>

      <App />
    </Provider>
    </ChakraProvider>
  </StrictMode>,
)

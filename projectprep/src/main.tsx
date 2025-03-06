import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { Provider } from './components/ui/provider'
import { ContextProviderEx } from './components/contextex'

const client=new QueryClient()

createRoot(document.getElementById('root')!).render(
  
    
    <QueryClientProvider client={client} > 
     <Provider> 
     <ContextProviderEx> 
    <App />
    </ContextProviderEx>
    </Provider>
    </QueryClientProvider>
    
 
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, client } from './App'
import './index.css'
import { ApolloProvider } from '@apollo/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
)

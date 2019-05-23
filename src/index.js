import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import App from './App';

const client = new ApolloClient({
  uri: 'https://mighty-peak-22601.herokuapp.com/', // production
});
// localhost:4000 in development

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <App />
      </ApolloHooksProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

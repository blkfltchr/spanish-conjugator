// import React from 'react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-boost';

import { HttpLink } from 'apollo-link-http';

// function Index() {
// const [token, setToken] = useState(
// const token =
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanc4YThjbHQwMDF6MDc2Nm16b20zMXh2IiwiaWF0IjoxNTU5MjM5NjM4LCJleHAiOjE1NTk4NDQ0Mzh9.WrGnSGyDvvu9cb3oau6lzvBsbUOmtVi0FSaNEssxx1o';
// );

// const link = new HttpLink({
//   uri: 'https://pacific-eyrie-99205.herokuapp.com/'
// });

// const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache()
// });

// const httpLink = createHttpLink({
//   uri: 'https://pacific-eyrie-99205.herokuapp.com/'
// });

// const ApolloApp = () => (
//   <ApolloProvider client={client}>
//     <ApolloHooksProvider client={client}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ApolloHooksProvider>
//   </ApolloProvider>
// );

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

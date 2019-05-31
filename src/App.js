import React, { useState } from 'react';
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from '../src/components/Layout/Header';
import Container from './components/Verb/Container';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';

// const httpLink = createHttpLink({
//   uri: 'https://pacific-eyrie-99205.herokuapp.com/'
// });

// const client = new ApolloClient({
//   uri: 'https://pacific-eyrie-99205.herokuapp.com/' // production
// });

// const httpLink = new HttpLink({
//   uri: 'https://pacific-eyrie-99205.herokuapp.com/'
// });

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       Authorization:
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanc4YThjbHQwMDF6MDc2Nm16b20zMXh2IiwiaWF0IjoxNTU5MjM5NjM4LCJleHAiOjE1NTk4NDQ0Mzh9.WrGnSGyDvvu9cb3oau6lzvBsbUOmtVi0FSaNEssxx1o'
//     }
//   };
// });

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   operation.setContext({
//     headers: {
//       Authorization:
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanc4YThjbHQwMDF6MDc2Nm16b20zMXh2IiwiaWF0IjoxNTU5MjM5NjM4LCJleHAiOjE1NTk4NDQ0Mzh9.WrGnSGyDvvu9cb3oau6lzvBsbUOmtVi0FSaNEssxx1o'
//     }
//   });

//   return forward(operation);
// });

// const client = new ApolloClient({
//   link: concat(authMiddleware, httpLink)
// });

// const client = new ApolloClient({
//   uri: 'https://pacific-eyrie-99205.herokuapp.com/',
//   request: async operation => {
//     //called on each requests
//     // const token =
//     // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanc4YThjbHQwMDF6MDc2Nm16b20zMXh2IiwiaWF0IjoxNTU5MjM5NjM4LCJleHAiOjE1NTk4NDQ0Mzh9.WrGnSGyDvvu9cb3oau6lzvBsbUOmtVi0FSaNEssxx1o';
//     operation.setContext({
//       headers: {
//         authorization: token ? token : null
//       }
//     });
//   }
// });

function App() {
  // const [isShowing, setIsShowing] = useState(false);
  const [level, setLevel] = useState(0);
  const [latam, setLatam] = useState(true);
  const [token, setToken] = useState('');

  // const httpLink = createHttpLink({
  //   uri: 'https://pacific-eyrie-99205.herokuapp.com/'
  // });

  // const authLink = setContext((_, { headers }) => {
  //   return {
  //     headers: {
  //       Authorization: token
  //     }
  //   };
  // });

  // const client = new ApolloClient({
  //   link: authLink.concat(httpLink),
  //   cache: new InMemoryCache()
  // });

  const client = token
    ? new ApolloClient({
        uri: 'https://pacific-eyrie-99205.herokuapp.com/',
        request: async operation => {
          //called on each requests
          // const token =
          // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanc4YThjbHQwMDF6MDc2Nm16b20zMXh2IiwiaWF0IjoxNTU5MjM5NjM4LCJleHAiOjE1NTk4NDQ0Mzh9.WrGnSGyDvvu9cb3oau6lzvBsbUOmtVi0FSaNEssxx1o';
          operation.setContext({
            headers: {
              authorization: token ? token : null
            }
          });
        }
      })
    : new ApolloClient({
        uri: 'https://pacific-eyrie-99205.herokuapp.com/' // production
      });

  const updateLatam = () => {
    setLatam(!latam);
  };

  const updateLevel = event => {
    setLevel(event.target.value);
  };

  const updateToken = tok => {
    setToken(tok);
  };

  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <div className="app">
          <Header />
          <div className="app-wrapper">
            {/* {isShowing ? (
                <div onClick={closeModalHandler} className="back-drop" />
              ) : null} */}
            {/* <div className="made-with-love" onClick={openModalHandler}>
                Made with
                <span role="img" aria-label="heart">
                  {'  '}
                  ❤️
                </span>
                in
                <span role="img" aria-label="colombia">
                  {'  '}
                  🇨🇴
                </span>
              </div>
              <Modal show={isShowing} close={closeModalHandler} /> */}
            <Route
              exact
              path="/"
              render={() => (
                <Container
                  latam={latam}
                  level={level}
                  updateLevel={updateLevel}
                  updateLatam={updateLatam}
                  token={token}
                />
              )}
            />
            {/* <Route path="/signup" component={Signup} /> */}
            <Route
              path="/signup"
              render={props => <Signup updateToken={updateToken} />}
            />
            <Route
              path="/login"
              render={props => <Login {...props} updateToken={updateToken} />}
            />
          </div>
        </div>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;

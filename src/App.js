import React, { useReducer, createContext } from 'react';
import Routes from './routes';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './services/apollo';

function reducer(state, action) {
  switch (action.type) {
    case 'changeLocation':
      return {
        lat: action.payload.lat,
        lng: action.payload.lng
      };
    case 'changePoc':
      return {
        ...state,
        poc: action.payload
      };
    default:
      return {
        ...state
      }
  }
}

export const AppContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, { lat: '', lng: '' })

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ApolloProvider client={apolloClient}>
          <div className="App">
            <Routes />
          </div>
      </ApolloProvider>
    </AppContext.Provider>
  );
};

export default App;

import React from 'react';
import MainTemplate from './templates/MainTemplate';
import Routes from './routes';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './services/apollo';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <MainTemplate>
          <Routes />
        </MainTemplate>
      </div>
    </ApolloProvider>
  );
};

export default App;

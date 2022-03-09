import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from './Router';
import { store, persistor } from './_redux/store';
import { StyleProvider } from './context/StyledContext';
import Header from './components/layouts/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StyleProvider>
          <>
            <Header />
            <main>
              <Router />
            </main>
            <footer></footer>
          </>
        </StyleProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

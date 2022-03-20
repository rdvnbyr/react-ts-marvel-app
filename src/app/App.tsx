import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from './Router';
import { store, persistor } from './_redux/store';
import { StyleProvider } from './context/styled-context';
import { AppProvider } from './context/app-context';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StyleProvider>
          <AppProvider>
            <Header />
            <main
              style={{
                minHeight: '100vh',
                marginTop: '8rem',
              }}
            >
              <Router />
            </main>
            <Footer />
          </AppProvider>
        </StyleProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

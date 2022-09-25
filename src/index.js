import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import App from './App';
import { productsFetch } from './redux/features/productSlice';
import { fetchJewelries } from './redux/features/jewelrySlice';
import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';

const root = ReactDOM.createRoot(document.getElementById('root'));
// store.dispatch(productsFetch());
// store.dispatch(fetchJewelries());

// let persistor = persistStore(store);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
      </Provider>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import { productsFetch } from './redux/features/productSlice';
import { fetchJewelries } from './redux/features/jewelrySlice';


const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(productsFetch());
store.dispatch(fetchJewelries());

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);


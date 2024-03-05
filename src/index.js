import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import Greeting from './components/Greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Greeting name='user' />
    <Greeting name='Ivo' />
    <Greeting name='Komala' />
  </>
);

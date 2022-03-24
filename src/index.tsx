import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TmdbProvider } from "./context/tmdb/TmdbContext";
import { UserProvider } from "./context/user/UserContext";
import { DetailsProvider } from "./context/details/DetailsContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <TmdbProvider>
        <DetailsProvider>
          <App />
        </DetailsProvider>
      </TmdbProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

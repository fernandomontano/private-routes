import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { todoApi } from "./services/user";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={todoApi}>
        <Auth0Provider
          domain={import.meta.env.VITE_DOMAIN_KEY}
          clientId={import.meta.env.VITE_CLIENT_ID}
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);

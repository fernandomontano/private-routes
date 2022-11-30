import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Auth0Provider
          domain="dev-ijqhqcg336flh1km.us.auth0.com"
          clientId="C8NXwk2UmztplhAysZo9VQNZRYVrYRkL"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

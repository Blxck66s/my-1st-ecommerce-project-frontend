import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./stores";
import AuthContextProvider from "./contexts/AuthContext";
import OrderContextProvider from "./contexts/orderContext";
import ProductContextProvider from "./contexts/ProductContext";
import PayConContextProvider from "./contexts/PayConContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <Provider store={store}>
    <AuthContextProvider>
      <OrderContextProvider>
        <ProductContextProvider>
          <PayConContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PayConContextProvider>
        </ProductContextProvider>
      </OrderContextProvider>
    </AuthContextProvider>
  </Provider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

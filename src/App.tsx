import React from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { store } from "./store/store"; //test wip
import ProductList from "./components/ProductList"; //test wip

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {" "}
        <Provider store={store}>
          <ProductList />
        </Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;

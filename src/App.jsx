import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {navItems} from "./components/constants.js";
import {SwContext} from "./components/context.js";

function App() {
    const [page, setPage] = useState(navItems[0]);

  return (
      <div className={'container-fluid'}>
          <SwContext value={{
              page, changePage: setPage
          }}>
          <Header/>
          <Main/>
          </SwContext>
          <Footer/>
      </div>
  )
}

export default App

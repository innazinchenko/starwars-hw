import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
      <div className={'container-fluid'}>
          <Header/>
          <Main/>
          <Footer/>
      </div>
  )
}

export default App

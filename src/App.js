import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Partners from "./Components/Partners";
import Products from "./Components/Products";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
      <Products/>
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;

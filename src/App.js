import About from "./Components/About";
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
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import Cards from "./Component/Cards/Cards";
import Forms from "./Component/Forms/Forms";
import Carousels from "./Component/Carousel/Carousel";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
      <Carousels />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;

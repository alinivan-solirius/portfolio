import '../src/style/App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Na from './components/navigation';
import Footer from './components/footer';
import Item from './pages/item';
import Add from "./pages/add";
import Home from "./pages/home";


function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Na/>
              <Routes>
                  <Route path="/" element={<Home />} />
                      <Route path="/item" element={<Item />} />
                      <Route path="/add" element={<Add />} />
              </Routes>
          </BrowserRouter>
        <Footer />
      </div>
  );
}

export default App;

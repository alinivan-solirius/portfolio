import '../src/style/App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Na from './components/navigation';
import Footer from './components/footer';
import Item from './pages/item';
import Add from "./pages/add";
import Home from "./pages/home";
import Account from "./pages/account";


function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Na/>
              <Routes>
                  <Route path="/" element={<Home />} />
                      <Route path="/item" element={<Item />} />
                      <Route path="/add" element={<Add />} />
                  <Route path="/account" element={<Account />} />
              </Routes>
          </BrowserRouter>
        <Footer />
      </div>
  );
}

export default App;

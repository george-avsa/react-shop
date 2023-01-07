import './App.css';
import Footer from './components/Footer';
import Headers from './components/Headers';
import Shop from './components/Shop';
import { ContextProvider } from './Context';

function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <ContextProvider>
        <Shop></Shop>
      </ContextProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;

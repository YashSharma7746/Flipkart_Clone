import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#F0F0F0"}}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

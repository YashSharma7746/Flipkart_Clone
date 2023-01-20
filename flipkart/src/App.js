import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './Router/Router';
import Home from './pages/Home/Home';


function App() {
 
  return (

    <div className="App" style={{backgroundColor:"#F0F0F0"}}>
      <Navbar />
        <AllRoutes/>
      <Home />
    </div>
  );
}

export default App;

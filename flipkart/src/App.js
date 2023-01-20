import './App.css';
import AllRoutes from './Router/Router';
import Navbar from './components/Navbar/Navbar';


function App() {
 
  return (

    <div className="App" style={{backgroundColor:"#F0F0F0"}}>
     <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;

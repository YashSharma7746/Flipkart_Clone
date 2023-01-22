import './App.css';
import AllRoutes from './Router/Router';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
 
  return (

    <div className="App" style={{backgroundColor:"#F0F0F0"}}>
     <Navbar/>
    <AllRoutes/>
    <Footer />
    </div>
  );
}

export default App;

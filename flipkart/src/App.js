import './App.css';

import { MobilesTablets } from './pages/Products/MobilesTablets/MobilesTablets';
import AllRoutes from './Router/Router';



import Home from './pages/Home/Home';


function App() {
 
  return (

    <div className="App">
   <AllRoutes/>

    <div className="App" style={{backgroundColor:"#F0F0F0"}}>
      <Home />

    </div>
  );
}

export default App;

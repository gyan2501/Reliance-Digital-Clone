import './App.css';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <div style={{position:"sticky",top:"0",zIndex:1}}><Navbar/></div>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;

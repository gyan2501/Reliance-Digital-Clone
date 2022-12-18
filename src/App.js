import './App.css';
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


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

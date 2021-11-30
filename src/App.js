import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <Sidebar />
        <Home />
        
      </div>
      
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <Sidebar />
        <div className="Dashboard">
          other pages
        </div>
        
      </div>
      
    </div>
  );
}

export default App;

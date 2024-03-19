import './App.css';
import Myreact from './Myreact.jsx'
import Home from './Pages/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Myreact></Myreact>
      <Home/>

      <Footer/>

    </div>
  );
}

export default App;

import './App.css';
import MyHeader from './Components/JS/Header';
import MyHome from './Components/JS/Home';
import MyAboutUs from './Components/JS/AboutUs';
import MyServices from './Components/JS/Services';
import MyIndustry from './Components/JS/Industry';
import MyTechnology from './Components/JS/Technology';
import MyContact from './Components/JS/Contact';

function App() {
  return (
    <div className="App">
      <MyHeader />
      <MyHome />
      <MyAboutUs />
      <MyServices />
      <MyIndustry />
      <MyTechnology />
      <MyContact />
    </div> 
  );
}

export default App;

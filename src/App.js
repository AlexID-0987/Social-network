import { Routes, Route, Linc } from 'react-router-dom';
import './App.css';
import Body1 from './Component/Body/Bitem1/Body1';
import Body2 from './Component/Body/Bitem2/Body2';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import BodyContainer from "./Component/Body/Bitem/BodyContainer";

function App(props) {
  return (
      <div className='first'>
          <Header/>
          <Navbar/>
          <div className='itembody'>
              <Routes>
                  <Route path='/' element={<BodyContainer/>}/>
                  <Route path='/body' element={<BodyContainer/>}/>
                  <Route path='/body1' element={<Body1 Peoples={props.Peoples}/>}/>
                  <Route path='/body2' element={<Body2/>}/>
              </Routes>
          </div>
          <Footer/>
      </div>
    
  );
}

export default App;

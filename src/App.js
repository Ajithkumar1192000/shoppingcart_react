import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import { Navbar } from './components/navbar';
import './components/navbar.css';
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';
import {Login} from './pages/login/login';
import { Home } from './pages/login/home';
import { Signup } from './pages/login/signup';
import { Contactus } from './pages/login/contactus';
import{Icons} from './Icons';
import {Profile} from './pages/login/profile';
// import {Footer} from './Folder/footer';
import {Footer} from './Footer/footer';

function App() {
  return (
    <div className="App">
       <ShopContextProvider>
      <Router> 
        <Navbar/>
        <Routes>
          <Route path="/"element={<Home/>}></Route>
          <Route path="/shop"element={<Shop/>}></Route>
          <Route path="/login"element={<Login/>}></Route>
          <Route path="/signup"element={<Signup/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/conductus"element={<Contactus/>}></Route>
          <Route path="/profile"element={<Profile/>}></Route>
          
         
        </Routes>
      </Router>
      </ShopContextProvider> 
      {/* <Localstorage/>*/}
      {/* <Icons/> */}
     {/* <Profile/> */}
     {/* <Footer/> */}

    </div>
  );
}

export default App;

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import ProductsDetail from './pages/ProductsDetail'
import './App.css'
import AuthProvider from './context/AuthContext'
import CartProvider from './context/CartContext'

function App() {
  

  return (<AuthProvider>
    <CartProvider>
<div className='app'>
  <Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
   <Route path='/auth' element={<Auth/>} />
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/products/:id' element={<ProductsDetail/>}/>
</Routes>
</div>
</CartProvider>
</AuthProvider>
  )
}

export default App


import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import NewProducts from './pages/NewProducts';
import MenProducts from './pages/MenProducts';
import WomensProducts from './pages/WomenProducts';
import KidsProducts from './pages/KidsProducts';
import SummerCollections from './pages/SummerCollections';
import WishlistProductTable from './pages/Wishlist';
import CartPage from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPass from './pages/ForgetPassword';
import NotFound from './pages/PageNotFound';
import AllProductsPage from './pages/AllProductsPage';






function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewProducts />} />
      <Route path="/men" element={<MenProducts />} />
      <Route path="/women" element={<WomensProducts />} />
      <Route path="/kids" element={<KidsProducts />} />
      <Route path="/summer-collection" element={<SummerCollections />} />
      <Route path="/wishlist" element={<WishlistProductTable />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpass" element={<ForgotPass />} />
      <Route path="/products" element={<AllProductsPage />} />
     
      <Route path="*" element={<NotFound />} />



    </Routes>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
   
    </>
  )
}

export default App

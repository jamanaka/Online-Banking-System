import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/home'
import Register from './pages/auth/register'
import Login from './pages/auth/login'
import Dashboard from './pages/users/Dashboard'
import NotFound from './pages/NotFound'
import ForgetPassword from './pages/auth/ForgetPassword'
import Payments from './pages/users/payments'
import History from './pages/users/History'
import Transaction from './pages/users/Transaction'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Account from './pages/users/Account'

function App() {

  return (
    <>
      <div>
        <Routes>
          {/* Index Route */}
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/service' element={<Service/>} />

          {/* Authentication Route */}
          <Route path='/register' element={<Register/>} />
          <Route path='login' element={<Login/>} />
          <Route path='/forget password' element={<ForgetPassword/>} />
          
          {/* User Route */}
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/transaction' element={<Transaction/>} />
          <Route path='/history' element={<History/>} />
          <Route path='/payments' element={<Payments/>} />
          <Route path='/account' element={<Account/>} />

          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
    </>
  )
}

export default App

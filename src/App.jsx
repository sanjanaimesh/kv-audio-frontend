import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import AdminPage from './pages/admin/AdminPage';
import HomePage from './pages/home/homePage';
import Testing from './components/Testing';
import LoginPage from './pages/loginPage/loginPage';
import { Toaster } from 'react-hot-toast';
import Register from './pages/register/register';

function App() {
  return (
    <BrowserRouter>
      <Toaster/>
      <Routes>
        <Route path='/testing' element={<Testing/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/admin/*" element={<AdminPage/>} />
        <Route path="/*" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
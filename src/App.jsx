import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import AdminPage from './pages/admin/AdminPage';
import HomePage from './pages/home/homePage';
import Testing from './components/Testing';
import LoginPage from './pages/loginPage/loginPage';
import { Toaster } from 'react-hot-toast';


function App() {


  return (
    <BrowserRouter>
      <Toaster/>
      <Routes path="/*">
        <Route path='/testing' element={<Testing/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/*" element={<HomePage/>}/>
        
      </Routes>
    </BrowserRouter>
    
    

  )
}

export default App

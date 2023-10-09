import {Route, Routes} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/Home'
import LoginPage from './components/LoginPage';
import SelectLanguage from './components/SelectLanguage'
import Header from './components/Header'

const App = () =>(
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/language' element={<SelectLanguage/>}/>
    </Routes>
    </>
)

export default App;

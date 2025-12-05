import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.css'
import {BrowserRouter, Routes, Route} from 'react-router';

import Grants from './Grants.jsx';
import Research from './Research.jsx';
import Team from './Team.jsx';
import Contact from './Contact.jsx';
import Teaching from './Teaching.jsx';
import Activities from './Activities.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/research' element={<Research/>}/>
        <Route path='/teaching' element={<Teaching/>}/>
        <Route path='/grants' element={<Grants/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/activities' element={<Activities/>}/>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)

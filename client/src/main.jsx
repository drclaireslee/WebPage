import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router';

import Research from './Research.jsx';
import Publications from './Publications.jsx';
import Team from './Team.jsx';
import Contact from './Contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/research' element={<Research/>}/>
        <Route path='/publications' element={<Publications/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)

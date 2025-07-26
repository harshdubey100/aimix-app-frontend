import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Welcome from './app/Welcome';
import Dashboard from './app/modules/components/Dashboard';
import LandingPage from './app/modules/components/LandingPage';
import ContactUs from './app/modules/components/ContactUs';
import Library from './app/modules/components/Library';
import JobAssistance from './app/modules/components/JobAssistance';
import ScholarshipProgram from './app/modules/components/ScholarshipProgram';
import BetaProgram from './app/modules/components/BetaProgram';
import TestYourKnowledge from './app/modules/components/TestYourKnowledge';
import Store from './app/modules/components/Store';
import AimixCenter from './app/modules/components/AimixCenter';
import Study from './app/modules/components/Study';
import Error from './app/pages/Error';
import RegisterForm from './app/pages/RegisterForm';
import AiMixCoin from './app/modules/components/AiMix-coin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Welcome/>}></Route>
      <Route path='/dashboard/:userID' element={<Dashboard/>}>
          <Route path='' element={<LandingPage/>}></Route>
          <Route path='Study' element={<Study/>}></Route>
          <Route path='Aimix-Center' element={<AimixCenter/>}></Route>
          <Route path='Store' element={<Store/>}></Route>
          <Route path='testYourKnowledge' element={<TestYourKnowledge/>}></Route>
          <Route path='BetaProgram' element={<BetaProgram/>}></Route>
          <Route path='ScholarshipProgram' element={<ScholarshipProgram/>}></Route>
          <Route path='JobAssistance' element={<JobAssistance/>}></Route>
          <Route path='Library' element={<Library/>}></Route>
          <Route path='ContactUs' element={<ContactUs/>}></Route>
          <Route path='AiMix-coins' element={<AiMixCoin/>}></Route>
          <Route path='*' element={<Error/>}></Route>
      </Route>

      <Route path='*' element={<Error/>}></Route>
      <Route path='/register' element={<RegisterForm/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

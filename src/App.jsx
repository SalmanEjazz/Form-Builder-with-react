import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {Home, About,APQP, Contact} from './pages/index';
import "./css/style.css";
import { useSelector } from 'react-redux';
import LoginRegisterPage from './pages/LoginRegisterPage';
import Layout from "./dashboard/Layout";
import ApqpPages from './dashboard/pages/ApqpPages';
import ApqpQuestions from './dashboard/pages/ApqpQuestions';
import ApqpSections from './dashboard/pages/ApqpSections';
import ApqpViewTemplates from './dashboard/pages/ApqpViewTemplates';
import ApqpCreateTemplates from './dashboard/pages/ApqpCreateTemplates';
import ApqpReportPage from './pages/ApqpReportPage';
const App = () => {

  const signature = useSelector(state=> state.signatureImg);
  const  questionArray = JSON.stringify({});
  localStorage.setItem('questionArray', questionArray);

  return (
    <>
  
  <Routes>
        <Route path='/' element={<LoginRegisterPage />} />
        <Route path='/apqp' element={<APQP/>} />
        {/* <Route path='/apqp' element={<APQP/>} /> */}
        <Route path='/apqp-report/:parameter' element={<ApqpReportPage/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<Layout />}>
          {/* Nested routes within the dashboard */}
          <Route path='apqp-view-templates' element={<ApqpViewTemplates/>} />
          <Route path='apqp-create-templates' element={<ApqpCreateTemplates/>} />
          
        </Route>
      </Routes>
    
    </>
  );
};

export default App;

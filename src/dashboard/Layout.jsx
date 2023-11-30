import React,{useEffect} from 'react'
import Header from './components/Header'
// import "./assets/libs/jsvectormap/css/jsvectormap.min.css";
// import "./assets/libs/swiper/swiper-bundle.min.css";
// import "./assets/js/layout.js";
// import "./assets/css/bootstrap.min.css";
// import "./assets/css/icons.min.css";
// import "./assets/css/app.min.css";
// import "./assets/css/custom.min.css";
// import "./assets/libs/bootstrap/js/bootstrap.bundle.min.js";
// import "./assets/libs/simplebar/simplebar.min.js";
// import "./assets/libs/node-waves/waves.min.js";
// import "./assets/libs/feather-icons/feather.min.js";
// import "./assets/js/pages/plugins/lord-icon-2.1.0.js";
// import "./assets/js/plugins.js";
// import "./assets/libs/apexcharts/apexcharts.min.js";
// import "./assets/libs/jsvectormap/js/jsvectormap.min.js";
// import "./assets/libs/jsvectormap/maps/world-merc.js";
// import "./assets/libs/swiper/swiper-bundle.min.js";
// import "./assets/js/pages/dashboard-ecommerce.init.js";
// import "./assets/js/app.js";
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';
import ApqpPages from './pages/ApqpPages';
import ApqpSections from './pages/ApqpSections';
import ApqpQuestions from './pages/ApqpQuestions';

const Layout = () => {

    useEffect(() => {
        // Load the required CSS and JavaScript files on component mount
        Promise.all([
          import('./assets/libs/jsvectormap/css/jsvectormap.min.css'),
          import('./assets/libs/swiper/swiper-bundle.min.css'),
          import('./assets/js/layout.js'),
          import('./assets/css/bootstrap.min.css'),
          import('./assets/css/icons.min.css'),
          import('./assets/css/app.min.css'),
          import('./assets/css/custom.min.css'),
          import('./assets/libs/bootstrap/js/bootstrap.bundle.min.js'),
          // import('./assets/libs/simplebar/simplebar.min.js'),
          // import('./assets/libs/node-waves/waves.min.js'),
          // import('./assets/libs/feather-icons/feather.min.js'),
          // import('./assets/js/pages/plugins/lord-icon-2.1.0.js'),
          // import('./assets/js/plugins.js'),
          // import('./assets/libs/apexcharts/apexcharts.min.js'),
          // import('./assets/libs/jsvectormap/js/jsvectormap.min.js'),
          // import('./assets/libs/jsvectormap/maps/world-merc.js'),
          // import('./assets/libs/swiper/swiper-bundle.min.js'),
          // import('./assets/js/pages/dashboard-ecommerce.init.js'),
          // import('./assets/js/app.js'),
        ]).then(() => {
          // Do any additional setup or logic that depends on the loaded resources
        });
      }, []);



  return (
    <>
     <Header />



     <Sidebar/>
     <Outlet/>
     {/* <Home/>  */}
    </>
  )
}

export default Layout

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx'
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Request from './pages/Request.jsx';
import Films from './pages/Films.jsx';
import Series from './pages/Series.jsx';
import ContentDetail from './pages/ContentDetail.jsx';
import NotFound from './pages/NotFound.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/request" element={<Request />} />
          <Route path="/films" element={<Films />} />
          <Route path="/series" element={<Series />} />
          <Route path="/content/:id" element={<ContentDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

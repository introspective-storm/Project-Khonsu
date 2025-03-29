import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css'
import App from './Pages/App.jsx'
import BusinessDashboard from './pages/BusinessDashboard.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/business-dashboard" element={<BusinessDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
    </BrowserRouter>
  ,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index.tsx'
import MainLayout from './layouts/MainLayout.tsx'
import Certificacoes from './pages/Certificacoes/index.tsx'
import Projetos from './pages/Projetos/index.tsx'
import HomeLayout from './layouts/HomeLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index path="/" element={<Home/>}/>
        </Route>
        <Route element={<MainLayout />}>
          <Route path='/certificacoes' element={<Certificacoes/>}/>
          <Route path='/projetos' element={<Projetos/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

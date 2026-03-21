import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LoginPage from './pages/LoginPage.tsx'
import HomePage from './pages/HomePage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'


const router = createBrowserRouter([
  {
    path : '/',
    Component: App,
    children: [

      {
        index: true,
        Component: HomePage
      },

      {
        path: '/login',
        Component: LoginPage
      },
      {
        path: '/register',
        Component: RegisterPage
      }
    ]
  }
  ])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

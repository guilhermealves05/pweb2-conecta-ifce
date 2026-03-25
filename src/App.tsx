import { RouterProvider } from 'react-router'
import { AuthProvider } from './features/auth/contexts/AuthContext'
import { router } from './routes/router'


function App() {



  return (
   <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App

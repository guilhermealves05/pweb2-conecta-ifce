import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import HomePage from '@/pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <>
      <div className='flex flex-col min-h-svh'>
        <Navbar />
        <main className='flex-1 flex flex-col'>
          {/* <HomePage /> */}
          {/* <LoginPage /> */}
          <RegisterPage />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App

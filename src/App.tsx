import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import { Outlet } from 'react-router'


function App() {
  return (
    <>
      <div className='flex flex-col min-h-svh'>
        <Navbar />
        <main className='flex-1 flex flex-col'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App

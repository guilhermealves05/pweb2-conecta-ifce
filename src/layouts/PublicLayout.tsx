import Footer from "@/shared/components/footer"
import Navbar from "@/shared/components/navbar"
import useScroll from "@/shared/hooks/useScroll"
import { Outlet } from "react-router"

function PublicLayout() {

useScroll()

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

export default PublicLayout

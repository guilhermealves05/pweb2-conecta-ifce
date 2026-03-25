import Navbar from "@/shared/components/navbar"
import { Outlet } from "react-router"

function AppLayout() {
  return (
    <>
      <div className='flex flex-col min-h-svh'>
        <Navbar />
        <main className='flex-1 flex flex-col'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default AppLayout

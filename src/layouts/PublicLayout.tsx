import { useAuth } from "@/features/auth/contexts/AuthContext"
import Footer from "@/shared/components/footer"
import Navbar from "@/shared/components/navbar"
import { Button } from "@/shared/components/ui/button"
import useScroll from "@/shared/hooks/useScroll"
import { Link, Navigate, Outlet } from "react-router"

function PublicLayout() {

  const { isAthenticated } = useAuth()
  useScroll()

  if (isAthenticated) {
    return <Navigate to='/feed' replace />
  }


  return (
    <>
      <div className='flex flex-col min-h-svh'>
        <Navbar>
          <Navbar.Brand to='/'/>

          <Navbar.Links>
            <Navbar.Link to='/' text='Início'/>
            <Navbar.Link to='/#feature-section' text='Recursos'/>
            <Navbar.Link to='/#faq-section' text='Perguntas frequentes'/>

          </Navbar.Links>

          <Navbar.Actions>
            <Button variant="ghost" size="lg" asChild>
            <Link to="/login">Entrar</Link>
          </Button>
          <Button size="lg" asChild>
            <Link to="/register">Criar Conta</Link>
          </Button>
          </Navbar.Actions>
        </Navbar>
        <main className='flex-1 flex flex-col'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default PublicLayout


import { Button } from "@/shared/components/ui/button"
import { Link } from "react-router"
import Brand from "./brand"

function Navbar() {
  return (
    <header className="sticky top-0 border-b border-border z-50 bg-card/80 backdrop-blur-md">
      <nav className="container-main flex items-center justify-between py-3">
        <Link to="/">
          <Brand />
        </Link>

        <div className="flex gap-4 lg:gap-8">
          <Link
            to="/"
            className="text-muted-foreground font-medium hover:text-primary"
          >
            Início
          </Link>
          <Link
            to="/#feature-section"
            className="text-muted-foreground font-medium hover:text-primary"
          >
            Recursos
          </Link>
          <Link
            to="/#faq-section"
            className="text-muted-foreground font-medium hover:text-primary"
          >
            Perguntas Frequentes
          </Link>
        </div>

        <div className="flex gap-2">
          <Button variant="ghost" size="lg" asChild>
            <Link to="/login">Entrar</Link>
          </Button>
          <Button size="lg" asChild>
            <Link to="/register">Criar Conta</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

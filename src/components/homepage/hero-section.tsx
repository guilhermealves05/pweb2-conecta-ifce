import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from "react-router"


function HeroSection() {
  return (
    <section className="bg-card bg-soft-radial">
      <div className="container-main flex flex-col items-center text-center py-20">
        <div className="bg-muted border border-border py-1.5 px-4 flex items-center gap-2 rounded-full text-sm">
          <Sparkles className="text-primary size-3.5" />
          <span className="text-muted-foreground">
            Rede Social Acadêmica do IFCE
          </span>
        </div>

        <h1 className="mt-6 text-6xl text-balance font-bold text-foreground tracking-tight">
          Conecte-se, colabore e{' '}
          <span className="text-primary">cresça junto</span> com a comunidade
          IFCE
        </h1>

        <p className="mt-6 text-muted-foreground text-xl text-balance">
          A plataforma que une alunos, professores e técnicos para compartilhar
          projetos, formar grupos de estudo e celebrar conquistas acadêmicas.
        </p>

        <Button className="mt-10" size="lg" asChild>
          <Link to="/register" className='flex gap-2 items-center w-60 h-12'>
            <span className='uppercase tracking-wider'>Participar agora</span>
            <ArrowRight className='size-4' />
          </Link>
        </Button>

        <div className='mt-16 flex items-center gap-8 text-sm text-muted-foreground'>
          <div className='flex flex-col gap-1'>
            <span className='text-foreground font-bold text-2xl'>2.500+</span>
            <span>Estudantes</span>
          </div>

          <div className='h-8 w-px bg-border'></div>

          <div className='flex flex-col gap-1'>
            <span className='text-foreground font-bold text-2xl'>32</span>
            <span>Campi</span>
          </div>

          <div className='h-8 w-px bg-border'></div>

          <div className='flex flex-col gap-1'>
            <span className='text-foreground font-bold text-2xl'>50+</span>
            <span>Grupos</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

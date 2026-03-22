import { GraduationCap } from "lucide-react"

function Brand() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-9 items-center justify-center bg-primary rounded-lg">
        <GraduationCap className="size-5 text-primary-foreground" />
      </div>
      <span className="font-bold text-foreground text-lg">
        Conecta<span className="text-primary">IFCE</span>
      </span>
    </div>
  )
}

export default Brand

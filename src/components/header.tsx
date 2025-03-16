import { FadeIn } from "./ui/motion"

export function Header() {
  return (
    <header className="relative bg-gradient-to-b from-blue-500 to-blue-600 text-white py-12 overflow-hidden">
      {/* Círculos de fondo estilo iOS */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-400/30 blur-3xl"></div>
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-blue-300/20 blur-2xl"></div>
      <div className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full bg-blue-400/20 blur-2xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <FadeIn direction="down" duration={0.6}>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight">Emergencia Bahía</h1>
        </FadeIn>

        <FadeIn delay={0.1} duration={0.6}>
          <p className="text-xl md:text-2xl font-medium mb-6 opacity-90">Conectando donaciones, salvando vidas</p>
        </FadeIn>

        <FadeIn delay={0.2} duration={0.6}>
          <p className="text-lg max-w-3xl mx-auto mb-6 opacity-80 font-light">
            Plataforma solidaria que centraliza información de los puntos de donación en Bahía Blanca y toda la
            Provincia de Buenos Aires, para ayudar a los damnificados por las inundaciones.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} duration={0.6} className="mt-6">
          <div className="max-w-2xl mx-auto backdrop-blur-lg bg-white/10 rounded-3xl p-5 text-left transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg border border-white/20">
            <h2 className="font-bold text-lg mb-2">¿Qué se necesita con urgencia?</h2>
            <ul className="list-disc list-inside space-y-1 opacity-90">
              <li className="transition-all duration-300 hover:translate-x-1">Agua potable</li>
              <li className="transition-all duration-300 hover:translate-x-1">Alimentos no perecederos</li>
              <li className="transition-all duration-300 hover:translate-x-1">Elementos de higiene personal</li>
              <li className="transition-all duration-300 hover:translate-x-1">Artículos de limpieza</li>
              <li className="transition-all duration-300 hover:translate-x-1">Ropa y calzado</li>
              <li className="transition-all duration-300 hover:translate-x-1">Frazadas y colchones</li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </header>
  )
}


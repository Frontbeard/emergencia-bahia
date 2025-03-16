import { FadeIn } from "./ui/motion"

export function MissionStatement() {
  return (
    <section className="py-10 bg-gradient-to-b from-blue-50 to-white overflow-hidden relative">
      {/* Círculos de fondo estilo iOS */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-100/50 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-100/30 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Nuestra misión</h2>
          </FadeIn>

          <div className="space-y-4 backdrop-blur-sm bg-white/70 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-white/50">
            <FadeIn delay={0.1} direction="left">
              <p className="text-gray-700">
                Nuestro objetivo es que cualquier persona que quiera colaborar, ya sea con alimentos, ropa, productos de
                limpieza, o cualquier otro tipo de donación, pueda encontrar fácilmente dónde, cómo y a quién llevar su
                ayuda, según su localidad más cercana.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} direction="right">
              <p className="text-gray-700">
                Además, buscamos transparentar y organizar la ayuda solidaria, conectando donantes con centros de acopio
                oficiales, fundaciones, comedores, escuelas y organizaciones que están trabajando en la asistencia
                directa.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="font-medium text-blue-600">
                Creemos que la solidaridad se multiplica cuando está bien organizada. Juntos, podemos hacer la
                diferencia.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}


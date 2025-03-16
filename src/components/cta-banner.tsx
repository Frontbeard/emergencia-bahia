import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { PlusCircle } from "lucide-react"
import { motion } from "framer-motion"

export function CtaBanner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-blue-600 py-10 text-white overflow-hidden">
      {/* Círculos de fondo estilo iOS */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-400/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-40 h-40 rounded-full bg-blue-300/20 blur-2xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">No dejemos a nadie afuera</h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto font-light">
            ¿Conocés un centro de donación que no está en nuestra lista? Ayudanos a ampliar la red solidaria.
          </p>
          <Link to="/contacto">
            <Button
              size="lg"
              className="bg-white/90 backdrop-blur-sm text-blue-600 hover:bg-white transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transform hover:scale-105 rounded-full px-6"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              <span className="relative">
                Agregá un lugar para donar
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


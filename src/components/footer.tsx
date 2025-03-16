import { Instagram } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Frontbeard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/frontbeard/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/frontbeard/",
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      name: "WhatsApp",
      href: "https://wa.link/9n9p82",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 py-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/70 p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-white/50"
          >
            <h3 className="font-bold text-lg mb-4 text-blue-600">Emergencia Bahía</h3>
            <p className="text-muted-foreground text-sm">
              Plataforma solidaria que centraliza información de puntos de donación para ayudar a los damnificados por
              las inundaciones en Bahía Blanca y toda la Provincia de Buenos Aires.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/70 p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-white/50"
          >
            <h3 className="font-bold text-lg mb-4 text-blue-600">Información importante</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="transition-all duration-300 hover:translate-x-1">
                • Verifica los horarios antes de acercarte
              </li>
              <li className="transition-all duration-300 hover:translate-x-1">
                • Las donaciones deben estar en buen estado
              </li>
              <li className="transition-all duration-300 hover:translate-x-1">
                • Los alimentos no deben estar vencidos
              </li>
              <li className="transition-all duration-300 hover:translate-x-1">
                • La ropa debe estar limpia y en condiciones
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/70 p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-white/50"
          >
            <h3 className="font-bold text-lg mb-4 text-blue-600">Contacto</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Si conocés un punto de donación que aún no está en la lista, te invitamos a sumarlo para que más personas
              puedan acercar su ayuda.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium group"
            >
              <span className="relative">
                Agregar un centro de donación →
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Redes sociales */}
        <motion.div
          className="mt-8 pt-6 border-t flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  to={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100"
                >
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-6 pt-4 border-t text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Emergencia Bahía. Todos los derechos reservados.</p>
          <p className="mt-1">Conectando donaciones, salvando vidas.</p>
        </motion.div>
      </div>
    </footer>
  )
}


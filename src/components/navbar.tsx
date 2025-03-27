import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Heart, Menu, X, Home, MapPin, PlusCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../components/ui/button"
import { FadeIn } from "../components/ui/motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isActive = (path: string) => location.pathname === path

  const navLinks = [
    { name: "Inicio", href: "/", icon: <Home className="h-4 w-4" /> },
    { name: "Centros de Donación", href: "/centros", icon: <MapPin className="h-4 w-4" /> },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg py-2 border-b border-white/20"
          : "bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 group-hover:bg-blue-700 transition-colors">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span
              className={`font-bold text-lg transition-colors ${
                scrolled ? "text-blue-600" : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
              } group-hover:text-blue-500`}
            >
              Emergencia Bahía
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`flex items-center gap-1.5 font-medium transition-all duration-300 relative group ${
                  isActive(link.href)
                    ? scrolled
                      ? "text-blue-600"
                      : "text-blue-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                    : scrolled
                      ? "text-gray-700"
                      : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                }`}
              >
                {link.icon}
                <span className="relative">
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full transition-all duration-300 ${
                      isActive(link.href)
                        ? "bg-blue-400 opacity-100"
                        : "bg-blue-400/0 group-hover:bg-blue-400/70 group-hover:opacity-100 opacity-0"
                    }`}
                  ></span>
                </span>
              </Link>
            ))}
            <Link to="/contacto">
              <Button
                variant={scrolled ? "default" : "ios"}
                size="sm"
                className={`rounded-full font-medium ml-2 ${!scrolled && "shadow-md"}`}
              >
                <PlusCircle className="mr-1 h-4 w-4" />
                Agregar Centro
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/80 backdrop-blur-xl shadow-lg overflow-hidden border-b border-white/20"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <FadeIn key={link.name} delay={0.05 * index} direction="right">
                    <Link
                      to={link.href}
                      className={`flex items-center gap-2 p-2 rounded-xl font-medium transition-all duration-300 ${
                        isActive(link.href)
                          ? "text-blue-600 bg-blue-50/70 hover:bg-blue-100/80"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          isActive(link.href) ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {link.icon}
                      </div>
                      {link.name}
                    </Link>
                  </FadeIn>
                ))}
                <FadeIn delay={0.2} direction="up">
                  <Link to="/contacto" onClick={() => setIsOpen(false)} className="mt-2 block">
                    <Button className="w-full rounded-xl" size="lg">
                      <PlusCircle className="mr-2 h-5 w-5" />
                      Agregar Centro de Donación
                    </Button>
                  </Link>
                </FadeIn>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

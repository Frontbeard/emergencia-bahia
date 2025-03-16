import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a la página principal
          </Link>

          <div className="backdrop-blur-md bg-white/70 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-white/50 mb-8">
            <h1 className="text-3xl font-bold mb-6 text-blue-600">Agregá un lugar para donar</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Completá el formulario con la información del centro de donación que querés agregar. Revisaremos los datos
              y lo sumaremos a nuestra lista para que más personas puedan acercar su ayuda.
            </p>
          </div>

          {/* Formulario de Google embebido */}
          <div className="w-full rounded-3xl overflow-hidden border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.03)] backdrop-blur-md bg-white/70">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSckSCVUa-4O5ownu-zNEM2fz7CyvZ_zurcENAkU6y4pCGS4EQ/viewform?embedded=true"
              width="100%"
              height="1200"
              className="w-full"
            >
              Cargando formulario...
            </iframe>
          </div>

          <div className="mt-8 text-center text-muted-foreground backdrop-blur-md bg-white/70 p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-white/50">
            <p>
              Si tienes problemas para visualizar el formulario, podés acceder directamente
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSckSCVUa-4O5ownu-zNEM2fz7CyvZ_zurcENAkU6y4pCGS4EQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium ml-1"
              >
                haciendo clic aquí
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


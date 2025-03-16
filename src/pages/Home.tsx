import { DonationCenterCard } from '../components/donation-center-card'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { FilterControls } from '../components/filter-controls'
import { MissionStatement } from '../components/mission-statement'
import { CtaBanner } from '../components/cta-banner'
import { useState, useEffect } from 'react'
import { FadeIn } from '../components/ui/motion'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../components/ui/button'

// Datos de centros de donación
const donationCenters = [
  // CABA
  {
    id: 1,
    nombre: "Cruz Roja Argentina - Sede Central",
    direccion: "Av. Hipólito Yrigoyen 2068",
    localidad: "CABA",
    barrio: "Balvanera",
    horario: "Lunes a Viernes: 9:00 - 17:00",
    telefono: "(+54) 11 6065 0450",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene"],
  },
  {
    id: 27,
    nombre: "Cruz Roja Argentina - Sede Saavedra",
    direccion: "Quesada 2602",
    localidad: "CABA",
    barrio: "Saavedra",
    horario: "Lunes a Viernes: 9:00 - 17:00",
    telefono: "(011) 4544 1188 / 4544 3024 / 5235 9213 / 0810 345 0373",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene"],
  },
  {
    id: 2,
    nombre: "Cáritas Buenos Aires",
    direccion: "Av. Paseo Colón 823",
    localidad: "CABA",
    barrio: "San Telmo",
    horario: "Lunes a Viernes: 8:30 - 16:30",
    telefono: "011 4342-8650",
    tiposDonacion: ["Alimentos", "Ropa", "Calzado", "Frazadas"],
  },
  {
    id: 3,
    nombre: "Fundación Sí - Sede Central",
    direccion: "Av. Córdoba 5635",
    localidad: "CABA",
    barrio: "Palermo",
    horario: "Lunes a Sábados: 10:00 - 18:00",
    telefono: "011 4775-9083",
    tiposDonacion: ["Alimentos", "Elementos de limpieza", "Ropa de abrigo"],
  },
  {
    id: 38,
    nombre: "Fundación Sí - Sede Palermo",
    direccion: "Angel Carranza 1962",
    localidad: "CABA",
    barrio: "Palermo",
    horario: "Todos los días: 10:00 - 19:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Elementos de higiene", "Artículos de limpieza"],
  },
  {
    id: 39,
    nombre: "Universidad de Buenos Aires",
    direccion: "Uriburu 920",
    localidad: "CABA",
    barrio: "",
    horario: "Toda la semana: 10:00 - 18:00, Sábado y domingo: 11:00 - 16:00",
    telefono: "",
    tiposDonacion: [
      "Alimentos",
      "Ropa",
      "Calzado",
      "Mantas",
      "Colchones",
      "Pañales",
      "Higiene personal",
      "Limpieza",
      "Velas",
    ],
  },
  {
    id: 40,
    nombre: "Universidad de Morón - Sede CABA",
    direccion: "Lima 221",
    localidad: "CABA",
    barrio: "",
    horario: "Del 13 al 26 de marzo: 9:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 45,
    nombre: "Parroquia Nuestra Señora de Caacupé",
    direccion: "Av. Rivadavia 4879",
    localidad: "CABA",
    barrio: "Caballito",
    horario: "Consultar disponibilidad",
    telefono: "",
    tiposDonacion: [
      "Alimentos no perecederos",
      "Agua potable",
      "Ropa",
      "Calzado",
      "Artículos de higiene personal",
      "Elementos de limpieza",
    ],
  },
  {
    id: 51,
    nombre: "Tren Solidario - Estación Plaza Constitución",
    direccion: "Estación Plaza Constitución - Andén 1",
    localidad: "CABA",
    barrio: "Constitución",
    horario: "9 de marzo: 10:00 - 17:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 52,
    nombre: "Club Comunicaciones",
    direccion: "Tinogasta 2697 (Módulo de ingreso)",
    localidad: "CABA",
    barrio: "",
    horario: "Lunes a domingo: 8:00 - 22:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 53,
    nombre: "Estadio Ciudad de Caseros",
    direccion: "Av. San Martín 3251",
    localidad: "Caseros",
    barrio: "",
    horario: "Lunes a viernes: 15:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },

  // Clubes de fútbol - CABA
  {
    id: 16,
    nombre: "Club Atlético Boca Juniors",
    direccion: "Salón Filiberto, Brandsen 805",
    localidad: "CABA",
    barrio: "La Boca",
    horario: "Lunes a miércoles: 15:00 - 20:30",
    telefono: "",
    tiposDonacion: [
      "Ropa",
      "Colchones",
      "Frazadas",
      "Papel higiénico",
      "Lavandina",
      "Alimentos no perecederos",
      "Pañales",
    ],
  },
  {
    id: 17,
    nombre: "Club Atlético River Plate",
    direccion: "Estadio Monumental, Av. Figueroa Alcorta 7597",
    localidad: "CABA",
    barrio: "Núñez",
    horario: "Lunes 10 y martes 11 de marzo: 12:00 - 20:00",
    telefono: "",
    tiposDonacion: [
      "Alimentos no perecederos",
      "Agua potable",
      "Ropa",
      "Calzado",
      "Artículos de higiene personal",
      "Elementos de limpieza",
    ],
  },
  {
    id: 18,
    nombre: "Club Atlético Huracán",
    direccion: "Av. Caseros 3159",
    localidad: "CABA",
    barrio: "Parque Patricios",
    horario: "Lunes a viernes: 9:00 - 22:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 19,
    nombre: "Club Atlético Vélez Sarsfield",
    direccion: "Av. Juan B. Justo 9200",
    localidad: "CABA",
    barrio: "Liniers",
    horario: "Toda la semana: 10:00 - 22:00",
    telefono: "",
    tiposDonacion: [
      "Alimentos no perecederos",
      "Agua potable",
      "Ropa",
      "Calzado",
      "Artículos de higiene personal",
      "Elementos de limpieza",
    ],
  },
  {
    id: 20,
    nombre: "Club Atlético Atlanta",
    direccion: "Humboldt 540",
    localidad: "CABA",
    barrio: "Villa Crespo",
    horario: "Lunes a viernes: 10:00 - 19:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Calzado", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 21,
    nombre: "Club Atlético Argentinos Juniors - Polideportivo Las Malvinas",
    direccion: "Tronador 41",
    localidad: "CABA",
    barrio: "La Paternal",
    horario: "Lunes a domingo: 12:00 - 22:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Calzado", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 22,
    nombre: "Club Atlético Argentinos Juniors - Fundación",
    direccion: "Nazca 2511",
    localidad: "CABA",
    barrio: "La Paternal",
    horario: "Lunes, miércoles y viernes: 16:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Calzado", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 23,
    nombre: "Club Atlético Argentinos Juniors - Bichostore",
    direccion: "Juan Agustín García y Gavilán",
    localidad: "CABA",
    barrio: "La Paternal",
    horario: "Lunes a viernes: 13:00 - 20:00, Sábados: 9:00 - 16:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Calzado", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 24,
    nombre: "Club Atlético All Boys",
    direccion: "Chivilcoy 1950 (Oficina de socios)",
    localidad: "CABA",
    barrio: "Floresta",
    horario: "Lunes a viernes: 18:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Calzado", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 25,
    nombre: "Racing Club - Sede Villa del Parque",
    direccion: "Nogoyá 3045",
    localidad: "CABA",
    barrio: "Villa del Parque",
    horario: "Todos los días: 8:00 - 22:00",
    telefono: "",
    tiposDonacion: [
      "Alimentos no perecederos",
      "Pañales",
      "Calzado",
      "Artículos de limpieza",
      "Artículos de higiene personal",
    ],
  },
  {
    id: 28,
    nombre: "Club Atlético Belgrano - Filial CABA",
    direccion: "Av. Acoyte 511",
    localidad: "CABA",
    barrio: "",
    horario: "Lunes a viernes hasta el 19 de marzo: 14:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 31,
    nombre: "Club Atlético San Lorenzo - Casa Social y del Vitalicio",
    direccion: "Inclán y Muñiz",
    localidad: "CABA",
    barrio: "Boedo",
    horario: "Lunes a viernes: 17:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 32,
    nombre: "Club Atlético San Lorenzo - Sede de Atención al Socio",
    direccion: "Av. La Plata y Las Casas",
    localidad: "CABA",
    barrio: "Boedo",
    horario: "Hasta el viernes: 9:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 33,
    nombre: "Club Atlético San Lorenzo - Ciudad Deportiva",
    direccion: "Av. Cruz 2145",
    localidad: "CABA",
    barrio: "Nueva Pompeya",
    horario: "Hasta el viernes: 9:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 46,
    nombre: "Club Atlético Chacarita Juniors",
    direccion: "Federico García Lorca 350",
    localidad: "CABA",
    barrio: "Chacarita",
    horario: "Domingo 9 de marzo: 15:00 - 17:00 (en todos los accesos al estadio)",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 54,
    nombre: "Club Atlético Patronato",
    direccion: "Consultar dirección",
    localidad: "Paraná",
    barrio: "",
    horario: "Consultar disponibilidad",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },

  // GBA Norte
  {
    id: 34,
    nombre: "Club Atlético Platense - Sede Social",
    direccion: "Zufriategui 2021",
    localidad: "Vicente López",
    barrio: "",
    horario: "Lunes a domingo: 10:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 35,
    nombre: "Club Atlético Tigre - Complejo Deportivo",
    direccion: "Av. Perón 2650",
    localidad: "Victoria",
    barrio: "",
    horario: "Hasta el viernes 14 de marzo: 17:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 36,
    nombre: "Club Atlético Tigre - Predio Nito San Andrés",
    direccion: "Williams 2400",
    localidad: "Tigre",
    barrio: "",
    horario: "Hasta el viernes 14 de marzo: 17:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 30,
    nombre: "Club Atlético Belgrano - Filial Tortuguitas",
    direccion: "Santiago de Chile 50",
    localidad: "Tortuguitas",
    barrio: "",
    horario: "Lunes a viernes hasta el 19 de marzo: 8:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 48,
    nombre: "Club Atlético San Miguel",
    direccion: "Av. Presidente Perón 1301",
    localidad: "San Miguel",
    barrio: "",
    horario: "Consultar disponibilidad",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },

  // GBA Oeste
  {
    id: 41,
    nombre: "Universidad de Morón - Sede Morón",
    direccion: "Machado 854",
    localidad: "Morón",
    barrio: "",
    horario: "Del 13 al 26 de marzo: 9:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 42,
    nombre: "Universidad Nacional de La Matanza",
    direccion: "Av. Pte. Juan Domingo Perón 2320 (Estacionamiento)",
    localidad: "La Matanza",
    barrio: "",
    horario: "Lunes a Viernes: 10:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },

  // GBA Sur
  {
    id: 26,
    nombre: "Racing Club - Estadio Presidente Perón",
    direccion: "Av. Milito 70 (Departamento del Hincha)",
    localidad: "Avellaneda",
    barrio: "",
    horario: "Lunes a viernes: 10:00 - 18:00",
    telefono: "",
    tiposDonacion: [
      "Alimentos no perecederos",
      "Pañales",
      "Calzado",
      "Artículos de limpieza",
      "Artículos de higiene personal",
    ],
  },
  {
    id: 29,
    nombre: "Club Atlético Belgrano - Filial Lomas de Zamora",
    direccion: "Alem 109",
    localidad: "Lomas de Zamora",
    barrio: "",
    horario: "Lunes a viernes hasta el 19 de marzo: 9:00 - 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 43,
    nombre: "Club Atlético Independiente",
    direccion: "Calle Pastoriza",
    localidad: "Avellaneda",
    barrio: "",
    horario: "9 de marzo: 10:00 - 15:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 44,
    nombre: "Club Atlético Lanús - Sede Social",
    direccion: "9 de Julio 1680",
    localidad: "Lanús",
    barrio: "",
    horario: "9 de marzo a partir de las 20:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 47,
    nombre: "Club Atlético Banfield",
    direccion: "Vergara 1635",
    localidad: "Banfield",
    barrio: "",
    horario: "Consultar disponibilidad",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },

  // La Plata
  {
    id: 55,
    nombre: "Facultad de Odontología - Universidad Nacional de La Plata",
    direccion: "Av. 1 y 50",
    localidad: "La Plata",
    barrio: "",
    horario: "Lunes 10 de marzo: 9:00 - 13:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },

  // Mar del Plata
  {
    id: 56,
    nombre: "Red Solidaria Mar del Plata - Múltiple Espacio Leopoldo Marechal",
    direccion: "Consultar dirección",
    localidad: "Mar del Plata",
    barrio: "",
    horario: "13:00 - 16:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },

  // Bahía Blanca
  {
    id: 49,
    nombre: "Dow Center",
    direccion: "Rodríguez 4985",
    localidad: "Bahía Blanca",
    barrio: "",
    horario: "Consultar disponibilidad",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 50,
    nombre: "Club Liniers",
    direccion: "12 de octubre 1046",
    localidad: "Bahía Blanca",
    barrio: "",
    horario: "Consultar disponibilidad",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 57,
    nombre: "Club Villa Mitre",
    direccion: "Consultar dirección",
    localidad: "Bahía Blanca",
    barrio: "",
    horario: "Consultar disponibilidad",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 58,
    nombre: "Universidad Nacional del Sur",
    direccion: "Colón 80",
    localidad: "Bahía Blanca",
    barrio: "",
    horario: "Consultar disponibilidad",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 59,
    nombre: "Cáritas Bahía Blanca - Centro Comunitario San Roque",
    direccion: "Estomba 2385",
    localidad: "Bahía Blanca",
    barrio: "",
    horario: "Consultar disponibilidad",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 60,
    nombre: "Centro de Donaciones Pedro Luro",
    direccion: "Consultar dirección",
    localidad: "Pedro Luro",
    barrio: "",
    horario: "Consultar disponibilidad",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },

  // Rosario
  {
    id: 37,
    nombre: "Club Atlético Newell's Old Boys - Sede Social",
    direccion: "Parque Independencia",
    localidad: "Rosario",
    barrio: "",
    horario: "Lunes a viernes: 18:00 - 20:30",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },
  {
    id: 61,
    nombre: "Bomberos Voluntarios de Rosario",
    direccion: "Rioja 2860",
    localidad: "Rosario",
    barrio: "",
    horario: "9 de marzo: 9:00 - 18:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },

  // Tornquist
  {
    id: 62,
    nombre: "Club Unión y Automotor",
    direccion: "Av. Belgrano y 12 de Octubre / Lavalle 101",
    localidad: "Tornquist",
    barrio: "",
    horario: "Desde las 10:00",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },

  // Necochea
  {
    id: 63,
    nombre: "Sindicato Único de Fleteros",
    direccion: "Calle 64 y 53",
    localidad: "Necochea",
    barrio: "",
    horario: "Hasta las 18:30 (También buscan donaciones a domicilio)",
    telefono: "",
    tiposDonacion: ["Alimentos no perecederos", "Ropa", "Artículos de higiene", "Artículos de limpieza"],
  },

  // Virtual
  {
    id: 64,
    nombre: "Cáritas Argentina",
    direccion: "Donaciones vía internet",
    localidad: "Virtual",
    barrio: "",
    horario: "24 horas",
    telefono: "",
    tiposDonacion: ["Donaciones monetarias"],
  },
]

// Tipos para las opciones de ordenamiento
type SortOrder = "default" | "asc" | "desc"

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState<string>("Todas")
  const [sortOrder, setSortOrder] = useState<SortOrder>("default")
  const [filteredCenters, setFilteredCenters] = useState(donationCenters)
  const [isFiltering, setIsFiltering] = useState(false)
  const [displayCount, setDisplayCount] = useState<number>(9)

  // Obtener lista única de localidades para el filtro
  const locationsList = [...Array.from(new Set(donationCenters.map((center) => center.localidad)))].sort()
  const locations = ["Todas", ...locationsList]

  // Efecto para filtrar y ordenar los centros
  useEffect(() => {
    setIsFiltering(true)

    // Pequeño retraso para que la animación sea visible
    const timer = setTimeout(() => {
      // Filtrar centros por localidad seleccionada
      const newFilteredCenters =
        selectedLocation === "Todas"
          ? [...donationCenters]
          : donationCenters.filter((center) => center.localidad === selectedLocation)

      // Ordenar los centros según la opción seleccionada
      if (sortOrder === "asc") {
        newFilteredCenters.sort((a, b) => a.nombre.localeCompare(b.nombre))
      } else if (sortOrder === "desc") {
        newFilteredCenters.sort((a, b) => b.nombre.localeCompare(a.nombre))
      }

      setFilteredCenters(newFilteredCenters)
      setIsFiltering(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [selectedLocation, sortOrder])

  // Efecto para resetear el contador de centros mostrados cuando cambian los filtros
  useEffect(() => {
    setDisplayCount(9)
  }, [selectedLocation, sortOrder])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <MissionStatement />
      <main className="flex-1 container mx-auto px-4 py-8">
        <FadeIn delay={0.2} duration={0.7}>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">Centros de donación</h2>

            <FilterControls
              locations={locations}
              selectedLocation={selectedLocation}
              onLocationChange={setSelectedLocation}
              sortOrder={sortOrder}
              onSortOrderChange={setSortOrder}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedLocation}-${sortOrder}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6"
              >
                {isFiltering ? (
                  <div className="flex justify-center py-12">
                    <div className="animate-pulse flex space-x-4">
                      <div className="h-12 w-12 bg-blue-200 rounded-full"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-blue-200 rounded w-36"></div>
                        <div className="h-4 bg-blue-200 rounded w-24"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredCenters.slice(0, displayCount).map((center) => (
                        <motion.div
                          key={center.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.05 * (filteredCenters.indexOf(center) % 10),
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                          }}
                        >
                          <DonationCenterCard center={center} />
                        </motion.div>
                      ))}
                    </div>

                    {filteredCenters.length > displayCount && (
                      <motion.div
                        className="flex justify-center mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Button
                          onClick={() => setDisplayCount((prev) => prev + 9)}
                          variant="ios"
                          size="lg"
                          className="font-medium"
                        >
                          Ver más centros
                          <motion.span
                            className="ml-2"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                          >
                            ↓
                          </motion.span>
                        </Button>
                      </motion.div>
                    )}

                    {filteredCenters.length === 0 && (
                      <div className="text-center py-10 backdrop-blur-md bg-white/70 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-white/50 p-8">
                        <p className="text-muted-foreground">
                          No se encontraron centros de donación con los filtros seleccionados.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </section>
        </FadeIn>
      </main>
      <CtaBanner />
      <Footer />
    </div>
  )
}


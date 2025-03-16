import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { MapPin, Clock, Phone, Package } from "lucide-react"
import { Badge } from "./ui/badge"

interface DonationCenter {
  id: number
  nombre: string
  direccion: string
  localidad: string
  barrio?: string
  horario: string
  telefono?: string
  tiposDonacion?: string[]
}

interface DonationCenterCardProps {
  center: DonationCenter
}

export function DonationCenterCard({ center }: DonationCenterCardProps) {
  return (
    <Card className="h-full backdrop-blur-md bg-white/70 dark:bg-black/40 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-medium">{center.nombre}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-2">
          <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium">{center.direccion}</p>
            <p className="text-muted-foreground text-sm">
              {center.barrio ? `${center.barrio}, ${center.localidad}` : center.localidad}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Clock className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm">{center.horario}</p>
        </div>

        {center.telefono && (
          <div className="flex items-start gap-2">
            <Phone className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm">{center.telefono}</p>
          </div>
        )}

        {center.tiposDonacion && center.tiposDonacion.length > 0 && (
          <div className="flex items-start gap-2">
            <Package className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium mb-1 text-sm">Reciben:</p>
              <div className="flex flex-wrap gap-1">
                {center.tiposDonacion.map((tipo, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-blue-50/70 backdrop-blur-sm text-xs font-normal rounded-full px-3 py-0.5 border-blue-100/50 transition-all duration-300 hover:bg-blue-100/80"
                  >
                    {tipo}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}


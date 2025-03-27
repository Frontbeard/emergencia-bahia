import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Card, CardContent } from "./ui/card"
import { Filter, SortAsc, SortDesc } from "lucide-react"
import { motion } from "framer-motion"

type SortOrder = "default" | "asc" | "desc"

interface FilterControlsProps {
  locations: string[]
  selectedLocation: string
  onLocationChange: (location: string) => void
  sortOrder: SortOrder
  onSortOrderChange: (order: SortOrder) => void
}

export function FilterControls({
  locations,
  selectedLocation,
  onLocationChange,
  sortOrder,
  onSortOrderChange,
}: FilterControlsProps) {
  return (
    <Card className="mb-6 overflow-hidden backdrop-blur-md bg-white/70 dark:bg-black/40 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl">
      <CardContent className="pt-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 items-start md:items-center"
        >
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="h-5 w-5 text-blue-500" />
            <span className="font-medium">Filtros:</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label htmlFor="location-filter" className="text-sm font-medium whitespace-nowrap">
                Localidad:
              </label>
              <Select value={selectedLocation} onValueChange={onLocationChange}>
                <SelectTrigger
                  id="location-filter"
                  className="w-full rounded-xl bg-white/80 backdrop-blur-sm border-gray-200/70 transition-all duration-300 hover:border-blue-300 focus:ring-blue-300"
                >
                  <SelectValue placeholder="Seleccionar localidad" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border border-gray-200/70 shadow-lg backdrop-blur-md bg-white/90">
                  {locations.map((location) => (
                    <SelectItem
                      key={location}
                      value={location}
                      className="cursor-pointer transition-colors duration-200 hover:bg-blue-50/80 rounded-lg my-0.5"
                    >
                      {location === "Todas" ? "Todas las localidades" : location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="sort-order" className="text-sm font-medium whitespace-nowrap">
                Ordenar:
              </label>
              <Select value={sortOrder} onValueChange={(value) => onSortOrderChange(value as SortOrder)}>
                <SelectTrigger
                  id="sort-order"
                  className="w-full rounded-xl bg-white/80 backdrop-blur-sm border-gray-200/70 transition-all duration-300 hover:border-blue-300 focus:ring-blue-300"
                >
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border border-gray-200/70 shadow-lg backdrop-blur-md bg-white/90">
                  <SelectItem
                    value="default"
                    className="cursor-pointer transition-colors duration-200 hover:bg-blue-50/80 rounded-lg my-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <span>Predeterminado</span>
                    </div>
                  </SelectItem>
                  <SelectItem
                    value="asc"
                    className="cursor-pointer transition-colors duration-200 hover:bg-blue-50/80 rounded-lg my-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <SortAsc className="h-4 w-4" />
                      <span>A-Z</span>
                    </div>
                  </SelectItem>
                  <SelectItem
                    value="desc"
                    className="cursor-pointer transition-colors duration-200 hover:bg-blue-50/80 rounded-lg my-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <SortDesc className="h-4 w-4" />
                      <span>Z-A</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}
export interface Property {
    id: string
    title: string
    description: string
    price: number
    location: string
    bathrooms: number
    bedrooms: number
    status: "En venta" | "En alquiler"
    type: "Casa" | "Departamento"
}

export type PropertyId = string
export type PropertyTitle = Pick<Property, 'title'>
export type PropertyType = Pick<Property, 'type'>
export type PropertyStatus = 'En venta' | 'En alquiler'

export type ListOfProperties = Property[]

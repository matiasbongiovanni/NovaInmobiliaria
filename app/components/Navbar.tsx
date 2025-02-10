import React from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type NavItem = {
  title: string;
  href: string;
}

const defaultNavItems: NavItem[] = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Nosotros", 
    href: "/nosotros",
  },
  {
    title: "Propiedades",
    href: "/propiedades",
  },
  {
    title: "Inversiones",
    href: "/inversiones",
  },
  {
    title: "Contacto",
    href: "/contacto",
  },
];

type Props = {
  navItems?: NavItem[];
}

const Navbar = ({ navItems = defaultNavItems }: Props) => {
  return (
    <nav className="w-full px-4 py-3 box-border bg-pallete-400">
      <div className="mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Nova Inmobiliaria
        </Link>
          <ul className="flex items-center gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white hover:text-gray-100 transition-colors">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar propiedades..."
              className="text-center pl-5 pr-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
    </nav>
  )
}

export default Navbar
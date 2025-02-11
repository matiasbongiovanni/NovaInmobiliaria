"use client"

import { useState } from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-3 box-border bg-pallete-400">
      <div className="mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Nova Inmobiliaria
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-gray-300"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        <div className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white hover:text-gray-100 transition-colors">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {isOpen && (
          <div className="fixed inset-0 top-[60px] z-50 bg-pallete-400 md:hidden">
            <ul className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-xl text-white hover:text-gray-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="relative px-6">
              <input
                type="text"
                placeholder="Buscar propiedades..."
                className="w-full text-center pl-8 pr-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-8 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
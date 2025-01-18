'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          ForeverMarket
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLink href="/markets">Markets</NavLink>
          <NavLink href="/trade">Trade</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/account">Account</NavLink>
        </nav>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-blue-500/50"
        >
          Connect Wallet
        </motion.button>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800 py-2"
        >
          <nav className="flex flex-col space-y-2 px-4">
            <NavLink href="/markets">Markets</NavLink>
            <NavLink href="/trade">Trade</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/account">Account</NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-blue-500/50"
            >
              Connect Wallet
            </motion.button>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-300 hover:text-white transition-colors duration-200 ease-in-out">
    {children}
  </Link>
)

export default Header


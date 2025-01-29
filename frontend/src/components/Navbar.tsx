'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const products = [
    { name: 'WHITELABEL', href: '/whitelabel', description: 'Soluções personalizadas para sua empresa' },
    { name: 'Meu.Chef', href: '/meu-chef', description: 'Gestão inteligente para cozinhas' },
    { name: 'GenieStudio.io', href: '/genie-studio', description: 'Estúdio de criação digital' },
    { name: 'Salesvoice.io', href: '/salesvoice', description: 'Vendas potencializadas por IA' },
    { name: 'iCulinaryChef', href: '/iculinary-chef', description: 'Assistente virtual para gastronomia' },
  ]

  const menuItems = [
    { label: 'WHITELABEL', href: '/whitelabel' },
    { label: 'Meu.Chef', href: '/meu-chef' },
    { label: 'GenieStudio.io', href: '/genie-studio' },
    { label: 'Salesvoice.io', href: '/salesvoice' },
    { label: 'iCulinaryChef', href: '/iculinary-chef' },
    { label: 'Atuação', href: '/atuacao' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: 'https://wa.me/5511971916522' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-32 relative">
                <Image
                  src="/logo.svg"
                  alt="Neosfera"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-sans text-sm text-primary hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-accent focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-primary/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-sans text-primary hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 
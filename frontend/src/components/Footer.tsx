'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const date = new Date()
    const month = date.toLocaleString('pt-BR', { month: 'long' })
    const year = date.getFullYear()
    setCurrentDate(`${month} de ${year}`)
  }, [])

  return (
    <footer className="bg-[#333333] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <p className="font-sans">Neosfera Comunicação</p>
          <p className="font-sans text-sm">CNPJ: 07.410.776/0001-29</p>
          <p className="font-sans text-sm mt-4">{currentDate}</p>
        </div>
      </div>
    </footer>
  )
} 
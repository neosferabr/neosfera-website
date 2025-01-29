'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  image: string
  testimonial: string
  linkedin?: string
}

export default function TestimonialCard({ name, role, company, image, testimonial, linkedin }: TestimonialCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 bg-[#333333]">
        <h3 className="font-sans text-xl font-extrabold text-white">{name}</h3>
        <p className="text-[#33906E] font-sans text-sm mb-4">{role}, {company}</p>
        <p className="font-serif text-white/90 italic">"{testimonial}"</p>
        {linkedin && (
          <a 
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-sans"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
            <span>@{name.toLowerCase().replace(' ', '')}</span>
          </a>
        )}
      </div>
    </motion.div>
  )
} 
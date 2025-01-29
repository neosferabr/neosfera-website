'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import MathAnimation from '@/components/MathAnimation'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Sobre() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center px-4 md:px-8 lg:px-16 py-20 relative overflow-hidden">
        <MathAnimation />
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            <motion.h1 
              variants={fadeIn}
              className="font-sans text-4xl md:text-5xl lg:text-6xl text-primary font-extrabold mb-6"
            >
              Neosfera <span className="text-accent">Comunicação</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn}
              className="prose prose-lg prose-invert max-w-none space-y-6"
            >
              <p className="text-xl text-secondary font-serif">
                Mais de 20 anos de experiência, especializado em liderança de projetos, 
                desenvolvimento de sistemas e transformação digital nas maiores indústrias globais.
              </p>
              <p className="text-xl text-secondary font-serif">
                Reconhecido por sua capacidade de transformar desafios complexos em soluções eficientes, 
                sempre focado em inovação tecnológica e melhoria contínua dos processos corporativos.
              </p>
            </motion.div>
          </motion.div>

          {/* Founder Image */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/founder.jpg"
                alt="Marcelo Silva - Founder"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-4 rounded-xl">
              <p className="text-white font-sans font-bold text-xl">Marcelo Silva</p>
              <p className="text-accent">FOUNDER</p>
              <a 
                href="https://linkedin.com/in/marcelosilvansf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mt-2 text-sm"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                <span>@marcelosilvansf</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#1A1A1A]">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeIn}
            className="font-sans text-3xl md:text-4xl text-white mb-16 text-center font-extrabold"
          >
            Nossa <span className="text-accent">Proposta de Valor</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div 
              variants={fadeIn}
              className="space-y-6"
            >
              <h3 className="font-sans text-2xl text-white font-bold">
                Hoje é humanamente impossível criar tantas comunicações.
              </h3>
              <p className="text-white/80 font-serif text-lg">
                Como escalar e multiplicar a comunicação sem perder o controle e a 
                essência da estratégia da Marca?
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="space-y-6"
            >
              <h3 className="font-sans text-2xl text-accent font-bold">
                Criar comunicações eficientes, construídas por meio de agentes inteligentes.
              </h3>
              <p className="text-white/80 font-serif text-lg">
                Uma nuvem de agentes de Inteligência Artificial construída e aplicada para cada Negócio.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeIn}
            className="font-sans text-2xl text-primary mb-12 text-center font-bold"
          >
            Empresas que confiam em nosso trabalho
          </motion.h2>

          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
          >
            <div className="h-12 relative w-32">
              <Image
                src="/partners/nestle.svg"
                alt="Nestlé"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-12 relative w-32">
              <Image
                src="/partners/swift.svg"
                alt="Swift"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-12 relative w-32">
              <Image
                src="/partners/jbs.svg"
                alt="JBS"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-12 relative w-32">
              <Image
                src="/partners/friboi.svg"
                alt="Friboi"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mt-12"
          >
            <div className="h-12 relative w-32">
              <Image
                src="/partners/mit.svg"
                alt="MIT"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-12 relative w-32">
              <Image
                src="/partners/michigan.svg"
                alt="University of Michigan"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-12 relative w-32">
              <Image
                src="/partners/boston.svg"
                alt="Boston University"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-12 relative w-32">
              <Image
                src="/partners/berkeley.svg"
                alt="UC Berkeley"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
} 
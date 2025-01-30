'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import MathAnimation from '@/components/MathAnimation'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

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

export default function Atuacao() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <MathAnimation />
        <motion.div 
          className="max-w-4xl mx-auto w-full relative"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            className="font-sans text-4xl md:text-6xl lg:text-7xl text-[#333333] mb-6 font-extrabold tracking-tight"
            variants={fadeIn}
          >
            Como as indústrias estão adotando <span className="text-accent">Inteligência Artificial</span>?
          </motion.h1>
          <motion.p 
            className="font-serif text-lg md:text-xl max-w-2xl text-secondary leading-relaxed"
            variants={fadeIn}
          >
            Entenda nossa abordagem única para transformar desafios em soluções inovadoras através da IA
          </motion.p>
        </motion.div>
      </section>

      {/* Market Overview Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#333333]">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div variants={fadeIn} className="space-y-6">
              <h2 className="font-sans text-2xl text-white font-bold">Agentes de IA</h2>
              <p className="text-accent/90 font-sans text-sm">como Salesforce, Google, CrewAI</p>
              <p className="text-white/80 font-serif">
                Ferramentas que permitem às empresas criarem e operarem agentes personalizados, 
                integrando IA em suas operações.
              </p>
              <p className="text-accent mt-8 font-sans text-sm">Gargalos:</p>
              <p className="text-white/80 font-serif">
                Conhecimento técnico, aplicação prática na proposta de valor ao cliente
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-6">
              <h2 className="font-sans text-2xl text-white font-bold">Novos Negócios</h2>
              <p className="text-accent/90 font-sans text-sm">como Evidenza.ai, Charla.AI, Monkey</p>
              <p className="text-white/80 font-serif">
                Modelos de negócio que oferecem ferramentas pré-construídas para resolver desafios 
                específicos, como planejamento financeiro, marketing e vendas.
              </p>
              <p className="text-accent mt-8 font-sans text-sm">Gargalos:</p>
              <p className="text-white/80 font-serif">
                Custo, Segurança, Adaptabilidade ao modelo de negócio
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-accent/5">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeIn}
            className="font-sans text-3xl md:text-4xl text-primary mb-16 text-center font-extrabold"
          >
            Nossa <span className="text-accent">Metodologia</span>
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Captura de oportunidades",
                subtitle: "Identificar dores e oportunidades",
                items: [
                  "Principais dores",
                  "Marketing / CRM",
                  "Eficiência operacional",
                  "Vendas"
                ]
              },
              {
                title: "Estratégia de atuação",
                subtitle: "Definir a estratégia ideal",
                items: [
                  "Projeto",
                  "Consultoria & Aceleração",
                  "Bootstrapping"
                ]
              },
              {
                title: "Ideação & tese",
                subtitle: "Planejar a operação ou projeto",
                items: [
                  "Definir a tese para empresa ou produto"
                ]
              },
              {
                title: "Implementação",
                subtitle: "Implementar e acelerar",
                items: [
                  "Assessment & Landscape",
                  "Construção de Roadmap",
                  "Desenho da solução",
                  "Implementação ou Acompanhamento"
                ]
              }
            ].map((step, index) => (
              <motion.div 
                key={step.title}
                variants={fadeIn}
                className="relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-sans text-xl text-primary font-bold">{step.title}</h3>
                  </div>
                  <p className="font-serif text-accent">{step.subtitle}</p>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="font-serif text-secondary flex items-center gap-2">
                        <ArrowLongRightIcon className="w-4 h-4 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-[2px] bg-accent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#333333]">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="font-sans text-4xl text-white font-bold mb-4">
              Nada substitui a criatividade humana.
            </h2>
            <h2 className="font-sans text-4xl text-accent font-bold">
              Apenas a IA escala com consistência.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            <motion.div variants={fadeIn} className="text-center">
              <h3 className="font-sans text-2xl text-white font-bold mb-6">
                Agências
              </h3>
              <p className="font-serif text-white/80 text-lg">
                "A IA amplifica, mas nunca substitui a essência criativa que as agências criam para emocionar e conectar."
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <h3 className="font-sans text-2xl text-white font-bold mb-6">
                Influenciadores
              </h3>
              <p className="font-serif text-white/80 text-lg">
                "Os influenciadores criam conexões genuínas com a sua autenticidade, enquanto a IA sustenta a consistência e a eficiência."
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <h3 className="font-sans text-2xl text-white font-bold mb-6">
                Inteligência Artificial
              </h3>
              <p className="font-serif text-white/80 text-lg">
                "Com a IA, é possível multiplicar o impacto das ideias criativas, mantendo a essência em cada interação."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  )
} 
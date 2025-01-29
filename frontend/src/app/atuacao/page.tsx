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
            className="font-sans text-4xl md:text-6xl lg:text-7xl text-primary mb-6 font-extrabold tracking-tight"
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

      {/* Value Proposition Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
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
            Nossa <span className="text-accent">Proposta de Valor</span>
          </motion.h2>

          <motion.div variants={fadeIn} className="text-center mb-20">
            <h3 className="font-sans text-2xl text-primary font-bold mb-4">
              Criar comunicações eficientes, construídas por meio de agentes inteligentes
            </h3>
            <p className="font-serif text-secondary text-lg">
              Uma nuvem de agentes de Inteligência Artificial construída e aplicada para cada Negócio
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 items-center justify-items-center">
            {[
              { name: 'AI Agents', desc: 'Personalizar estratégia\nPotencializar uso da IA' },
              { name: 'Branding', desc: 'Identidade e posicionamento' },
              { name: 'Personas', desc: 'Público-alvo e comportamento' },
              { name: 'Setor & Mercado', desc: 'Análise competitiva' },
              { name: 'Clientes', desc: 'Relacionamento e feedback' },
              { name: 'Canais Digitais', desc: 'Presença e engajamento' },
              { name: 'Content Score', desc: 'Métricas e otimização' }
            ].map((item, index) => (
              <div key={item.name} className="text-center space-y-2">
                <div className="h-16 w-16 relative mx-auto">
                  <Image
                    src={`/icons/${item.name.toLowerCase().replace(' & ', '-').replace(' ', '-')}.svg`}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="font-sans text-primary font-bold">{item.name}</h4>
                <p className="font-serif text-secondary text-sm whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </motion.div>
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

      {/* Final Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#333333]">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeIn}
            className="font-sans text-3xl md:text-4xl text-white mb-6 font-extrabold"
          >
            Nada substitui a criatividade humana.
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="font-sans text-xl text-accent font-bold"
          >
            Apenas a IA escala com consistência.
          </motion.p>

          <motion.div 
            variants={fadeIn}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <div className="space-y-4">
              <h3 className="font-sans text-accent text-xl">Agências</h3>
              <p className="font-serif text-white/80">os criativos</p>
              <p className="font-serif text-white/80">a big idea</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-sans text-accent text-xl">Influenciador</h3>
              <p className="font-serif text-white/80">os amplificadores</p>
              <p className="font-serif text-white/80">a "projeção da realidade"</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-sans text-accent text-xl">Inteligência Artificial</h3>
              <p className="font-serif text-white/80">a consistência</p>
              <p className="font-serif text-white/80">a escala</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
} 
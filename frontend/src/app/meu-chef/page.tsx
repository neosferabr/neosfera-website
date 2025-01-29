'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import MathAnimation from "@/components/MathAnimation"
import {
  ClipboardDocumentListIcon,
  BanknotesIcon,
  ChartBarIcon,
  CubeIcon,
  AcademicCapIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline'
import YouTubeEmbed from '@/components/YouTubeEmbed'

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

export default function MeuChef() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
        <MathAnimation />
        <motion.div 
          className="max-w-4xl mx-auto w-full relative"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="h-12 relative w-36 mb-8">
            <Image
              src="/products/meu-chef.svg"
              alt="Meu.Chef"
              fill
              className="object-contain object-left"
            />
          </div>
          <motion.h1 
            className="font-sans text-4xl md:text-6xl lg:text-7xl text-primary mb-6 font-extrabold tracking-tight"
            variants={fadeIn}
          >
            Gestão inteligente para <span className="text-accent">cozinhas profissionais</span>
          </motion.h1>
          <motion.p 
            className="font-serif text-lg md:text-xl max-w-2xl text-secondary leading-relaxed"
            variants={fadeIn}
          >
            Otimize suas operações culinárias com IA avançada. Controle custos, 
            padronize receitas e aumente a eficiência da sua cozinha.
          </motion.p>
        </motion.div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#333333]">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <YouTubeEmbed 
              videoId="ZxzI9G6Cnbo" 
              title="Demonstração Meu.Chef - Gestão Inteligente para Cozinhas Profissionais"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="font-sans text-3xl md:text-4xl text-primary mb-16 text-center font-extrabold"
            variants={fadeIn}
          >
            Recursos <span className="text-accent">Principais</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Gestão de Receitas",
                description: "Padronização e controle de receitas com IA para garantir consistência e qualidade em todas as preparações.",
                icon: ClipboardDocumentListIcon
              },
              {
                title: "Controle de Custos",
                description: "Análise preditiva de custos e desperdício, otimizando seu CMV e aumentando a lucratividade.",
                icon: BanknotesIcon
              },
              {
                title: "Planejamento de Produção",
                description: "IA que prevê demanda e sugere quantidades ideais de preparo, reduzindo desperdícios.",
                icon: ChartBarIcon
              },
              {
                title: "Gestão de Estoque",
                description: "Controle inteligente de inventário com alertas automáticos e sugestões de compras.",
                icon: CubeIcon
              },
              {
                title: "Treinamento Virtual",
                description: "Assistente virtual para treinamento de equipe e padronização de processos.",
                icon: AcademicCapIcon
              },
              {
                title: "Análise de Dados",
                description: "Dashboard completo com insights em tempo real sobre sua operação.",
                icon: PresentationChartLineIcon
              }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="p-6 rounded-2xl bg-background shadow-lg hover:shadow-xl transition-shadow"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <h3 className="font-sans text-xl text-primary font-extrabold">{feature.title}</h3>
                </div>
                <p className="font-serif text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-accent/5">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="font-sans text-3xl md:text-4xl text-primary mb-16 text-center font-extrabold"
            variants={fadeIn}
          >
            Benefícios <span className="text-accent">Comprovados</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                stat: "40%",
                title: "Redução de Desperdício",
                description: "Através de previsão de demanda e controle preciso de porções."
              },
              {
                stat: "25%",
                title: "Economia em Compras",
                description: "Com gestão inteligente de estoque e sugestões de fornecedores."
              },
              {
                stat: "60%",
                title: "Mais Produtividade",
                description: "Otimização de processos e automação de tarefas repetitivas."
              },
              {
                stat: "98%",
                title: "Padronização",
                description: "Garantia de qualidade consistente em todas as preparações."
              }
            ].map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                className="text-center md:text-left"
                variants={fadeIn}
              >
                <div className="text-5xl md:text-6xl font-extrabold text-accent mb-4">
                  {benefit.stat}
                </div>
                <h3 className="font-sans text-xl text-primary font-extrabold mb-2">
                  {benefit.title}
                </h3>
                <p className="font-serif text-secondary">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-accent text-background">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="font-sans text-3xl md:text-4xl mb-8 font-extrabold"
            variants={fadeIn}
          >
            Pronto para revolucionar sua cozinha?
          </motion.h2>
          <motion.p 
            className="font-serif text-lg mb-8"
            variants={fadeIn}
          >
            Agende uma demonstração e descubra como o Meu.Chef pode transformar sua operação.
          </motion.p>
          <motion.button 
            className="font-sans bg-background text-accent px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Demo
          </motion.button>
        </motion.div>
      </section>
    </>
  )
} 
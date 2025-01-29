'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import MathAnimation from "@/components/MathAnimation"
import {
  ChartPieIcon,
  PresentationChartLineIcon,
  ChatBubbleBottomCenterTextIcon,
  BoltIcon,
  BriefcaseIcon,
  ArrowPathIcon
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

export default function Salesvoice() {
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
              src="/products/salesvoice.svg"
              alt="Salesvoice.io"
              fill
              className="object-contain object-left"
            />
          </div>
          <motion.h1 
            className="font-sans text-4xl md:text-6xl lg:text-7xl text-primary mb-6 font-extrabold tracking-tight"
            variants={fadeIn}
          >
            Vendas potencializadas por <span className="text-accent">inteligência artificial</span>
          </motion.h1>
          <motion.p 
            className="font-serif text-lg md:text-xl max-w-2xl text-secondary leading-relaxed"
            variants={fadeIn}
          >
            Maximize suas conversões com análise preditiva avançada e automação 
            inteligente do processo de vendas.
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
              videoId="Pc29ZuqmKko" 
              title="Demonstração Salesvoice.io - Solução de Vendas Inteligente"
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
            Recursos <span className="text-accent">Inteligentes</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Lead Scoring",
                description: "Priorize leads automaticamente com base em dados comportamentais e probabilidade de conversão.",
                icon: ChartPieIcon
              },
              {
                title: "Análise Preditiva",
                description: "Preveja tendências de vendas e identifique oportunidades com antecedência.",
                icon: PresentationChartLineIcon
              },
              {
                title: "Automação de Outreach",
                description: "Personalize e automatize o contato com prospects usando IA conversacional.",
                icon: ChatBubbleBottomCenterTextIcon
              },
              {
                title: "Insights em Tempo Real",
                description: "Monitore KPIs e receba recomendações estratégicas instantâneas.",
                icon: BoltIcon
              },
              {
                title: "CRM Inteligente",
                description: "Gestão de relacionamentos com clientes potencializada por IA.",
                icon: BriefcaseIcon
              },
              {
                title: "Otimização de Funil",
                description: "Identifique e corrija gargalos no processo de vendas automaticamente.",
                icon: ArrowPathIcon
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
            Impacto <span className="text-accent">Comprovado</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                stat: "60%",
                title: "Mais Conversões",
                description: "Aumento médio na taxa de conversão com leads qualificados por IA."
              },
              {
                stat: "45%",
                title: "Redução de Ciclo",
                description: "Diminuição no tempo médio do ciclo de vendas com automação inteligente."
              },
              {
                stat: "90%",
                title: "Precisão Preditiva",
                description: "Taxa de acerto nas previsões de vendas e comportamento de leads."
              },
              {
                stat: "3x",
                title: "Mais Produtividade",
                description: "Aumento na produtividade da equipe de vendas com automação."
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
            Pronto para transformar suas vendas?
          </motion.h2>
          <motion.p 
            className="font-serif text-lg mb-8"
            variants={fadeIn}
          >
            Agende uma demonstração e descubra como o Salesvoice.io pode revolucionar seu processo comercial.
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
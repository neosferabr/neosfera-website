'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import MathAnimation from "@/components/MathAnimation"
import {
  SparklesIcon,
  PhotoIcon,
  BuildingStorefrontIcon,
  RectangleGroupIcon,
  ClockIcon,
  ChartBarIcon
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

export default function ICulinaryChef() {
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
              src="/products/iculinary-chef.svg"
              alt="iCulinaryChef"
              fill
              className="object-contain object-left"
            />
          </div>
          <motion.h1 
            className="font-sans text-4xl md:text-6xl lg:text-7xl text-[#333333] mb-6 font-extrabold tracking-tight"
            variants={fadeIn}
          >
            Revolucione sua <span className="text-accent">produção de conteúdo</span> gastronômico
          </motion.h1>
          <motion.p 
            className="font-serif text-lg md:text-xl max-w-2xl text-secondary leading-relaxed"
            variants={fadeIn}
          >
            Transforme a maneira como estúdios culinários e indústrias alimentícias criam e planejam 
            conteúdo para suas marcas com inteligência artificial.
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
              title="Demonstração iCulinaryChef - Plataforma de Produção de Conteúdo Gastronômico"
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
            Recursos <span className="text-accent">Inovadores</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Planejamento Inteligente",
                description: "Sistema que considera sazonalidade, público-alvo e objetivos específicos de cada marca na criação de receitas.",
                icon: SparklesIcon
              },
              {
                title: "Gestão de Sessões",
                description: "Planejamento otimizado de sessões fotográficas e produção de conteúdo, maximizando recursos e tempo.",
                icon: PhotoIcon
              },
              {
                title: "Gestão de Marcas",
                description: "Guidelines específicos por marca garantindo consistência na comunicação e alinhamento com a identidade visual.",
                icon: BuildingStorefrontIcon
              },
              {
                title: "Adaptação Multiplataforma",
                description: "Conteúdo automaticamente otimizado para diferentes redes sociais e canais de comunicação.",
                icon: RectangleGroupIcon
              },
              {
                title: "Otimização de Tempo",
                description: "Redução de até 70% no tempo de planejamento de campanhas culinárias e produção de conteúdo.",
                icon: ClockIcon
              },
              {
                title: "Analytics Avançado",
                description: "Análise de performance do conteúdo e insights para otimização contínua das estratégias.",
                icon: ChartBarIcon
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
            Benefícios por <span className="text-accent">Segmento</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Estúdios de Fotografia",
                description: "Transforme serviços operacionais em consultivos estratégicos, atenda mais clientes com a mesma estrutura e otimize suas sessões fotográficas."
              },
              {
                title: "Indústrias Alimentícias",
                description: "Garanta consistência na comunicação da marca, acelere a produção de conteúdo e aproveite melhor seu portfólio de produtos."
              },
              {
                title: "Profissionais Autônomos",
                description: "Compita com grandes estúdios, otimize seu tempo de planejamento e ofereça serviços mais sofisticados aos seus clientes."
              }
            ].map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                className="text-center md:text-left"
                variants={fadeIn}
              >
                <h3 className="font-sans text-xl text-primary font-extrabold mb-4">
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
            Pronto para revolucionar sua produção de conteúdo?
          </motion.h2>
          <motion.p 
            className="font-serif text-lg mb-8"
            variants={fadeIn}
          >
            Agende uma demonstração e descubra como o iCulinaryChef pode transformar sua estratégia de conteúdo gastronômico.
          </motion.p>
          <motion.a 
            href="https://wa.me/5511971916522"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans inline-block bg-background text-accent px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em Contato
          </motion.a>
        </motion.div>
      </section>
    </>
  )
} 
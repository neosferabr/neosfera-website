'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import MathAnimation from "@/components/MathAnimation"
import {
  ChatBubbleBottomCenterTextIcon,
  BookOpenIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  RocketLaunchIcon
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
            className="font-sans text-4xl md:text-6xl lg:text-7xl text-[#333333] mb-6 font-extrabold tracking-tight"
            variants={fadeIn}
          >
            Relacionamento <span className="text-accent">ativo e inteligente</span> com seus clientes
          </motion.h1>
          <motion.p 
            className="font-serif text-lg md:text-xl max-w-2xl text-secondary leading-relaxed"
            variants={fadeIn}
          >
            Uma plataforma completa e inovadora para implementar no CRM, marketing, SAC ou recuperação de clientes. 
            Fale ativamente com cada cliente, do jeito certo, no momento certo.
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
              title="Demonstração Meu.Chef - Plataforma de Relacionamento Inteligente"
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
                title: "Interface Conversacional Ativa",
                description: "Não espera o input do usuário, atua proativamente para se relacionar e evolui automaticamente conforme o funil de cada cliente.",
                icon: ChatBubbleBottomCenterTextIcon
              },
              {
                title: "Base de Conhecimento Avançada",
                description: "100% personalizada para seu negócio, com agentes que conhecem profundamente sua marca e ativam conhecimento contextualizado.",
                icon: BookOpenIcon
              },
              {
                title: "AI Analytics",
                description: "Análise em tempo real das interações, identificando mudanças de comportamento e gerando insights direcionados.",
                icon: ChartBarIcon
              },
              {
                title: "Controle de Custos",
                description: "Monitoramento em tempo real do custo de cada interação, com seleção automática da LLM mais adequada para cada momento.",
                icon: CurrencyDollarIcon
              },
              {
                title: "Perfil de Clientes",
                description: "Gestão profunda das informações e perfil de cada cliente, com histórico completo de interações.",
                icon: UserGroupIcon
              },
              {
                title: "Customização Total",
                description: "100% adaptável para qualquer negócio ou indústria, com objetivos de interação personalizados.",
                icon: RocketLaunchIcon
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
            Aplicações <span className="text-accent">Práticas</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "CRM & Marketing",
                description: "Aumente o relacionamento de qualidade com os clientes e permita que o marketing explique melhor sobre as marcas."
              },
              {
                title: "Recuperação de Leads",
                description: "Reative leads inativos e qualifique ativamente os clientes da base de forma personalizada."
              },
              {
                title: "SAC Inteligente",
                description: "Atendimento proativo que antecipa necessidades e resolve questões antes mesmo delas surgirem."
              },
              {
                title: "Insights de Negócio",
                description: "Conheça de forma ativa o comportamento e perfil dos seus clientes, gerando insights valiosos em tempo real."
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
            Pronto para revolucionar seu relacionamento com clientes?
          </motion.h2>
          <motion.p 
            className="font-serif text-lg mb-8"
            variants={fadeIn}
          >
            Agende uma demonstração e descubra como o Meu.Chef pode transformar a gestão do seu negócio.
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
'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import MathAnimation from "@/components/MathAnimation"
import {
  SpeakerWaveIcon,
  MapIcon,
  ChartBarIcon,
  LightBulbIcon,
  UserGroupIcon,
  UserIcon
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
            className="font-sans text-4xl md:text-6xl lg:text-7xl text-[#333333] mb-6 font-extrabold tracking-tight"
            variants={fadeIn}
          >
            Comunicação <span className="text-accent">personalizada</span> com sua equipe de vendas
          </motion.h1>
          <motion.p 
            className="font-serif text-lg md:text-xl max-w-2xl text-secondary leading-relaxed"
            variants={fadeIn}
          >
            Uma plataforma completa e inovadora para sua equipe de vendas. 
            Fale com cada vendedor, do jeito certo, no momento certo, no dia certo.
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
              title="Demonstração Salesvoice.io - Plataforma de Comunicação para Equipes de Vendas"
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
                title: "Briefing Diário com IA",
                description: "Briefings personalizados em áudio para cada vendedor se preparar durante o deslocamento, considerando perfil do cliente e estratégia do negócio.",
                icon: SpeakerWaveIcon
              },
              {
                title: "Gestão de Visitas",
                description: "Organização inteligente de roteiros, captura de relatos em tempo real e histórico completo de visitas que não se perde na troca de carteira.",
                icon: MapIcon
              },
              {
                title: "Estratégia Comercial",
                description: "Comunicação eficiente de mudanças estratégicas e integração de informações do Marketing, Trade e CRM para toda a equipe.",
                icon: ChartBarIcon
              },
              {
                title: "Insights em Tempo Real",
                description: "Relatórios, sugestões e orientações geradas em tempo real para cada vendedor, enriquecendo planejamento e projeções.",
                icon: LightBulbIcon
              },
              {
                title: "Perfil de Clientes",
                description: "Gestão profunda das informações e histórico completo de visitas de cada cliente para um relacionamento mais efetivo.",
                icon: UserGroupIcon
              },
              {
                title: "Perfil do Vendedor",
                description: "Gestão personalizada de cada vendedor, permitindo comunicação adaptada para maximizar resultados individuais.",
                icon: UserIcon
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
            Benefícios <span className="text-accent">Principais</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Comercial e Food Service",
                description: "Potencialize a atuação do time comercial e food service com comunicação personalizada e insights relevantes."
              },
              {
                title: "Trade Otimizado",
                description: "Permita que o trade opere melhor o negócio com informações integradas e atualizadas em tempo real."
              },
              {
                title: "Marketing Conectado",
                description: "Mantenha o marketing conectado com o campo em tempo real, alinhando estratégias e ações."
              },
              {
                title: "Gestão Eficiente",
                description: "Tome decisões baseadas no melhor contexto, com redução de tarefas administrativas e mais tempo para relacionamento."
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
            Pronto para potencializar sua equipe de vendas?
          </motion.h2>
          <motion.p 
            className="font-serif text-lg mb-8"
            variants={fadeIn}
          >
            Agende uma demonstração e descubra como o SalesVoice pode transformar a comunicação com sua equipe de vendas.
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
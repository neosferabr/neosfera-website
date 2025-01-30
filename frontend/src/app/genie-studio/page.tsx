'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import MathAnimation from "@/components/MathAnimation"
import {
  WrenchIcon,
  BuildingOfficeIcon,
  ChartBarSquareIcon,
  CogIcon,
  AcademicCapIcon,
  UserGroupIcon
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

export default function GenieStudio() {
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
              src="/products/genie-studio.svg"
              alt="GenieStudio.io"
              fill
              className="object-contain object-left"
            />
          </div>
          <motion.h1 
            className="font-sans text-4xl md:text-6xl lg:text-7xl text-[#333333] mb-6 font-extrabold tracking-tight"
            variants={fadeIn}
          >
            Comunicação <span className="text-accent">integrada e consistente</span> em toda empresa
          </motion.h1>
          <motion.p 
            className="font-serif text-lg md:text-xl max-w-2xl text-secondary leading-relaxed"
            variants={fadeIn}
          >
            Mantenha toda a empresa alinhada com sua estratégia de comunicação. Do marketing ao RH, 
            do comercial ao SAC, todos comunicando com consistência e qualidade.
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
              videoId="zAYd37arUyU" 
              title="Demonstração GenieStudio.io - Plataforma de Comunicação Integrada"
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
                title: "Wizard & Actions",
                description: "Crie fluxos de trabalho automatizados, direcione tarefas para agentes específicos e agende recorrências de execução.",
                icon: WrenchIcon
              },
              {
                title: "Desdobramento da Marca",
                description: "Mantenha a consistência do branding em todos os canais, desde comunicação interna até campanhas de performance.",
                icon: BuildingOfficeIcon
              },
              {
                title: "Controle e Gestão",
                description: "Configure estratégias diferentes para cada gestor de marca e controle custos por tarefa, usuário e marca.",
                icon: ChartBarSquareIcon
              },
              {
                title: "Customização Total",
                description: "Adapte a estratégia de comunicação para cada marca e canal, com módulos especializados por área.",
                icon: CogIcon
              },
              {
                title: "Treinamento e RH",
                description: "Monte treinamentos e capacite colaboradores mantendo a consistência da comunicação corporativa.",
                icon: AcademicCapIcon
              },
              {
                title: "Conhecimento Avançado",
                description: "Cadastro qualificado de marcas, produtos, personas e estratégias de comunicação com agentes customizados.",
                icon: UserGroupIcon
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
                title: "Marketing e Comunicação",
                description: "Comunique-se efetivamente com todos os stakeholders, mantendo a consistência da marca em todos os canais."
              },
              {
                title: "Trade e Comercial",
                description: "Replique exatamente o que a comunicação e a marca desejam em todas as interações comerciais."
              },
              {
                title: "SAC e CRM",
                description: "Enriqueça a experiência dos consumidores com comunicação alinhada e consistente."
              },
              {
                title: "Performance e Retail Media",
                description: "Mantenha o branding consistente em todas as campanhas de performance e retail media."
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
            Pronto para unificar sua comunicação?
          </motion.h2>
          <motion.p 
            className="font-serif text-lg mb-8"
            variants={fadeIn}
          >
            Agende uma demonstração e descubra como o GenieStudio pode transformar a comunicação da sua empresa.
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
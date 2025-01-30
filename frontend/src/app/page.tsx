'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import TestimonialCard from '@/components/TestimonialCard'
import MathAnimation from "@/components/MathAnimation"
import Link from "next/link";

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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <MathAnimation />
        <motion.div 
          className="max-w-4xl mx-auto w-full relative"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            className="font-sans text-4xl md:text-6xl lg:text-7xl text-[#333333] mb-6 font-black tracking-tight"
            variants={fadeIn}
          >
            Inteligência artificial aplicada que <span className="text-accent">gera valor</span> a marcas e negócios.
          </motion.h1>
          <motion.p 
            className="font-serif text-lg md:text-xl max-w-2xl text-secondary leading-relaxed"
            variants={fadeIn}
          >
            Neosfera acelera o desenvolvimento de projetos de Inteligência Artificial, 
            transformando ideias, projetos e conceitos em soluções inovadoras e escaláveis.
          </motion.p>
        </motion.div>
      </section>

      {/* In a Nutshell Section */}
      <section className="bg-[#33906E] py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-2xl text-white mb-6">
            in a nutshell
          </h2>
          <p className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-[#333333] leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
            Nós somos o que repetidamente fazemos. A comunicação através da IA é portanto um hábito que, com consistência, deve ser executado diariamente.
          </p>
        </div>
      </section>

      {/* Products Section */}
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
            Produtos <span className="text-accent">Whitelabel by neosfera</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Meu.Chef */}
            <motion.div 
              className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeIn}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <Image
                    src="/products/meu-chef-preview.jpg"
                    alt="Meu.Chef Preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                  <div className="h-8 w-32 relative mb-4">
                    <Image
                      src="/products/meu-chef.svg"
                      alt="Meu.Chef"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <p className="font-serif text-secondary mb-6">
                    Uma plataforma completa e inovadora para implementar no CRM, marketing, SAC ou recuperação de clientes.
                  </p>
                  <Link 
                    href="/meu-chef"
                    className="mt-auto inline-flex items-center font-sans font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    Ver mais
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* GenieStudio.io */}
            <motion.div 
              className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeIn}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <Image
                    src="/products/genie-studio-preview.jpg"
                    alt="GenieStudio.io Preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                  <div className="h-8 w-32 relative mb-4">
                    <Image
                      src="/products/genie-studio.svg"
                      alt="GenieStudio.io"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <p className="font-serif text-secondary mb-6">
                    Comunicação integrada e consistente em toda empresa. Do marketing ao RH, do comercial ao SAC.
                  </p>
                  <Link 
                    href="/genie-studio"
                    className="mt-auto inline-flex items-center font-sans font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    Ver mais
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Salesvoice.io */}
            <motion.div 
              className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeIn}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <Image
                    src="/products/salesvoice-preview.jpg"
                    alt="Salesvoice.io Preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                  <div className="h-8 w-32 relative mb-4">
                    <Image
                      src="/products/salesvoice.svg"
                      alt="Salesvoice.io"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <p className="font-serif text-secondary mb-6">
                    Comunicação personalizada com sua equipe de vendas. Fale com cada vendedor, do jeito certo, no momento certo.
                  </p>
                  <Link 
                    href="/salesvoice"
                    className="mt-auto inline-flex items-center font-sans font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    Ver mais
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* iCulinaryChef */}
            <motion.div 
              className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeIn}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <Image
                    src="/products/iculinary-chef-preview.jpg"
                    alt="iCulinaryChef Preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                  <div className="h-8 w-32 relative mb-4">
                    <Image
                      src="/products/iculinary-chef.svg"
                      alt="iCulinaryChef"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <p className="font-serif text-secondary mb-6">
                    Potencialize o conhecimento gastronômico da sua equipe com treinamento personalizado e suporte contínuo.
                  </p>
                  <Link 
                    href="/iculinary-chef"
                    className="mt-auto inline-flex items-center font-sans font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    Ver mais
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tech Proof Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#333333]">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="font-sans text-3xl md:text-4xl text-white mb-6 text-center font-extrabold"
            variants={fadeIn}
          >
            Tecnologias que <span className="text-[#33906E]">utilizamos</span>
          </motion.h2>
          <motion.p 
            className="font-serif text-lg text-white/80 mb-16 text-center max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Trabalhamos com as mais avançadas ferramentas de Inteligência Artificial do mercado
          </motion.p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {[
              { name: 'OpenAI', logo: '/tech/openai.png' },
              { name: 'Claude', logo: '/tech/claude.png' },
              { name: 'DeepSeek', logo: '/tech/deepseek.png' },
              { name: 'LLaMA', logo: '/tech/llama.png' },
              { name: 'AWS', logo: '/tech/aws.png' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="w-32 md:w-40 h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="font-sans text-3xl md:text-4xl text-primary mb-6 text-center font-extrabold"
            variants={fadeIn}
          >
            Parceiros e <span className="text-accent">referências</span> na inovação e transformação
          </motion.h2>
          <motion.p 
            className="font-serif text-lg text-secondary mb-16 text-center max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Conheça as experiências de quem já transformou suas ideias em realidade com a Neosfera
          </motion.p>
          
          <div className="relative">
            {/* Desktop Navigation Buttons */}
            <button 
              className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background border border-primary/10 hover:bg-primary/5 transition-colors"
              onClick={() => {
                const container = document.getElementById('testimonials-container')
                if (container) {
                  container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' })
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <button 
              className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background border border-primary/10 hover:bg-primary/5 transition-colors"
              onClick={() => {
                const container = document.getElementById('testimonials-container')
                if (container) {
                  container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' })
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Testimonials Container */}
            <div 
              id="testimonials-container"
              className="flex overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4 md:mx-0 md:px-0 gap-8 snap-x snap-mandatory"
            >
              <motion.div variants={fadeIn} className="w-[300px] flex-shrink-0 snap-center">
                <TestimonialCard
                  name="Carlos Silva"
                  role="CTO"
                  company="TechFood Brasil"
                  image="/testimonials/client1.jpg"
                  testimonial="A implementação do Meu.Chef revolucionou completamente nossa operação. A eficiência aumentou em 40% e a qualidade se manteve consistente."
                  linkedin="https://linkedin.com/in/carlossilva"
                />
              </motion.div>

              <motion.div variants={fadeIn} className="w-[300px] flex-shrink-0 snap-center">
                <TestimonialCard
                  name="Ana Martins"
                  role="Diretora de Marketing"
                  company="Digital Solutions"
                  image="/testimonials/client2.jpg"
                  testimonial="O GenieStudio.io superou todas as nossas expectativas. A qualidade do conteúdo gerado por IA é impressionante."
                  linkedin="https://linkedin.com/in/anamartins"
                />
              </motion.div>

              <motion.div variants={fadeIn} className="w-[300px] flex-shrink-0 snap-center">
                <TestimonialCard
                  name="Roberto Santos"
                  role="CEO"
                  company="Sales Force Pro"
                  image="/testimonials/client3.jpg"
                  testimonial="Com o Salesvoice.io, nossas conversões aumentaram 60%. A análise preditiva tem sido fundamental para nossa estratégia."
                  linkedin="https://linkedin.com/in/robertosantos"
                />
              </motion.div>

              <motion.div variants={fadeIn} className="w-[300px] flex-shrink-0 snap-center">
                <TestimonialCard
                  name="Patricia Lima"
                  role="Chef Executiva"
                  company="Grupo Gastronômico SP"
                  image="/testimonials/client4.jpg"
                  testimonial="O iCulinaryChef tem sido um assistente incrível. Consigo gerenciar minha equipe e criar novos pratos com muito mais eficiência."
                  linkedin="https://linkedin.com/in/patricialima"
                />
              </motion.div>

              <motion.div variants={fadeIn} className="w-[300px] flex-shrink-0 snap-center">
                <TestimonialCard
                  name="Fernando Costa"
                  role="Diretor de Operações"
                  company="RestauranteTech"
                  image="/testimonials/client5.jpg"
                  testimonial="A integração do Meu.Chef com nossos sistemas existentes foi perfeita. O suporte da Neosfera foi excepcional."
                  linkedin="https://linkedin.com/in/fernandocosta"
                />
              </motion.div>

              <motion.div variants={fadeIn} className="w-[300px] flex-shrink-0 snap-center">
                <TestimonialCard
                  name="Juliana Mendes"
                  role="Head de Conteúdo"
                  company="Agência Criativa"
                  image="/testimonials/client6.jpg"
                  testimonial="O GenieStudio.io transformou nossa produção de conteúdo. Conseguimos entregar projetos 3x mais rápido."
                  linkedin="https://linkedin.com/in/julianamendes"
                />
              </motion.div>

              <motion.div variants={fadeIn} className="w-[300px] flex-shrink-0 snap-center">
                <TestimonialCard
                  name="Ricardo Oliveira"
                  role="Diretor Comercial"
                  company="Tech Ventures"
                  image="/testimonials/client7.jpg"
                  testimonial="O Salesvoice.io nos ajudou a identificar oportunidades que antes passavam despercebidas. ROI impressionante."
                  linkedin="https://linkedin.com/in/ricardooliveira"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
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
            Vamos conversar sobre seu projeto?
          </motion.h2>
          <motion.p 
            className="font-serif text-lg mb-8"
            variants={fadeIn}
          >
            Entre em contato para descobrir como podemos acelerar sua ideia.
          </motion.p>
          <motion.button 
            className="font-sans bg-background text-accent px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Conversa
          </motion.button>
        </motion.div>
      </section>
    </>
  );
}

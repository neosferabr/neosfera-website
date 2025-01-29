'use client'

import { useEffect, useState } from 'react'

export default function MathAnimation() {
  const [time, setTime] = useState(0)
  const [mounted, setMounted] = useState(false)
  
  // Usando proporções mais flexíveis
  const width = 1920 // Proporção de tela cheia
  const height = 1080 // Aspecto 16:9
  const centerX = width / 2
  const centerY = height / 2
  
  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setTime(t => (t + 0.03) % (2 * Math.PI)) // Velocidade reduzida para mais suavidade
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Gera linhas com padrões matemáticos
  const generateLines = () => {
    if (!mounted) return null
    
    const lines = []
    const colors = ['#33906E', '#2A9D8F', '#297F75']
    const phi = 1.618
    
    for (let i = 0; i < 30; i++) { // Reduzido número de linhas
      const t = (i / 30) * 2 * Math.PI
      const amplitudeX = width / 4
      const amplitudeY = height / 4
      const frequency = 1.2 // Reduzido para movimento mais suave
      
      const x1 = centerX + amplitudeX * Math.sin(t + time) * Math.cos(frequency * t)
      const y1 = centerY + amplitudeY * Math.cos(t + time) * Math.sin(frequency * t * phi)
      const x2 = centerX + amplitudeX * Math.sin(t - time) * Math.sin(frequency * t)
      const y2 = centerY + amplitudeY * Math.cos(t - time) * Math.cos(frequency * t * phi)
      
      const strokeWidth = 1 + Math.sin(t * 2 + time)
      
      lines.push(
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={colors[i % 3]}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          opacity={0.25 + 0.15 * Math.sin(t + time)} // Aumentada opacidade base e variação
        />
      )
    }
    return lines
  }

  // Gera curvas de Lissajous
  const generateLissajous = () => {
    if (!mounted) return null
    
    const curves = []
    const colors = ['#33906E', '#2A9D8F', '#297F75']
    const phi = 1.618
    
    for (let i = 0; i < 2; i++) { // Reduzido para 2 curvas
      const points = []
      const freq1 = (i + 1.5) * phi // Frequências mais suaves
      const freq2 = (i + 2) * phi
      
      for (let t = 0; t < 2 * Math.PI; t += 0.1) {
        const x = centerX + (width / 6) * Math.sin(freq1 * t + time)
        const y = centerY + (height / 6) * Math.cos(freq2 * t + time)
        points.push(`${x},${y}`)
      }
      
      curves.push(
        <polyline
          key={`lissajous-${i}`}
          points={points.join(' ')}
          fill="none"
          stroke={colors[i]}
          strokeWidth={1.5}
          opacity={0.3} // Aumentada opacidade
        />
      )
    }
    return curves
  }

  // Gera padrões harmônicos
  const generateHarmonicPatterns = () => {
    if (!mounted) return null
    
    const patterns = []
    const colors = ['#33906E', '#2A9D8F', '#297F75']
    
    for (let i = 0; i < 3; i++) { // Reduzido para 3 padrões
      const radius = (Math.min(width, height) / 12) * (i + 1)
      const points = []
      
      for (let t = 0; t < 4 * Math.PI; t += 0.1) {
        const x = centerX + radius * Math.sin(t + time + (i * Math.PI / 3))
        const y = centerY + radius * Math.cos(t * 1.618 + time)
        points.push(`${x},${y}`)
      }
      
      patterns.push(
        <path
          key={`harmonic-${i}`}
          d={`M ${points.join(' L ')}`}
          fill="none"
          stroke={colors[i % 3]}
          strokeWidth={1}
          opacity={0.2} // Aumentada opacidade
        />
      )
    }
    return patterns
  }

  // Não renderiza nada até o componente estar montado no cliente
  if (!mounted) {
    return (
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <svg 
          width="100%" 
          height="100%" 
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid slice"
          className="opacity-40" // Aumentada opacidade geral
        />
      </div>
    )
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
        className="opacity-40" // Aumentada opacidade geral
      >
        {generateHarmonicPatterns()}
        {generateLines()}
        {generateLissajous()}
      </svg>
    </div>
  )
} 
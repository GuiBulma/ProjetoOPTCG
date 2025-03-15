"use client"

import { cn } from "@/lib/utils"

interface ColorPieProps {
  colors: string[]
  size?: "sm" | "md" | "lg"
  className?: string
}

export function ColorPie({ colors, size = "md", className }: ColorPieProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  // Mapeamento de cores para suas posições no hexágono
  // Seguindo a ordem exata da imagem de referência
  const colorPositions: Record<string, number> = {
    Y: 0, // Amarelo (topo)
    R: 1, // Vermelho (direita superior)
    G: 2, // Verde (direita inferior)
    U: 3, // Azul (inferior)
    P: 4, // Roxo (esquerda inferior)
    B: 5, // Preto (esquerda superior)
  }

  const getColorClass = (color: string) => {
    switch (color) {
      case "R":
        return "fill-red-600"
      case "G":
        return "fill-green-600"
      case "B":
        return "fill-gray-800"
      case "U":
        return "fill-blue-600"
      case "Y":
        return "fill-yellow-500"
      case "P":
        return "fill-purple-600"
      default:
        return "fill-gray-400"
    }
  }

  // Função para gerar os pontos do hexágono
  const generateHexPoints = (segments = 6) => {
    const points = []
    const angleStep = (Math.PI * 2) / segments
    const radius = 50 // Raio do hexágono (SVG viewBox é 100x100)

    for (let i = 0; i < segments; i++) {
      const angle = i * angleStep - Math.PI / 2 // Começa do topo
      const x = 50 + radius * Math.cos(angle)
      const y = 50 + radius * Math.sin(angle)
      points.push(`${x},${y}`)
    }

    return points.join(" ")
  }

  // Função para gerar os pontos de cada segmento do hexágono
  const generateSegmentPath = (index: number, segments = 6) => {
    const angleStep = (Math.PI * 2) / segments
    const radius = 50
    const startAngle = index * angleStep - Math.PI / 2
    const endAngle = (index + 1) * angleStep - Math.PI / 2

    const x1 = 50 + radius * Math.cos(startAngle)
    const y1 = 50 + radius * Math.sin(startAngle)
    const x2 = 50 + radius * Math.cos(endAngle)
    const y2 = 50 + radius * Math.sin(endAngle)

    return `M 50,50 L ${x1},${y1} L ${x2},${y2} Z`
  }

  // Criar um array de 6 posições (hexágono) com as cores nas posições corretas
  const colorSegments = Array(6).fill(null)
  colors.forEach((color) => {
    const position = colorPositions[color]
    if (position !== undefined) {
      colorSegments[position] = color
    }
  })

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Contorno do hexágono */}
        <polygon points={generateHexPoints()} className="stroke-border fill-none" strokeWidth="2" />

        {/* Segmentos coloridos */}
        {colorSegments.map(
          (color, index) =>
            color && (
              <path
                key={index}
                d={generateSegmentPath(index)}
                className={cn(getColorClass(color), "transition-colors")}
              />
            ),
        )}
      </svg>
    </div>
  )
}


"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Loader2 } from "lucide-react"

interface CardTooltipProps {
  children: React.ReactNode
  cardName: string
}

export function CardTooltip({ children, cardName }: CardTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [loading, setLoading] = useState(true)
  const [cardData, setCardData] = useState<any | null>(null)
  const [error, setError] = useState(false)
  const triggerRef = useRef<HTMLSpanElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  // Simular busca de dados da carta (substituir por API real no futuro)
  useEffect(() => {
    if (showTooltip && !cardData && !error) {
      setLoading(true)

      // Simulação de API - substituir por chamada real
      setTimeout(() => {
        // Dados mockados para demonstração
        const mockCardData = {
          name: cardName,
          image: `/placeholder.svg?height=400&width=280&text=${encodeURIComponent(cardName)}`,
          type: "Personagem",
          color: "Vermelho",
          cost: 3,
          power: 5000,
          rarity: "Super Rara",
          effect: "Quando este personagem ataca, compre 1 carta.",
          counter: 1000,
          attribute: "Supernova",
          prices: {
            low: "R$ 15,00",
            avg: "R$ 25,00",
            high: "R$ 40,00",
          },
        }

        setCardData(mockCardData)
        setLoading(false)
      }, 500)
    }
  }, [showTooltip, cardData, cardName, error])

  // Calcular posição do tooltip
  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const tooltipRect = tooltipRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    // Posicionar à direita por padrão, mas mudar para esquerda se não couber
    let x = triggerRect.right + 10
    if (x + tooltipRect.width > viewportWidth - 20) {
      x = triggerRect.left - tooltipRect.width - 10
    }

    // Centralizar verticalmente, mas garantir que fique dentro da viewport
    let y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
    if (y < 20) y = 20
    if (y + tooltipRect.height > viewportHeight - 20) {
      y = viewportHeight - tooltipRect.height - 20
    }

    setPosition({ x, y })
  }

  useEffect(() => {
    if (showTooltip) {
      updatePosition()
      window.addEventListener("scroll", updatePosition)
      window.addEventListener("resize", updatePosition)
    }

    return () => {
      window.removeEventListener("scroll", updatePosition)
      window.removeEventListener("resize", updatePosition)
    }
  }, [showTooltip, cardData])

  return (
    <>
      <span
        ref={triggerRef}
        className="relative cursor-pointer text-primary hover:underline"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </span>

      {showTooltip && (
        <div
          ref={tooltipRef}
          className="fixed z-50 w-[300px] rounded-md border bg-background shadow-lg"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          {loading ? (
            <div className="flex h-[200px] items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : error ? (
            <div className="p-4 text-center text-muted-foreground">Não foi possível carregar os dados da carta.</div>
          ) : cardData ? (
            <div className="p-3">
              <div className="relative aspect-[7/10] w-full overflow-hidden rounded-md">
                <Image src={cardData.image || "/placeholder.svg"} alt={cardData.name} fill className="object-cover" />
              </div>
              <div className="mt-2 space-y-1 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{cardData.name}</span>
                  <span className="text-muted-foreground">{cardData.cost} Cost</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    {cardData.type} • {cardData.color}
                  </span>
                  <span className="text-muted-foreground">{cardData.power} Power</span>
                </div>
                <div className="text-xs text-muted-foreground">{cardData.effect}</div>
                <div className="mt-2 border-t pt-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>Preço Médio:</span>
                    <span className="font-medium">{cardData.prices.avg}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  )
}


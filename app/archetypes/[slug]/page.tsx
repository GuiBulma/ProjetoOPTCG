"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ColorPie } from "@/components/color-pie"

interface CardUsage {
  name: string
  quantity: number
  percentage: number
  type: string
  set: string
  image: string
}

interface TournamentResult {
  date: string
  event: string
  player: string
  position: string
  variant: string
  deckId: string
}

export default function ArchetypePage({ params }: { params: { slug: string } }) {
  const [timeFilter, setTimeFilter] = useState("30d")
  const [variantFilter, setVariantFilter] = useState("all")

  // Em um app real, você buscaria esses dados com base no slug
  const archetype = {
    name: "Luffy R/G",
    colors: ["R", "G"],
    leader: {
      name: "Monkey D. Luffy",
      set: "OP-01",
      image: "/placeholder.svg?height=400&width=280&text=Luffy",
    },
    stats: {
      totalDecks: 251,
      points: 2776,
      regionalTop8: 26,
      regionalWins: 6,
      internationalTop8: 13,
      internationalWins: 2,
    },
    cardUsage: [
      {
        name: "Monkey D. Luffy",
        quantity: 1,
        percentage: 100,
        type: "Líder",
        set: "OP-01",
        image: "/placeholder.svg?height=150&width=100&text=Luffy",
      },
      {
        name: "Roronoa Zoro",
        quantity: 4,
        percentage: 94.24,
        type: "Personagem",
        set: "OP-02",
        image: "/placeholder.svg?height=150&width=100&text=Zoro",
      },
      {
        name: "Nami",
        quantity: 4,
        percentage: 92.67,
        type: "Personagem",
        set: "OP-01",
        image: "/placeholder.svg?height=150&width=100&text=Nami",
      },
      {
        name: "Sanji",
        quantity: 3,
        percentage: 88.95,
        type: "Personagem",
        set: "OP-03",
        image: "/placeholder.svg?height=150&width=100&text=Sanji",
      },
      {
        name: "Thousand Sunny",
        quantity: 2,
        percentage: 87.91,
        type: "Estágio",
        set: "OP-01",
        image: "/placeholder.svg?height=150&width=100&text=Sunny",
      },
      {
        name: "Going Merry",
        quantity: 2,
        percentage: 85.43,
        type: "Estágio",
        set: "OP-01",
        image: "/placeholder.svg?height=150&width=100&text=Merry",
      },
      {
        name: "Gomu Gomu no Pistol",
        quantity: 4,
        percentage: 98.95,
        type: "Evento",
        set: "OP-01",
        image: "/placeholder.svg?height=150&width=100&text=Pistol",
      },
      {
        name: "Haki Supremo",
        quantity: 3,
        percentage: 92.67,
        type: "Evento",
        set: "OP-02",
        image: "/placeholder.svg?height=150&width=100&text=Haki",
      },
      {
        name: "Don!!",
        quantity: 20,
        percentage: 100,
        type: "Don",
        set: "OP-01",
        image: "/placeholder.svg?height=150&width=100&text=Don",
      },
    ],
    recentResults: [
      {
        date: "2024-03-15",
        event: "Regional Championship São Paulo",
        player: "Carlos Silva",
        position: "1st",
        variant: "Aggro",
        deckId: "1a",
      },
      {
        date: "2024-03-10",
        event: "Treasure Cup Rio de Janeiro",
        player: "Ana Pereira",
        position: "2nd",
        variant: "Midrange",
        deckId: "1b",
      },
      {
        date: "2024-03-08",
        event: "Regional Championship Belo Horizonte",
        player: "Pedro Santos",
        position: "3rd",
        variant: "Aggro",
        deckId: "1c",
      },
      {
        date: "2024-03-05",
        event: "Local Tournament - Card Kingdom",
        player: "Lucas Oliveira",
        position: "1st",
        variant: "Control",
        deckId: "1d",
      },
      {
        date: "2024-03-03",
        event: "Regional Championship Curitiba",
        player: "Mariana Costa",
        position: "4th",
        variant: "Midrange",
        deckId: "1e",
      },
    ],
  }

  // Agrupar cartas por tipo
  const cardsByType = archetype.cardUsage.reduce(
    (acc, card) => {
      if (!acc[card.type]) {
        acc[card.type] = []
      }
      acc[card.type].push(card)
      return acc
    },
    {} as Record<string, CardUsage[]>,
  )

  // Ordenar tipos de carta na ordem desejada
  const typeOrder = ["Líder", "Personagem", "Estágio", "Evento", "Don"]
  const sortedTypes = Object.keys(cardsByType).sort((a, b) => typeOrder.indexOf(a) - typeOrder.indexOf(b))

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/metagame" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar para Metagame
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="relative aspect-[7/10] w-full md:w-[300px] overflow-hidden rounded-lg border">
              <Image
                src={archetype.leader.image || "/placeholder.svg"}
                alt={archetype.leader.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <ColorPie colors={archetype.colors} size="md" />
                <h1 className="text-3xl font-bold">{archetype.name}</h1>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold">{archetype.stats.totalDecks}</div>
                    <p className="text-sm text-muted-foreground">Total de Decks</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold">{archetype.stats.regionalTop8}</div>
                    <p className="text-sm text-muted-foreground">Top 8 Regional</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold">{archetype.stats.internationalTop8}</div>
                    <p className="text-sm text-muted-foreground">Top 8 Internacional</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Select value={timeFilter} onValueChange={setTimeFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">Últimos 7 dias</SelectItem>
                    <SelectItem value="14d">Últimas 2 semanas</SelectItem>
                    <SelectItem value="30d">Últimos 30 dias</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={variantFilter} onValueChange={setVariantFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Variante" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="aggro">Aggro</SelectItem>
                    <SelectItem value="midrange">Midrange</SelectItem>
                    <SelectItem value="control">Control</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Composição do Deck</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {sortedTypes.map((type) => (
                      <div key={type}>
                        <h3 className="font-medium mb-3">{type}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                          {cardsByType[type].map((card, index) => (
                            <div key={index} className="text-center">
                              <div className="relative aspect-[7/10] w-full overflow-hidden rounded-lg border mb-2">
                                <Image
                                  src={card.image || "/placeholder.svg"}
                                  alt={card.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="font-medium text-sm">{card.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {card.quantity} em {card.percentage.toFixed(1)}%
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Resultados Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {archetype.recentResults.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-between gap-4 pb-4 last:pb-0 last:border-0 border-b"
                      >
                        <div>
                          <div className="font-medium">{result.event}</div>
                          <div className="text-sm text-muted-foreground">{result.date}</div>
                          <div className="text-sm">{result.player}</div>
                          <Badge variant="outline" className="mt-1">
                            {result.variant}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge>{result.position}</Badge>
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/decks/${result.deckId}`}>
                              <FileText className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


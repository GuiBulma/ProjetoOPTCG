"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { TrophyIcon, Calendar, Filter, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ColorPie } from "@/components/color-pie"

export default function MetagamePage() {
  const [timeFilter, setTimeFilter] = useState("30d")
  const [selectedEdition, setSelectedEdition] = useState("op09")
  const [selectedDeck, setSelectedDeck] = useState<string | null>(null)

  // Dados mockados para o metagame
  const metagameData = [
    {
      id: "1",
      name: "Luffy R/G",
      colors: ["R", "G"],
      leader: {
        name: "Monkey D. Luffy",
        set: "OP-01",
        image: "/placeholder.svg?height=400&width=280&text=Luffy",
      },
      usage: 22.4,
      weekChange: +2.1,
      price: 250.0,
      priceChange: +15.0,
      description:
        "Deck agressivo que utiliza a sinergia entre cartas vermelhas e verdes para gerar vantagem e pressionar o oponente desde os primeiros turnos.",
      variants: [
        {
          id: "1a",
          name: "Luffy R/G Aggro",
          event: "Regional Championship São Paulo 2024",
          date: "15/03/2024",
          player: "Carlos Silva",
          position: 1,
          record: "8-1",
        },
        {
          id: "1b",
          name: "Luffy R/G Midrange",
          event: "Treasure Cup Rio de Janeiro",
          date: "10/03/2024",
          player: "Ana Pereira",
          position: 2,
          record: "7-2",
        },
      ],
      topCards: ["Nami", "Zoro", "Sanji"],
    },
    {
      id: "2",
      name: "Kaido P/B",
      colors: ["P", "B"],
      leader: {
        name: "Kaido",
        set: "OP-03",
        image: "/placeholder.svg?height=400&width=280&text=Kaido",
      },
      usage: 18.2,
      weekChange: -1.5,
      price: 320.0,
      priceChange: -20.0,
      description:
        "Deck de controle que utiliza a força bruta de Kaido combinada com remoções pretas para dominar o campo de batalha.",
      variants: [
        {
          id: "2a",
          name: "Kaido P/B Control",
          event: "Regional Championship São Paulo 2024",
          date: "15/03/2024",
          player: "Mariana Costa",
          position: 2,
          record: "7-2",
        },
        {
          id: "2b",
          name: "Kaido P/B Midrange",
          event: "Treasure Cup Rio de Janeiro",
          date: "10/03/2024",
          player: "Lucas Oliveira",
          position: 1,
          record: "8-1",
        },
      ],
      topCards: ["King", "Queen", "Jack"],
    },
    {
      id: "3",
      name: "Law U/G",
      colors: ["U", "G"],
      leader: {
        name: "Trafalgar Law",
        set: "OP-02",
        image: "/placeholder.svg?height=400&width=280&text=Law",
      },
      usage: 15.6,
      weekChange: +1.2,
      price: 280.0,
      priceChange: +25.0,
      description:
        "Deck combo-control que utiliza as habilidades únicas de Law para criar vantagens incrementais e eventualmente vencer através de uma série de jogadas bem planejadas.",
      variants: [
        {
          id: "3a",
          name: "Law U/G Combo",
          event: "Regional Championship São Paulo 2024",
          date: "15/03/2024",
          player: "Rafael Silva",
          position: 3,
          record: "7-2",
        },
        {
          id: "3b",
          name: "Law U/G Control",
          event: "Treasure Cup Rio de Janeiro",
          date: "10/03/2024",
          player: "Juliana Santos",
          position: 3,
          record: "6-2",
        },
      ],
      topCards: ["Bepo", "Shachi", "Penguin"],
    },
    {
      id: "4",
      name: "Zoro G/B",
      colors: ["G", "B"],
      leader: {
        name: "Roronoa Zoro",
        set: "OP-02",
        image: "/placeholder.svg?height=400&width=280&text=Zoro",
      },
      usage: 12.8,
      weekChange: +0.5,
      price: 210.0,
      priceChange: +5.0,
      description:
        "Deck midrange que utiliza a força de Zoro e remoções eficientes para controlar o campo e finalizar com ataques poderosos.",
      variants: [
        {
          id: "4a",
          name: "Zoro G/B Midrange",
          event: "Regional Championship São Paulo 2024",
          date: "15/03/2024",
          player: "Thiago Oliveira",
          position: 4,
          record: "7-2",
        },
      ],
      topCards: ["Luffy", "Sanji", "Usopp"],
    },
    {
      id: "5",
      name: "Shanks R/Y",
      colors: ["R", "Y"],
      leader: {
        name: "Shanks",
        set: "OP-04",
        image: "/placeholder.svg?height=400&width=280&text=Shanks",
      },
      usage: 10.5,
      weekChange: -0.8,
      price: 290.0,
      priceChange: -10.0,
      description:
        "Deck agressivo que utiliza a velocidade e poder de Shanks para aplicar pressão constante e finalizar rapidamente.",
      variants: [
        {
          id: "5a",
          name: "Shanks R/Y Aggro",
          event: "Treasure Cup Rio de Janeiro",
          date: "10/03/2024",
          player: "Fernando Costa",
          position: 4,
          record: "6-2",
        },
      ],
      topCards: ["Mihawk", "Benn Beckman", "Yasopp"],
    },
    {
      id: "6",
      name: "Nami Y/U",
      colors: ["Y", "U"],
      leader: {
        name: "Nami",
        set: "OP-02",
        image: "/placeholder.svg?height=400&width=280&text=Nami",
      },
      usage: 8.3,
      weekChange: +1.7,
      price: 180.0,
      priceChange: +30.0,
      description:
        "Deck de controle que utiliza a manipulação de recursos e cartas de Nami para ganhar vantagem ao longo do jogo.",
      variants: [
        {
          id: "6a",
          name: "Nami Y/U Control",
          event: "Treasure Cup Rio de Janeiro",
          date: "10/03/2024",
          player: "Carla Mendes",
          position: 5,
          record: "6-2",
        },
      ],
      topCards: ["Vivi", "Carrot", "Rebecca"],
    },
    {
      id: "7",
      name: "Crocodile Y/B",
      colors: ["Y", "B"],
      leader: {
        name: "Crocodile",
        set: "OP-05",
        image: "/placeholder.svg?height=400&width=280&text=Crocodile",
      },
      usage: 6.2,
      weekChange: -0.3,
      price: 200.0,
      priceChange: -5.0,
      description:
        "Deck midrange que utiliza a capacidade de Crocodile de remover recursos do oponente enquanto desenvolve seu próprio campo.",
      variants: [
        {
          id: "7a",
          name: "Crocodile Y/B Midrange",
          event: "Local Tournament - Card Kingdom",
          date: "08/03/2024",
          player: "Ricardo Silva",
          position: 1,
          record: "4-0",
        },
      ],
      topCards: ["Daz Bones", "Paula", "Mr. 3"],
    },
    {
      id: "8",
      name: "Outros",
      colors: [],
      leader: {
        name: "Diversos",
        set: "Vários",
        image: "/placeholder.svg?height=400&width=280&text=Outros",
      },
      usage: 6.0,
      weekChange: -2.9,
      price: 0,
      priceChange: 0,
      description: "Diversos decks com menos de 5% de representação no metagame.",
      variants: [],
      topCards: [],
    },
  ]

  const recentTournaments = [
    {
      id: "t1",
      name: "Campeonato Regional São Paulo",
      date: "2024-03-15",
      players: 64,
      topDecks: [
        { name: "Luffy (OP-01)", position: 1, player: "Carlos Silva" },
        { name: "Kaido (OP-03)", position: 2, player: "Ana Pereira" },
        { name: "Law (OP-02)", position: 3, player: "Pedro Oliveira" },
        { name: "Zoro (OP-02)", position: 4, player: "Mariana Costa" },
        { name: "Shanks (OP-04)", position: 5, player: "Lucas Santos" },
        { name: "Nami (OP-02)", position: 6, player: "Rafael Mendes" },
        { name: "Crocodile (OP-05)", position: 7, player: "Juliana Ferreira" },
        { name: "Sanji (OP-03)", position: 8, player: "Marcos Almeida" },
      ],
    },
    {
      id: "t2",
      name: "Treasure Cup Rio de Janeiro",
      date: "2024-03-10",
      players: 32,
      topDecks: [
        { name: "Kaido (OP-03)", position: 1, player: "Lucas Oliveira" },
        { name: "Luffy (OP-01)", position: 2, player: "Ana Pereira" },
        { name: "Zoro (OP-02)", position: 3, player: "Thiago Oliveira" },
        { name: "Shanks (OP-04)", position: 4, player: "Fernando Costa" },
        { name: "Nami (OP-02)", position: 5, player: "Carla Mendes" },
        { name: "Law (OP-02)", position: 6, player: "Juliana Santos" },
        { name: "Crocodile (OP-05)", position: 7, player: "Ricardo Silva" },
        { name: "Sanji (OP-03)", position: 8, player: "Beatriz Santos" },
      ],
    },
  ]

  const leaderDistribution = [
    { name: "Luffy (OP-01)", percentage: 22, image: "/placeholder.svg?height=400&width=280&text=Luffy" },
    { name: "Kaido (OP-03)", percentage: 18, image: "/placeholder.svg?height=400&width=280&text=Kaido" },
    { name: "Law (OP-02)", percentage: 15, image: "/placeholder.svg?height=400&width=280&text=Law" },
    { name: "Zoro (OP-02)", percentage: 12, image: "/placeholder.svg?height=400&width=280&text=Zoro" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <TrophyIcon className="h-6 w-6" />
            <h1 className="text-xl font-bold">Mesa Um</h1>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium text-muted-foreground">
              Início
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Artigos
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Decks
            </Link>
            <Link href="/tournaments" className="text-sm font-medium text-muted-foreground">
              Torneios
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Podcast
            </Link>
            <Link href="/metagame" className="text-sm font-medium">
              Metagame
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold">OPTCG Metagame</h1>
              <p className="text-muted-foreground mt-1">Análise estatística do cenário competitivo atual</p>
            </div>
            <div className="flex items-center gap-2">
              <Select value={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger className="w-[180px]">
                  <Calendar className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Últimos 7 dias</SelectItem>
                  <SelectItem value="14d">Últimas 2 semanas</SelectItem>
                  <SelectItem value="30d">Últimos 30 dias</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedEdition} onValueChange={setSelectedEdition}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Edição" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="op09">OP-09 (Atual)</SelectItem>
                  <SelectItem value="op08">OP-08</SelectItem>
                  <SelectItem value="op07">OP-07</SelectItem>
                  <SelectItem value="op06">OP-06</SelectItem>
                  <SelectItem value="op05">OP-05</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-lg border p-3 mb-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {[
                { name: "Luffy (OP-01)", change: +2.1, image: "/placeholder.svg?height=40&width=40&text=L" },
                { name: "Law (OP-02)", change: +1.2, image: "/placeholder.svg?height=40&width=40&text=L" },
                { name: "Nami (OP-02)", change: +1.7, image: "/placeholder.svg?height=40&width=40&text=N" },
                { name: "Kaido (OP-03)", change: -1.5, image: "/placeholder.svg?height=40&width=40&text=K" },
                { name: "Shanks (OP-04)", change: -0.8, image: "/placeholder.svg?height=40&width=40&text=S" },
              ].map((trend, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded overflow-hidden flex-shrink-0">
                    <Image src={trend.image || "/placeholder.svg"} alt={trend.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-xs font-medium">{trend.name}</div>
                    <div className={`text-xs ${trend.change > 0 ? "text-green-600" : "text-red-600"}`}>
                      {trend.change > 0 ? "+" : ""}
                      {trend.change.toFixed(1)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
            <div>
              <Tabs defaultValue="popular" className="mb-6">
                <TabsList>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                </TabsList>
                <TabsContent value="popular" className="mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {metagameData.slice(0, 12).map((deck, index) => (
                      <Link key={deck.id} href={`/decks/${deck.variants[0]?.id || "#"}`}>
                        <Card className="overflow-hidden bg-black/90 hover:bg-black/80 transition-colors border-0">
                          <div className="relative">
                            <div className="aspect-video relative overflow-hidden">
                              <Image
                                src={deck.leader.image || "/placeholder.svg"}
                                alt={deck.leader.name}
                                fill
                                className="object-cover opacity-90"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                            <div className="absolute bottom-0 left-0 p-4 w-full">
                              <div className="flex items-center gap-2 mb-3">
                                <ColorPie colors={deck.colors} size="sm" />
                                <h3 className="font-bold text-white text-xl">
                                  {deck.leader.name} ({deck.leader.set})
                                </h3>
                              </div>
                              <div className="text-sm text-white/90 space-y-1.5 mb-3">
                                {deck.topCards?.map((card, idx) => (
                                  <div key={idx} className="truncate">
                                    {card}
                                  </div>
                                ))}
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                  <div className="text-white/90">META</div>
                                  <div className="text-blue-400 font-medium">{deck.usage.toFixed(1)}%</div>
                                  <div className="text-xs text-white/60">({deck.variants.length})</div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="text-white/90">Preço</div>
                                  <div className="text-blue-400 font-medium">R$ {deck.price.toFixed(0)}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3">Decks Recentes</h3>
                <div className="space-y-4">
                  {recentTournaments.map((tournament) => (
                    <div key={tournament.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-muted-foreground">
                          {tournament.name} ({tournament.date})
                        </h4>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {tournament.topDecks.slice(0, 8).map((deck, idx) => (
                          <Link
                            key={idx}
                            href={`/decks/${deck.name.toLowerCase().replace(/\s+/g, "-")}-${idx}`}
                            className="flex justify-between items-center py-1 px-2 hover:bg-muted rounded-sm"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-muted-foreground text-sm">{deck.position}.</span>
                              <span className="text-sm">{deck.name}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{deck.player}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Mesa Um. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Termos
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Privacidade
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Função auxiliar para obter a classe de cor para o badge
function getColorClass(colorCode: string) {
  switch (colorCode) {
    case "R":
      return "bg-red-600"
    case "G":
      return "bg-green-600"
    case "B":
      return "bg-gray-800"
    case "U":
      return "bg-blue-600"
    case "Y":
      return "bg-yellow-500 text-black"
    case "P":
      return "bg-purple-600"
    default:
      return "bg-gray-500"
  }
}


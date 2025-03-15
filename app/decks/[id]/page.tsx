"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CalendarIcon, TrophyIcon, UserIcon, Share2, Download, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CardLink } from "@/components/card-link"
import { ColorPie } from "@/components/color-pie"

export default function DeckPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("mainDeck")

  // Em um aplicativo real, você buscaria os dados do deck com base no ID
  const deck = {
    id: params.id,
    name: "Luffy R/G Aggro",
    player: "Carlos Silva",
    tournament: {
      id: "1",
      name: "Regional Championship São Paulo 2024",
      type: "regional",
      date: "15/04/2024",
      location: "São Paulo, Brasil",
      format: "OP-08",
    },
    position: 1,
    record: "8-1",
    description:
      "Um deck agressivo que utiliza a sinergia entre Luffy e cartas vermelhas e verdes para gerar vantagem e pressionar o oponente desde os primeiros turnos.",
    leader: {
      name: "Monkey D. Luffy",
      set: "OP-01",
      colors: ["R", "G"],
      image: "/placeholder.svg?height=300&width=210&text=Luffy",
    },
    format: "OP-08",
    archetype: "Aggro",
    mainDeck: [
      { quantity: 1, name: "Monkey D. Luffy", type: "Líder", set: "OP-01" },
      { quantity: 4, name: "Roronoa Zoro", type: "Personagem", set: "OP-02" },
      { quantity: 4, name: "Portgas D. Ace", type: "Personagem", set: "OP-01" },
      { quantity: 4, name: "Shanks", type: "Personagem", set: "OP-04" },
      { quantity: 4, name: "Sanji", type: "Personagem", set: "OP-03" },
      { quantity: 4, name: "Nami", type: "Personagem", set: "OP-02" },
      { quantity: 4, name: "Usopp", type: "Personagem", set: "OP-01" },
      { quantity: 4, name: "Thousand Sunny", type: "Estágio", set: "OP-01" },
      { quantity: 4, name: "Gomu Gomu no Pistol", type: "Evento", set: "OP-01" },
      { quantity: 4, name: "Haki Supremo", type: "Evento", set: "OP-02" },
      { quantity: 4, name: "Ataque Combinado", type: "Evento", set: "OP-03" },
      { quantity: 20, name: "Don", type: "Don", set: "OP-01" },
    ],
    sideboard: [
      { quantity: 3, name: "Tony Tony Chopper", type: "Personagem", set: "OP-01" },
      { quantity: 3, name: "Nico Robin", type: "Personagem", set: "OP-02" },
      { quantity: 3, name: "Franky", type: "Personagem", set: "OP-03" },
      { quantity: 3, name: "Brook", type: "Personagem", set: "OP-04" },
      { quantity: 3, name: "Jinbe", type: "Personagem", set: "OP-05" },
    ],
    similarDecks: [
      {
        id: "9",
        name: "Luffy R/G Aggro",
        player: "Fernanda Lima",
        tournament: "Regional Championship São Paulo 2024",
        position: 9,
      },
      {
        id: "20",
        name: "Luffy R/G Midrange",
        player: "Rafael Mendes",
        tournament: "Treasure Cup Rio de Janeiro",
        position: 2,
      },
      {
        id: "35",
        name: "Luffy R/G Control",
        player: "Thiago Souza",
        tournament: "Weekly Tournament - Card Kingdom",
        position: 1,
      },
    ],
  }

  // Função para obter a cor completa a partir da abreviação
  const getFullColor = (colorCode: string) => {
    switch (colorCode) {
      case "R":
        return "Vermelho"
      case "G":
        return "Verde"
      case "B":
        return "Preto"
      case "U":
        return "Azul"
      case "Y":
        return "Amarelo"
      case "P":
        return "Roxo"
      default:
        return colorCode
    }
  }

  // Função para obter a classe de cor para o badge
  const getColorClass = (colorCode: string) => {
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

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <TrophyIcon className="h-6 w-6" />
            <h1 className="text-xl font-bold">Mesa Um</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium">
              Início
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Formatos
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Estatísticas
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Sobre
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/tournaments" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar para lista de torneios
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/tournaments/${deck.tournament.id}`} className="flex items-center gap-2">
                <TrophyIcon className="h-4 w-4" />
                Ver torneio: {deck.tournament.name}
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <ColorPie colors={deck.leader.colors} size="md" />
                    <h1 className="text-3xl font-bold">{deck.name}</h1>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {deck.leader.colors.map((color, index) => (
                      <Badge key={index} className={`${getColorClass(color)}`}>
                        {color} - {getFullColor(color)}
                      </Badge>
                    ))}
                    <Badge variant="outline">Formato: {deck.format}</Badge>
                    <Badge variant="secondary">{deck.archetype}</Badge>
                  </div>
                </div>
                <Badge className="w-fit">Posição: {deck.position}º</Badge>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <UserIcon className="h-4 w-4" />
                  <span>{deck.player}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrophyIcon className="h-4 w-4" />
                  <span>{deck.tournament.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{deck.tournament.date}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartilhar
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar Deck
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Copiar Lista
                </Button>
              </div>

              <Separator className="my-6" />

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">Líder</h2>
                  <div className="mt-4 flex flex-col sm:flex-row gap-4">
                    <div className="relative aspect-[7/10] w-full max-w-[200px] overflow-hidden rounded-lg border">
                      <Image
                        src={deck.leader.image || "/placeholder.svg"}
                        alt={deck.leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">
                        <CardLink name={deck.leader.name} showTooltip={true} />
                      </h3>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Set:</span>
                          <Badge variant="outline">{deck.leader.set}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Cores:</span>
                          <div className="flex gap-1">
                            {deck.leader.colors.map((color, index) => (
                              <Badge key={index} className={`${getColorClass(color)} w-6 text-center`}>
                                {color}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-muted-foreground">{deck.description}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList>
                    <TabsTrigger value="mainDeck">Deck Principal</TabsTrigger>
                    <TabsTrigger value="sideboard">Sideboard</TabsTrigger>
                  </TabsList>
                  <TabsContent value="mainDeck" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Deck Principal (60 cartas)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-medium">Líder</h3>
                            <ul className="mt-2 space-y-1">
                              {deck.mainDeck
                                .filter((card) => card.type === "Líder")
                                .map((card, index) => (
                                  <li key={index} className="flex justify-between">
                                    <CardLink name={card.name} quantity={card.quantity} />
                                    <div className="flex items-center gap-2">
                                      <span className="text-muted-foreground">{card.type}</span>
                                      <Badge variant="outline" className="text-xs">
                                        {card.set}
                                      </Badge>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-medium">Personagens</h3>
                            <ul className="mt-2 space-y-1">
                              {deck.mainDeck
                                .filter((card) => card.type === "Personagem")
                                .map((card, index) => (
                                  <li key={index} className="flex justify-between">
                                    <CardLink name={card.name} quantity={card.quantity} />
                                    <div className="flex items-center gap-2">
                                      <span className="text-muted-foreground">{card.type}</span>
                                      <Badge variant="outline" className="text-xs">
                                        {card.set}
                                      </Badge>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-medium">Eventos</h3>
                            <ul className="mt-2 space-y-1">
                              {deck.mainDeck
                                .filter((card) => card.type === "Evento")
                                .map((card, index) => (
                                  <li key={index} className="flex justify-between">
                                    <CardLink name={card.name} quantity={card.quantity} />
                                    <div className="flex items-center gap-2">
                                      <span className="text-muted-foreground">{card.type}</span>
                                      <Badge variant="outline" className="text-xs">
                                        {card.set}
                                      </Badge>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-medium">Estágios</h3>
                            <ul className="mt-2 space-y-1">
                              {deck.mainDeck
                                .filter((card) => card.type === "Estágio")
                                .map((card, index) => (
                                  <li key={index} className="flex justify-between">
                                    <CardLink name={card.name} quantity={card.quantity} />
                                    <div className="flex items-center gap-2">
                                      <span className="text-muted-foreground">{card.type}</span>
                                      <Badge variant="outline" className="text-xs">
                                        {card.set}
                                      </Badge>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-medium">Don</h3>
                            <ul className="mt-2 space-y-1">
                              {deck.mainDeck
                                .filter((card) => card.type === "Don")
                                .map((card, index) => (
                                  <li key={index} className="flex justify-between">
                                    <CardLink name={card.name} quantity={card.quantity} />
                                    <div className="flex items-center gap-2">
                                      <span className="text-muted-foreground">{card.type}</span>
                                      <Badge variant="outline" className="text-xs">
                                        {card.set}
                                      </Badge>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="sideboard" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Sideboard (15 cartas)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1">
                          {deck.sideboard.map((card, index) => (
                            <li key={index} className="flex justify-between">
                              <CardLink name={card.name} quantity={card.quantity} />
                              <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">{card.type}</span>
                                <Badge variant="outline" className="text-xs">
                                  {card.set}
                                </Badge>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Informações do Torneio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Torneio</h3>
                      <p className="text-sm text-muted-foreground">{deck.tournament.name}</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Tipo</h3>
                      <p className="text-sm text-muted-foreground capitalize">{deck.tournament.type}</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Data</h3>
                      <p className="text-sm text-muted-foreground">{deck.tournament.date}</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Local</h3>
                      <p className="text-sm text-muted-foreground">{deck.tournament.location}</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Formato</h3>
                      <p className="text-sm text-muted-foreground">{deck.tournament.format}</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Jogador</h3>
                      <p className="text-sm text-muted-foreground">{deck.player}</p>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium">Estatísticas</h3>
                      <div className="mt-2 grid grid-cols-2 gap-2 text-center">
                        <div className="rounded-lg border p-2">
                          <p className="text-2xl font-bold">{deck.record}</p>
                          <p className="text-xs text-muted-foreground">Resultado</p>
                        </div>
                        <div className="rounded-lg border p-2">
                          <p className="text-2xl font-bold">{deck.position}º</p>
                          <p className="text-xs text-muted-foreground">Colocação</p>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium">Decks Similares</h3>
                      <div className="mt-2 space-y-2">
                        {deck.similarDecks.map((similarDeck) => (
                          <Link
                            key={similarDeck.id}
                            href={`/decks/${similarDeck.id}`}
                            className="block rounded-md border p-2 hover:bg-muted"
                          >
                            <div className="font-medium">{similarDeck.name}</div>
                            <div className="flex items-center justify-between">
                              <div className="text-xs text-muted-foreground">
                                {similarDeck.tournament} • {similarDeck.player}
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {similarDeck.position}º
                              </Badge>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
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
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


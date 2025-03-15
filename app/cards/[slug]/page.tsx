import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Share2, Heart, ShoppingCart, TrendingUp, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function CardPage({ params }: { params: { slug: string } }) {
  // Em um aplicativo real, você buscaria os dados da carta com base no slug
  const cardName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const card = {
    id: "1",
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
    set: "OP-01",
    setName: "Romance Dawn",
    number: "123/200",
    artist: "Eiichiro Oda",
    prices: {
      low: "R$ 15,00",
      avg: "R$ 25,00",
      high: "R$ 40,00",
      foil: "R$ 60,00",
    },
    priceHistory: [
      { date: "Jan 2024", price: 20 },
      { date: "Fev 2024", price: 22 },
      { date: "Mar 2024", price: 25 },
    ],
    relatedCards: [
      { id: "2", name: "Monkey D. Luffy", image: "/placeholder.svg?height=100&width=70&text=Luffy" },
      { id: "3", name: "Roronoa Zoro", image: "/placeholder.svg?height=100&width=70&text=Zoro" },
      { id: "4", name: "Nami", image: "/placeholder.svg?height=100&width=70&text=Nami" },
    ],
    topDecks: [
      { id: "1", name: "Luffy Aggro", percentage: "18%" },
      { id: "2", name: "Straw Hat Pirates", percentage: "12%" },
      { id: "3", name: "Red Rush", percentage: "8%" },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold">
              Mesa Um
            </Link>
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
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Torneios
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Podcast
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Cards
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-6">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/cards" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para lista de cards
            </Link>
          </Button>

          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <div className="sticky top-24">
                <div className="relative aspect-[7/10] w-full overflow-hidden rounded-lg border">
                  <Image src={card.image || "/placeholder.svg"} alt={card.name} fill className="object-cover" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Heart className="mr-2 h-4 w-4" />
                    Favoritar
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="mr-2 h-4 w-4" />
                    Compartilhar
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-3xl font-bold">{card.name}</h1>
                  <Badge variant="outline">{card.set}</Badge>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <div>
                    {card.type} • {card.color}
                  </div>
                  <div>Custo: {card.cost}</div>
                  <div>Poder: {card.power}</div>
                  <div>Raridade: {card.rarity}</div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Informações do Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Efeito</h3>
                      <p className="text-sm text-muted-foreground">{card.effect}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium">Atributos</h3>
                        <div className="mt-1 space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Tipo:</span>
                            <span>{card.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Cor:</span>
                            <span>{card.color}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Custo:</span>
                            <span>{card.cost}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Poder:</span>
                            <span>{card.power}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Counter:</span>
                            <span>{card.counter}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Atributo:</span>
                            <span>{card.attribute}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Informações da Coleção</h3>
                        <div className="mt-1 space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Set:</span>
                            <span>
                              {card.set} - {card.setName}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Número:</span>
                            <span>{card.number}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Raridade:</span>
                            <span>{card.rarity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Artista:</span>
                            <span>{card.artist}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preços</CardTitle>
                  <CardDescription>Preços atualizados em tempo real de diversas lojas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="rounded-lg border p-3 text-center">
                      <div className="text-xs text-muted-foreground">Menor Preço</div>
                      <div className="mt-1 text-xl font-bold text-green-600">{card.prices.low}</div>
                    </div>
                    <div className="rounded-lg border p-3 text-center">
                      <div className="text-xs text-muted-foreground">Preço Médio</div>
                      <div className="mt-1 text-xl font-bold">{card.prices.avg}</div>
                    </div>
                    <div className="rounded-lg border p-3 text-center">
                      <div className="text-xs text-muted-foreground">Maior Preço</div>
                      <div className="mt-1 text-xl font-bold text-amber-600">{card.prices.high}</div>
                    </div>
                    <div className="rounded-lg border p-3 text-center">
                      <div className="text-xs text-muted-foreground">Foil</div>
                      <div className="mt-1 text-xl font-bold text-purple-600">{card.prices.foil}</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="mb-2 text-sm font-medium">Histórico de Preços</h3>
                    <div className="h-[150px] w-full rounded-md border p-4">
                      <div className="flex h-full items-center justify-center">
                        <div className="text-center text-sm text-muted-foreground">
                          <TrendingUp className="mx-auto h-8 w-8 mb-2" />
                          Gráfico de histórico de preços
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="mb-2 text-sm font-medium">Onde Comprar</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-md border p-3">
                        <div>
                          <div className="font-medium">Loja do Colecionador</div>
                          <div className="text-sm text-muted-foreground">Em estoque: 5 unidades</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-lg font-bold">R$ 22,90</div>
                          <Button size="sm">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Comprar
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-md border p-3">
                        <div>
                          <div className="font-medium">Card Kingdom Brasil</div>
                          <div className="text-sm text-muted-foreground">Em estoque: 12 unidades</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-lg font-bold">R$ 24,50</div>
                          <Button size="sm">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Comprar
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-md border p-3">
                        <div>
                          <div className="font-medium">Pirate Games</div>
                          <div className="text-sm text-muted-foreground">Em estoque: 3 unidades</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-lg font-bold">R$ 25,00</div>
                          <Button size="sm">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Comprar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="decks">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="decks">Decks</TabsTrigger>
                  <TabsTrigger value="related">Cards Relacionados</TabsTrigger>
                  <TabsTrigger value="rulings">Regras</TabsTrigger>
                </TabsList>
                <TabsContent value="decks" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Decks Populares</CardTitle>
                      <CardDescription>Decks que utilizam {card.name}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {card.topDecks.map((deck) => (
                          <div key={deck.id} className="flex items-center justify-between rounded-md border p-3">
                            <div className="font-medium">{deck.name}</div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{deck.percentage}</Badge>
                              <Button variant="ghost" size="sm" asChild>
                                <Link href={`/decks/${deck.id}`}>Ver Deck</Link>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="related" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Cards Relacionados</CardTitle>
                      <CardDescription>Cards que combinam bem com {card.name}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {card.relatedCards.map((relatedCard) => (
                          <Link
                            key={relatedCard.id}
                            href={`/cards/${relatedCard.id}`}
                            className="group rounded-md border p-2 transition-colors hover:bg-muted"
                          >
                            <div className="relative aspect-[7/10] w-full overflow-hidden rounded-md">
                              <Image
                                src={relatedCard.image || "/placeholder.svg"}
                                alt={relatedCard.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="mt-2 text-center text-sm font-medium group-hover:underline">
                              {relatedCard.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="rulings" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Regras e Esclarecimentos</CardTitle>
                      <CardDescription>Informações oficiais sobre como este card funciona</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-2 rounded-md border p-3">
                          <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                          <div>
                            <p className="text-sm">
                              O efeito de comprar uma carta é ativado apenas uma vez por ataque, mesmo que o personagem
                              ataque múltiplas vezes em um turno.
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              Referência: Regras Oficiais v1.2, Seção 5.3
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 rounded-md border p-3">
                          <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                          <div>
                            <p className="text-sm">
                              Se o efeito de comprar uma carta for negado por outro efeito, o ataque ainda ocorre
                              normalmente.
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">Referência: FAQ Oficial, Março 2024</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
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


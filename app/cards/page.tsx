import Link from "next/link"
import Image from "next/image"
import { Search, Filter, TrophyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function CardsPage() {
  // Dados de exemplo para cards
  const cards = [
    {
      id: "1",
      name: "Monkey D. Luffy",
      image: "/placeholder.svg?height=300&width=210&text=Luffy",
      type: "Personagem",
      color: "Vermelho",
      cost: 3,
      power: 5000,
      rarity: "Super Rara",
      set: "OP-01",
      price: "R$ 25,00",
    },
    {
      id: "2",
      name: "Roronoa Zoro",
      image: "/placeholder.svg?height=300&width=210&text=Zoro",
      type: "Personagem",
      color: "Verde",
      cost: 4,
      power: 6000,
      rarity: "Rara",
      set: "OP-01",
      price: "R$ 15,00",
    },
    {
      id: "3",
      name: "Nami",
      image: "/placeholder.svg?height=300&width=210&text=Nami",
      type: "Personagem",
      color: "Amarelo",
      cost: 2,
      power: 4000,
      rarity: "Rara",
      set: "OP-01",
      price: "R$ 12,00",
    },
    {
      id: "4",
      name: "Sanji",
      image: "/placeholder.svg?height=300&width=210&text=Sanji",
      type: "Personagem",
      color: "Azul",
      cost: 3,
      power: 5000,
      rarity: "Super Rara",
      set: "OP-01",
      price: "R$ 20,00",
    },
    {
      id: "5",
      name: "Tony Tony Chopper",
      image: "/placeholder.svg?height=300&width=210&text=Chopper",
      type: "Personagem",
      color: "Roxo",
      cost: 1,
      power: 3000,
      rarity: "Comum",
      set: "OP-01",
      price: "R$ 5,00",
    },
    {
      id: "6",
      name: "Nico Robin",
      image: "/placeholder.svg?height=300&width=210&text=Robin",
      type: "Personagem",
      color: "Preto",
      cost: 4,
      power: 6000,
      rarity: "Rara",
      set: "OP-01",
      price: "R$ 18,00",
    },
    {
      id: "7",
      name: "Franky",
      image: "/placeholder.svg?height=300&width=210&text=Franky",
      type: "Personagem",
      color: "Vermelho",
      cost: 5,
      power: 7000,
      rarity: "Super Rara",
      set: "OP-01",
      price: "R$ 22,00",
    },
    {
      id: "8",
      name: "Brook",
      image: "/placeholder.svg?height=300&width=210&text=Brook",
      type: "Personagem",
      color: "Roxo",
      cost: 3,
      power: 5000,
      rarity: "Rara",
      set: "OP-01",
      price: "R$ 14,00",
    },
    {
      id: "9",
      name: "Jinbe",
      image: "/placeholder.svg?height=300&width=210&text=Jinbe",
      type: "Personagem",
      color: "Azul",
      cost: 6,
      power: 8000,
      rarity: "Super Rara",
      set: "OP-01",
      price: "R$ 28,00",
    },
    {
      id: "10",
      name: "Trafalgar Law",
      image: "/placeholder.svg?height=300&width=210&text=Law",
      type: "Personagem",
      color: "Verde",
      cost: 5,
      power: 7000,
      rarity: "Super Rara",
      set: "OP-01",
      price: "R$ 30,00",
    },
    {
      id: "11",
      name: "Portgas D. Ace",
      image: "/placeholder.svg?height=300&width=210&text=Ace",
      type: "Personagem",
      color: "Vermelho",
      cost: 4,
      power: 6000,
      rarity: "Super Rara",
      set: "OP-01",
      price: "R$ 35,00",
    },
    {
      id: "12",
      name: "Kaido",
      image: "/placeholder.svg?height=300&width=210&text=Kaido",
      type: "Personagem",
      color: "Roxo",
      cost: 8,
      power: 10000,
      rarity: "Secreta",
      set: "OP-01",
      price: "R$ 50,00",
    },
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
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Torneios
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Podcast
            </Link>
            <Link href="/cards" className="text-sm font-medium">
              Cards
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Banco de Cards</h1>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Filtros</CardTitle>
                  <CardDescription>Refine sua busca por cards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Buscar cards..." className="pl-8" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Coleção</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma coleção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas as coleções</SelectItem>
                        <SelectItem value="op-01">OP-01: Romance Dawn</SelectItem>
                        <SelectItem value="op-02">OP-02: Paramount War</SelectItem>
                        <SelectItem value="op-03">OP-03: Pillars of Strength</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Cor</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma cor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas as cores</SelectItem>
                        <SelectItem value="red">Vermelho</SelectItem>
                        <SelectItem value="blue">Azul</SelectItem>
                        <SelectItem value="green">Verde</SelectItem>
                        <SelectItem value="yellow">Amarelo</SelectItem>
                        <SelectItem value="purple">Roxo</SelectItem>
                        <SelectItem value="black">Preto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tipo</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos os tipos</SelectItem>
                        <SelectItem value="character">Personagem</SelectItem>
                        <SelectItem value="event">Evento</SelectItem>
                        <SelectItem value="stage">Estágio</SelectItem>
                        <SelectItem value="don">Don</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Raridade</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma raridade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas as raridades</SelectItem>
                        <SelectItem value="common">Comum</SelectItem>
                        <SelectItem value="uncommon">Incomum</SelectItem>
                        <SelectItem value="rare">Rara</SelectItem>
                        <SelectItem value="super-rare">Super Rara</SelectItem>
                        <SelectItem value="secret">Secreta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Custo</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input type="number" placeholder="Min" min="0" />
                      <Input type="number" placeholder="Max" min="0" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Poder</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input type="number" placeholder="Min" min="0" />
                      <Input type="number" placeholder="Max" min="0" />
                    </div>
                  </div>

                  <Button className="w-full">
                    <Filter className="mr-2 h-4 w-4" />
                    Aplicar Filtros
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div className="text-sm text-muted-foreground">
                  Exibindo <strong>{cards.length}</strong> cards
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="name">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Nome (A-Z)</SelectItem>
                      <SelectItem value="name-desc">Nome (Z-A)</SelectItem>
                      <SelectItem value="price">Preço (Menor-Maior)</SelectItem>
                      <SelectItem value="price-desc">Preço (Maior-Menor)</SelectItem>
                      <SelectItem value="power">Poder (Menor-Maior)</SelectItem>
                      <SelectItem value="power-desc">Poder (Maior-Menor)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {cards.map((card) => (
                  <Link key={card.id} href={`/cards/${card.name.toLowerCase().replace(/\s+/g, "-")}`} className="group">
                    <div className="overflow-hidden rounded-lg border transition-colors group-hover:border-primary">
                      <div className="relative aspect-[7/10] w-full overflow-hidden">
                        <Image
                          src={card.image || "/placeholder.svg"}
                          alt={card.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium line-clamp-1 group-hover:text-primary">{card.name}</h3>
                        <div className="mt-1 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Badge variant="outline" className="text-xs">
                              {card.set}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {card.color}
                            </Badge>
                          </div>
                          <div className="text-sm font-medium">{card.price}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
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


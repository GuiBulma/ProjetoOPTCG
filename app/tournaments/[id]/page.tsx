import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CalendarIcon, MapPinIcon, TrophyIcon, UsersIcon, Store } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TournamentPage({ params }: { params: { id: string } }) {
  // Em um aplicativo real, você buscaria os dados do torneio com base no ID
  const tournament = {
    id: params.id,
    name: "Regional Championship São Paulo 2024",
    type: "regional", // regional, treasure-cup, local
    date: "15/04/2024",
    location: "São Paulo, Brasil",
    format: "OP-08",
    players: 128,
    store: "N/A", // Para torneios locais
    organizer: "Bandai Namco",
    description:
      "O Regional Championship São Paulo 2024 reuniu os melhores jogadores do país em uma competição de alto nível. Com 128 participantes, o torneio foi disputado no formato OP-08 e contou com 8 rodadas suíças seguidas de um Top 8.",
    image: "/placeholder.svg?height=400&width=800&text=Regional+SP",
    decks: [
      {
        id: "1",
        position: 1,
        name: "Luffy R/G",
        player: "Carlos Silva",
        record: "8-1",
        leader: "Monkey D. Luffy",
        leaderSet: "OP-01",
        colors: ["R", "G"],
        archetype: "Aggro",
      },
      {
        id: "2",
        position: 2,
        name: "Kaido P/B",
        player: "Ana Pereira",
        record: "7-2",
        leader: "Kaido",
        leaderSet: "OP-03",
        colors: ["P", "B"],
        archetype: "Control",
      },
      {
        id: "3",
        position: 3,
        name: "Law U/G",
        player: "Pedro Oliveira",
        record: "7-2",
        leader: "Trafalgar Law",
        leaderSet: "OP-02",
        colors: ["U", "G"],
        archetype: "Midrange",
      },
      {
        id: "4",
        position: 4,
        name: "Zoro G/B",
        player: "Mariana Costa",
        record: "7-2",
        leader: "Roronoa Zoro",
        leaderSet: "OP-02",
        colors: ["G", "B"],
        archetype: "Midrange",
      },
      {
        id: "5",
        position: 5,
        name: "Shanks R/Y",
        player: "Lucas Santos",
        record: "6-2",
        leader: "Shanks",
        leaderSet: "OP-04",
        colors: ["R", "Y"],
        archetype: "Aggro",
      },
      {
        id: "6",
        position: 6,
        name: "Nami Y/U",
        player: "Rafael Mendes",
        record: "6-2",
        leader: "Nami",
        leaderSet: "OP-02",
        colors: ["Y", "U"],
        archetype: "Control",
      },
      {
        id: "7",
        position: 7,
        name: "Crocodile Y/B",
        player: "Juliana Ferreira",
        record: "6-2",
        leader: "Crocodile",
        leaderSet: "OP-05",
        colors: ["Y", "B"],
        archetype: "Midrange",
      },
      {
        id: "8",
        position: 8,
        name: "Sanji U/R",
        player: "Marcos Almeida",
        record: "6-2",
        leader: "Sanji",
        leaderSet: "OP-03",
        colors: ["U", "R"],
        archetype: "Aggro",
      },
      {
        id: "9",
        position: 9,
        name: "Luffy R/G",
        player: "Fernanda Lima",
        record: "5-3",
        leader: "Monkey D. Luffy",
        leaderSet: "OP-01",
        colors: ["R", "G"],
        archetype: "Aggro",
      },
      {
        id: "10",
        position: 10,
        name: "Kaido P/B",
        player: "Gabriel Costa",
        record: "5-3",
        leader: "Kaido",
        leaderSet: "OP-03",
        colors: ["P", "B"],
        archetype: "Control",
      },
      {
        id: "11",
        position: 11,
        name: "Zoro G/B",
        player: "Thiago Souza",
        record: "5-3",
        leader: "Roronoa Zoro",
        leaderSet: "OP-02",
        colors: ["G", "B"],
        archetype: "Midrange",
      },
      {
        id: "12",
        position: 12,
        name: "Shanks R/Y",
        player: "Camila Rocha",
        record: "5-3",
        leader: "Shanks",
        leaderSet: "OP-04",
        colors: ["R", "Y"],
        archetype: "Aggro",
      },
      {
        id: "13",
        position: 13,
        name: "Law U/G",
        player: "Ricardo Oliveira",
        record: "5-3",
        leader: "Trafalgar Law",
        leaderSet: "OP-02",
        colors: ["U", "G"],
        archetype: "Midrange",
      },
      {
        id: "14",
        position: 14,
        name: "Nami Y/U",
        player: "Beatriz Santos",
        record: "5-3",
        leader: "Nami",
        leaderSet: "OP-02",
        colors: ["Y", "U"],
        archetype: "Control",
      },
      {
        id: "15",
        position: 15,
        name: "Crocodile Y/B",
        player: "Henrique Silva",
        record: "5-3",
        leader: "Crocodile",
        leaderSet: "OP-05",
        colors: ["Y", "B"],
        archetype: "Midrange",
      },
      {
        id: "16",
        position: 16,
        name: "Sanji U/R",
        player: "Larissa Martins",
        record: "5-3",
        leader: "Sanji",
        leaderSet: "OP-03",
        colors: ["U", "R"],
        archetype: "Aggro",
      },
    ],
  }

  // Função para renderizar o badge do tipo de torneio
  const renderTournamentTypeBadge = (type: string) => {
    switch (type) {
      case "regional":
        return <Badge className="bg-blue-600">Regional</Badge>
      case "treasure-cup":
        return <Badge className="bg-amber-600">Treasure Cup</Badge>
      case "local":
        return <Badge className="bg-green-600">Local</Badge>
      default:
        return <Badge>Outro</Badge>
    }
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
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/tournaments" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para lista de torneios
            </Link>
          </Button>

          <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
            <Image src={tournament.image || "/placeholder.svg"} alt={tournament.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <div className="mb-2">
                {renderTournamentTypeBadge(tournament.type)}
                <Badge variant="outline" className="ml-2 bg-background/80">
                  Formato: {tournament.format}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-white">{tournament.name}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{tournament.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4" />
                  <span>{tournament.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon className="h-4 w-4" />
                  <span>{tournament.players} jogadores</span>
                </div>
                {tournament.type === "local" && (
                  <div className="flex items-center gap-2">
                    <Store className="h-4 w-4" />
                    <span>{tournament.store}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div>
                <h2 className="text-xl font-semibold">Sobre o Torneio</h2>
                <p className="mt-2 text-muted-foreground">{tournament.description}</p>
              </div>

              <Separator className="my-6" />

              <div>
                <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-xl font-semibold">Decks do Torneio</h2>
                  <div className="flex gap-2">
                    <Input placeholder="Buscar deck..." className="w-full sm:w-[200px]" />
                    <Select defaultValue="position">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Ordenar por" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="position">Posição</SelectItem>
                        <SelectItem value="player">Jogador</SelectItem>
                        <SelectItem value="deck">Nome do Deck</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="grid grid-cols-12 gap-4 border-b bg-muted/40 p-4 text-sm font-medium">
                    <div className="col-span-1">#</div>
                    <div className="col-span-3 sm:col-span-3">Deck</div>
                    <div className="col-span-3 sm:col-span-3">Líder</div>
                    <div className="col-span-3 sm:col-span-2">Jogador</div>
                    <div className="col-span-1 sm:col-span-1 text-center">Cores</div>
                    <div className="col-span-1 sm:col-span-1 text-right">Resultado</div>
                    <div className="hidden sm:block sm:col-span-1"></div>
                  </div>

                  {tournament.decks.map((deck) => (
                    <div key={deck.id} className="grid grid-cols-12 gap-4 border-b p-4 text-sm last:border-0">
                      <div className="col-span-1 font-medium">{deck.position}</div>
                      <div className="col-span-3 sm:col-span-3">
                        <div className="font-medium">{deck.name}</div>
                        <div className="mt-1">
                          <Badge variant="outline" className="text-xs">
                            {deck.archetype}
                          </Badge>
                        </div>
                      </div>
                      <div className="col-span-3 sm:col-span-3">
                        <div>{deck.leader}</div>
                        <div className="text-xs text-muted-foreground">{deck.leaderSet}</div>
                      </div>
                      <div className="col-span-3 sm:col-span-2">{deck.player}</div>
                      <div className="col-span-1 sm:col-span-1 flex justify-center gap-1">
                        {deck.colors.map((color, index) => (
                          <Badge key={index} className={`${getColorClass(color)} w-6 text-center`}>
                            {color}
                          </Badge>
                        ))}
                      </div>
                      <div className="col-span-1 sm:col-span-1 text-right">{deck.record}</div>
                      <div className="hidden sm:block sm:col-span-1 text-right">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/decks/${deck.id}`}>Ver</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 sm:hidden">
                  <p className="text-xs text-muted-foreground">Clique em um deck para ver os detalhes</p>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Estatísticas do Torneio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Distribuição de Decks</h3>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Aggro</span>
                          <span className="text-sm font-medium">42%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "42%" }}></div>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-sm">Midrange</span>
                          <span className="text-sm font-medium">28%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "28%" }}></div>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-sm">Control</span>
                          <span className="text-sm font-medium">20%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "20%" }}></div>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-sm">Combo</span>
                          <span className="text-sm font-medium">10%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 rounded-full bg-primary" style={{ width: "10%" }}></div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium">Distribuição de Cores</h3>
                      <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                        <div className="rounded-lg border p-2">
                          <Badge className="bg-red-600 mb-1">R</Badge>
                          <p className="text-xl font-bold">38%</p>
                          <p className="text-xs text-muted-foreground">Vermelho</p>
                        </div>
                        <div className="rounded-lg border p-2">
                          <Badge className="bg-green-600 mb-1">G</Badge>
                          <p className="text-xl font-bold">32%</p>
                          <p className="text-xs text-muted-foreground">Verde</p>
                        </div>
                        <div className="rounded-lg border p-2">
                          <Badge className="bg-blue-600 mb-1">U</Badge>
                          <p className="text-xl font-bold">25%</p>
                          <p className="text-xs text-muted-foreground">Azul</p>
                        </div>
                        <div className="rounded-lg border p-2">
                          <Badge className="bg-gray-800 mb-1">B</Badge>
                          <p className="text-xl font-bold">22%</p>
                          <p className="text-xs text-muted-foreground">Preto</p>
                        </div>
                        <div className="rounded-lg border p-2">
                          <Badge className="bg-yellow-500 text-black mb-1">Y</Badge>
                          <p className="text-xl font-bold">18%</p>
                          <p className="text-xs text-muted-foreground">Amarelo</p>
                        </div>
                        <div className="rounded-lg border p-2">
                          <Badge className="bg-purple-600 mb-1">P</Badge>
                          <p className="text-xl font-bold">15%</p>
                          <p className="text-xs text-muted-foreground">Roxo</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium">Top 8 por Líder</h3>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Monkey D. Luffy</span>
                          <span className="text-sm font-medium">2</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Kaido</span>
                          <span className="text-sm font-medium">1</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Trafalgar Law</span>
                          <span className="text-sm font-medium">1</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Roronoa Zoro</span>
                          <span className="text-sm font-medium">1</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Shanks</span>
                          <span className="text-sm font-medium">1</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Nami</span>
                          <span className="text-sm font-medium">1</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Sanji</span>
                          <span className="text-sm font-medium">1</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium">Torneios Relacionados</h3>
                      <div className="mt-2 space-y-2">
                        <Link href="#" className="block rounded-md border p-2 hover:bg-muted">
                          <div className="font-medium">Treasure Cup Rio de Janeiro</div>
                          <div className="text-xs text-muted-foreground">02/04/2024 • OP-08</div>
                        </Link>
                        <Link href="#" className="block rounded-md border p-2 hover:bg-muted">
                          <div className="font-medium">Regional Championship Belo Horizonte</div>
                          <div className="text-xs text-muted-foreground">25/03/2024 • OP-07</div>
                        </Link>
                        <Link href="#" className="block rounded-md border p-2 hover:bg-muted">
                          <div className="font-medium">Treasure Cup São Paulo</div>
                          <div className="text-xs text-muted-foreground">10/03/2024 • OP-07</div>
                        </Link>
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


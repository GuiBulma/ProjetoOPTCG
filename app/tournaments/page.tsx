import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, MapPinIcon, TrophyIcon, UsersIcon, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TournamentsPage() {
  // Dados de exemplo para torneios
  const officialTournaments = [
    {
      id: "1",
      name: "Regional Championship São Paulo 2024",
      type: "regional",
      date: "15/04/2024",
      location: "São Paulo, SP",
      format: "OP-08",
      players: 128,
      image: "/placeholder.svg?height=200&width=400&text=Regional+SP",
      topDecks: [
        { id: "1", name: "Luffy R/G", leader: "Monkey D. Luffy", leaderSet: "OP-01", position: 1 },
        { id: "2", name: "Kaido P/B", leader: "Kaido", leaderSet: "OP-03", position: 2 },
        { id: "3", name: "Law U/G", leader: "Trafalgar Law", leaderSet: "OP-02", position: 3 },
      ],
    },
    {
      id: "2",
      name: "Treasure Cup Rio de Janeiro",
      type: "treasure-cup",
      date: "02/04/2024",
      location: "Rio de Janeiro, RJ",
      format: "OP-08",
      players: 96,
      image: "/placeholder.svg?height=200&width=400&text=Treasure+Cup+RJ",
      topDecks: [
        { id: "4", name: "Zoro G/B", leader: "Roronoa Zoro", leaderSet: "OP-02", position: 1 },
        { id: "5", name: "Shanks R/Y", leader: "Shanks", leaderSet: "OP-04", position: 2 },
        { id: "6", name: "Luffy R/G", leader: "Monkey D. Luffy", leaderSet: "OP-01", position: 3 },
      ],
    },
    {
      id: "3",
      name: "Regional Championship Belo Horizonte 2024",
      type: "regional",
      date: "25/03/2024",
      location: "Belo Horizonte, MG",
      format: "OP-07",
      players: 86,
      image: "/placeholder.svg?height=200&width=400&text=Regional+BH",
      topDecks: [
        { id: "7", name: "Kaido P/B", leader: "Kaido", leaderSet: "OP-03", position: 1 },
        { id: "8", name: "Luffy R/G", leader: "Monkey D. Luffy", leaderSet: "OP-01", position: 2 },
        { id: "9", name: "Crocodile Y/B", leader: "Crocodile", leaderSet: "OP-05", position: 3 },
      ],
    },
  ]

  const localTournaments = [
    {
      id: "4",
      name: "Weekly Tournament - Card Kingdom",
      type: "local",
      date: "18/04/2024",
      location: "São Paulo, SP",
      format: "OP-08",
      players: 24,
      image: "/placeholder.svg?height=200&width=400&text=Card+Kingdom",
      store: "Card Kingdom Brasil",
      topDecks: [
        { id: "10", name: "Luffy R/G", leader: "Monkey D. Luffy", leaderSet: "OP-01", position: 1 },
        { id: "11", name: "Nami Y/U", leader: "Nami", leaderSet: "OP-02", position: 2 },
      ],
    },
    {
      id: "5",
      name: "Sunday Challenge - Pirate Games",
      type: "local",
      date: "14/04/2024",
      location: "Rio de Janeiro, RJ",
      format: "OP-08",
      players: 16,
      image: "/placeholder.svg?height=200&width=400&text=Pirate+Games",
      store: "Pirate Games",
      topDecks: [
        { id: "12", name: "Sanji U/R", leader: "Sanji", leaderSet: "OP-03", position: 1 },
        { id: "13", name: "Luffy R/G", leader: "Monkey D. Luffy", leaderSet: "OP-01", position: 2 },
      ],
    },
    {
      id: "6",
      name: "Friday Night OPTCG - Hobby Store",
      type: "local",
      date: "12/04/2024",
      location: "Curitiba, PR",
      format: "OP-08",
      players: 12,
      image: "/placeholder.svg?height=200&width=400&text=Hobby+Store",
      store: "Hobby Store",
      topDecks: [
        { id: "14", name: "Zoro G/B", leader: "Roronoa Zoro", leaderSet: "OP-02", position: 1 },
        { id: "15", name: "Kaido P/B", leader: "Kaido", leaderSet: "OP-03", position: 2 },
      ],
    },
  ]

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
            <Link href="/tournaments" className="text-sm font-medium">
              Torneios
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Podcast
            </Link>
            <Link href="/cards" className="text-sm font-medium text-muted-foreground">
              Cards
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h1 className="text-3xl font-bold">Torneios</h1>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar torneios..." className="pl-8 w-[200px]" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Formato" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="op-08">OP-08</SelectItem>
                  <SelectItem value="op-07">OP-07</SelectItem>
                  <SelectItem value="op-06">OP-06</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="official">Oficiais</TabsTrigger>
              <TabsTrigger value="local">Locais</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...officialTournaments, ...localTournaments].map((tournament) => (
                  <Card key={tournament.id} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={tournament.image || "/placeholder.svg"}
                        alt={tournament.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">{renderTournamentTypeBadge(tournament.type)}</div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1 text-lg">{tournament.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{tournament.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="h-4 w-4" />
                          <span>{tournament.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <UsersIcon className="h-4 w-4" />
                          <span>{tournament.players} jogadores</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <Badge variant="outline">Formato: {tournament.format}</Badge>
                        {tournament.type === "local" && (
                          <Badge variant="secondary" className="ml-2">
                            Loja: {tournament.store}
                          </Badge>
                        )}
                      </div>

                      <div className="space-y-1 mb-4">
                        <div className="text-sm font-medium">Top Decks:</div>
                        {tournament.topDecks.slice(0, 2).map((deck) => (
                          <div key={deck.id} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground">{deck.position}º</span>
                              <span>{deck.name}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {deck.leader} ({deck.leaderSet})
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button variant="secondary" className="w-full" asChild>
                        <Link href={`/tournaments/${tournament.id}`}>Ver Detalhes</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="official" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {officialTournaments.map((tournament) => (
                  <Card key={tournament.id} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={tournament.image || "/placeholder.svg"}
                        alt={tournament.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">{renderTournamentTypeBadge(tournament.type)}</div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1 text-lg">{tournament.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{tournament.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="h-4 w-4" />
                          <span>{tournament.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <UsersIcon className="h-4 w-4" />
                          <span>{tournament.players} jogadores</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <Badge variant="outline">Formato: {tournament.format}</Badge>
                      </div>

                      <div className="space-y-1 mb-4">
                        <div className="text-sm font-medium">Top Decks:</div>
                        {tournament.topDecks.slice(0, 3).map((deck) => (
                          <div key={deck.id} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground">{deck.position}º</span>
                              <span>{deck.name}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {deck.leader} ({deck.leaderSet})
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button variant="secondary" className="w-full" asChild>
                        <Link href={`/tournaments/${tournament.id}`}>Ver Detalhes</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="local" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {localTournaments.map((tournament) => (
                  <Card key={tournament.id} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={tournament.image || "/placeholder.svg"}
                        alt={tournament.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">{renderTournamentTypeBadge(tournament.type)}</div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1 text-lg">{tournament.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{tournament.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="h-4 w-4" />
                          <span>{tournament.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <UsersIcon className="h-4 w-4" />
                          <span>{tournament.players} jogadores</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <Badge variant="outline">Formato: {tournament.format}</Badge>
                        <Badge variant="secondary" className="ml-2">
                          Loja: {tournament.store}
                        </Badge>
                      </div>

                      <div className="space-y-1 mb-4">
                        <div className="text-sm font-medium">Top Decks:</div>
                        {tournament.topDecks.map((deck) => (
                          <div key={deck.id} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground">{deck.position}º</span>
                              <span>{deck.name}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {deck.leader} ({deck.leaderSet})
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button variant="secondary" className="w-full" asChild>
                        <Link href={`/tournaments/${tournament.id}`}>Ver Detalhes</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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


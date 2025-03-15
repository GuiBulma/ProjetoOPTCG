import Link from "next/link"
import Image from "next/image"
import {
  CalendarIcon,
  ChevronRightIcon,
  MapPinIcon,
  MicIcon,
  SearchIcon,
  TrophyIcon,
  UsersIcon,
  Play,
  Download,
  AirplayIcon as Spotify,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  // Dados de exemplo para artigos em destaque
  const featuredArticles = [
    {
      id: "1",
      title: "Análise do Meta Atual: Os Melhores Decks de One Piece TCG",
      excerpt: "Um olhar profundo sobre os decks que estão dominando o cenário competitivo atual de One Piece TCG.",
      author: "Carlos Silva",
      date: "15/03/2024",
      image: "/placeholder.svg?height=400&width=800",
      category: "Análise",
    },
    {
      id: "2",
      title: "Guia Completo para Iniciantes em One Piece TCG",
      excerpt:
        "Tudo o que você precisa saber para começar a jogar One Piece TCG, desde regras básicas até estratégias iniciais.",
      author: "Ana Pereira",
      date: "12/03/2024",
      image: "/placeholder.svg?height=400&width=800",
      category: "Guia",
    },
    {
      id: "3",
      title: "Estratégias Avançadas com o Deck Luffy",
      excerpt: "Técnicas e dicas para maximizar o potencial do deck Luffy em torneios competitivos.",
      author: "Pedro Oliveira",
      date: "10/03/2024",
      image: "/placeholder.svg?height=400&width=800",
      category: "Estratégia",
    },
  ]

  // Dados de exemplo para artigos recentes
  const recentArticles = [
    {
      id: "4",
      title: "Como Construir um Deck Zoro Competitivo",
      excerpt: "Guia passo a passo para montar um deck Zoro eficiente para torneios.",
      author: "Mariana Costa",
      date: "08/03/2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Deck Tech",
    },
    {
      id: "5",
      title: "Relatório do Torneio Nacional: Surpresas e Tendências",
      excerpt: "Um resumo completo do último Campeonato Nacional, com análise dos decks vencedores.",
      author: "Lucas Santos",
      date: "05/03/2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Torneios",
    },
    {
      id: "6",
      title: "Novas Cartas Reveladas: Impacto no Meta",
      excerpt: "Análise das novas cartas anunciadas e como elas podem mudar o cenário competitivo.",
      author: "Rafael Mendes",
      date: "03/03/2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Spoilers",
    },
    {
      id: "7",
      title: "Sideboard Essencial: Cartas que Todo Jogador Deve Ter",
      excerpt: "As melhores opções de sideboard para enfrentar o meta atual.",
      author: "Juliana Ferreira",
      date: "01/03/2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Estratégia",
    },
  ]

  // Dados de exemplo para torneios
  const tournaments = [
    {
      id: "1",
      name: "Campeonato Nacional One Piece TCG 2024",
      date: "12/03/2024",
      location: "São Paulo, Brasil",
      format: "Standard",
      players: 128,
      topDecks: [
        { id: "1", name: "Luffy Aggro", player: "Carlos Silva" },
        { id: "2", name: "Zoro Control", player: "Ana Pereira" },
        { id: "3", name: "Sanji Midrange", player: "Pedro Oliveira" },
        { id: "4", name: "Nami Combo", player: "Mariana Costa" },
      ],
    },
    {
      id: "2",
      name: "Grand Prix One Piece São Paulo",
      date: "05/03/2024",
      location: "São Paulo, Brasil",
      format: "Standard",
      players: 256,
      topDecks: [
        { id: "5", name: "Kaido Control", player: "Lucas Santos" },
        { id: "6", name: "Law Combo", player: "Rafael Mendes" },
        { id: "7", name: "Shanks Midrange", player: "Juliana Ferreira" },
        { id: "8", name: "Crocodile Aggro", player: "Marcos Almeida" },
      ],
    },
    {
      id: "3",
      name: "Regional Championship One Piece",
      date: "28/02/2024",
      location: "Rio de Janeiro, Brasil",
      format: "Standard",
      players: 96,
      topDecks: [
        { id: "9", name: "Blackbeard Control", player: "Fernanda Lima" },
        { id: "10", name: "Luffy/Zoro Alliance", player: "Gabriel Costa" },
        { id: "11", name: "Enel Combo", player: "Thiago Souza" },
        { id: "12", name: "Doflamingo Midrange", player: "Camila Rocha" },
      ],
    },
  ]

  // Dados de exemplo para metagame
  const metagame = [
    { name: "Luffy Aggro", percentage: 18, change: "+2" },
    { name: "Zoro Control", percentage: 15, change: "-1" },
    { name: "Kaido Control", percentage: 12, change: "+3" },
    { name: "Law Combo", percentage: 10, change: "0" },
    { name: "Sanji Midrange", percentage: 8, change: "-2" },
    { name: "Blackbeard Control", percentage: 7, change: "+1" },
    { name: "Shanks Midrange", percentage: 6, change: "+2" },
    { name: "Nami Combo", percentage: 5, change: "-1" },
  ]

  // Dados de exemplo para podcast
  const latestPodcast = {
    id: "1",
    title: "EP 10: Análise do Campeonato Nacional e Previsões para o Meta",
    description:
      "Neste episódio, discutimos os resultados do Campeonato Nacional, analisamos os decks vencedores e fazemos previsões para o futuro do meta de One Piece TCG.",
    date: "18/03/2024",
    duration: "1:15:32",
    hosts: ["Carlos Silva", "Ana Pereira"],
    guests: ["Pedro Oliveira"],
    audioSrc: "https://example.com/podcast/ep10.mp3", // URL fictícia
    downloadUrl: "https://example.com/podcast/ep10.mp3", // URL fictícia
    spotifyUrl: "https://open.spotify.com/show/example", // URL fictícia
    appleUrl: "https://podcasts.apple.com/podcast/example", // URL fictícia
    googleUrl: "https://podcasts.google.com/feed/example", // URL fictícia
    image: "/placeholder.svg?height=300&width=300",
  }

  const recentPodcasts = [
    {
      id: "2",
      title: "EP 9: Entrevista com o Campeão Nacional",
      date: "11/03/2024",
      duration: "58:24",
    },
    {
      id: "3",
      title: "EP 8: Novas Cartas e Expansões - O que Esperar?",
      date: "04/03/2024",
      duration: "1:02:15",
    },
    {
      id: "4",
      title: "EP 7: Estratégias para Torneios Locais",
      date: "25/02/2024",
      duration: "45:37",
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
          <div className="hidden md:flex">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar decks, artigos..." className="w-[300px] pl-8" />
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium">
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
            <Link href="/podcast" className="text-sm font-medium text-muted-foreground">
              Podcast
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Metagame
            </Link>
          </nav>
          <Button className="md:hidden" variant="outline" size="icon">
            <SearchIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="border-t md:hidden">
          <div className="container overflow-auto py-2">
            <nav className="flex items-center gap-4">
              <Link href="/" className="whitespace-nowrap text-sm font-medium">
                Início
              </Link>
              <Link href="#" className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                Artigos
              </Link>
              <Link href="#" className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                Decks
              </Link>
              <Link href="#" className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                Torneios
              </Link>
              <Link href="/podcast" className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                Podcast
              </Link>
              <Link href="#" className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                Metagame
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Artigo em destaque */}
        <section className="bg-muted/40">
          <div className="container py-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={featuredArticles[0].image || "/placeholder.svg"}
                  alt={featuredArticles[0].title}
                  width={800}
                  height={400}
                  className="aspect-[16/9] h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <Badge className="mb-2">{featuredArticles[0].category}</Badge>
                  <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">{featuredArticles[0].title}</h2>
                  <p className="mb-4 text-white/90">{featuredArticles[0].excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <span>{featuredArticles[0].author}</span>
                    <span>•</span>
                    <span>{featuredArticles[0].date}</span>
                  </div>
                </div>
                <Link href={`/articles/${featuredArticles[0].id}`} className="absolute inset-0">
                  <span className="sr-only">Ler artigo</span>
                </Link>
              </div>
              <div className="grid gap-4">
                {featuredArticles.slice(1, 3).map((article) => (
                  <div key={article.id} className="relative overflow-hidden rounded-lg">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={800}
                      height={400}
                      className="aspect-[16/9] h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 p-4">
                      <Badge className="mb-2">{article.category}</Badge>
                      <h3 className="mb-2 text-lg font-bold text-white md:text-xl">{article.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <Link href={`/articles/${article.id}`} className="absolute inset-0">
                      <span className="sr-only">Ler artigo</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Podcast em destaque - versão compacta */}
        <section className="border-b">
          <div className="container py-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MicIcon className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Podcast</h2>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/podcast" className="flex items-center gap-1">
                  Ver todos os episódios
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Badge variant="outline" className="mb-2">
                    Novo Episódio
                  </Badge>
                  <h3 className="text-lg font-bold line-clamp-1">{latestPodcast.title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <span>{latestPodcast.date}</span>
                    <span>•</span>
                    <span>{latestPodcast.duration}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{latestPodcast.description}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={latestPodcast.downloadUrl} download aria-label="Baixar episódio">
                        <Download className="mr-1 h-4 w-4" />
                        <span>Baixar</span>
                      </a>
                    </Button>

                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={latestPodcast.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ouvir no Spotify"
                      >
                        <Spotify className="mr-1 h-4 w-4" />
                        <span>Spotify</span>
                      </a>
                    </Button>

                    <Button variant="default" size="sm" asChild>
                      <Link href={`/podcast/${latestPodcast.id}`} className="flex items-center">
                        <Play className="mr-1 h-4 w-4" />
                        <span>Ouvir agora</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="sm:w-[120px] flex-shrink-0">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src={latestPodcast.image || "/placeholder.svg"}
                      alt={latestPodcast.title}
                      width={120}
                      height={120}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t">
                <div className="text-xs font-medium mb-2">Episódios Recentes:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {recentPodcasts.map((episode) => (
                    <Link
                      key={episode.id}
                      href={`/podcast/${episode.id}`}
                      className="flex items-center justify-between rounded-md border p-2 hover:bg-muted text-sm"
                    >
                      <div className="line-clamp-1 flex-1">
                        <div className="font-medium line-clamp-1">{episode.title}</div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-6 w-6 flex-shrink-0">
                        <Play className="h-3 w-3" />
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo principal */}
        <section className="container py-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Coluna principal (2/3) */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="articles">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="articles">Artigos Recentes</TabsTrigger>
                    <TabsTrigger value="tournaments">Torneios</TabsTrigger>
                  </TabsList>
                  <div className="hidden sm:block">
                    <Select defaultValue="recent">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Ordenar por" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recent">Mais recentes</SelectItem>
                        <SelectItem value="popular">Mais populares</SelectItem>
                        <SelectItem value="trending">Em alta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Artigos Recentes */}
                <TabsContent value="articles" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {recentArticles.map((article) => (
                      <Card key={article.id} className="overflow-hidden">
                        <div className="relative">
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            width={300}
                            height={200}
                            className="aspect-[3/2] w-full object-cover"
                          />
                          <Badge className="absolute left-3 top-3">{article.category}</Badge>
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="line-clamp-2 text-lg">{article.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="line-clamp-2 text-sm text-muted-foreground">{article.excerpt}</p>
                          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{article.author}</span>
                            <span>•</span>
                            <span>{article.date}</span>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button variant="ghost" size="sm" className="ml-auto" asChild>
                            <Link href={`/articles/${article.id}`}>
                              Ler mais <ChevronRightIcon className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" asChild>
                      <Link href="/articles">Ver todos os artigos</Link>
                    </Button>
                  </div>
                </TabsContent>

                {/* Torneios */}
                <TabsContent value="tournaments" className="mt-6">
                  <div className="space-y-6">
                    {tournaments.map((tournament) => (
                      <Card key={tournament.id} className="overflow-hidden">
                        <CardHeader className="p-6">
                          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                            <div>
                              <CardTitle className="text-xl">{tournament.name}</CardTitle>
                              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
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
                            </div>
                            <Badge variant="secondary" className="w-fit">
                              {tournament.format}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="px-6 pb-2">
                          <h3 className="mb-3 font-medium">Top Decks</h3>
                          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                            {tournament.topDecks.map((deck, index) => (
                              <Link
                                key={deck.id}
                                href={`/decks/${deck.id}`}
                                className="group rounded-md border p-3 transition-colors hover:bg-muted"
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                                    {index + 1}
                                  </div>
                                  <div className="text-xs text-muted-foreground">{deck.player}</div>
                                </div>
                                <div className="mt-2 font-medium group-hover:underline">{deck.name}</div>
                              </Link>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="p-6 pt-4">
                          <Button variant="outline" className="w-full" asChild>
                            <Link href={`/tournaments/${tournament.id}`}>Ver Todos os Decks do Torneio</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" asChild>
                      <Link href="/tournaments">Ver todos os torneios</Link>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar (1/3) */}
            <div className="space-y-6">
              {/* Metagame */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Metagame Atual</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {metagame.map((deck, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{deck.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{deck.percentage}%</span>
                          <span
                            className={`text-xs ${deck.change.startsWith("+") ? "text-green-500" : deck.change.startsWith("-") ? "text-red-500" : "text-muted-foreground"}`}
                          >
                            {deck.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link href="/metagame">Ver análise completa do metagame</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Próximos Eventos */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Próximos Eventos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="rounded-md border p-3">
                      <div className="font-medium">Grand Prix Rio de Janeiro</div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <CalendarIcon className="h-3 w-3" />
                        <span>25/03/2024</span>
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPinIcon className="h-3 w-3" />
                        <span>Rio de Janeiro, RJ</span>
                      </div>
                    </div>
                    <div className="rounded-md border p-3">
                      <div className="font-medium">Store Championship São Paulo</div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <CalendarIcon className="h-3 w-3" />
                        <span>02/04/2024</span>
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPinIcon className="h-3 w-3" />
                        <span>São Paulo, SP</span>
                      </div>
                    </div>
                    <div className="rounded-md border p-3">
                      <div className="font-medium">Regional Qualifier Belo Horizonte</div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <CalendarIcon className="h-3 w-3" />
                        <span>15/04/2024</span>
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPinIcon className="h-3 w-3" />
                        <span>Belo Horizonte, MG</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link href="/events">Ver todos os eventos</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Links Rápidos */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Links Rápidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="/decks">Decks</Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="/metagame">Metagame</Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="/tournaments">Torneios</Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="/articles">Artigos</Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="/podcast">Podcast</Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="/community">Comunidade</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <TrophyIcon className="h-6 w-6" />
                <h2 className="text-lg font-bold">Mesa Um</h2>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Seu portal completo sobre One Piece TCG no Brasil, com artigos, decks, torneios, podcast e muito mais.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium">Navegação</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="text-muted-foreground hover:text-foreground">
                    Artigos
                  </Link>
                </li>
                <li>
                  <Link href="/decks" className="text-muted-foreground hover:text-foreground">
                    Decks
                  </Link>
                </li>
                <li>
                  <Link href="/tournaments" className="text-muted-foreground hover:text-foreground">
                    Torneios
                  </Link>
                </li>
                <li>
                  <Link href="/podcast" className="text-muted-foreground hover:text-foreground">
                    Podcast
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium">Recursos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/rules" className="text-muted-foreground hover:text-foreground">
                    Regras
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/glossary" className="text-muted-foreground hover:text-foreground">
                    Glossário
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-muted-foreground hover:text-foreground">
                    Comunidade
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium">Redes Sociais</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Twitch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-6" />
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
              <Link href="/admin/login" className="text-sm text-muted-foreground hover:underline">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


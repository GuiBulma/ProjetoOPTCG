import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  CalendarIcon,
  Clock,
  MicIcon,
  Play,
  TrophyIcon,
  AirplayIcon as Spotify,
  ExternalLink,
  RssIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PodcastPlayer } from "@/components/podcast-player"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PodcastPage() {
  // Dados de exemplo para o podcast em destaque
  const featuredPodcast = {
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
    topics: ["Campeonato Nacional", "Meta", "Análise de Decks"],
  }

  // Dados de exemplo para episódios anteriores
  const episodes = [
    {
      id: "2",
      title: "EP 9: Entrevista com o Campeão Nacional",
      description:
        "Conversamos com Carlos Silva, campeão do Campeonato Nacional de One Piece TCG, sobre sua jornada, estratégias e o deck Luffy Aggro que o levou à vitória.",
      date: "11/03/2024",
      duration: "58:24",
      hosts: ["Ana Pereira"],
      guests: ["Carlos Silva"],
      audioSrc: "https://example.com/podcast/ep9.mp3", // URL fictícia
      downloadUrl: "https://example.com/podcast/ep9.mp3", // URL fictícia
      spotifyUrl: "https://open.spotify.com/show/example", // URL fictícia
      appleUrl: "https://podcasts.apple.com/podcast/example", // URL fictícia
      googleUrl: "https://podcasts.google.com/feed/example", // URL fictícia
      image: "/placeholder.svg?height=300&width=300",
      topics: ["Entrevista", "Campeonato Nacional", "Luffy Aggro"],
    },
    {
      id: "3",
      title: "EP 8: Novas Cartas e Expansões - O que Esperar?",
      description:
        "Analisamos as novas cartas reveladas para a próxima expansão de One Piece TCG e discutimos como elas podem impactar o meta atual.",
      date: "04/03/2024",
      duration: "1:02:15",
      hosts: ["Carlos Silva", "Ana Pereira"],
      guests: [],
      audioSrc: "https://example.com/podcast/ep8.mp3", // URL fictícia
      downloadUrl: "https://example.com/podcast/ep8.mp3", // URL fictícia
      spotifyUrl: "https://open.spotify.com/show/example", // URL fictícia
      appleUrl: "https://podcasts.apple.com/podcast/example", // URL fictícia
      googleUrl: "https://podcasts.google.com/feed/example", // URL fictícia
      image: "/placeholder.svg?height=300&width=300",
      topics: ["Novas Cartas", "Expansões", "Previsões"],
    },
    {
      id: "4",
      title: "EP 7: Estratégias para Torneios Locais",
      description:
        "Dicas e estratégias para jogadores que estão começando a participar de torneios locais de One Piece TCG.",
      date: "25/02/2024",
      duration: "45:37",
      hosts: ["Carlos Silva", "Ana Pereira"],
      guests: ["Mariana Costa"],
      audioSrc: "https://example.com/podcast/ep7.mp3", // URL fictícia
      downloadUrl: "https://example.com/podcast/ep7.mp3", // URL fictícia
      spotifyUrl: "https://open.spotify.com/show/example", // URL fictícia
      appleUrl: "https://podcasts.apple.com/podcast/example", // URL fictícia
      googleUrl: "https://podcasts.google.com/feed/example", // URL fictícia
      image: "/placeholder.svg?height=300&width=300",
      topics: ["Torneios Locais", "Estratégias", "Dicas"],
    },
    {
      id: "5",
      title: "EP 6: Deck Tech - Zoro Control",
      description:
        "Uma análise detalhada do deck Zoro Control, suas forças, fraquezas e como jogar contra os principais decks do meta.",
      date: "18/02/2024",
      duration: "53:12",
      hosts: ["Carlos Silva", "Ana Pereira"],
      guests: ["Pedro Oliveira"],
      audioSrc: "https://example.com/podcast/ep6.mp3", // URL fictícia
      downloadUrl: "https://example.com/podcast/ep6.mp3", // URL fictícia
      spotifyUrl: "https://open.spotify.com/show/example", // URL fictícia
      appleUrl: "https://podcasts.apple.com/podcast/example", // URL fictícia
      googleUrl: "https://podcasts.google.com/feed/example", // URL fictícia
      image: "/placeholder.svg?height=300&width=300",
      topics: ["Deck Tech", "Zoro Control", "Análise"],
    },
    {
      id: "6",
      title: "EP 5: Metagame Atual - Tier List e Análise",
      description:
        "Uma análise completa do metagame atual de One Piece TCG, com tier list dos melhores decks e previsões para os próximos torneios.",
      date: "11/02/2024",
      duration: "1:08:45",
      hosts: ["Carlos Silva", "Ana Pereira"],
      guests: [],
      audioSrc: "https://example.com/podcast/ep5.mp3", // URL fictícia
      downloadUrl: "https://example.com/podcast/ep5.mp3", // URL fictícia
      spotifyUrl: "https://open.spotify.com/show/example", // URL fictícia
      appleUrl: "https://podcasts.apple.com/podcast/example", // URL fictícia
      googleUrl: "https://podcasts.google.com/feed/example", // URL fictícia
      image: "/placeholder.svg?height=300&width=300",
      topics: ["Metagame", "Tier List", "Análise"],
    },
    {
      id: "7",
      title: "EP 4: Entrevista com Organizador de Torneios",
      description:
        "Conversamos com Rafael Mendes, organizador de torneios, sobre os desafios e oportunidades de organizar eventos de One Piece TCG no Brasil.",
      date: "04/02/2024",
      duration: "49:18",
      hosts: ["Carlos Silva"],
      guests: ["Rafael Mendes"],
      audioSrc: "https://example.com/podcast/ep4.mp3", // URL fictícia
      downloadUrl: "https://example.com/podcast/ep4.mp3", // URL fictícia
      spotifyUrl: "https://open.spotify.com/show/example", // URL fictícia
      appleUrl: "https://podcasts.apple.com/podcast/example", // URL fictícia
      googleUrl: "https://podcasts.google.com/feed/example", // URL fictícia
      image: "/placeholder.svg?height=300&width=300",
      topics: ["Entrevista", "Torneios", "Organização"],
    },
    {
      id: "8",
      title: "EP 3: Deck Tech - Luffy Aggro",
      description:
        "Uma análise detalhada do deck Luffy Aggro, suas forças, fraquezas e como jogar contra os principais decks do meta.",
      date: "28/01/2024",
      duration: "55:37",
      hosts: ["Carlos Silva", "Ana Pereira"],
      guests: [],
      audioSrc: "https://example.com/podcast/ep3.mp3", // URL fictícia
      downloadUrl: "https://example.com/podcast/ep3.mp3", // URL fictícia
      spotifyUrl: "https://open.spotify.com/show/example", // URL fictícia
      appleUrl: "https://podcasts.apple.com/podcast/example", // URL fictícia
      googleUrl: "https://podcasts.google.com/feed/example", // URL fictícia
      image: "/placeholder.svg?height=300&width=300",
      topics: ["Deck Tech", "Luffy Aggro", "Análise"],
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
            <Link href="/podcast" className="text-sm font-medium">
              Podcast
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground">
              Metagame
            </Link>
          </nav>
          <Button className="md:hidden" variant="outline" size="icon">
            <MicIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="border-t md:hidden">
          <div className="container overflow-auto py-2">
            <nav className="flex items-center gap-4">
              <Link href="/" className="whitespace-nowrap text-sm font-medium text-muted-foreground">
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
              <Link href="/podcast" className="whitespace-nowrap text-sm font-medium">
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
        <div className="container py-8">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para página inicial
            </Link>
          </Button>

          <div className="flex items-center gap-2 mb-8">
            <MicIcon className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Podcast Mesa Um</h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {/* Episódio em destaque */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Episódio Mais Recente</h2>
                <Card>
                  <CardHeader className="pb-0">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <Image
                        src={featuredPodcast.image || "/placeholder.svg"}
                        alt={featuredPodcast.title}
                        width={120}
                        height={120}
                        className="rounded-lg"
                      />
                      <div>
                        <Badge className="mb-2">Novo Episódio</Badge>
                        <CardTitle className="text-xl">{featuredPodcast.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4" />
                            <span>{featuredPodcast.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{featuredPodcast.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground mb-4">{featuredPodcast.description}</p>

                    <div className="mb-4">
                      <div className="text-sm font-medium mb-1">Apresentadores:</div>
                      <div className="flex flex-wrap gap-2">
                        {featuredPodcast.hosts.map((host, index) => (
                          <Badge key={index} variant="outline">
                            {host}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {featuredPodcast.guests.length > 0 && (
                      <div className="mb-4">
                        <div className="text-sm font-medium mb-1">Convidados:</div>
                        <div className="flex flex-wrap gap-2">
                          {featuredPodcast.guests.map((guest, index) => (
                            <Badge key={index} variant="outline">
                              {guest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-4">
                      <div className="text-sm font-medium mb-1">Tópicos:</div>
                      <div className="flex flex-wrap gap-2">
                        {featuredPodcast.topics.map((topic, index) => (
                          <Badge key={index} variant="secondary">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <PodcastPlayer
                      title={featuredPodcast.title}
                      audioSrc={featuredPodcast.audioSrc}
                      downloadUrl={featuredPodcast.downloadUrl}
                      spotifyUrl={featuredPodcast.spotifyUrl}
                      appleUrl={featuredPodcast.appleUrl}
                      googleUrl={featuredPodcast.googleUrl}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Lista de episódios */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-bold">Todos os Episódios</h2>
                  <div className="flex gap-2">
                    <Input placeholder="Buscar episódio..." className="w-full sm:w-[200px]" />
                    <Select defaultValue="recent">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Ordenar por" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recent">Mais recentes</SelectItem>
                        <SelectItem value="popular">Mais populares</SelectItem>
                        <SelectItem value="longest">Mais longos</SelectItem>
                        <SelectItem value="shortest">Mais curtos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  {episodes.map((episode) => (
                    <Card key={episode.id} className="overflow-hidden">
                      <div className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Image
                            src={episode.image || "/placeholder.svg"}
                            alt={episode.title}
                            width={80}
                            height={80}
                            className="rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">{episode.title}</h3>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <CalendarIcon className="h-4 w-4" />
                                <span>{episode.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{episode.duration}</span>
                              </div>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{episode.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {episode.topics.slice(0, 3).map((topic, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex sm:flex-col items-center gap-2 sm:justify-center">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/podcast/${episode.id}`}>Detalhes</Link>
                            </Button>
                            <Button variant="default" size="icon" className="h-8 w-8 rounded-full">
                              <Play className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Sobre o podcast */}
              <Card>
                <CardHeader>
                  <CardTitle>Sobre o Podcast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    O Podcast Mesa Um traz análises, entrevistas, dicas e discussões sobre o cenário competitivo do jogo
                    de cartas colecionáveis One Piece TCG no Brasil.
                  </p>
                  <div className="mt-4">
                    <div className="text-sm font-medium mb-1">Apresentadores:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Carlos Silva</Badge>
                      <Badge variant="outline">Ana Pereira</Badge>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm font-medium mb-1">Frequência:</div>
                    <p className="text-sm text-muted-foreground">Novos episódios toda segunda-feira</p>
                  </div>
                </CardContent>
              </Card>

              {/* Onde ouvir */}
              <Card>
                <CardHeader>
                  <CardTitle>Onde Ouvir</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="justify-start" asChild>
                      <a href="https://open.spotify.com/show/example" target="_blank" rel="noopener noreferrer">
                        <Spotify className="mr-2 h-4 w-4" />
                        Spotify
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <a href="https://podcasts.apple.com/podcast/example" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Apple Podcasts
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <a href="https://podcasts.google.com/feed/example" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Google Podcasts
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <a href="https://www.youtube.com/channel/example" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        YouTube
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start col-span-2" asChild>
                      <a href="/podcast/rss" target="_blank" rel="noopener noreferrer">
                        <RssIcon className="mr-2 h-4 w-4" />
                        RSS Feed
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tópicos */}
              <Card>
                <CardHeader>
                  <CardTitle>Tópicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Análise de Decks
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Metagame
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Entrevistas
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Torneios
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Deck Tech
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Estratégias
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Novas Cartas
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Dicas
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Expansões
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Tier List
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Contato */}
              <Card>
                <CardHeader>
                  <CardTitle>Contato</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Tem sugestões, perguntas ou quer participar do podcast? Entre em contato conosco!
                  </p>
                  <Button className="w-full" asChild>
                    <a href="mailto:podcast@mesaum.com.br">Enviar Email</a>
                  </Button>
                </CardContent>
              </Card>
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


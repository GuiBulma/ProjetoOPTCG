import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CalendarIcon, Clock, ExternalLink, MicIcon, RssIcon, TrophyIcon } from "lucide-react"
import { TwitterIcon, FacebookIcon, LinkedinIcon, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PodcastPlayer } from "@/components/podcast-player"
import { Badge } from "@/components/ui/badge"
import { AirplayIcon as Spotify } from "lucide-react"

export default function PodcastEpisodePage({ params }: { params: { id: string } }) {
  // Em um aplicativo real, você buscaria os dados do episódio com base no ID
  const episode = {
    id: params.id,
    title: "EP 9: Entrevista com o Campeão Nacional",
    description:
      "Conversamos com Carlos Silva, campeão do Campeonato Nacional de One Piece TCG, sobre sua jornada, estratégias e o deck Luffy Aggro que o levou à vitória.",
    longDescription: `
      Neste episódio especial, temos o prazer de receber Carlos Silva, o grande campeão do Campeonato Nacional de One Piece TCG 2024.
      
      Carlos nos conta sua trajetória no jogo, desde quando começou a jogar até a conquista do título nacional. Discutimos em detalhes o deck Luffy Aggro que ele utilizou, as escolhas de cartas, estratégias contra os principais decks do meta e as decisões cruciais que o levaram à vitória.
      
      Também falamos sobre o cenário competitivo atual, dicas para jogadores que estão começando agora e as expectativas para os próximos torneios.
      
      Este episódio é imperdível para quem quer entender melhor o funcionamento do deck Luffy Aggro e aprender com um dos melhores jogadores do Brasil.
    `,
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
    topics: ["Entrevista", "Campeonato Nacional", "Luffy Aggro", "Estratégias", "Competitivo"],
    chapters: [
      { title: "Introdução e apresentação do convidado", timestamp: "00:00" },
      { title: "Trajetória de Carlos no One Piece TCG", timestamp: "05:32" },
      { title: "Preparação para o Campeonato Nacional", timestamp: "12:45" },
      { title: "Análise do deck Luffy Aggro", timestamp: "18:20" },
      { title: "Matchups e estratégias contra os principais decks", timestamp: "27:15" },
      { title: "Momentos decisivos do torneio", timestamp: "35:48" },
      { title: "Dicas para jogadores iniciantes", timestamp: "42:10" },
      { title: "Expectativas para o futuro", timestamp: "49:30" },
      { title: "Perguntas dos ouvintes e encerramento", timestamp: "53:15" },
    ],
    relatedEpisodes: [
      { id: "3", title: "EP 8: Novas Cartas e Expansões - O que Esperar?", date: "04/03/2024" },
      { id: "8", title: "EP 3: Deck Tech - Luffy Aggro", date: "28/01/2024" },
      { id: "5", title: "EP 6: Deck Tech - Zoro Control", date: "18/02/2024" },
    ],
    shownotes: [
      { title: "Deck Luffy Aggro do Carlos", url: "/decks/1" },
      { title: "Resultados do Campeonato Nacional", url: "/tournaments/1" },
      { title: "Artigo: Análise do Meta Atual", url: "/articles/1" },
    ],
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
          <div className="flex flex-wrap gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/podcast" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar para todos os episódios
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <Image
                    src={episode.image || "/placeholder.svg"}
                    alt={episode.title}
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <div>
                    <h1 className="text-3xl font-bold">{episode.title}</h1>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{episode.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{episode.duration}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="text-sm font-medium mb-1">Apresentadores:</div>
                      <div className="flex flex-wrap gap-2">
                        {episode.hosts.map((host, index) => (
                          <Badge key={index} variant="outline">
                            {host}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {episode.guests.length > 0 && (
                      <div className="mt-3">
                        <div className="text-sm font-medium mb-1">Convidados:</div>
                        <div className="flex flex-wrap gap-2">
                          {episode.guests.map((guest, index) => (
                            <Badge key={index} variant="outline">
                              {guest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-3">
                      <div className="text-sm font-medium mb-1">Tópicos:</div>
                      <div className="flex flex-wrap gap-2">
                        {episode.topics.map((topic, index) => (
                          <Badge key={index} variant="secondary">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <PodcastPlayer
                  title={episode.title}
                  audioSrc={episode.audioSrc}
                  downloadUrl={episode.downloadUrl}
                  spotifyUrl={episode.spotifyUrl}
                  appleUrl={episode.appleUrl}
                  googleUrl={episode.googleUrl}
                />

                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Sobre este episódio</h2>
                  <div className="prose max-w-none dark:prose-invert">
                    {episode.longDescription.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-4 text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Capítulos</h2>
                  <div className="space-y-2">
                    {episode.chapters.map((chapter, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-md border hover:bg-muted"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">{chapter.timestamp}</span>
                          <span>{chapter.title}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          Ir para
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Show Notes</h2>
                  <div className="space-y-2">
                    {episode.shownotes.map((note, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        <Link href={note.url} className="text-primary hover:underline">
                          {note.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Episódios relacionados */}
              <Card>
                <CardHeader>
                  <CardTitle>Episódios Relacionados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {episode.relatedEpisodes.map((relatedEp) => (
                      <Link
                        key={relatedEp.id}
                        href={`/podcast/${relatedEp.id}`}
                        className="block rounded-md border p-3 hover:bg-muted"
                      >
                        <div className="font-medium">{relatedEp.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">{relatedEp.date}</div>
                      </Link>
                    ))}
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

              {/* Compartilhar */}
              <Card>
                <CardHeader>
                  <CardTitle>Compartilhar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="justify-start">
                      <TwitterIcon className="mr-2 h-4 w-4" />
                      Twitter
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <FacebookIcon className="mr-2 h-4 w-4" />
                      Facebook
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <LinkedinIcon className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      Copiar Link
                    </Button>
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


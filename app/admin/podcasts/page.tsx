import Link from "next/link"
import { PlusCircle, Search, Filter, MoreHorizontal, Play, Pencil, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

export default function PodcastsPage() {
  // Dados de exemplo para podcasts
  const podcasts = [
    {
      id: "1",
      title: "EP 10: Análise do Campeonato Nacional e Previsões para o Meta",
      description:
        "Neste episódio, discutimos os resultados do Campeonato Nacional, analisamos os decks vencedores e fazemos previsões para o futuro do meta de One Piece TCG.",
      date: "18/03/2024",
      duration: "1:15:32",
      hosts: ["Carlos Silva", "Ana Pereira"],
      guests: ["Pedro Oliveira"],
      status: "published",
      plays: 1245,
    },
    {
      id: "2",
      title: "EP 9: Entrevista com o Campeão Nacional",
      description:
        "Conversamos com Carlos Silva, campeão do Campeonato Nacional de One Piece TCG, sobre sua jornada, estratégias e o deck Luffy Aggro que o levou à vitória.",
      date: "11/03/2024",
      duration: "58:24",
      hosts: ["Ana Pereira"],
      guests: ["Carlos Silva"],
      status: "published",
      plays: 987,
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
      status: "published",
      plays: 876,
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
      status: "published",
      plays: 765,
    },
    {
      id: "5",
      title: "EP 11: Análise das Novas Regras do Torneio",
      description: "Discutimos as novas regras de torneio anunciadas e como elas afetarão o cenário competitivo.",
      date: "25/03/2024",
      duration: "1:10:00",
      hosts: ["Carlos Silva", "Ana Pereira"],
      guests: ["Lucas Santos"],
      status: "scheduled",
      plays: 0,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Podcasts</h1>
        <Button asChild>
          <Link href="/admin/podcasts/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Episódio
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Episódios</CardTitle>
          <CardDescription>
            Gerencie todos os episódios do podcast. Você pode criar, editar, visualizar e excluir episódios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar episódios..." className="pl-8" />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="published">Publicados</SelectItem>
                    <SelectItem value="scheduled">Agendados</SelectItem>
                    <SelectItem value="draft">Rascunhos</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="grid grid-cols-12 gap-4 border-b bg-muted/40 p-4 text-sm font-medium">
                <div className="col-span-1">
                  <Checkbox />
                </div>
                <div className="col-span-5">Título</div>
                <div className="col-span-2">Apresentadores</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-2">Data</div>
                <div className="col-span-1 text-right">Ações</div>
              </div>

              {podcasts.map((podcast) => (
                <div key={podcast.id} className="grid grid-cols-12 gap-4 border-b p-4 text-sm last:border-0">
                  <div className="col-span-1">
                    <Checkbox />
                  </div>
                  <div className="col-span-5">
                    <div className="font-medium">{podcast.title}</div>
                    <div className="text-xs text-muted-foreground line-clamp-1">{podcast.description}</div>
                    <div className="mt-1">
                      <Badge variant="outline" className="text-xs">
                        {podcast.duration}
                      </Badge>
                      <span className="ml-2 text-xs text-muted-foreground">{podcast.plays} reproduções</span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="line-clamp-1">{podcast.hosts.join(", ")}</div>
                    {podcast.guests.length > 0 && (
                      <div className="text-xs text-muted-foreground">Convidados: {podcast.guests.join(", ")}</div>
                    )}
                  </div>
                  <div className="col-span-1">
                    <Badge
                      variant={
                        podcast.status === "published"
                          ? "default"
                          : podcast.status === "scheduled"
                            ? "secondary"
                            : "outline"
                      }
                      className="whitespace-nowrap"
                    >
                      {podcast.status === "published"
                        ? "Publicado"
                        : podcast.status === "scheduled"
                          ? "Agendado"
                          : "Rascunho"}
                    </Badge>
                  </div>
                  <div className="col-span-2">{podcast.date}</div>
                  <div className="col-span-1 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Abrir menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Play className="mr-2 h-4 w-4" />
                          Reproduzir
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Pencil className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Mostrando <strong>5</strong> de <strong>5</strong> episódios
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Próximo
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


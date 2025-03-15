import Link from "next/link"
import { PlusCircle, Search, Filter, MoreHorizontal, Eye, Pencil, Trash2 } from "lucide-react"

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

export default function DecksPage() {
  // Dados de exemplo para decks
  const decks = [
    {
      id: "1",
      name: "Luffy Aggro",
      player: "Carlos Silva",
      tournament: "Campeonato Nacional 2024",
      date: "12/03/2024",
      format: "Standard",
      position: 1,
      views: 1245,
    },
    {
      id: "2",
      name: "Zoro Control",
      player: "Ana Pereira",
      tournament: "Campeonato Nacional 2024",
      date: "12/03/2024",
      format: "Standard",
      position: 2,
      views: 987,
    },
    {
      id: "3",
      name: "Sanji Midrange",
      player: "Pedro Oliveira",
      tournament: "Campeonato Nacional 2024",
      date: "12/03/2024",
      format: "Standard",
      position: 3,
      views: 876,
    },
    {
      id: "4",
      name: "Kaido Control",
      player: "Lucas Santos",
      tournament: "Grand Prix São Paulo",
      date: "05/03/2024",
      format: "Standard",
      position: 1,
      views: 1032,
    },
    {
      id: "5",
      name: "Law Combo",
      player: "Rafael Mendes",
      tournament: "Grand Prix São Paulo",
      date: "05/03/2024",
      format: "Standard",
      position: 2,
      views: 765,
    },
    {
      id: "6",
      name: "Blackbeard Control",
      player: "Fernanda Lima",
      tournament: "Regional Championship",
      date: "28/02/2024",
      format: "Standard",
      position: 1,
      views: 543,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Decks</h1>
        <Button asChild>
          <Link href="/admin/decks/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Deck
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Decks</CardTitle>
          <CardDescription>
            Gerencie todos os decks do site. Você pode criar, editar, visualizar e excluir decks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar decks..." className="pl-8" />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Formato" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="legacy">Legacy</SelectItem>
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
                <div className="col-span-3">Deck</div>
                <div className="col-span-2">Jogador</div>
                <div className="col-span-2">Torneio</div>
                <div className="col-span-1">Posição</div>
                <div className="col-span-2">Data</div>
                <div className="col-span-1 text-right">Ações</div>
              </div>

              {decks.map((deck) => (
                <div key={deck.id} className="grid grid-cols-12 gap-4 border-b p-4 text-sm last:border-0">
                  <div className="col-span-1">
                    <Checkbox />
                  </div>
                  <div className="col-span-3">
                    <div className="font-medium">{deck.name}</div>
                    <div className="mt-1">
                      <Badge variant="outline" className="text-xs">
                        {deck.format}
                      </Badge>
                      <span className="ml-2 text-xs text-muted-foreground">{deck.views} visualizações</span>
                    </div>
                  </div>
                  <div className="col-span-2">{deck.player}</div>
                  <div className="col-span-2">{deck.tournament}</div>
                  <div className="col-span-1">
                    <Badge variant={deck.position === 1 ? "default" : "secondary"} className="whitespace-nowrap">
                      {deck.position}º
                    </Badge>
                  </div>
                  <div className="col-span-2">{deck.date}</div>
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
                          <Eye className="mr-2 h-4 w-4" />
                          Visualizar
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
                Mostrando <strong>6</strong> de <strong>6</strong> decks
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


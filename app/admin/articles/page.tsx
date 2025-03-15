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

export default function ArticlesPage() {
  // Dados de exemplo para artigos
  const articles = [
    {
      id: "1",
      title: "Análise do Meta Atual: Os Melhores Decks de One Piece TCG",
      excerpt: "Um olhar profundo sobre os decks que estão dominando o cenário competitivo atual de One Piece TCG.",
      author: "Carlos Silva",
      date: "15/03/2024",
      status: "published",
      category: "Análise",
      views: 1245,
    },
    {
      id: "2",
      title: "Guia Completo para Iniciantes em One Piece TCG",
      excerpt:
        "Tudo o que você precisa saber para começar a jogar One Piece TCG, desde regras básicas até estratégias iniciais.",
      author: "Ana Pereira",
      date: "12/03/2024",
      status: "published",
      category: "Guia",
      views: 2367,
    },
    {
      id: "3",
      title: "Estratégias Avançadas com o Deck Luffy",
      excerpt: "Técnicas e dicas para maximizar o potencial do deck Luffy em torneios competitivos.",
      author: "Pedro Oliveira",
      date: "10/03/2024",
      status: "published",
      category: "Estratégia",
      views: 876,
    },
    {
      id: "4",
      title: "Como Construir um Deck Zoro Competitivo",
      excerpt: "Guia passo a passo para montar um deck Zoro eficiente para torneios.",
      author: "Mariana Costa",
      date: "08/03/2024",
      status: "published",
      category: "Deck Tech",
      views: 1032,
    },
    {
      id: "5",
      title: "Relatório do Torneio Nacional: Surpresas e Tendências",
      excerpt: "Um resumo completo do último Campeonato Nacional, com análise dos decks vencedores.",
      author: "Lucas Santos",
      date: "05/03/2024",
      status: "published",
      category: "Torneios",
      views: 1567,
    },
    {
      id: "6",
      title: "Previsões para o Próximo Banlist",
      excerpt: "Análise das cartas que podem ser banidas ou limitadas na próxima atualização.",
      author: "Rafael Mendes",
      date: "01/03/2024",
      status: "draft",
      category: "Análise",
      views: 0,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Artigos</h1>
        <Button asChild>
          <Link href="/admin/articles/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Artigo
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Artigos</CardTitle>
          <CardDescription>
            Gerencie todos os artigos do site. Você pode criar, editar, visualizar e excluir artigos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar artigos..." className="pl-8" />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="published">Publicados</SelectItem>
                    <SelectItem value="draft">Rascunhos</SelectItem>
                    <SelectItem value="archived">Arquivados</SelectItem>
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
                <div className="col-span-2">Autor</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-2">Data</div>
                <div className="col-span-1 text-right">Ações</div>
              </div>

              {articles.map((article) => (
                <div key={article.id} className="grid grid-cols-12 gap-4 border-b p-4 text-sm last:border-0">
                  <div className="col-span-1">
                    <Checkbox />
                  </div>
                  <div className="col-span-5">
                    <div className="font-medium">{article.title}</div>
                    <div className="text-xs text-muted-foreground line-clamp-1">{article.excerpt}</div>
                    <div className="mt-1">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <span className="ml-2 text-xs text-muted-foreground">{article.views} visualizações</span>
                    </div>
                  </div>
                  <div className="col-span-2">{article.author}</div>
                  <div className="col-span-1">
                    <Badge
                      variant={article.status === "published" ? "default" : "secondary"}
                      className="whitespace-nowrap"
                    >
                      {article.status === "published" ? "Publicado" : "Rascunho"}
                    </Badge>
                  </div>
                  <div className="col-span-2">{article.date}</div>
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
                Mostrando <strong>6</strong> de <strong>6</strong> artigos
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


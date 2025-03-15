"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Save, Image, FileText, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewArticlePage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [category, setCategory] = useState("")
  const [previewMode, setPreviewMode] = useState(false)

  const handleSaveDraft = () => {
    console.log("Saving draft...")
  }

  const handlePublish = () => {
    console.log("Publishing article...")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/admin/articles" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Novo Artigo</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleSaveDraft}>
            <Save className="mr-2 h-4 w-4" />
            Salvar Rascunho
          </Button>
          <Button onClick={handlePublish}>Publicar</Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Título</Label>
                  <Input
                    id="title"
                    placeholder="Digite o título do artigo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Resumo</Label>
                  <Textarea
                    id="excerpt"
                    placeholder="Digite um breve resumo do artigo"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="content">Conteúdo</Label>
                    <Tabs defaultValue="write" className="w-[200px]">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="write" onClick={() => setPreviewMode(false)}>
                          <FileText className="mr-2 h-4 w-4" />
                          Escrever
                        </TabsTrigger>
                        <TabsTrigger value="preview" onClick={() => setPreviewMode(true)}>
                          <Eye className="mr-2 h-4 w-4" />
                          Visualizar
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  {!previewMode ? (
                    <Textarea
                      id="content"
                      placeholder="Digite o conteúdo do artigo (suporta Markdown)"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={15}
                      className="font-mono"
                    />
                  ) : (
                    <div className="border rounded-md p-4 min-h-[300px]">
                      {content ? (
                        <div className="prose max-w-none dark:prose-invert">
                          {content.split("\n").map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}
                        </div>
                      ) : (
                        <div className="text-muted-foreground italic">A visualização do conteúdo aparecerá aqui...</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="analysis">Análise</SelectItem>
                      <SelectItem value="guide">Guia</SelectItem>
                      <SelectItem value="strategy">Estratégia</SelectItem>
                      <SelectItem value="deck-tech">Deck Tech</SelectItem>
                      <SelectItem value="tournament">Torneios</SelectItem>
                      <SelectItem value="news">Notícias</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author">Autor</Label>
                  <Select defaultValue="current-user">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um autor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current-user">Você</SelectItem>
                      <SelectItem value="carlos">Carlos Silva</SelectItem>
                      <SelectItem value="ana">Ana Pereira</SelectItem>
                      <SelectItem value="pedro">Pedro Oliveira</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Imagem de Destaque</Label>
                  <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                    <Image className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground text-center mb-2">
                      Arraste uma imagem ou clique para fazer upload
                    </p>
                    <Button variant="outline" size="sm">
                      Selecionar Imagem
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" placeholder="Separe as tags com vírgulas" />
                  <p className="text-xs text-muted-foreground">Exemplo: one piece tcg, meta, análise</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="seo-title">Título SEO</Label>
                  <Input id="seo-title" placeholder="Título para SEO (opcional)" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="seo-description">Descrição SEO</Label>
                  <Textarea id="seo-description" placeholder="Descrição para SEO (opcional)" rows={3} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Opções de Publicação</Label>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publish-date">Data de Publicação</Label>
                  <Input id="publish-date" type="datetime-local" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue="draft">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Rascunho</SelectItem>
                      <SelectItem value="published">Publicado</SelectItem>
                      <SelectItem value="scheduled">Agendado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


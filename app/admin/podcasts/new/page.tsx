"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Save, Upload, Mic, ListMusic, X, Image, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function NewPodcastPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [duration, setDuration] = useState("")

  const handleSaveDraft = () => {
    console.log("Saving draft...")
  }

  const handlePublish = () => {
    console.log("Publishing podcast...")
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAudioFile(e.target.files[0])
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/admin/podcasts" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Novo Episódio de Podcast</h1>
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
                  <Label htmlFor="title">Título do Episódio</Label>
                  <Input
                    id="title"
                    placeholder="Ex: EP 11: Análise das Novas Regras do Torneio"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    placeholder="Digite uma descrição detalhada do episódio"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Arquivo de Áudio</Label>
                  <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                    <Mic className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground text-center mb-2">
                      {audioFile ? audioFile.name : "Arraste um arquivo de áudio ou clique para fazer upload"}
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <label htmlFor="audio-upload" className="cursor-pointer">
                          <Upload className="mr-2 h-4 w-4" />
                          Selecionar Arquivo
                          <input
                            id="audio-upload"
                            type="file"
                            accept="audio/*"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </label>
                      </Button>
                      {audioFile && (
                        <Button variant="outline" size="sm" onClick={() => setAudioFile(null)}>
                          Remover
                        </Button>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Formatos aceitos: MP3, WAV, M4A. Tamanho máximo: 100MB.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duração</Label>
                    <Input
                      id="duration"
                      placeholder="Ex: 1:15:32"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">Formato: horas:minutos:segundos</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="episode-number">Número do Episódio</Label>
                    <Input id="episode-number" type="number" placeholder="Ex: 11" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Capítulos (Opcional)</Label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Input placeholder="00:00" className="w-24" />
                      <Input placeholder="Título do capítulo" className="flex-1" />
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input placeholder="05:32" className="w-24" />
                      <Input placeholder="Título do capítulo" className="flex-1" />
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-2">
                    <ListMusic className="mr-2 h-4 w-4" />
                    Adicionar Capítulo
                  </Button>
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
                  <Label>Apresentadores</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione os apresentadores" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="carlos">Carlos Silva</SelectItem>
                      <SelectItem value="ana">Ana Pereira</SelectItem>
                      <SelectItem value="pedro">Pedro Oliveira</SelectItem>
                      <SelectItem value="mariana">Mariana Costa</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Carlos Silva
                      <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Ana Pereira
                      <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Convidados (Opcional)</Label>
                  <Input placeholder="Nome do convidado" />
                  <Button variant="outline" size="sm" className="mt-1">
                    Adicionar Convidado
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tópicos</Label>
                  <Input id="tags" placeholder="Separe os tópicos com vírgulas" />
                  <p className="text-xs text-muted-foreground">Exemplo: meta, análise, entrevista</p>
                </div>

                <div className="space-y-2">
                  <Label>Imagem do Episódio</Label>
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

                <div className="space-y-2">
                  <Label>Links Externos</Label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Select defaultValue="spotify">
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Plataforma" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="spotify">Spotify</SelectItem>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="google">Google</SelectItem>
                          <SelectItem value="youtube">YouTube</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input placeholder="URL" className="flex-1" />
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-2">
                    Adicionar Link
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


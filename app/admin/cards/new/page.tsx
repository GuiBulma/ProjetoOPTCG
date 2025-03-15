"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Save, Upload, Image } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function NewCardPage() {
  const [name, setName] = useState("")
  const [effect, setEffect] = useState("")
  const [cardImage, setCardImage] = useState<File | null>(null)

  const handleSave = () => {
    console.log("Saving card...")
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCardImage(e.target.files[0])
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/admin/cards" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Novo Card</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Salvar Card
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome do Card</Label>
                  <Input
                    id="name"
                    placeholder="Ex: Monkey D. Luffy"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="type">Tipo</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="character">Personagem</SelectItem>
                        <SelectItem value="event">Evento</SelectItem>
                        <SelectItem value="stage">Estágio</SelectItem>
                        <SelectItem value="don">Don</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="color">Cor</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma cor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="red">Vermelho</SelectItem>
                        <SelectItem value="blue">Azul</SelectItem>
                        <SelectItem value="green">Verde</SelectItem>
                        <SelectItem value="yellow">Amarelo</SelectItem>
                        <SelectItem value="purple">Roxo</SelectItem>
                        <SelectItem value="black">Preto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cost">Custo</Label>
                    <Input id="cost" type="number" min="0" placeholder="Ex: 3" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="power">Poder</Label>
                    <Input id="power" type="number" min="0" placeholder="Ex: 5000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="counter">Counter</Label>
                    <Input id="counter" type="number" min="0" placeholder="Ex: 1000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="effect">Efeito</Label>
                  <Textarea
                    id="effect"
                    placeholder="Digite o efeito do card"
                    value={effect}
                    onChange={(e) => setEffect(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attribute">Atributo</Label>
                  <Input id="attribute" placeholder="Ex: Supernova, Pirata, Marinheiro, etc." />
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
                  <Label>Imagem do Card</Label>
                  <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                    <Image className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground text-center mb-2">
                      {cardImage ? cardImage.name : "Arraste uma imagem ou clique para fazer upload"}
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <label htmlFor="card-upload" className="cursor-pointer">
                          <Upload className="mr-2 h-4 w-4" />
                          Selecionar Imagem
                          <input
                            id="card-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </label>
                      </Button>
                      {cardImage && (
                        <Button variant="outline" size="sm" onClick={() => setCardImage(null)}>
                          Remover
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="set">Coleção</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma coleção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="op-01">OP-01: Romance Dawn</SelectItem>
                      <SelectItem value="op-02">OP-02: Paramount War</SelectItem>
                      <SelectItem value="op-03">OP-03: Pillars of Strength</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="number">Número</Label>
                    <Input id="number" placeholder="Ex: 123/200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rarity">Raridade</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="common">Comum</SelectItem>
                        <SelectItem value="uncommon">Incomum</SelectItem>
                        <SelectItem value="rare">Rara</SelectItem>
                        <SelectItem value="super-rare">Super Rara</SelectItem>
                        <SelectItem value="secret">Secreta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="artist">Artista</Label>
                  <Input id="artist" placeholder="Ex: Eiichiro Oda" />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Preços</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price-normal" className="text-xs">
                        Normal
                      </Label>
                      <Input id="price-normal" placeholder="Ex: R$ 25,00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price-foil" className="text-xs">
                        Foil
                      </Label>
                      <Input id="price-foil" placeholder="Ex: R$ 60,00" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


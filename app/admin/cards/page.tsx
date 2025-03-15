import Link from "next/link"
import Image from "next/image"
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

export default function AdminCardsPage() {
  // Dados de exemplo para cards
  const cards = [
    {
      id: "1",
      name: "Monkey D. Luffy",
      image: "/placeholder.svg?height=100&width=70&text=Luffy",
      type: "Personagem",
      color: "Vermelho",
      cost: 3,
      power: 5000,
      rarity: "Super Rara",
      set: "OP-01",
      price: "R$ 25,00",
    },
    {
      id: "2",
      name: "Roronoa Zoro",
      image: "/placeholder.svg?height=100&width=70&text=Zoro",
      type: "Personagem",
      color: "Verde",
      cost: 4,
      power: 6000,
      rarity: "Rara",
      set: "OP-01",
      price: "R$ 15,00",
    },
    {
      id: "3",
      name: "Nami",
      image: "/placeholder.svg?height=100&width=70&text=Nami",
      type: "Personagem",
      color: "Amarelo",
      cost: 2,
      power: 4000,
      rarity: "Rara",
      set: "OP-01",
      price: "R$ 12,00",
    },
    {
      id: "4",
      name: "Sanji",
      image: "/placeholder.svg?height=100&width=70&text=Sanji",
      type: "Personagem",
      color: "Azul",
      cost: 3,
      power: 5000,
      rarity: "Super Rara",
      set: "OP-01",
      price: "R$ 20,00",
    },
    {
      id: "5",
      name: "Tony Tony Chopper",
      image: "/placeholder.svg?height=100&width=70&text=Chopper",
      type: "Personagem",
      color: "Roxo",
      cost: 1,
      power: 3000,
      rarity: "Comum",
      set: "OP-01",
      price: "R$ 5,00",
    },
    {
      id: "6",
      name: "Nico Robin",
      image: "/placeholder.svg?height=100&width=70&text=Robin",
      type: "Personagem",
      color: "Preto",
      cost: 4,
      power: 6000,
      rarity: "Rara",
      set: "OP-01",
      price: "R$ 18,00",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Cards</h1>
        <Button asChild>
          <Link href="/admin/cards/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Card
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Cards</CardTitle>
          <CardDescription>
            Gerencie todos os cards do site. Você pode criar, editar, visualizar e excluir cards.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar cards..." className="pl-8" />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Coleção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="op-01">OP-01: Romance Dawn</SelectItem>
                    <SelectItem value="op-02">OP-02: Paramount War</SelectItem>
                    <SelectItem value="op-03">OP-03: Pillars of Strength</SelectItem>
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
                <div className="col-span-1"></div>
                <div className="col-span-3">Nome</div>
                <div className="col-span-2">Tipo</div>
                <div className="col-span-1">Custo</div>
                <div className="col-span-1">Poder</div>
                <div className="col-span-1">Raridade</div>
                <div className="col-span-1">Preço</div>
                <div className="col-span-1 text-right">Ações</div>
              </div>

              {cards.map((card) => (
                <div key={card.id} className="grid grid-cols-12 gap-4 border-b p-4 text-sm last:border-0">
                  <div className="col-span-1">
                    <Checkbox />
                  </div>
                  <div className="col-span-1">
                    <div className="relative h-10 w-7 overflow-hidden rounded-sm border">
                      <Image src={card.image || "/placeholder.svg"} alt={card.name} fill className="object-cover" />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="font-medium">{card.name}</div>
                    <div className="mt-1">
                      <Badge variant="outline" className="text-xs">
                        {card.set}
                      </Badge>
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {card.color}
                      </Badge>
                    </div>
                  </div>
                  <div className="col-span-2">{card.type}</div>
                  <div className="col-span-1">{card.cost}</div>
                  <div className="col-span-1">{card.power}</div>
                  <div className="col-span-1">{card.rarity}</div>
                  <div className="col-span-1">{card.price}</div>
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
                Mostrando <strong>6</strong> de <strong>120</strong> cards
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Anterior
                </Button>
                <Button variant="outline" size="sm">
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


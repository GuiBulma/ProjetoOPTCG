"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ColorPie } from "@/components/color-pie"

export default function CompleteMetagamePage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Use the same metagameData from the main page
  // This is just an example, in a real app you'd fetch this data
  const metagameData = [
    /* ... same data ... */
  ]

  const filteredDecks = metagameData.filter(
    (deck) =>
      deck.leader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deck.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/metagame" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar para Metagame
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold">Metagame Completo</h1>
              <p className="text-muted-foreground mt-1">Todos os decks do formato atual</p>
            </div>
            <div className="relative w-full sm:w-[300px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar por líder ou deck..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDecks.map((deck) => (
              <Link key={deck.id} href={`/decks/${deck.variants[0]?.id || "#"}`}>
                <Card className="overflow-hidden bg-black/90 hover:bg-black/80 transition-colors border-0">
                  <div className="relative">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={deck.leader.image || "/placeholder.svg"}
                        alt={deck.leader.name}
                        fill
                        className="object-cover opacity-90"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <div className="flex items-center gap-2 mb-3">
                        <ColorPie colors={deck.colors} size="sm" />
                        <h3 className="font-bold text-white text-xl">
                          {deck.leader.name} ({deck.leader.set})
                        </h3>
                      </div>
                      <div className="text-sm text-white/90 space-y-1.5 mb-3">
                        {deck.topCards?.map((card, idx) => (
                          <div key={idx} className="truncate">
                            {card}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="text-white/90">META</div>
                          <div className="text-blue-400 font-medium">{deck.usage.toFixed(1)}%</div>
                          <div className="text-xs text-white/60">({deck.variants.length})</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-white/90">Preço</div>
                          <div className="text-blue-400 font-medium">R$ {deck.price.toFixed(0)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}


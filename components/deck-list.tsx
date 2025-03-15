import Link from "next/link"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Deck {
  id: string
  name: string
  player: string
  tournament: string
  date: string
  format: string
}

interface DeckListProps {
  decks: Deck[]
}

export function DeckList({ decks }: DeckListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {decks.map((deck) => (
        <Card key={deck.id} className="overflow-hidden">
          <CardHeader className="p-4">
            <CardTitle className="line-clamp-1 text-lg">{deck.name}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="h-4 w-4" />
              <span>{deck.date}</span>
            </div>
            <div className="mt-2">
              <span className="text-sm font-medium">Jogador:</span>
              <span className="ml-2 text-sm">{deck.player}</span>
            </div>
            <div className="mt-1">
              <span className="text-sm font-medium">Torneio:</span>
              <span className="ml-2 text-sm">{deck.tournament}</span>
            </div>
            <div className="mt-1">
              <span className="text-sm font-medium">Formato:</span>
              <span className="ml-2 text-sm">{deck.format}</span>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button variant="secondary" className="w-full" asChild>
              <Link href={`/decks/${deck.id}`}>Ver Detalhes</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}


import Link from "next/link"
import { CardTooltip } from "@/components/card-tooltip"

interface CardLinkProps {
  name: string
  quantity?: number
  showTooltip?: boolean
}

export function CardLink({ name, quantity, showTooltip = true }: CardLinkProps) {
  const formattedName = name.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {quantity !== undefined && <span className="text-muted-foreground">{quantity}x</span>}
        {showTooltip ? (
          <CardTooltip cardName={name}>
            <Link href={`/cards/${formattedName}`}>{name}</Link>
          </CardTooltip>
        ) : (
          <Link href={`/cards/${formattedName}`} className="text-primary hover:underline">
            {name}
          </Link>
        )}
      </div>
    </div>
  )
}


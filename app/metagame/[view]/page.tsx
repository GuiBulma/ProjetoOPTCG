// Nova página para visualização completa do metagame
import { redirect } from "next/navigation"

export default function MetagameViewPage({ params }: { params: { view: string } }) {
  // Redirecionar para a página principal com a tab correta selecionada
  if (params.view === "complete") {
    redirect("/metagame?view=full")
  }
  return null
}


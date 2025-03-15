import Link from "next/link"
import type { ReactNode } from "react"
import { LayoutDashboard, FileText, Trophy, Mic, Users, Settings, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6" />
            <h1 className="text-xl font-bold">
              Mesa Um <span className="text-muted-foreground text-sm font-normal">Admin</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" target="_blank">
                Ver site
              </Link>
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-muted/40 hidden md:block">
          <div className="flex flex-col gap-1 p-4">
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/admin">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/admin/articles">
                <FileText className="mr-2 h-4 w-4" />
                Artigos
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/admin/decks">
                <Trophy className="mr-2 h-4 w-4" />
                Decks
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/admin/podcasts">
                <Mic className="mr-2 h-4 w-4" />
                Podcasts
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/admin/users">
                <Users className="mr-2 h-4 w-4" />
                Usuários
              </Link>
            </Button>
            <Separator className="my-2" />
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/admin/settings">
                <Settings className="mr-2 h-4 w-4" />
                Configurações
              </Link>
            </Button>
          </div>
        </aside>

        {/* Mobile navigation */}
        <div className="md:hidden border-b w-full bg-background">
          <div className="container overflow-auto py-2">
            <nav className="flex items-center gap-4">
              <Link href="/admin" className="whitespace-nowrap text-sm font-medium">
                Dashboard
              </Link>
              <Link href="/admin/articles" className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                Artigos
              </Link>
              <Link href="/admin/decks" className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                Decks
              </Link>
              <Link href="/admin/podcasts" className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                Podcasts
              </Link>
              <Link href="/admin/users" className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                Usuários
              </Link>
              <Link href="/admin/settings" className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                Config.
              </Link>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <div className="container py-6">{children}</div>
        </main>
      </div>
    </div>
  )
}


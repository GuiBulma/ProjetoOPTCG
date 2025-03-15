import Link from "next/link"
import { FileText, Trophy, Mic, Users, TrendingUp, Calendar, ArrowUpRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  // Dados de exemplo para o dashboard
  const stats = [
    { title: "Artigos", value: 24, icon: FileText, change: "+3 esta semana", href: "/admin/articles" },
    { title: "Decks", value: 156, icon: Trophy, change: "+12 este mês", href: "/admin/decks" },
    { title: "Podcasts", value: 10, icon: Mic, change: "+1 este mês", href: "/admin/podcasts" },
    { title: "Usuários", value: 1243, icon: Users, change: "+85 este mês", href: "/admin/users" },
  ]

  const recentActivity = [
    { type: "article", title: "Análise do Meta Atual", user: "Carlos Silva", time: "há 2 horas" },
    { type: "deck", title: "Luffy Aggro", user: "Ana Pereira", time: "há 5 horas" },
    { type: "podcast", title: "EP 10: Análise do Campeonato Nacional", user: "Pedro Oliveira", time: "há 1 dia" },
    { type: "article", title: "Guia para Iniciantes", user: "Mariana Costa", time: "há 2 dias" },
    { type: "deck", title: "Zoro Control", user: "Lucas Santos", time: "há 3 dias" },
  ]

  const upcomingEvents = [
    { title: "Lançamento do EP 11 do Podcast", date: "25/03/2024", time: "10:00" },
    { title: "Publicação do Relatório do Torneio", date: "28/03/2024", time: "14:00" },
    { title: "Atualização do Metagame", date: "01/04/2024", time: "09:00" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Março 2024
          </Button>
          <Button variant="outline" size="sm">
            <TrendingUp className="mr-2 h-4 w-4" />
            Relatórios
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="px-0" asChild>
                <Link href={stat.href}>
                  Ver detalhes
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>Últimas atualizações no site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-4">
                    {activity.type === "article" && (
                      <FileText className="h-8 w-8 p-1.5 rounded-full bg-blue-100 text-blue-600" />
                    )}
                    {activity.type === "deck" && (
                      <Trophy className="h-8 w-8 p-1.5 rounded-full bg-amber-100 text-amber-600" />
                    )}
                    {activity.type === "podcast" && (
                      <Mic className="h-8 w-8 p-1.5 rounded-full bg-purple-100 text-purple-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>{activity.user}</span>
                      <span className="mx-1">•</span>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Ver todas as atividades
            </Button>
          </CardFooter>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Próximos Eventos</CardTitle>
            <CardDescription>Eventos programados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{event.title}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>{event.date}</span>
                      <span className="mx-1">•</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Adicionar Evento
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}


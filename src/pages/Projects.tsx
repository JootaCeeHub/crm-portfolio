
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Briefcase, 
  Calendar, 
  Clock, 
  Users, 
  DollarSign,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  CheckCircle,
  AlertTriangle,
  Play,
  Pause,
  FileText,
  MessageSquare,
  Target,
  TrendingUp
} from 'lucide-react';

const projectsData = [
  {
    id: 'PRJ-001',
    name: 'Rediseño E-commerce TechStore',
    client: 'TechStore Inc.',
    status: 'in-progress',
    priority: 'high',
    progress: 75,
    budget: 2800000,
    spent: 2100000,
    startDate: '2024-01-01',
    endDate: '2024-02-15',
    team: ['JD', 'MS', 'AL'],
    tasks: {
      total: 24,
      completed: 18,
      pending: 6
    },
    description: 'Rediseño completo de la plataforma e-commerce con nueva UX/UI'
  },
  {
    id: 'PRJ-002',
    name: 'Sistema CRM Personalizado',
    client: 'Marketing Solutions',
    status: 'planning',
    priority: 'medium',
    progress: 25,
    budget: 1500000,
    spent: 375000,
    startDate: '2024-01-15',
    endDate: '2024-03-01',
    team: ['AB', 'CD'],
    tasks: {
      total: 18,
      completed: 4,
      pending: 14
    },
    description: 'Desarrollo de CRM customizado para gestión de leads y clientes'
  },
  {
    id: 'PRJ-003',
    name: 'App Móvil Delivery',
    client: 'FoodDelivery Co.',
    status: 'completed',
    priority: 'high',
    progress: 100,
    budget: 3200000,
    spent: 3050000,
    startDate: '2023-11-01',
    endDate: '2024-01-10',
    team: ['EF', 'GH', 'IJ', 'KL'],
    tasks: {
      total: 32,
      completed: 32,
      pending: 0
    },
    description: 'Aplicación móvil completa para delivery de comida con panel admin'
  },
  {
    id: 'PRJ-004',
    name: 'Consultoría Digital',
    client: 'StartupTech',
    status: 'on-hold',
    priority: 'low',
    progress: 40,
    budget: 800000,
    spent: 320000,
    startDate: '2024-01-05',
    endDate: '2024-02-28',
    team: ['MN'],
    tasks: {
      total: 12,
      completed: 5,
      pending: 7
    },
    description: 'Consultoría en transformación digital y estrategia de marketing'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'planning': return 'bg-blue-100 text-blue-800';
    case 'in-progress': return 'bg-yellow-100 text-yellow-800';
    case 'completed': return 'bg-green-100 text-green-800';
    case 'on-hold': return 'bg-red-100 text-red-800';
    default: return 'bg-slate-100 text-slate-800';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'planning': return 'Planificación';
    case 'in-progress': return 'En Progreso';
    case 'completed': return 'Completado';
    case 'on-hold': return 'Pausado';
    default: return 'Estado';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-red-100 text-red-800';
    case 'medium': return 'bg-yellow-100 text-yellow-800';
    case 'low': return 'bg-green-100 text-green-800';
    default: return 'bg-slate-100 text-slate-800';
  }
};

const getPriorityLabel = (priority: string) => {
  switch (priority) {
    case 'high': return 'Alta';
    case 'medium': return 'Media';
    case 'low': return 'Baja';
    default: return 'Prioridad';
  }
};

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(amount);
  };

  const calculateBudgetUsage = (spent: number, budget: number) => {
    return Math.round((spent / budget) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Gestión de Proyectos</h1>
          <p className="text-slate-600 mt-2">Administra proyectos de consultoría y desarrollo</p>
        </div>
        <div className="flex space-x-2">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Proyecto
          </Button>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Plantillas
          </Button>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Proyectos Activos</CardTitle>
            <Briefcase className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 este mes</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
            <DollarSign className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8.3M</div>
            <p className="text-xs text-muted-foreground">Presupuesto total</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa Finalización</CardTitle>
            <Target className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">En tiempo y forma</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rentabilidad</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23%</div>
            <p className="text-xs text-muted-foreground">Margen promedio</p>
          </CardContent>
        </Card>
      </div>

      {/* Project Management */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Lista de Proyectos</CardTitle>
            <div className="flex space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input 
                  placeholder="Buscar proyectos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="list">Vista Lista</TabsTrigger>
              <TabsTrigger value="kanban">Vista Kanban</TabsTrigger>
            </TabsList>
            
            <TabsContent value="list" className="space-y-4">
              <div className="space-y-4">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="border border-slate-200 rounded-lg p-6 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                          <Badge className={getStatusColor(project.status)}>
                            {getStatusLabel(project.status)}
                          </Badge>
                          <Badge className={getPriorityColor(project.priority)}>
                            {getPriorityLabel(project.priority)}
                          </Badge>
                        </div>
                        <p className="text-slate-600 mb-2">{project.client}</p>
                        <p className="text-sm text-slate-500">{project.description}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Play className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Progreso</div>
                        <div className="flex items-center space-x-2">
                          <Progress value={project.progress} className="flex-1" />
                          <span className="text-sm font-medium">{project.progress}%</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Presupuesto</div>
                        <div className="text-sm font-medium">
                          {formatCurrency(project.spent)} / {formatCurrency(project.budget)}
                        </div>
                        <div className="text-xs text-slate-500">
                          {calculateBudgetUsage(project.spent, project.budget)}% utilizado
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Fechas</div>
                        <div className="text-sm">
                          <div>{project.startDate}</div>
                          <div className="text-slate-500">hasta {project.endDate}</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Tareas</div>
                        <div className="text-sm">
                          <div className="font-medium">
                            {project.tasks.completed}/{project.tasks.total} completadas
                          </div>
                          <div className="text-slate-500">
                            {project.tasks.pending} pendientes
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-slate-500">Equipo:</span>
                        <div className="flex -space-x-2">
                          {project.team.map((member, index) => (
                            <Avatar key={index} className="w-8 h-8 border-2 border-white">
                              <AvatarFallback className="text-xs">{member}</AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {Math.ceil((new Date(project.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} días restantes
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="kanban">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { status: 'planning', title: 'Planificación', color: 'blue' },
                  { status: 'in-progress', title: 'En Progreso', color: 'yellow' },
                  { status: 'completed', title: 'Completados', color: 'green' },
                  { status: 'on-hold', title: 'Pausados', color: 'red' }
                ].map((column) => (
                  <div key={column.status} className="bg-slate-50 rounded-lg p-4">
                    <h3 className="font-medium text-slate-900 mb-4">{column.title}</h3>
                    <div className="space-y-3">
                      {filteredProjects.filter(project => project.status === column.status).map((project) => (
                        <div key={project.id} className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-sm transition-shadow cursor-pointer">
                          <div className="font-medium text-sm mb-2">{project.name}</div>
                          <div className="text-xs text-slate-600 mb-3">{project.client}</div>
                          <div className="flex items-center justify-between mb-2">
                            <Progress value={project.progress} className="flex-1 mr-2" />
                            <span className="text-xs">{project.progress}%</span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>{formatCurrency(project.budget)}</span>
                            <Badge className={getPriorityColor(project.priority)}>
                              {getPriorityLabel(project.priority)}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

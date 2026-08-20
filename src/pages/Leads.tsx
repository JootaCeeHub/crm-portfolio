
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Phone, 
  Mail, 
  Calendar,
  Star,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertTriangle,
  Zap
} from 'lucide-react';

const leadsData = [
  {
    id: 'LD-001',
    name: 'Patricia Mendoza',
    email: 'patricia@email.com',
    phone: '+56 9 1111 2222',
    company: 'Innovate Solutions',
    source: 'Website',
    score: 92,
    stage: 'qualified',
    value: 450000,
    lastContact: '2024-01-15',
    tags: ['premium', 'enterprise'],
    notes: 'Interesada en solución completa para su empresa'
  },
  {
    id: 'LD-002',
    name: 'Diego Fernández',
    email: 'diego@email.com',
    phone: '+56 9 3333 4444',
    company: 'Tech Startup',
    source: 'LinkedIn',
    score: 78,
    stage: 'proposal',
    value: 280000,
    lastContact: '2024-01-14',
    tags: ['startup', 'tech'],
    notes: 'Necesita cotización detallada'
  },
  {
    id: 'LD-003',
    name: 'Carmen López',
    email: 'carmen@email.com',
    phone: '+56 9 5555 6666',
    company: 'Retail Express',
    source: 'Google Ads',
    score: 65,
    stage: 'contacted',
    value: 180000,
    lastContact: '2024-01-13',
    tags: ['retail', 'ecommerce'],
    notes: 'Primera llamada programada para mañana'
  },
  {
    id: 'LD-004',
    name: 'Andrés Morales',
    email: 'andres@email.com',
    phone: '+56 9 7777 8888',
    company: 'Consulting Group',
    source: 'Referral',
    score: 88,
    stage: 'negotiation',
    value: 650000,
    lastContact: '2024-01-12',
    tags: ['consulting', 'high-value'],
    notes: 'En negociación de términos finales'
  }
];

const getStageColor = (stage: string) => {
  switch (stage) {
    case 'new': return 'bg-blue-100 text-blue-800';
    case 'contacted': return 'bg-yellow-100 text-yellow-800';
    case 'qualified': return 'bg-purple-100 text-purple-800';
    case 'proposal': return 'bg-orange-100 text-orange-800';
    case 'negotiation': return 'bg-pink-100 text-pink-800';
    case 'closed': return 'bg-green-100 text-green-800';
    case 'lost': return 'bg-red-100 text-red-800';
    default: return 'bg-slate-100 text-slate-800';
  }
};

const getStageLabel = (stage: string) => {
  switch (stage) {
    case 'new': return 'Nuevo';
    case 'contacted': return 'Contactado';
    case 'qualified': return 'Calificado';
    case 'proposal': return 'Propuesta';
    case 'negotiation': return 'Negociación';
    case 'closed': return 'Cerrado';
    case 'lost': return 'Perdido';
    default: return 'Estado';
  }
};

const getScoreColor = (score: number) => {
  if (score >= 80) return 'text-green-600';
  if (score >= 60) return 'text-yellow-600';
  return 'text-red-600';
};

export default function Leads() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLeads = leadsData.filter(lead =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Gestión de Leads</h1>
          <p className="text-slate-600 mt-2">Convierte prospectos en clientes con IA y automatización</p>
        </div>
        <div className="flex space-x-2">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Lead
          </Button>
          <Button variant="outline">
            <Zap className="w-4 h-4 mr-2" />
            Automatización
          </Button>
        </div>
      </div>

      {/* Leads Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leads Activos</CardTitle>
            <Target className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+18% esta semana</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa Conversión</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23%</div>
            <p className="text-xs text-muted-foreground">+3% vs mes anterior</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valor Pipeline</CardTitle>
            <Target className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8.9M</div>
            <p className="text-xs text-muted-foreground">Pipeline total</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Score Promedio</CardTitle>
            <Star className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76</div>
            <p className="text-xs text-muted-foreground">Calidad de leads</p>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Pipeline de Conversión</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {[
              { stage: 'new', title: 'Nuevos', count: 45, color: 'bg-blue-500' },
              { stage: 'contacted', title: 'Contactados', count: 32, color: 'bg-yellow-500' },
              { stage: 'qualified', title: 'Calificados', count: 28, color: 'bg-purple-500' },
              { stage: 'proposal', title: 'Propuesta', count: 18, color: 'bg-orange-500' },
              { stage: 'negotiation', title: 'Negociación', count: 12, color: 'bg-pink-500' },
              { stage: 'closed', title: 'Cerrados', count: 8, color: 'bg-green-500' },
              { stage: 'lost', title: 'Perdidos', count: 13, color: 'bg-red-500' }
            ].map((item) => (
              <div key={item.stage} className="text-center">
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2`}>
                  {item.count}
                </div>
                <div className="text-sm font-medium text-slate-900">{item.title}</div>
                <div className="text-xs text-slate-500">
                  {item.stage !== 'lost' && `${Math.round((item.count / 156) * 100)}%`}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Leads Management */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Lista de Leads</CardTitle>
            <div className="flex space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input 
                  placeholder="Buscar leads..."
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
          <div className="space-y-4">
            {filteredLeads.map((lead) => (
              <div key={lead.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-slate-900">{lead.name}</h3>
                      <Badge className={getStageColor(lead.stage)}>
                        {getStageLabel(lead.stage)}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600">{lead.company}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-slate-500 flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        {lead.email}
                      </span>
                      <span className="text-sm text-slate-500 flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {lead.phone}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className={`text-lg font-bold ${getScoreColor(lead.score)}`}>
                      {lead.score}
                    </div>
                    <div className="text-xs text-slate-500">Score</div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-medium text-slate-900">
                      {formatCurrency(lead.value)}
                    </div>
                    <div className="text-sm text-slate-500">Valor estimado</div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-slate-600">{lead.source}</div>
                    <div className="text-sm text-slate-500">{lead.lastContact}</div>
                  </div>
                  
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            Recomendaciones IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="font-medium text-blue-900">Leads Calientes</h3>
              </div>
              <p className="text-sm text-blue-700 mb-3">
                5 leads con score mayor a 85 necesitan seguimiento inmediato
              </p>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Ver Leads
              </Button>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="font-medium text-green-900">Oportunidades</h3>
              </div>
              <p className="text-sm text-green-700 mb-3">
                3 leads listos para recibir propuesta personalizada
              </p>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Crear Propuesta
              </Button>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-orange-600 mr-2" />
                <h3 className="font-medium text-orange-900">Recordatorios</h3>
              </div>
              <p className="text-sm text-orange-700 mb-3">
                8 leads sin contacto en los últimos 7 días
              </p>
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                Programar Llamadas
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

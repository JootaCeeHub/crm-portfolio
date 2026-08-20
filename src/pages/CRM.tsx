
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Users, 
  UserPlus, 
  Phone, 
  Mail, 
  Calendar,
  DollarSign,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

const customers = [
  {
    id: 1,
    name: 'María González',
    email: 'maria@email.com',
    phone: '+56 9 1234 5678',
    company: 'Tech Solutions',
    status: 'hot',
    lastContact: '2024-01-15',
    totalSpent: '$2.450.000',
    orders: 12
  },
  {
    id: 2,
    name: 'Carlos Pérez',
    email: 'carlos@email.com',
    phone: '+56 9 8765 4321',
    company: 'Marketing Pro',
    status: 'warm',
    lastContact: '2024-01-14',
    totalSpent: '$890.000',
    orders: 5
  },
  {
    id: 3,
    name: 'Ana Torres',
    email: 'ana@email.com',
    phone: '+56 9 5555 1234',
    company: 'Design Studio',
    status: 'cold',
    lastContact: '2024-01-10',
    totalSpent: '$156.000',
    orders: 2
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'hot': return 'bg-red-100 text-red-800';
    case 'warm': return 'bg-yellow-100 text-yellow-800';
    case 'cold': return 'bg-blue-100 text-blue-800';
    default: return 'bg-slate-100 text-slate-800';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'hot': return 'Caliente';
    case 'warm': return 'Tibio';
    case 'cold': return 'Frío';
    default: return 'Estado';
  }
};

export default function CRM() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">CRM</h1>
          <p className="text-slate-600 mt-2">Gestiona tus clientes y relaciones comerciales</p>
        </div>
        <div className="flex space-x-2">
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Nuevo Cliente
          </Button>
          <Button variant="outline">
            <MessageSquare className="w-4 h-4 mr-2" />
            Crear Campaña
          </Button>
        </div>
      </div>

      {/* CRM Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clientes</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+12% este mes</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leads Activos</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">+5 esta semana</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valor Promedio</CardTitle>
            <DollarSign className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$456K</div>
            <p className="text-xs text-muted-foreground">Por cliente</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa Cierre</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23%</div>
            <p className="text-xs text-muted-foreground">+3% vs mes anterior</p>
          </CardContent>
        </Card>
      </div>

      {/* Customer List */}
      <Card>
        <CardHeader>
          <CardTitle>Clientes Principales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customers.map((customer) => (
              <div key={customer.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>
                      {customer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-slate-900">{customer.name}</h3>
                    <p className="text-sm text-slate-500">{customer.company}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-slate-500 flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        {customer.email}
                      </span>
                      <span className="text-sm text-slate-500 flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {customer.phone}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-medium text-slate-900">{customer.totalSpent}</div>
                    <div className="text-sm text-slate-500">{customer.orders} pedidos</div>
                  </div>
                  <Badge className={getStatusColor(customer.status)}>
                    {getStatusLabel(customer.status)}
                  </Badge>
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sales Funnel */}
      <Card>
        <CardHeader>
          <CardTitle>Embudo de Ventas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">156</div>
              <div className="text-sm text-blue-600">Prospectos</div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">89</div>
              <div className="text-sm text-yellow-600">Oportunidades</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">45</div>
              <div className="text-sm text-orange-600">Propuestas</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">23</div>
              <div className="text-sm text-green-600">Cerrados</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

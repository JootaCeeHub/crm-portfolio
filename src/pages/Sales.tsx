
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  MoreHorizontal,
  CheckCircle,
  Clock,
  AlertCircle,
  Package
} from 'lucide-react';

const salesData = [
  {
    id: 'VT-001',
    customer: 'María González',
    email: 'maria@email.com',
    products: ['Smartphone Pro', 'Carcasa Premium'],
    amount: 899990,
    status: 'completed',
    date: '2024-01-15',
    paymentMethod: 'Tarjeta de Crédito',
    shipping: 'Entregado'
  },
  {
    id: 'VT-002',
    customer: 'Carlos Pérez',
    email: 'carlos@email.com',
    products: ['Audífonos Inalámbricos'],
    amount: 199990,
    status: 'pending',
    date: '2024-01-14',
    paymentMethod: 'Transferencia',
    shipping: 'En tránsito'
  },
  {
    id: 'VT-003',
    customer: 'Ana Torres',
    email: 'ana@email.com',
    products: ['Camiseta Premium', 'Pantalón Casual'],
    amount: 89990,
    status: 'processing',
    date: '2024-01-13',
    paymentMethod: 'PayPal',
    shipping: 'Preparando'
  },
  {
    id: 'VT-004',
    customer: 'Roberto Silva',
    email: 'roberto@email.com',
    products: ['Laptop Gaming'],
    amount: 1299990,
    status: 'cancelled',
    date: '2024-01-12',
    paymentMethod: 'Tarjeta de Débito',
    shipping: 'Cancelado'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-green-100 text-green-800';
    case 'pending': return 'bg-yellow-100 text-yellow-800';
    case 'processing': return 'bg-blue-100 text-blue-800';
    case 'cancelled': return 'bg-red-100 text-red-800';
    default: return 'bg-slate-100 text-slate-800';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'completed': return 'Completada';
    case 'pending': return 'Pendiente';
    case 'processing': return 'Procesando';
    case 'cancelled': return 'Cancelada';
    default: return 'Estado';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed': return CheckCircle;
    case 'pending': return Clock;
    case 'processing': return Package;
    case 'cancelled': return AlertCircle;
    default: return Clock;
  }
};

export default function Sales() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredSales = salesData.filter(sale => {
    const matchesSearch = sale.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sale.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || sale.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
          <h1 className="text-3xl font-bold text-slate-900">Centro de Ventas</h1>
          <p className="text-slate-600 mt-2">Gestiona todas tus transacciones y procesos de venta</p>
        </div>
        <div className="flex space-x-2">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nueva Venta
          </Button>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Generar Reporte
          </Button>
        </div>
      </div>

      {/* Sales Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ventas Hoy</CardTitle>
            <DollarSign className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2.4M</div>
            <p className="text-xs text-muted-foreground">+15% vs ayer</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos</CardTitle>
            <ShoppingCart className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">+23% vs ayer</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket Promedio</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$67K</div>
            <p className="text-xs text-muted-foreground">+8% vs ayer</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa Conversión</CardTitle>
            <CheckCircle className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8%</div>
            <p className="text-xs text-muted-foreground">+0.4% vs ayer</p>
          </CardContent>
        </Card>
      </div>

      {/* Sales Management */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Gestión de Ventas</CardTitle>
            <div className="flex space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input 
                  placeholder="Buscar ventas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="completed">Completadas</SelectItem>
                  <SelectItem value="pending">Pendientes</SelectItem>
                  <SelectItem value="processing">Procesando</SelectItem>
                  <SelectItem value="cancelled">Canceladas</SelectItem>
                </SelectContent>
              </Select>
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
                {filteredSales.map((sale) => {
                  const StatusIcon = getStatusIcon(sale.status);
                  return (
                    <div key={sale.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                          <StatusIcon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium text-slate-900">{sale.id}</h3>
                            <Badge className={getStatusColor(sale.status)}>
                              {getStatusLabel(sale.status)}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-600">{sale.customer}</p>
                          <p className="text-xs text-slate-500">{sale.products.join(', ')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <div className="font-medium text-slate-900">
                            {formatCurrency(sale.amount)}
                          </div>
                          <div className="text-sm text-slate-500">{sale.date}</div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-sm text-slate-600">{sale.paymentMethod}</div>
                          <div className="text-sm text-slate-500">{sale.shipping}</div>
                        </div>
                        
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="kanban">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { status: 'pending', title: 'Pendientes', color: 'yellow' },
                  { status: 'processing', title: 'Procesando', color: 'blue' },
                  { status: 'completed', title: 'Completadas', color: 'green' },
                  { status: 'cancelled', title: 'Canceladas', color: 'red' }
                ].map((column) => (
                  <div key={column.status} className="bg-slate-50 rounded-lg p-4">
                    <h3 className="font-medium text-slate-900 mb-4">{column.title}</h3>
                    <div className="space-y-3">
                      {filteredSales.filter(sale => sale.status === column.status).map((sale) => (
                        <div key={sale.id} className="bg-white p-3 rounded-lg border border-slate-200 hover:shadow-sm transition-shadow cursor-pointer">
                          <div className="font-medium text-sm">{sale.id}</div>
                          <div className="text-xs text-slate-600 mb-2">{sale.customer}</div>
                          <div className="text-sm font-medium text-slate-900">
                            {formatCurrency(sale.amount)}
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

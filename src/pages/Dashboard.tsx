
import React from 'react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { SalesChart } from '@/components/dashboard/SalesChart';
import { 
  DollarSign, 
  Users, 
  ShoppingCart, 
  TrendingUp,
  Target,
  MessageSquare
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Bienvenido a BizCore360</h1>
        <p className="text-slate-600 mt-2">
          Gestiona tu negocio de manera integral desde un solo lugar
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <StatsCard
          title="Ventas del Mes"
          value="$127.500"
          change="+12% vs mes anterior"
          changeType="positive"
          icon={DollarSign}
          color="bg-green-500"
        />
        <StatsCard
          title="Clientes Activos"
          value="1,234"
          change="+5% vs mes anterior"
          changeType="positive"
          icon={Users}
          color="bg-blue-500"
        />
        <StatsCard
          title="Pedidos"
          value="89"
          change="+23% vs mes anterior"
          changeType="positive"
          icon={ShoppingCart}
          color="bg-purple-500"
        />
        <StatsCard
          title="Tasa Conversión"
          value="3.4%"
          change="-0.2% vs mes anterior"
          changeType="negative"
          icon={TrendingUp}
          color="bg-orange-500"
        />
        <StatsCard
          title="Leads Nuevos"
          value="156"
          change="+18% vs mes anterior"
          changeType="positive"
          icon={Target}
          color="bg-pink-500"
        />
        <StatsCard
          title="Comunicaciones"
          value="2,345"
          change="+8% vs mes anterior"
          changeType="positive"
          icon={MessageSquare}
          color="bg-indigo-500"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SalesChart />
        <RecentActivity />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Acciones Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors">
            <div className="text-blue-600 font-medium">Crear Producto</div>
            <div className="text-blue-500 text-sm">Agregar al catálogo</div>
          </button>
          <button className="p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors">
            <div className="text-green-600 font-medium">Nuevo Cliente</div>
            <div className="text-green-500 text-sm">Registrar en CRM</div>
          </button>
          <button className="p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors">
            <div className="text-purple-600 font-medium">Crear Campaña</div>
            <div className="text-purple-500 text-sm">Email marketing</div>
          </button>
          <button className="p-4 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors">
            <div className="text-orange-600 font-medium">Ver Reportes</div>
            <div className="text-orange-500 text-sm">Análisis detallado</div>
          </button>
        </div>
      </div>
    </div>
  );
}

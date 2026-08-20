
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const activities = [
  {
    id: 1,
    type: 'sale',
    customer: 'María González',
    action: 'Realizó una compra',
    amount: '$89.900',
    time: 'Hace 2 minutos',
    status: 'completed'
  },
  {
    id: 2,
    type: 'lead',
    customer: 'Carlos Pérez',
    action: 'Nuevo lead registrado',
    amount: null,
    time: 'Hace 15 minutos',
    status: 'new'
  },
  {
    id: 3,
    type: 'support',
    customer: 'Ana Torres',
    action: 'Solicitó soporte técnico',
    amount: null,
    time: 'Hace 1 hora',
    status: 'pending'
  },
  {
    id: 4,
    type: 'sale',
    customer: 'Roberto Silva',
    action: 'Abandonó el carrito',
    amount: '$45.500',
    time: 'Hace 2 horas',
    status: 'abandoned'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-green-100 text-green-800';
    case 'new': return 'bg-blue-100 text-blue-800';
    case 'pending': return 'bg-yellow-100 text-yellow-800';
    case 'abandoned': return 'bg-red-100 text-red-800';
    default: return 'bg-slate-100 text-slate-800';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'completed': return 'Completado';
    case 'new': return 'Nuevo';
    case 'pending': return 'Pendiente';
    case 'abandoned': return 'Abandonado';
    default: return 'Estado';
  }
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad Reciente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg bg-slate-50">
              <Avatar>
                <AvatarFallback>
                  {activity.customer.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">
                  {activity.customer}
                </p>
                <p className="text-sm text-slate-500">{activity.action}</p>
                <p className="text-xs text-slate-400">{activity.time}</p>
              </div>
              <div className="flex flex-col items-end space-y-1">
                {activity.amount && (
                  <span className="text-sm font-medium text-slate-900">
                    {activity.amount}
                  </span>
                )}
                <Badge className={getStatusColor(activity.status)}>
                  {getStatusLabel(activity.status)}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

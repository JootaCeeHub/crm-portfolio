
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ene', ventas: 4000, leads: 2400 },
  { name: 'Feb', ventas: 3000, leads: 1398 },
  { name: 'Mar', ventas: 2000, leads: 9800 },
  { name: 'Abr', ventas: 2780, leads: 3908 },
  { name: 'May', ventas: 1890, leads: 4800 },
  { name: 'Jun', ventas: 2390, leads: 3800 },
  { name: 'Jul', ventas: 3490, leads: 4300 },
];

export function SalesChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Tendencia de Ventas y Leads</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="ventas" 
              stroke="#3b82f6" 
              strokeWidth={2}
              name="Ventas"
            />
            <Line 
              type="monotone" 
              dataKey="leads" 
              stroke="#10b981" 
              strokeWidth={2}
              name="Leads"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

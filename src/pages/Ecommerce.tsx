
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Store, 
  Package, 
  ShoppingCart, 
  Settings, 
  Plus,
  Edit,
  Eye,
  TrendingUp
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Smartphone Pro Max',
    category: 'Electrónicos',
    price: '$899.990',
    stock: 23,
    sales: 89,
    status: 'active',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Audífonos Inalámbricos',
    category: 'Electrónicos',
    price: '$199.990',
    stock: 45,
    sales: 156,
    status: 'active',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Camiseta Premium',
    category: 'Ropa',
    price: '$29.990',
    stock: 0,
    sales: 234,
    status: 'out_of_stock',
    image: '/placeholder.svg'
  }
];

export default function Ecommerce() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">E-commerce</h1>
          <p className="text-slate-600 mt-2">Gestiona tu tienda online y productos</p>
        </div>
        <div className="flex space-x-2">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Producto
          </Button>
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Configurar Tienda
          </Button>
        </div>
      </div>

      {/* Store Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Productos Activos</CardTitle>
            <Package className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+5 desde la semana pasada</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos Hoy</CardTitle>
            <ShoppingCart className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">+12% vs ayer</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ventas Hoy</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1.2M</div>
            <p className="text-xs text-muted-foreground">+8% vs ayer</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visitants Únicos</CardTitle>
            <Eye className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,543</div>
            <p className="text-xs text-muted-foreground">+3% vs ayer</p>
          </CardContent>
        </Card>
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Catálogo de Productos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Package className="w-8 h-8 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">{product.name}</h3>
                    <p className="text-sm text-slate-500">{product.category}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm font-medium text-slate-900">{product.price}</span>
                      <span className="text-sm text-slate-500">Stock: {product.stock}</span>
                      <span className="text-sm text-slate-500">Vendidos: {product.sales}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={product.status === 'active' ? 'default' : 'destructive'}
                  >
                    {product.status === 'active' ? 'Activo' : 'Sin Stock'}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Store Builder Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Store className="w-5 h-5 mr-2" />
            Constructor de Tienda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center">
            <Store className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Personaliza tu Tienda Online
            </h3>
            <p className="text-slate-600 mb-4">
              Usa nuestro constructor visual drag & drop para crear una tienda profesional sin código
            </p>
            <Button>
              <Edit className="w-4 h-4 mr-2" />
              Editar Tienda
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

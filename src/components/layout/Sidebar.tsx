
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Store, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  FileText,
  Target,
  Briefcase,
  Calendar,
  TrendingUp,
  ChevronLeft,
  Menu
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/hooks/use-sidebar';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'E-commerce', href: '/ecommerce', icon: Store },
  { name: 'CRM', href: '/crm', icon: Users },
  { name: 'Ventas', href: '/sales', icon: ShoppingCart },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Leads', href: '/leads', icon: Target },
  { name: 'Proyectos', href: '/projects', icon: Briefcase },
  { name: 'Comunicaciones', href: '/communications', icon: MessageSquare },
  { name: 'Calendario', href: '/calendar', icon: Calendar },
  { name: 'Reportes', href: '/reports', icon: FileText },
  { name: 'Configuración', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const location = useLocation();
  const { collapsed, setCollapsed } = useSidebar();

  return (
    <div className={cn(
      "flex flex-col h-screen bg-slate-900 border-r border-slate-800 transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">BizCore360</h1>
              <p className="text-slate-400 text-xs">Business Platform</p>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="text-slate-400 hover:text-white hover:bg-slate-800"
        >
          {collapsed ? <Menu className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              )}
            >
              <item.icon className={cn("flex-shrink-0", collapsed ? "w-5 h-5" : "w-5 h-5 mr-3")} />
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-800">
        <div className={cn("flex items-center", collapsed ? "justify-center" : "space-x-3")}>
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">U</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">Usuario</p>
              <p className="text-slate-400 text-xs truncate">Admin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

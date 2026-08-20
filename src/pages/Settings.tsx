
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Settings as SettingsIcon,
  Building2,
  Store,
  Users,
  Bell,
  Shield,
  CreditCard,
  Plug,
  Globe,
  Mail,
  Phone,
  MapPin,
  Upload,
  Save,
  Trash2,
  Plus,
  Eye,
  EyeOff,
  Check,
  AlertTriangle,
  ExternalLink,
  Palette,
  BarChart3,
  Target,
  Briefcase,
  MessageSquare,
  Key,
  Lock,
  Smartphone,
  Monitor,
  Moon,
  Sun,
  Zap,
  Clock,
  DollarSign,
  Package,
  Truck,
  Percent,
  FileText,
  Download,
  RefreshCw,
  UserPlus,
  UserMinus,
  Crown,
  ChevronRight,
} from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { toast } from '@/hooks/use-toast';

// ─── General Settings ──────────────────────────────────────────────
function GeneralSettings() {
  const { theme, setTheme } = useTheme();
  const [businessName, setBusinessName] = useState('BizCore360 Demo');
  const [businessEmail, setBusinessEmail] = useState('admin@bizcore360.com');
  const [businessPhone, setBusinessPhone] = useState('+56 9 1234 5678');
  const [businessAddress, setBusinessAddress] = useState('Av. Providencia 1234, Santiago, Chile');
  const [businessWebsite, setBusinessWebsite] = useState('https://bizcore360.com');
  const [businessDescription, setBusinessDescription] = useState('Plataforma SaaS integral para gestión de negocios, e-commerce, CRM y proyectos.');
  const [timezone, setTimezone] = useState('america_santiago');
  const [language, setLanguage] = useState('es');
  const [currency, setCurrency] = useState('clp');
  const [dateFormat, setDateFormat] = useState('dd_mm_yyyy');

  const handleSave = () => {
    toast({ title: '✅ Configuración guardada', description: 'Los cambios se han aplicado correctamente.' });
  };

  return (
    <div className="space-y-6">
      {/* Business Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Perfil del Negocio
          </CardTitle>
          <CardDescription>Información principal de tu empresa</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              BC
            </div>
            <div className="space-y-2">
              <Button variant="outline" size="sm"><Upload className="w-4 h-4 mr-2" />Subir Logo</Button>
              <p className="text-xs text-muted-foreground">PNG, JPG o SVG. Máximo 2MB.</p>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Nombre del Negocio</Label>
              <Input value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Sitio Web</Label>
              <Input value={businessWebsite} onChange={(e) => setBusinessWebsite(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Email de Contacto</Label>
              <Input type="email" value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Teléfono</Label>
              <Input value={businessPhone} onChange={(e) => setBusinessPhone(e.target.value)} />
            </div>
            <div className="md:col-span-2 space-y-2">
              <Label>Dirección</Label>
              <Input value={businessAddress} onChange={(e) => setBusinessAddress(e.target.value)} />
            </div>
            <div className="md:col-span-2 space-y-2">
              <Label>Descripción</Label>
              <Textarea value={businessDescription} onChange={(e) => setBusinessDescription(e.target.value)} rows={3} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Regional & Appearance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Regional y Apariencia
          </CardTitle>
          <CardDescription>Formato regional, idioma y tema visual</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Zona Horaria</Label>
              <Select value={timezone} onValueChange={setTimezone}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="america_santiago">América/Santiago (GMT-3)</SelectItem>
                  <SelectItem value="america_bogota">América/Bogotá (GMT-5)</SelectItem>
                  <SelectItem value="america_mexico">América/México (GMT-6)</SelectItem>
                  <SelectItem value="america_buenosaires">América/Buenos Aires (GMT-3)</SelectItem>
                  <SelectItem value="europe_madrid">Europa/Madrid (GMT+1)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Idioma</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="pt">Português</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Moneda</Label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="clp">CLP - Peso Chileno</SelectItem>
                  <SelectItem value="usd">USD - Dólar</SelectItem>
                  <SelectItem value="eur">EUR - Euro</SelectItem>
                  <SelectItem value="mxn">MXN - Peso Mexicano</SelectItem>
                  <SelectItem value="cop">COP - Peso Colombiano</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Formato de Fecha</Label>
              <Select value={dateFormat} onValueChange={setDateFormat}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="dd_mm_yyyy">DD/MM/AAAA</SelectItem>
                  <SelectItem value="mm_dd_yyyy">MM/DD/AAAA</SelectItem>
                  <SelectItem value="yyyy_mm_dd">AAAA-MM-DD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Separator />
          <div className="space-y-4">
            <Label className="text-base font-semibold">Tema Visual</Label>
            <div className="flex gap-4">
              <button
                onClick={() => setTheme('light')}
                className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${theme === 'light' ? 'border-primary bg-primary/5' : 'border-border hover:border-muted-foreground/30'}`}
              >
                <Sun className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-medium">Claro</div>
                  <div className="text-xs text-muted-foreground">Tema luminoso</div>
                </div>
                {theme === 'light' && <Check className="w-4 h-4 text-primary" />}
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${theme === 'dark' ? 'border-primary bg-primary/5' : 'border-border hover:border-muted-foreground/30'}`}
              >
                <Moon className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-medium">Oscuro</div>
                  <div className="text-xs text-muted-foreground">Reduce fatiga visual</div>
                </div>
                {theme === 'dark' && <Check className="w-4 h-4 text-primary" />}
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave}><Save className="w-4 h-4 mr-2" />Guardar Cambios</Button>
      </div>
    </div>
  );
}

// ─── Store Settings ────────────────────────────────────────────────
function StoreSettings() {
  const [storeName, setStoreName] = useState('Mi Tienda Online');
  const [storeSlug, setStoreSlug] = useState('mi-tienda-online');
  const [enableCart, setEnableCart] = useState(true);
  const [enableWishlist, setEnableWishlist] = useState(true);
  const [enableReviews, setEnableReviews] = useState(true);
  const [enableCoupons, setEnableCoupons] = useState(true);
  const [autoStock, setAutoStock] = useState(true);
  const [lowStockThreshold, setLowStockThreshold] = useState('5');
  const [shippingFlatRate, setShippingFlatRate] = useState('3990');
  const [freeShippingMin, setFreeShippingMin] = useState('50000');
  const [taxRate, setTaxRate] = useState('19');
  const [enableTax, setEnableTax] = useState(true);

  const paymentMethods = [
    { name: 'Stripe', status: 'active', icon: CreditCard },
    { name: 'PayPal', status: 'inactive', icon: DollarSign },
    { name: 'MercadoPago', status: 'active', icon: DollarSign },
    { name: 'Webpay', status: 'inactive', icon: CreditCard },
  ];

  const handleSave = () => {
    toast({ title: '✅ Configuración de tienda guardada', description: 'Los cambios se han aplicado.' });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Store className="w-5 h-5" />Tienda Online</CardTitle>
          <CardDescription>Configuración general de tu tienda e-commerce</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Nombre de la Tienda</Label>
              <Input value={storeName} onChange={(e) => setStoreName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>URL de la Tienda</Label>
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">bizcore360.com/</span>
                <Input value={storeSlug} onChange={(e) => setStoreSlug(e.target.value)} className="flex-1" />
              </div>
            </div>
          </div>
          <Separator />
          <div className="space-y-4">
            <Label className="text-base font-semibold">Funcionalidades</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Carrito de Compras', desc: 'Permite a los clientes agregar productos', state: enableCart, setter: setEnableCart },
                { label: 'Lista de Deseos', desc: 'Clientes pueden guardar favoritos', state: enableWishlist, setter: setEnableWishlist },
                { label: 'Reseñas de Productos', desc: 'Los clientes pueden dejar opiniones', state: enableReviews, setter: setEnableReviews },
                { label: 'Cupones de Descuento', desc: 'Sistema de cupones promocionales', state: enableCoupons, setter: setEnableCoupons },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div>
                    <div className="font-medium text-sm">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                  <Switch checked={item.state} onCheckedChange={item.setter} />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inventory */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Package className="w-5 h-5" />Inventario</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div>
              <div className="font-medium text-sm">Control Automático de Stock</div>
              <div className="text-xs text-muted-foreground">Descontar automáticamente al vender</div>
            </div>
            <Switch checked={autoStock} onCheckedChange={setAutoStock} />
          </div>
          <div className="space-y-2">
            <Label>Umbral de Stock Bajo</Label>
            <Input type="number" value={lowStockThreshold} onChange={(e) => setLowStockThreshold(e.target.value)} className="max-w-[200px]" />
            <p className="text-xs text-muted-foreground">Recibirás alertas cuando el stock sea igual o menor a este valor</p>
          </div>
        </CardContent>
      </Card>

      {/* Shipping */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Truck className="w-5 h-5" />Envíos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Tarifa Plana de Envío</Label>
              <Input type="number" value={shippingFlatRate} onChange={(e) => setShippingFlatRate(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Envío Gratis desde</Label>
              <Input type="number" value={freeShippingMin} onChange={(e) => setFreeShippingMin(e.target.value)} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Taxes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Percent className="w-5 h-5" />Impuestos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div>
              <div className="font-medium text-sm">Aplicar Impuestos</div>
              <div className="text-xs text-muted-foreground">Calcular impuestos automáticamente en cada venta</div>
            </div>
            <Switch checked={enableTax} onCheckedChange={setEnableTax} />
          </div>
          {enableTax && (
            <div className="space-y-2">
              <Label>Tasa de IVA (%)</Label>
              <Input type="number" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} className="max-w-[200px]" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><CreditCard className="w-5 h-5" />Métodos de Pago</CardTitle>
          <CardDescription>Configura las pasarelas de pago de tu tienda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div key={method.name} className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <method.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">{method.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {method.status === 'active' ? 'Conectado y activo' : 'No configurado'}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={method.status === 'active' ? 'default' : 'secondary'}>
                    {method.status === 'active' ? 'Activo' : 'Inactivo'}
                  </Badge>
                  <Button variant="outline" size="sm">Configurar</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave}><Save className="w-4 h-4 mr-2" />Guardar Cambios</Button>
      </div>
    </div>
  );
}

// ─── CRM Settings ──────────────────────────────────────────────────
function CRMSettings() {
  const [autoAssign, setAutoAssign] = useState(true);
  const [leadScoring, setLeadScoring] = useState(true);
  const [autoFollowUp, setAutoFollowUp] = useState(true);
  const [followUpDays, setFollowUpDays] = useState('3');
  const [enableWhatsapp, setEnableWhatsapp] = useState(false);
  const [enableEmailSync, setEnableEmailSync] = useState(true);
  const [enableSMS, setEnableSMS] = useState(false);
  const [dealRotting, setDealRotting] = useState(true);
  const [dealRottingDays, setDealRottingDays] = useState('14');

  const funnelStages = [
    { name: 'Prospecto', color: 'bg-blue-500', count: 156 },
    { name: 'Contactado', color: 'bg-cyan-500', count: 98 },
    { name: 'Oportunidad', color: 'bg-yellow-500', count: 89 },
    { name: 'Propuesta', color: 'bg-orange-500', count: 45 },
    { name: 'Negociación', color: 'bg-purple-500', count: 32 },
    { name: 'Cerrado Ganado', color: 'bg-green-500', count: 23 },
    { name: 'Cerrado Perdido', color: 'bg-red-500', count: 12 },
  ];

  const handleSave = () => {
    toast({ title: '✅ Configuración CRM guardada', description: 'Los cambios del CRM se han aplicado.' });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Target className="w-5 h-5" />Gestión de Leads</CardTitle>
          <CardDescription>Automatización y scoring de leads</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: 'Asignación Automática', desc: 'Asignar leads automáticamente al equipo de ventas', state: autoAssign, setter: setAutoAssign },
            { label: 'Lead Scoring con IA', desc: 'Puntuar leads automáticamente según comportamiento', state: leadScoring, setter: setLeadScoring },
            { label: 'Seguimiento Automático', desc: 'Crear tareas de seguimiento automáticas', state: autoFollowUp, setter: setAutoFollowUp },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div>
                <div className="font-medium text-sm">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
              <Switch checked={item.state} onCheckedChange={item.setter} />
            </div>
          ))}
          {autoFollowUp && (
            <div className="space-y-2 pl-4 border-l-2 border-primary/20">
              <Label>Días para recordatorio de seguimiento</Label>
              <Input type="number" value={followUpDays} onChange={(e) => setFollowUpDays(e.target.value)} className="max-w-[200px]" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Funnel Stages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><BarChart3 className="w-5 h-5" />Etapas del Embudo</CardTitle>
          <CardDescription>Personaliza las etapas de tu pipeline de ventas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {funnelStages.map((stage, i) => (
              <div key={stage.name} className="flex items-center gap-3 p-3 rounded-lg border border-border">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-medium">{i + 1}</div>
                <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                <div className="flex-1">
                  <Input defaultValue={stage.name} className="h-8" />
                </div>
                <Badge variant="secondary">{stage.count}</Badge>
                <Button variant="ghost" size="sm"><Trash2 className="w-4 h-4 text-destructive" /></Button>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-2"><Plus className="w-4 h-4 mr-2" />Agregar Etapa</Button>
          </div>
        </CardContent>
      </Card>

      {/* Deal Rotting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Clock className="w-5 h-5" />Alertas de Inactividad</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div>
              <div className="font-medium text-sm">Deal Rotting</div>
              <div className="text-xs text-muted-foreground">Alertar cuando un deal no tiene actividad</div>
            </div>
            <Switch checked={dealRotting} onCheckedChange={setDealRotting} />
          </div>
          {dealRotting && (
            <div className="space-y-2 pl-4 border-l-2 border-primary/20">
              <Label>Días sin actividad para alertar</Label>
              <Input type="number" value={dealRottingDays} onChange={(e) => setDealRottingDays(e.target.value)} className="max-w-[200px]" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Communication Channels */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><MessageSquare className="w-5 h-5" />Canales de Comunicación</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { label: 'Sincronización de Email', desc: 'Conectar con tu proveedor de correo', state: enableEmailSync, setter: setEnableEmailSync, icon: Mail },
            { label: 'WhatsApp Business', desc: 'Integración con WhatsApp API', state: enableWhatsapp, setter: setEnableWhatsapp, icon: Phone },
            { label: 'SMS', desc: 'Enviar mensajes de texto a clientes', state: enableSMS, setter: setEnableSMS, icon: Smartphone },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-medium text-sm">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              </div>
              <Switch checked={item.state} onCheckedChange={item.setter} />
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave}><Save className="w-4 h-4 mr-2" />Guardar Cambios</Button>
      </div>
    </div>
  );
}

// ─── Notification Settings ─────────────────────────────────────────
function NotificationSettings() {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [smsNotifs, setSmsNotifs] = useState(false);

  const notifications = [
    { category: 'Ventas', items: [
      { label: 'Nueva venta realizada', email: true, push: true, sms: false },
      { label: 'Carrito abandonado', email: true, push: false, sms: false },
      { label: 'Reembolso solicitado', email: true, push: true, sms: true },
    ]},
    { category: 'CRM', items: [
      { label: 'Nuevo lead recibido', email: true, push: true, sms: false },
      { label: 'Lead sin seguimiento', email: true, push: true, sms: false },
      { label: 'Deal cerrado', email: true, push: true, sms: false },
    ]},
    { category: 'Inventario', items: [
      { label: 'Stock bajo', email: true, push: true, sms: true },
      { label: 'Producto agotado', email: true, push: true, sms: true },
    ]},
    { category: 'Sistema', items: [
      { label: 'Inicio de sesión nuevo dispositivo', email: true, push: true, sms: false },
      { label: 'Cambios en el equipo', email: true, push: false, sms: false },
      { label: 'Informes semanales', email: true, push: false, sms: false },
    ]},
  ];

  const handleSave = () => {
    toast({ title: '✅ Notificaciones actualizadas', description: 'Tus preferencias de notificación se han guardado.' });
  };

  return (
    <div className="space-y-6">
      {/* Global toggles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Bell className="w-5 h-5" />Canales de Notificación</CardTitle>
          <CardDescription>Activa o desactiva canales globalmente</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Email', desc: 'Recibir por correo', icon: Mail, state: emailNotifs, setter: setEmailNotifs },
              { label: 'Push', desc: 'Notificaciones del navegador', icon: Monitor, state: pushNotifs, setter: setPushNotifs },
              { label: 'SMS', desc: 'Mensajes de texto', icon: Smartphone, state: smsNotifs, setter: setSmsNotifs },
            ].map((ch) => (
              <div key={ch.label} className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <ch.icon className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium text-sm">{ch.label}</div>
                    <div className="text-xs text-muted-foreground">{ch.desc}</div>
                  </div>
                </div>
                <Switch checked={ch.state} onCheckedChange={ch.setter} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Per-category */}
      {notifications.map((group) => (
        <Card key={group.category}>
          <CardHeader>
            <CardTitle className="text-base">{group.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="grid grid-cols-[1fr_80px_80px_80px] gap-2 text-xs font-medium text-muted-foreground px-3">
                <div>Evento</div>
                <div className="text-center">Email</div>
                <div className="text-center">Push</div>
                <div className="text-center">SMS</div>
              </div>
              {group.items.map((item) => (
                <div key={item.label} className="grid grid-cols-[1fr_80px_80px_80px] gap-2 items-center p-3 rounded-lg border border-border">
                  <div className="text-sm">{item.label}</div>
                  <div className="flex justify-center"><Switch defaultChecked={item.email} /></div>
                  <div className="flex justify-center"><Switch defaultChecked={item.push} /></div>
                  <div className="flex justify-center"><Switch defaultChecked={item.sms} /></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-end">
        <Button onClick={handleSave}><Save className="w-4 h-4 mr-2" />Guardar Preferencias</Button>
      </div>
    </div>
  );
}

// ─── Team Settings ─────────────────────────────────────────────────
function TeamSettings() {
  const members = [
    { name: 'Admin Principal', email: 'admin@bizcore360.com', role: 'owner', avatar: 'AP', status: 'active', lastActive: 'Ahora' },
    { name: 'María González', email: 'maria@bizcore360.com', role: 'admin', avatar: 'MG', status: 'active', lastActive: 'Hace 2h' },
    { name: 'Carlos Pérez', email: 'carlos@bizcore360.com', role: 'sales', avatar: 'CP', status: 'active', lastActive: 'Hace 1h' },
    { name: 'Ana Torres', email: 'ana@bizcore360.com', role: 'support', avatar: 'AT', status: 'inactive', lastActive: 'Hace 3 días' },
    { name: 'Diego Ruiz', email: 'diego@bizcore360.com', role: 'viewer', avatar: 'DR', status: 'active', lastActive: 'Hace 30min' },
  ];

  const roleLabels: Record<string, string> = { owner: 'Propietario', admin: 'Administrador', sales: 'Ventas', support: 'Soporte', viewer: 'Solo Lectura' };
  const roleBadge: Record<string, string> = { owner: 'default', admin: 'default', sales: 'secondary', support: 'secondary', viewer: 'outline' };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2"><Users className="w-5 h-5" />Equipo</CardTitle>
            <CardDescription>{members.length} miembros</CardDescription>
          </div>
          <Button><UserPlus className="w-4 h-4 mr-2" />Invitar Miembro</Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {members.map((m) => (
              <div key={m.email} className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-sm">{m.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm flex items-center gap-2">
                      {m.name}
                      {m.role === 'owner' && <Crown className="w-4 h-4 text-yellow-500" />}
                    </div>
                    <div className="text-xs text-muted-foreground">{m.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xs text-muted-foreground">{m.lastActive}</div>
                  <Badge variant={roleBadge[m.role] as any}>{roleLabels[m.role]}</Badge>
                  <div className={`w-2 h-2 rounded-full ${m.status === 'active' ? 'bg-green-500' : 'bg-muted-foreground/40'}`} />
                  {m.role !== 'owner' && (
                    <Select defaultValue={m.role}>
                      <SelectTrigger className="w-[140px] h-8 text-xs"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Administrador</SelectItem>
                        <SelectItem value="sales">Ventas</SelectItem>
                        <SelectItem value="support">Soporte</SelectItem>
                        <SelectItem value="viewer">Solo Lectura</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Roles & Permissions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5" />Roles y Permisos</CardTitle>
          <CardDescription>Define qué puede hacer cada rol en la plataforma</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Permiso</th>
                  <th className="text-center py-3 px-2 font-medium text-muted-foreground">Admin</th>
                  <th className="text-center py-3 px-2 font-medium text-muted-foreground">Ventas</th>
                  <th className="text-center py-3 px-2 font-medium text-muted-foreground">Soporte</th>
                  <th className="text-center py-3 px-2 font-medium text-muted-foreground">Lectura</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { perm: 'Dashboard completo', admin: true, sales: true, support: false, viewer: true },
                  { perm: 'Gestionar productos', admin: true, sales: false, support: false, viewer: false },
                  { perm: 'Ver clientes', admin: true, sales: true, support: true, viewer: true },
                  { perm: 'Editar clientes', admin: true, sales: true, support: true, viewer: false },
                  { perm: 'Gestionar ventas', admin: true, sales: true, support: false, viewer: false },
                  { perm: 'Ver reportes', admin: true, sales: true, support: false, viewer: true },
                  { perm: 'Configuración', admin: true, sales: false, support: false, viewer: false },
                  { perm: 'Gestionar equipo', admin: true, sales: false, support: false, viewer: false },
                ].map((row) => (
                  <tr key={row.perm} className="border-b border-border/50">
                    <td className="py-3 px-2">{row.perm}</td>
                    {['admin', 'sales', 'support', 'viewer'].map((role) => (
                      <td key={role} className="text-center py-3 px-2">
                        <Switch defaultChecked={(row as any)[role]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Integration Settings ──────────────────────────────────────────
function IntegrationSettings() {
  const integrations = [
    { name: 'Stripe', desc: 'Procesamiento de pagos online', category: 'Pagos', status: 'connected', icon: '💳' },
    { name: 'MercadoPago', desc: 'Pagos en Latinoamérica', category: 'Pagos', status: 'connected', icon: '💰' },
    { name: 'WhatsApp Business', desc: 'Comunicación directa con clientes', category: 'Comunicación', status: 'disconnected', icon: '💬' },
    { name: 'Google Analytics', desc: 'Tracking y analítica web', category: 'Analytics', status: 'connected', icon: '📊' },
    { name: 'Meta Ads', desc: 'Facebook e Instagram Ads', category: 'Marketing', status: 'disconnected', icon: '📱' },
    { name: 'Google Ads', desc: 'Campañas de búsqueda y display', category: 'Marketing', status: 'disconnected', icon: '🔍' },
    { name: 'Zapier', desc: 'Automatización de flujos', category: 'Automatización', status: 'connected', icon: '⚡' },
    { name: 'Google Sheets', desc: 'Exportación de datos', category: 'Productividad', status: 'disconnected', icon: '📋' },
    { name: 'Notion', desc: 'Gestión de documentos y notas', category: 'Productividad', status: 'disconnected', icon: '📝' },
    { name: 'Nubox', desc: 'Contabilidad y facturación', category: 'ERP', status: 'disconnected', icon: '🧾' },
    { name: 'Quickbooks', desc: 'Gestión financiera', category: 'ERP', status: 'disconnected', icon: '📒' },
    { name: 'Instagram Shop', desc: 'Vender directamente en Instagram', category: 'Redes Sociales', status: 'disconnected', icon: '📷' },
  ];

  const categories = Array.from(new Set(integrations.map(i => i.category)));

  return (
    <div className="space-y-6">
      {categories.map((cat) => (
        <Card key={cat}>
          <CardHeader>
            <CardTitle className="text-base">{cat}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {integrations.filter(i => i.category === cat).map((integration) => (
                <div key={integration.name} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{integration.icon}</span>
                    <div>
                      <div className="font-medium text-sm">{integration.name}</div>
                      <div className="text-xs text-muted-foreground">{integration.desc}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {integration.status === 'connected' ? (
                      <>
                        <Badge variant="default" className="bg-green-600 hover:bg-green-700 text-xs">Conectado</Badge>
                        <Button variant="ghost" size="sm"><SettingsIcon className="w-4 h-4" /></Button>
                      </>
                    ) : (
                      <Button variant="outline" size="sm">Conectar</Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* API Keys */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Key className="w-5 h-5" />API y Webhooks</CardTitle>
          <CardDescription>Gestiona tus claves API y endpoints de webhook</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>API Key Pública</Label>
            <div className="flex gap-2">
              <Input value="pk_live_bz360_xxxxxxxxxxxxxxxxxxxx" readOnly className="font-mono text-xs" />
              <Button variant="outline" size="sm">Copiar</Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label>API Key Secreta</Label>
            <div className="flex gap-2">
              <Input value="••••••••••••••••••••••••••••" readOnly className="font-mono text-xs" type="password" />
              <Button variant="outline" size="sm"><Eye className="w-4 h-4" /></Button>
              <Button variant="outline" size="sm"><RefreshCw className="w-4 h-4" /></Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Webhook URL</Label>
            <div className="flex gap-2">
              <Input placeholder="https://tu-dominio.com/webhook" />
              <Button variant="outline" size="sm">Guardar</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Security Settings ─────────────────────────────────────────────
function SecuritySettings() {
  const [twoFactor, setTwoFactor] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState('30');
  const [ipWhitelist, setIpWhitelist] = useState(false);
  const [auditLog, setAuditLog] = useState(true);
  const [gdprMode, setGdprMode] = useState(true);

  const sessions = [
    { device: 'Chrome - macOS', location: 'Santiago, Chile', lastActive: 'Activa ahora', current: true },
    { device: 'Safari - iPhone', location: 'Santiago, Chile', lastActive: 'Hace 2 horas', current: false },
    { device: 'Firefox - Windows', location: 'Bogotá, Colombia', lastActive: 'Hace 3 días', current: false },
  ];

  const auditLogs = [
    { action: 'Inicio de sesión', user: 'admin@bizcore360.com', timestamp: '2024-01-15 14:30', ip: '192.168.1.1' },
    { action: 'Producto creado', user: 'maria@bizcore360.com', timestamp: '2024-01-15 13:15', ip: '192.168.1.2' },
    { action: 'Cliente editado', user: 'carlos@bizcore360.com', timestamp: '2024-01-15 12:00', ip: '192.168.1.3' },
    { action: 'Configuración modificada', user: 'admin@bizcore360.com', timestamp: '2024-01-15 10:45', ip: '192.168.1.1' },
    { action: 'Reporte exportado', user: 'maria@bizcore360.com', timestamp: '2024-01-14 16:20', ip: '192.168.1.2' },
  ];

  const handleSave = () => {
    toast({ title: '✅ Seguridad actualizada', description: 'Los ajustes de seguridad se han guardado.' });
  };

  return (
    <div className="space-y-6">
      {/* Password & 2FA */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Lock className="w-5 h-5" />Autenticación</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Contraseña Actual</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div />
            <div className="space-y-2">
              <Label>Nueva Contraseña</Label>
              <Input type="password" placeholder="Mínimo 8 caracteres" />
            </div>
            <div className="space-y-2">
              <Label>Confirmar Contraseña</Label>
              <Input type="password" placeholder="Repetir contraseña" />
            </div>
          </div>
          <Button variant="outline">Cambiar Contraseña</Button>
          <Separator />
          <div className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div>
              <div className="font-medium text-sm">Autenticación de Dos Factores (2FA)</div>
              <div className="text-xs text-muted-foreground">Añade una capa extra de seguridad a tu cuenta</div>
            </div>
            <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
          </div>
        </CardContent>
      </Card>

      {/* Session Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Monitor className="w-5 h-5" />Sesiones Activas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {sessions.map((s, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <Monitor className="w-5 h-5 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium flex items-center gap-2">
                    {s.device}
                    {s.current && <Badge variant="default" className="text-xs">Actual</Badge>}
                  </div>
                  <div className="text-xs text-muted-foreground">{s.location} · {s.lastActive}</div>
                </div>
              </div>
              {!s.current && <Button variant="ghost" size="sm" className="text-destructive">Cerrar</Button>}
            </div>
          ))}
          <Button variant="outline" className="w-full text-destructive">Cerrar Todas las Sesiones</Button>
        </CardContent>
      </Card>

      {/* Policies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5" />Políticas de Seguridad</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Tiempo de Inactividad (minutos)</Label>
            <Input type="number" value={sessionTimeout} onChange={(e) => setSessionTimeout(e.target.value)} className="max-w-[200px]" />
          </div>
          {[
            { label: 'Restricción por IP', desc: 'Solo permitir acceso desde IPs autorizadas', state: ipWhitelist, setter: setIpWhitelist },
            { label: 'Registro de Auditoría', desc: 'Registrar todas las acciones de los usuarios', state: auditLog, setter: setAuditLog },
            { label: 'Modo GDPR/CCPA', desc: 'Cumplimiento con regulaciones de privacidad', state: gdprMode, setter: setGdprMode },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div>
                <div className="font-medium text-sm">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
              <Switch checked={item.state} onCheckedChange={item.setter} />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Audit Log */}
      {auditLog && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5" />Log de Auditoría</CardTitle>
              <CardDescription>Últimas acciones registradas</CardDescription>
            </div>
            <Button variant="outline" size="sm"><Download className="w-4 h-4 mr-2" />Exportar</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {auditLogs.map((log, i) => (
                <div key={i} className="grid grid-cols-[1fr_1fr_140px_120px] gap-2 p-3 rounded-lg border border-border text-sm">
                  <div className="font-medium">{log.action}</div>
                  <div className="text-muted-foreground">{log.user}</div>
                  <div className="text-muted-foreground text-xs">{log.timestamp}</div>
                  <div className="text-muted-foreground text-xs font-mono">{log.ip}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-end">
        <Button onClick={handleSave}><Save className="w-4 h-4 mr-2" />Guardar Cambios</Button>
      </div>
    </div>
  );
}

// ─── Billing Settings ──────────────────────────────────────────────
function BillingSettings() {
  const plans = [
    { name: 'Free', price: '$0', period: '/mes', features: ['1 tienda', '100 productos', '500 contactos CRM', 'Reportes básicos'], current: false },
    { name: 'Pro', price: '$49.990', period: '/mes', features: ['3 tiendas', 'Productos ilimitados', '5.000 contactos CRM', 'IA básica', 'Reportes avanzados', 'Soporte prioritario'], current: true },
    { name: 'Business', price: '$149.990', period: '/mes', features: ['Tiendas ilimitadas', 'Todo ilimitado', 'IA avanzada completa', 'API personalizada', 'Soporte dedicado', 'SSO & roles avanzados'], current: false },
  ];

  const invoices = [
    { date: '15 Ene 2024', amount: '$49.990', status: 'Pagada', plan: 'Pro' },
    { date: '15 Dic 2023', amount: '$49.990', status: 'Pagada', plan: 'Pro' },
    { date: '15 Nov 2023', amount: '$49.990', status: 'Pagada', plan: 'Pro' },
    { date: '15 Oct 2023', amount: '$29.990', status: 'Pagada', plan: 'Starter' },
  ];

  return (
    <div className="space-y-6">
      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><CreditCard className="w-5 h-5" />Plan Actual</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative p-6 rounded-xl border-2 transition-all ${plan.current ? 'border-primary bg-primary/5 shadow-lg' : 'border-border hover:border-muted-foreground/30'}`}>
                {plan.current && (
                  <Badge className="absolute -top-3 left-4">Plan Actual</Badge>
                )}
                <div className="text-lg font-bold mt-2">{plan.name}</div>
                <div className="text-3xl font-bold mt-1">
                  {plan.price}<span className="text-sm font-normal text-muted-foreground">{plan.period}</span>
                </div>
                <Separator className="my-4" />
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-4" variant={plan.current ? 'outline' : 'default'} disabled={plan.current}>
                  {plan.current ? 'Plan Activo' : 'Cambiar Plan'}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><CreditCard className="w-5 h-5" />Método de Pago</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-8 rounded bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white text-xs font-bold">VISA</div>
              <div>
                <div className="font-medium text-sm">•••• •••• •••• 4242</div>
                <div className="text-xs text-muted-foreground">Expira 12/2026</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Editar</Button>
              <Button variant="ghost" size="sm" className="text-destructive"><Trash2 className="w-4 h-4" /></Button>
            </div>
          </div>
          <Button variant="outline"><Plus className="w-4 h-4 mr-2" />Agregar Método de Pago</Button>
        </CardContent>
      </Card>

      {/* Invoices */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5" />Historial de Facturación</CardTitle>
          </div>
          <Button variant="outline" size="sm"><Download className="w-4 h-4 mr-2" />Exportar Todo</Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {invoices.map((inv, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
                <div className="flex items-center gap-4">
                  <div className="text-sm font-medium">{inv.date}</div>
                  <Badge variant="secondary">{inv.plan}</Badge>
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-medium">{inv.amount}</div>
                  <Badge variant="default" className="bg-green-600 hover:bg-green-700">{inv.status}</Badge>
                  <Button variant="ghost" size="sm"><Download className="w-4 h-4" /></Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><BarChart3 className="w-5 h-5" />Uso del Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { label: 'Productos', used: 127, total: 'Ilimitado', percent: 0 },
              { label: 'Contactos CRM', used: 1234, total: 5000, percent: 25 },
              { label: 'Emails Enviados', used: 2345, total: 10000, percent: 23 },
              { label: 'Almacenamiento', used: 2.3, total: 10, percent: 23, unit: 'GB' },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-muted-foreground">
                    {item.used}{item.unit ? ` ${item.unit}` : ''} / {typeof item.total === 'number' ? `${item.total}${item.unit ? ` ${item.unit}` : ''}` : item.total}
                  </span>
                </div>
                {typeof item.total === 'number' && (
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${item.percent}%` }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Main Settings Page ────────────────────────────────────────────
const settingsTabs = [
  { value: 'general', label: 'General', icon: Building2 },
  { value: 'store', label: 'Tienda', icon: Store },
  { value: 'crm', label: 'CRM', icon: Target },
  { value: 'notifications', label: 'Notificaciones', icon: Bell },
  { value: 'team', label: 'Equipo', icon: Users },
  { value: 'integrations', label: 'Integraciones', icon: Plug },
  { value: 'security', label: 'Seguridad', icon: Shield },
  { value: 'billing', label: 'Facturación', icon: CreditCard },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Configuración</h1>
        <p className="text-muted-foreground mt-2">Gestiona todos los ajustes de tu plataforma BizCore360</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1 rounded-xl">
          {settingsTabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm px-4 py-2">
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="general"><GeneralSettings /></TabsContent>
        <TabsContent value="store"><StoreSettings /></TabsContent>
        <TabsContent value="crm"><CRMSettings /></TabsContent>
        <TabsContent value="notifications"><NotificationSettings /></TabsContent>
        <TabsContent value="team"><TeamSettings /></TabsContent>
        <TabsContent value="integrations"><IntegrationSettings /></TabsContent>
        <TabsContent value="security"><SecuritySettings /></TabsContent>
        <TabsContent value="billing"><BillingSettings /></TabsContent>
      </Tabs>
    </div>
  );
}

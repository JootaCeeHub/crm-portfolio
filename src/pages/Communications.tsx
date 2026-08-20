
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  MessageSquare,
  Mail,
  Phone,
  Send,
  Search,
  Plus,
  Star,
  StarOff,
  Archive,
  Trash2,
  Reply,
  ReplyAll,
  Forward,
  Paperclip,
  MoreHorizontal,
  Inbox,
  Clock,
  CheckCheck,
  Check,
  AlertCircle,
  Users,
  Target,
  Zap,
  FileText,
  Image,
  Smile,
  Bold,
  Italic,
  Link,
  List,
  Filter,
  RefreshCw,
  Eye,
  BarChart3,
  TrendingUp,
  Smartphone,
  Globe,
  Calendar,
  ChevronRight,
  ArrowUpRight,
  Copy,
  Edit,
  Play,
  Pause,
  Megaphone,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// ─── Types ─────────────────────────────────────────────────────────
interface Message {
  id: number;
  from: string;
  fromEmail: string;
  avatar: string;
  subject: string;
  preview: string;
  body: string;
  date: string;
  time: string;
  read: boolean;
  starred: boolean;
  channel: 'email' | 'whatsapp' | 'sms' | 'chat';
  status: 'received' | 'sent' | 'draft';
  labels: string[];
  attachments?: number;
}

interface Campaign {
  id: number;
  name: string;
  type: 'email' | 'sms' | 'whatsapp';
  status: 'draft' | 'scheduled' | 'active' | 'completed' | 'paused';
  recipients: number;
  sent: number;
  opened: number;
  clicked: number;
  date: string;
  subject?: string;
}

interface Template {
  id: number;
  name: string;
  type: 'email' | 'sms' | 'whatsapp';
  category: string;
  lastUsed: string;
  uses: number;
}

// ─── Mock Data ─────────────────────────────────────────────────────
const messages: Message[] = [
  { id: 1, from: 'María González', fromEmail: 'maria@techsolutions.cl', avatar: 'MG', subject: 'Consulta sobre el pedido #1234', preview: 'Hola, quería saber el estado de mi pedido que realicé la semana pasada...', body: 'Hola equipo,\n\nQuería saber el estado de mi pedido #1234 que realicé la semana pasada. El producto era un Smartphone Pro Max y aún no recibo información de envío.\n\n¿Podrían confirmar cuándo será despachado?\n\nGracias,\nMaría González', date: '15 Ene', time: '14:30', read: false, starred: true, channel: 'email', status: 'received', labels: ['Soporte', 'Urgente'], attachments: 1 },
  { id: 2, from: 'Carlos Pérez', fromEmail: 'carlos@marketingpro.cl', avatar: 'CP', subject: 'Propuesta de colaboración', preview: 'Estimado equipo, nos gustaría explorar una posible colaboración entre nuestras empresas...', body: 'Estimado equipo de BizCore360,\n\nNos gustaría explorar una posible colaboración entre nuestras empresas para el próximo trimestre. Tenemos varios clientes que podrían beneficiarse de su plataforma.\n\n¿Podríamos agendar una reunión esta semana?\n\nSaludos cordiales,\nCarlos Pérez\nMarketing Pro', date: '15 Ene', time: '11:20', read: false, starred: false, channel: 'email', status: 'received', labels: ['Ventas'], attachments: 2 },
  { id: 3, from: 'Ana Torres', fromEmail: '+56912345678', avatar: 'AT', subject: '', preview: 'Hola! Me interesa el plan Business. ¿Pueden darme más información sobre precios?', body: 'Hola! Me interesa el plan Business. ¿Pueden darme más información sobre precios y qué incluye exactamente? Vi la página web pero quiero más detalles. Gracias!', date: '15 Ene', time: '10:05', read: true, starred: false, channel: 'whatsapp', status: 'received', labels: ['Lead'] },
  { id: 4, from: 'Soporte BizCore', fromEmail: 'soporte@bizcore360.com', avatar: 'SB', subject: 'Re: Problema con integración', preview: 'Hemos resuelto el problema con la integración de Stripe. Todo debería funcionar correctamente...', body: 'Estimado cliente,\n\nHemos resuelto el problema con la integración de Stripe que nos reportó. Todo debería funcionar correctamente ahora.\n\nSi tiene algún otro inconveniente, no dude en contactarnos.\n\nSaludos,\nEquipo de Soporte BizCore360', date: '14 Ene', time: '16:45', read: true, starred: false, channel: 'email', status: 'sent', labels: ['Soporte'] },
  { id: 5, from: 'Diego Ruiz', fromEmail: '+56987654321', avatar: 'DR', subject: '', preview: 'Confirmado para la reunión de mañana a las 10:00. Nos vemos!', body: 'Confirmado para la reunión de mañana a las 10:00. Nos vemos!', date: '14 Ene', time: '15:30', read: true, starred: false, channel: 'sms', status: 'received', labels: [] },
  { id: 6, from: 'Laura Mendoza', fromEmail: 'laura@designstudio.cl', avatar: 'LM', subject: 'Cotización diseño web', preview: 'Adjunto la cotización para el rediseño de la tienda online que conversamos...', body: 'Hola,\n\nAdjunto la cotización para el rediseño de la tienda online que conversamos en nuestra última reunión.\n\nIncluye:\n- Diseño responsive\n- Optimización SEO\n- Integración con CRM\n\nQuedo atenta a sus comentarios.\n\nLaura Mendoza', date: '14 Ene', time: '09:15', read: true, starred: true, channel: 'email', status: 'received', labels: ['Proyectos'], attachments: 3 },
  { id: 7, from: 'Sistema', fromEmail: 'noreply@bizcore360.com', avatar: 'SI', subject: 'Alerta: Stock bajo en 3 productos', preview: 'Los siguientes productos tienen stock por debajo del umbral configurado...', body: 'Alerta automática:\n\nLos siguientes productos tienen stock por debajo del umbral configurado:\n\n1. Camiseta Premium - Stock: 0\n2. Cable USB-C - Stock: 3\n3. Funda Smartphone - Stock: 4\n\nPor favor, gestiona el reabastecimiento.', date: '13 Ene', time: '08:00', read: true, starred: false, channel: 'email', status: 'received', labels: ['Sistema', 'Inventario'] },
  { id: 8, from: 'Patricia Vega', fromEmail: 'patricia@consultores.cl', avatar: 'PV', subject: 'Informe mensual de progreso', preview: 'Estimado equipo, adjunto el informe de progreso del proyecto de consultoría...', body: 'Estimado equipo,\n\nAdjunto el informe de progreso del proyecto de consultoría correspondiente a enero 2024.\n\nResumen:\n- Avance general: 75%\n- Hitos completados: 6/8\n- Próximo hito: 20 de enero\n\nSaludos,\nPatricia Vega', date: '13 Ene', time: '17:20', read: true, starred: false, channel: 'email', status: 'received', labels: ['Proyectos'], attachments: 1 },
];

const campaigns: Campaign[] = [
  { id: 1, name: 'Ofertas de Enero', type: 'email', status: 'active', recipients: 2450, sent: 2450, opened: 1234, clicked: 456, date: '10 Ene 2024', subject: '🔥 Hasta 50% de descuento en productos seleccionados' },
  { id: 2, name: 'Bienvenida Nuevos Clientes', type: 'email', status: 'active', recipients: 156, sent: 156, opened: 134, clicked: 89, date: '01 Ene 2024', subject: '¡Bienvenido a BizCore360!' },
  { id: 3, name: 'Recordatorio Carrito', type: 'email', status: 'active', recipients: 89, sent: 89, opened: 45, clicked: 23, date: '12 Ene 2024', subject: '¡No olvides tu carrito!' },
  { id: 4, name: 'Promo WhatsApp Febrero', type: 'whatsapp', status: 'scheduled', recipients: 1200, sent: 0, opened: 0, clicked: 0, date: '01 Feb 2024' },
  { id: 5, name: 'Alerta Flash Sale', type: 'sms', status: 'draft', recipients: 3000, sent: 0, opened: 0, clicked: 0, date: '' },
  { id: 6, name: 'Black Friday 2023', type: 'email', status: 'completed', recipients: 4500, sent: 4500, opened: 3200, clicked: 1890, date: '24 Nov 2023', subject: '¡Black Friday! Hasta 70% OFF' },
  { id: 7, name: 'Newsletter Diciembre', type: 'email', status: 'completed', recipients: 3200, sent: 3200, opened: 1800, clicked: 670, date: '15 Dic 2023', subject: 'Resumen del mes y novedades' },
];

const templates: Template[] = [
  { id: 1, name: 'Bienvenida de Cliente', type: 'email', category: 'Onboarding', lastUsed: 'Hace 2 días', uses: 234 },
  { id: 2, name: 'Confirmación de Pedido', type: 'email', category: 'Transaccional', lastUsed: 'Hoy', uses: 1523 },
  { id: 3, name: 'Recuperación de Carrito', type: 'email', category: 'Marketing', lastUsed: 'Hace 1 día', uses: 456 },
  { id: 4, name: 'Seguimiento Post-Venta', type: 'email', category: 'CRM', lastUsed: 'Hace 3 días', uses: 189 },
  { id: 5, name: 'Promoción Especial', type: 'whatsapp', category: 'Marketing', lastUsed: 'Hace 1 semana', uses: 89 },
  { id: 6, name: 'Recordatorio de Cita', type: 'sms', category: 'CRM', lastUsed: 'Hace 2 días', uses: 312 },
  { id: 7, name: 'Solicitud de Reseña', type: 'email', category: 'Post-venta', lastUsed: 'Hace 5 días', uses: 67 },
  { id: 8, name: 'Notificación de Envío', type: 'whatsapp', category: 'Transaccional', lastUsed: 'Hoy', uses: 890 },
];

// ─── Channel Icon Helper ──────────────────────────────────────────
function ChannelIcon({ channel, className }: { channel: string; className?: string }) {
  switch (channel) {
    case 'email': return <Mail className={className} />;
    case 'whatsapp': return <Phone className={className} />;
    case 'sms': return <Smartphone className={className} />;
    case 'chat': return <MessageSquare className={className} />;
    default: return <Mail className={className} />;
  }
}

const channelColors: Record<string, string> = {
  email: 'bg-blue-100 text-blue-700',
  whatsapp: 'bg-green-100 text-green-700',
  sms: 'bg-purple-100 text-purple-700',
  chat: 'bg-orange-100 text-orange-700',
};

const statusConfig: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline'; className?: string }> = {
  draft: { label: 'Borrador', variant: 'secondary' },
  scheduled: { label: 'Programada', variant: 'outline', className: 'border-yellow-400 text-yellow-700 bg-yellow-50' },
  active: { label: 'Activa', variant: 'default', className: 'bg-green-600 hover:bg-green-700' },
  completed: { label: 'Completada', variant: 'secondary' },
  paused: { label: 'Pausada', variant: 'outline', className: 'border-orange-400 text-orange-700 bg-orange-50' },
};

// ─── Inbox Tab ─────────────────────────────────────────────────────
function InboxTab() {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterChannel, setFilterChannel] = useState('all');
  const [replyText, setReplyText] = useState('');

  const unreadCount = messages.filter(m => !m.read).length;
  const filtered = messages.filter(m => {
    const matchesSearch = m.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.preview.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesChannel = filterChannel === 'all' || m.channel === filterChannel;
    return matchesSearch && matchesChannel;
  });

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    toast({ title: '✅ Respuesta enviada', description: `Mensaje enviado a ${selectedMessage?.from}` });
    setReplyText('');
  };

  return (
    <div className="flex h-[calc(100vh-280px)] min-h-[600px] rounded-xl border border-border overflow-hidden bg-card">
      {/* Message List */}
      <div className={`${selectedMessage ? 'hidden md:flex' : 'flex'} flex-col w-full md:w-[380px] lg:w-[420px] border-r border-border`}>
        {/* List Header */}
        <div className="p-4 border-b border-border space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">Bandeja de Entrada</h3>
              {unreadCount > 0 && (
                <Badge variant="destructive" className="text-xs">{unreadCount}</Badge>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm"><RefreshCw className="w-4 h-4" /></Button>
              <Button variant="ghost" size="sm"><Filter className="w-4 h-4" /></Button>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar mensajes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9"
            />
          </div>
          <div className="flex gap-1">
            {['all', 'email', 'whatsapp', 'sms'].map((ch) => (
              <Button
                key={ch}
                variant={filterChannel === ch ? 'default' : 'ghost'}
                size="sm"
                className="text-xs h-7 px-2"
                onClick={() => setFilterChannel(ch)}
              >
                {ch === 'all' ? 'Todos' : ch === 'email' ? 'Email' : ch === 'whatsapp' ? 'WhatsApp' : 'SMS'}
              </Button>
            ))}
          </div>
        </div>

        {/* Message Items */}
        <div className="flex-1 overflow-y-auto">
          {filtered.map((msg) => (
            <button
              key={msg.id}
              onClick={() => setSelectedMessage(msg)}
              className={`w-full text-left p-4 border-b border-border/50 hover:bg-muted/50 transition-colors ${
                selectedMessage?.id === msg.id ? 'bg-muted/70' : ''
              } ${!msg.read ? 'bg-primary/5' : ''}`}
            >
              <div className="flex items-start gap-3">
                <Avatar className="w-9 h-9 flex-shrink-0">
                  <AvatarFallback className="text-xs bg-gradient-to-br from-blue-400 to-purple-500 text-white">
                    {msg.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-sm truncate ${!msg.read ? 'font-semibold' : 'font-medium'}`}>{msg.from}</span>
                    <span className="text-xs text-muted-foreground flex-shrink-0">{msg.time}</span>
                  </div>
                  {msg.subject && (
                    <div className={`text-sm truncate ${!msg.read ? 'font-medium' : 'text-muted-foreground'}`}>
                      {msg.subject}
                    </div>
                  )}
                  <div className="text-xs text-muted-foreground truncate mt-0.5">{msg.preview}</div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <Badge variant="outline" className={`text-[10px] px-1.5 py-0 h-5 ${channelColors[msg.channel]}`}>
                      {msg.channel === 'email' ? 'Email' : msg.channel === 'whatsapp' ? 'WhatsApp' : 'SMS'}
                    </Badge>
                    {msg.labels.map((label) => (
                      <Badge key={label} variant="secondary" className="text-[10px] px-1.5 py-0 h-5">{label}</Badge>
                    ))}
                    {msg.attachments && (
                      <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                        <Paperclip className="w-3 h-3" />{msg.attachments}
                      </span>
                    )}
                    {msg.starred && <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Message Detail */}
      <div className={`${selectedMessage ? 'flex' : 'hidden md:flex'} flex-col flex-1`}>
        {selectedMessage ? (
          <>
            {/* Detail Header */}
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setSelectedMessage(null)}>
                  ← Volver
                </Button>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm"><Archive className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm"><Trash2 className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm">
                    {selectedMessage.starred ? <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> : <StarOff className="w-4 h-4" />}
                  </Button>
                  <Button variant="ghost" size="sm"><MoreHorizontal className="w-4 h-4" /></Button>
                </div>
              </div>
              {selectedMessage.subject && (
                <h2 className="text-lg font-semibold">{selectedMessage.subject}</h2>
              )}
              <div className="flex items-center gap-3 mt-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white">
                    {selectedMessage.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{selectedMessage.from}</span>
                    <Badge variant="outline" className={`text-[10px] px-1.5 py-0 h-5 ${channelColors[selectedMessage.channel]}`}>
                      {selectedMessage.channel}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">{selectedMessage.fromEmail}</div>
                </div>
                <div className="text-xs text-muted-foreground">{selectedMessage.date} · {selectedMessage.time}</div>
              </div>
            </div>

            {/* Detail Body */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="whitespace-pre-wrap text-sm leading-relaxed">{selectedMessage.body}</div>
              {selectedMessage.attachments && (
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="text-xs font-medium text-muted-foreground mb-2">{selectedMessage.attachments} archivo(s) adjunto(s)</div>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: selectedMessage.attachments }).map((_, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-muted/50 text-sm">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <span>documento_{i + 1}.pdf</span>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0"><ArrowUpRight className="w-3 h-3" /></Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Reply Area */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2 mb-2">
                <Button variant="ghost" size="sm"><Reply className="w-4 h-4 mr-1" />Responder</Button>
                <Button variant="ghost" size="sm"><ReplyAll className="w-4 h-4 mr-1" />Resp. a todos</Button>
                <Button variant="ghost" size="sm"><Forward className="w-4 h-4 mr-1" />Reenviar</Button>
              </div>
              <div className="flex gap-2">
                <Textarea
                  placeholder="Escribe tu respuesta..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows={3}
                  className="flex-1 resize-none"
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm"><Bold className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm"><Italic className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm"><Link className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm"><List className="w-4 h-4" /></Button>
                  <Separator orientation="vertical" className="h-5 mx-1" />
                  <Button variant="ghost" size="sm"><Paperclip className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm"><Image className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm"><Smile className="w-4 h-4" /></Button>
                </div>
                <Button onClick={handleSendReply} disabled={!replyText.trim()}>
                  <Send className="w-4 h-4 mr-2" />Enviar
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <Inbox className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">Selecciona un mensaje</p>
              <p className="text-sm mt-1">Elige una conversación para ver los detalles</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Compose Tab ───────────────────────────────────────────────────
function ComposeTab() {
  const [channel, setChannel] = useState('email');
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const handleSend = () => {
    if (!to.trim() || !body.trim()) {
      toast({ title: '⚠️ Campos requeridos', description: 'Completa el destinatario y el mensaje.', variant: 'destructive' });
      return;
    }
    toast({ title: '✅ Mensaje enviado', description: `Mensaje enviado exitosamente por ${channel}.` });
    setTo(''); setSubject(''); setBody('');
  };

  const handleSchedule = () => {
    toast({ title: '📅 Mensaje programado', description: 'El mensaje se enviará en la fecha seleccionada.' });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Send className="w-5 h-5" />Nuevo Mensaje</CardTitle>
          <CardDescription>Redacta y envía mensajes por cualquier canal</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Channel Selector */}
          <div className="space-y-2">
            <Label>Canal de Envío</Label>
            <div className="flex gap-2">
              {[
                { value: 'email', label: 'Email', icon: Mail },
                { value: 'whatsapp', label: 'WhatsApp', icon: Phone },
                { value: 'sms', label: 'SMS', icon: Smartphone },
              ].map((ch) => (
                <button
                  key={ch.value}
                  onClick={() => setChannel(ch.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                    channel === ch.value ? 'border-primary bg-primary/5' : 'border-border hover:border-muted-foreground/30'
                  }`}
                >
                  <ch.icon className="w-4 h-4" />
                  {ch.label}
                </button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Template */}
          <div className="space-y-2">
            <Label>Plantilla (Opcional)</Label>
            <Select value={selectedTemplate} onValueChange={(val) => { setSelectedTemplate(val); if (val) toast({ title: 'Plantilla cargada', description: 'El contenido de la plantilla se ha aplicado.' }); }}>
              <SelectTrigger><SelectValue placeholder="Seleccionar plantilla..." /></SelectTrigger>
              <SelectContent>
                {templates.filter(t => t.type === channel).map((t) => (
                  <SelectItem key={t.id} value={String(t.id)}>{t.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* To */}
          <div className="space-y-2">
            <Label>Para</Label>
            <div className="flex gap-2">
              <Input
                placeholder={channel === 'email' ? 'email@ejemplo.com' : '+56 9 xxxx xxxx'}
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="flex-1"
              />
              <Button variant="outline" size="sm"><Users className="w-4 h-4 mr-1" />Contactos</Button>
            </div>
          </div>

          {/* Subject (email only) */}
          {channel === 'email' && (
            <div className="space-y-2">
              <Label>Asunto</Label>
              <Input placeholder="Asunto del mensaje" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
          )}

          {/* Body */}
          <div className="space-y-2">
            <Label>Mensaje</Label>
            <div className="border border-border rounded-lg overflow-hidden">
              {channel === 'email' && (
                <div className="flex items-center gap-1 p-2 border-b border-border bg-muted/30">
                  <Button variant="ghost" size="sm" className="h-7"><Bold className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm" className="h-7"><Italic className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm" className="h-7"><Link className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm" className="h-7"><List className="w-4 h-4" /></Button>
                  <Separator orientation="vertical" className="h-5 mx-1" />
                  <Button variant="ghost" size="sm" className="h-7"><Image className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="sm" className="h-7"><Smile className="w-4 h-4" /></Button>
                </div>
              )}
              <Textarea
                placeholder="Escribe tu mensaje aquí..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={channel === 'email' ? 10 : 5}
                className="border-0 focus-visible:ring-0 resize-none rounded-none"
              />
            </div>
            {channel !== 'email' && (
              <p className="text-xs text-muted-foreground">{body.length}/160 caracteres</p>
            )}
          </div>

          {/* Attachments */}
          {channel === 'email' && (
            <div className="space-y-2">
              <Button variant="outline"><Paperclip className="w-4 h-4 mr-2" />Adjuntar Archivos</Button>
            </div>
          )}

          {/* Actions */}
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleSchedule}><Clock className="w-4 h-4 mr-2" />Programar</Button>
              <Button variant="ghost"><FileText className="w-4 h-4 mr-2" />Guardar Borrador</Button>
            </div>
            <Button onClick={handleSend}><Send className="w-4 h-4 mr-2" />Enviar Ahora</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Campaigns Tab ─────────────────────────────────────────────────
function CampaignsTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filtered = campaigns.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || c.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalSent = campaigns.reduce((sum, c) => sum + c.sent, 0);
  const totalOpened = campaigns.reduce((sum, c) => sum + c.opened, 0);
  const totalClicked = campaigns.reduce((sum, c) => sum + c.clicked, 0);

  return (
    <div className="space-y-6">
      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Campañas Activas', value: campaigns.filter(c => c.status === 'active').length.toString(), icon: Megaphone, desc: 'En ejecución' },
          { label: 'Total Enviados', value: totalSent.toLocaleString(), icon: Send, desc: 'Mensajes' },
          { label: 'Tasa de Apertura', value: totalSent > 0 ? `${Math.round((totalOpened / totalSent) * 100)}%` : '0%', icon: Eye, desc: 'Promedio global' },
          { label: 'Tasa de Clicks', value: totalOpened > 0 ? `${Math.round((totalClicked / totalOpened) * 100)}%` : '0%', icon: Target, desc: 'Sobre aperturas' },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Campaign List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Campañas</CardTitle>
            <CardDescription>{campaigns.length} campañas en total</CardDescription>
          </div>
          <Button><Plus className="w-4 h-4 mr-2" />Nueva Campaña</Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Buscar campañas..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-9" />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[160px]"><SelectValue placeholder="Estado" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="active">Activa</SelectItem>
                <SelectItem value="scheduled">Programada</SelectItem>
                <SelectItem value="draft">Borrador</SelectItem>
                <SelectItem value="completed">Completada</SelectItem>
                <SelectItem value="paused">Pausada</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            {filtered.map((campaign) => {
              const openRate = campaign.sent > 0 ? Math.round((campaign.opened / campaign.sent) * 100) : 0;
              const clickRate = campaign.opened > 0 ? Math.round((campaign.clicked / campaign.opened) * 100) : 0;
              const sc = statusConfig[campaign.status];

              return (
                <div key={campaign.id} className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${channelColors[campaign.type]}`}>
                        <ChannelIcon channel={campaign.type} className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {campaign.name}
                          <Badge variant={sc.variant} className={sc.className || ''}>{sc.label}</Badge>
                        </div>
                        {campaign.subject && <div className="text-sm text-muted-foreground mt-0.5">{campaign.subject}</div>}
                        <div className="text-xs text-muted-foreground mt-1">{campaign.date || 'Sin programar'} · {campaign.recipients.toLocaleString()} destinatarios</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {campaign.status === 'active' && <Button variant="ghost" size="sm"><Pause className="w-4 h-4" /></Button>}
                      {campaign.status === 'paused' && <Button variant="ghost" size="sm"><Play className="w-4 h-4" /></Button>}
                      <Button variant="ghost" size="sm"><Edit className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="sm"><Copy className="w-4 h-4" /></Button>
                    </div>
                  </div>

                  {campaign.sent > 0 && (
                    <div className="grid grid-cols-4 gap-4 mt-4 pt-3 border-t border-border/50">
                      <div>
                        <div className="text-xs text-muted-foreground">Enviados</div>
                        <div className="font-semibold text-sm">{campaign.sent.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Abiertos</div>
                        <div className="font-semibold text-sm">{campaign.opened.toLocaleString()} <span className="text-xs text-muted-foreground font-normal">({openRate}%)</span></div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Clicks</div>
                        <div className="font-semibold text-sm">{campaign.clicked.toLocaleString()} <span className="text-xs text-muted-foreground font-normal">({clickRate}%)</span></div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Conversión</div>
                        <div className="w-full h-2 bg-muted rounded-full mt-1.5">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${openRate}%` }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Templates Tab ─────────────────────────────────────────────────
function TemplatesTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = Array.from(new Set(templates.map(t => t.category)));

  const filtered = templates.filter(t =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5" />Plantillas de Mensajes</CardTitle>
            <CardDescription>{templates.length} plantillas disponibles</CardDescription>
          </div>
          <Button><Plus className="w-4 h-4 mr-2" />Nueva Plantilla</Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Buscar plantillas..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-9" />
          </div>

          {categories.map((cat) => {
            const catTemplates = filtered.filter(t => t.category === cat);
            if (catTemplates.length === 0) return null;
            return (
              <div key={cat}>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">{cat}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {catTemplates.map((template) => (
                    <div key={template.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${channelColors[template.type]}`}>
                          <ChannelIcon channel={template.type} className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{template.name}</div>
                          <div className="text-xs text-muted-foreground">{template.lastUsed} · {template.uses} usos</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="sm"><Edit className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="sm"><Copy className="w-4 h-4" /></Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Automations Tab ───────────────────────────────────────────────
function AutomationsTab() {
  const automations = [
    { id: 1, name: 'Bienvenida Nuevo Cliente', trigger: 'Cliente registrado', actions: ['Enviar email de bienvenida', 'Crear tarea de seguimiento', 'Asignar a vendedor'], active: true, runs: 1234, channel: 'email' },
    { id: 2, name: 'Carrito Abandonado', trigger: 'Carrito sin actividad 1h', actions: ['Enviar email recordatorio', 'Notificar WhatsApp a las 24h', 'Cupón 10% a las 48h'], active: true, runs: 567, channel: 'email' },
    { id: 3, name: 'Seguimiento Post-Venta', trigger: 'Pedido entregado', actions: ['Email de agradecimiento', 'Solicitar reseña a los 7 días', 'Ofrecer producto complementario'], active: true, runs: 890, channel: 'email' },
    { id: 4, name: 'Lead Inactivo', trigger: 'Sin actividad 14 días', actions: ['Email de re-engagement', 'Notificar al vendedor', 'Mover a etapa "Frío"'], active: false, runs: 234, channel: 'email' },
    { id: 5, name: 'Cumpleaños del Cliente', trigger: 'Fecha de cumpleaños', actions: ['Enviar felicitación WhatsApp', 'Enviar cupón especial'], active: true, runs: 145, channel: 'whatsapp' },
    { id: 6, name: 'Alerta Stock Bajo', trigger: 'Stock ≤ umbral', actions: ['Email al administrador', 'SMS urgente', 'Crear tarea de reabastecimiento'], active: true, runs: 78, channel: 'sms' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2"><Zap className="w-5 h-5" />Automatizaciones</CardTitle>
            <CardDescription>Flujos automáticos de comunicación</CardDescription>
          </div>
          <Button><Plus className="w-4 h-4 mr-2" />Nueva Automatización</Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {automations.map((auto) => (
              <div key={auto.id} className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${auto.active ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'}`}>
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium flex items-center gap-2">
                        {auto.name}
                        <Badge variant={auto.active ? 'default' : 'secondary'} className={auto.active ? 'bg-green-600 hover:bg-green-700' : ''}>
                          {auto.active ? 'Activa' : 'Inactiva'}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-0.5">
                        <span className="font-medium">Trigger:</span> {auto.trigger}
                      </div>
                      <div className="mt-2 space-y-1">
                        {auto.actions.map((action, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-[10px] font-medium">{i + 1}</div>
                            {action}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-sm font-medium">{auto.runs.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">ejecuciones</div>
                    </div>
                    <Switch defaultChecked={auto.active} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Main Communications Page ──────────────────────────────────────
const commsTabs = [
  { value: 'inbox', label: 'Bandeja', icon: Inbox },
  { value: 'compose', label: 'Redactar', icon: Send },
  { value: 'campaigns', label: 'Campañas', icon: Megaphone },
  { value: 'templates', label: 'Plantillas', icon: FileText },
  { value: 'automations', label: 'Automatizaciones', icon: Zap },
];

export default function Communications() {
  const unreadCount = messages.filter(m => !m.read).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Comunicaciones</h1>
          <p className="text-muted-foreground mt-2">Gestiona toda tu comunicación desde un solo lugar</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'No leídos', value: unreadCount, icon: Mail },
              { label: 'Campañas', value: campaigns.filter(c => c.status === 'active').length, icon: Megaphone },
              { label: 'Automatizaciones', value: 5, icon: Zap },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border">
                <stat.icon className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="text-lg font-bold leading-none">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="inbox" className="space-y-6">
        <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1 rounded-xl">
          {commsTabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm px-4 py-2">
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.value === 'inbox' && unreadCount > 0 && (
                <Badge variant="destructive" className="text-[10px] px-1.5 py-0 h-4">{unreadCount}</Badge>
              )}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="inbox"><InboxTab /></TabsContent>
        <TabsContent value="compose"><ComposeTab /></TabsContent>
        <TabsContent value="campaigns"><CampaignsTab /></TabsContent>
        <TabsContent value="templates"><TemplatesTab /></TabsContent>
        <TabsContent value="automations"><AutomationsTab /></TabsContent>
      </Tabs>
    </div>
  );
}

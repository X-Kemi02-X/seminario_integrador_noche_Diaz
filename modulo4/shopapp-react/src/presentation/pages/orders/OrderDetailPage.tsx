// src/presentation/pages/orders/OrderDetailPage.tsx
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, Package } from 'lucide-react'

import { Button } from '@/presentation/components/ui/button'
import { Card, CardContent, CardHeader } from '@/presentation/components/ui/card'
import { Separator } from '@/presentation/components/ui/separator'
import { Skeleton } from '@/presentation/components/ui/skeleton'
import { StatusBadge } from '@/presentation/components/StatusBadge'
import { useOrderStore } from '@/presentation/store/order.store'
import { formatPrice, formatDate } from '@/presentation/utils/formatters'

export default function OrderDetailPage() {
  const { id } = useParams<{ id: string }>()
  const orderId = Number(id)

  const order = useOrderStore((s) => s.currentOrder)
  const isLoading = useOrderStore((s) => s.isLoading)
  const error = useOrderStore((s) => s.error)
  const fetchOrderById = useOrderStore((s) => s.fetchOrderById)

  useEffect(() => {
    if (!Number.isNaN(orderId)) {
      fetchOrderById(orderId)
    }
  }, [orderId, fetchOrderById])

  if (isLoading) {
    return (
      <div className="container max-w-2xl py-8">
        <Skeleton className="mb-6 h-8 w-48" />
        <Card>
          <CardHeader>
            <Skeleton className="h-5 w-32" />
          </CardHeader>
          <CardContent className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error || !order) {
    return (
      <div className="container max-w-2xl py-24 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <Package className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold">Orden no encontrada</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {error ?? 'No pudimos cargar los detalles de esta orden.'}
        </p>
        <Button variant="outline" className="mt-6" asChild>
          <Link to="/orders">Volver a mis pedidos</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container max-w-2xl py-8">
      <Button variant="ghost" size="sm" className="mb-6 -ml-2 gap-1 text-muted-foreground" asChild>
        <Link to="/orders">
          <ChevronLeft className="h-4 w-4" />
          Mis pedidos
        </Link>
      </Button>

      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Pedido #{String(order.id).padStart(4, '0')}
        </h1>
        <StatusBadge status={order.status} />
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{formatDate(order.created_at)}</span>
            <span>
              {order.num_items} {order.num_items === 1 ? 'artículo' : 'artículos'}
            </span>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4">
          <ul className="divide-y">
            {order.items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border bg-muted">
                    {item.product.image_url && (
                      <img
                        src={item.product.image_url}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="text-sm">
                    <p className="font-medium leading-snug">{item.product.name}</p>
                    <p className="text-muted-foreground">
                      {item.quantity} × {formatPrice(item.unit_price)}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-semibold">{formatPrice(item.subtotal)}</span>
              </li>
            ))}
          </ul>

          <Separator className="my-4" />

          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total</span>
            <span className="text-lg font-bold">{formatPrice(order.total)}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// src/presentation/pages/admin/AdminUsersPage.tsx
import { useEffect, useState, useRef } from 'react'
import {
  ShieldCheck,
  ShieldOff,
  UserX,
  UserCheck,
  Search,
  ChevronLeft,
  ChevronRight,
  Users,
  AlertTriangle,
} from 'lucide-react'
import { toast } from 'sonner'

import { AdminShell } from '@/presentation/components/AdminShell'
import { Button } from '@/presentation/components/ui/button'
import { Input } from '@/presentation/components/ui/input'
import { Skeleton } from '@/presentation/components/ui/skeleton'
import { Switch } from '@/presentation/components/ui/switch'
import { Avatar, AvatarFallback, AvatarImage } from '@/presentation/components/ui/avatar'
import { Badge } from '@/presentation/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/presentation/components/ui/tooltip'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/presentation/components/ui/table'
import { useAdminStore } from '@/presentation/store/admin.store'
import { useAuthStore } from '@/presentation/store/auth.store'
import { ApiException } from '@/domain/exceptions/api.exception'
import { getDisplayName } from '@/domain/services/user.service'
import type { AdminUser } from '@/domain/entities/admin-user.entity'

const PAGE_SIZE = 12 // mismo page_size fijo usado por el resto del panel (módulo 10+)
const DEBOUNCE_MS = 300 // mismo debounce usado en la búsqueda del catálogo (módulo 5)

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 0 || parts[0] === '') return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function AdminUsersPage() {
  const users = useAdminStore((s) => s.users)
  const isLoadingUsers = useAdminStore((s) => s.isLoadingUsers)
  const usersError = useAdminStore((s) => s.usersError)
  const usersTotal = useAdminStore((s) => s.usersTotal)
  const fetchUsers = useAdminStore((s) => s.fetchUsers)
  const setUsersSearch = useAdminStore((s) => s.setUsersSearch)
  const setUsersPage = useAdminStore((s) => s.setUsersPage)
  const updateUserStaffStatus = useAdminStore((s) => s.updateUserStaffStatus)
  const toggleUserActive = useAdminStore((s) => s.toggleUserActive)

  const currentUserId = useAuthStore((s) => s.user?.user_id)

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [togglingActiveId, setTogglingActiveId] = useState<number | null>(null)
  const [togglingStaffId, setTogglingStaffId] = useState<number | null>(null)

  const totalPages = Math.max(1, Math.ceil(usersTotal / PAGE_SIZE))

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setDebouncedSearch(search)
      setPage(1)
    }, DEBOUNCE_MS)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [search])

  useEffect(() => {
    fetchUsers(page, debouncedSearch)
  }, [fetchUsers, page, debouncedSearch])

  function handleSearchChange(value: string) {
    setSearch(value)
    setUsersSearch(value)
  }

  function handlePageChange(next: number) {
    setPage(next)
    setUsersPage(next)
  }

  async function handleToggleStaff(user: AdminUser) {
    setTogglingStaffId(user.id)
    try {
      await updateUserStaffStatus(user.id, !user.is_staff)
      toast.success('Rol actualizado', {
        description: `${getDisplayName(user)} ahora ${
          !user.is_staff ? 'es administrador (staff).' : 'ya no es administrador (staff).'
        }`,
      })
    } catch (err) {
      const message =
        err instanceof ApiException ? err.detail : 'No se pudo actualizar el rol del usuario.'
      toast.error('Error', { description: message })
    } finally {
      setTogglingStaffId(null)
    }
  }

  async function handleToggleActive(user: AdminUser) {
    setTogglingActiveId(user.id)
    try {
      const isActive = await toggleUserActive(user.id)
      toast.success('Estado actualizado', {
        description: `"${getDisplayName(user)}" ${
          isActive ? 'fue activado.' : 'fue desactivado.'
        }`,
      })
    } catch (err) {
      const message =
        err instanceof ApiException ? err.detail : 'No se pudo cambiar el estado del usuario.'
      toast.error('Error', { description: message })
    } finally {
      setTogglingActiveId(null)
    }
  }

  return (
    <AdminShell>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Usuarios</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Gestiona los usuarios de la plataforma, su rol de administrador y su estado.
          </p>
        </div>
      </div>

      <div className="relative mb-4 max-w-sm">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          className="pl-9"
          placeholder="Buscar por usuario, nombre o email..."
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>

      {usersError && (
        <div className="mb-4 rounded-md border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {usersError}
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">Avatar</TableHead>
              <TableHead>Usuario</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Registro</TableHead>
              <TableHead className="text-center">Órdenes</TableHead>
              <TableHead className="text-center">Staff</TableHead>
              <TableHead className="text-center">Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoadingUsers &&
              Array.from({ length: PAGE_SIZE }).map((_, i) => (
                <TableRow key={`skeleton-${i}`}>
                  <TableCell>
                    <Skeleton className="h-9 w-9 rounded-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-40" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-48" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-20" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Skeleton className="mx-auto h-4 w-8" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Skeleton className="mx-auto h-5 w-9 rounded-full" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Skeleton className="mx-auto h-5 w-9 rounded-full" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="ml-auto h-8 w-24" />
                  </TableCell>
                </TableRow>
              ))}

            {!isLoadingUsers && users.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} className="py-12 text-center">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <Users className="h-10 w-10" />
                    <p className="text-sm font-medium">
                      {debouncedSearch
                        ? `Sin resultados para "${debouncedSearch}"`
                        : 'No hay usuarios registrados'}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}

            {!isLoadingUsers &&
              users.map((u) => {
                const isSelf = u.id === currentUserId
                return (
                  <TableRow key={u.id}>
                    <TableCell>
                      <Avatar className="h-9 w-9">
                        {u.avatar_url && <AvatarImage src={u.avatar_url} alt={u.username} />}
                        <AvatarFallback>{getInitials(getDisplayName(u))}</AvatarFallback>
                      </Avatar>
                    </TableCell>

                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <span className="max-w-[180px] truncate">{getDisplayName(u)}</span>
                        {isSelf && (
                          <Badge variant="secondary" className="text-xs">
                            Tú
                          </Badge>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">@{u.username}</span>
                    </TableCell>

                    <TableCell className="max-w-[220px] truncate text-sm text-muted-foreground">
                      {u.email}
                    </TableCell>

                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(u.date_joined).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </TableCell>

                    <TableCell className="text-center text-sm">{u.num_orders}</TableCell>

                    <TableCell className="text-center">
                      <Switch
                        checked={u.is_staff}
                        onCheckedChange={() => handleToggleStaff(u)}
                        disabled={isSelf || togglingStaffId === u.id}
                        aria-label={`${u.is_staff ? 'Quitar' : 'Otorgar'} rol staff a ${u.username}`}
                      />
                    </TableCell>

                    <TableCell className="text-center">
                      <Badge variant={u.is_active ? 'default' : 'destructive'} className="text-xs">
                        {u.is_active ? 'Activo' : 'Inactivo'}
                      </Badge>
                    </TableCell>

                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <TooltipProvider delayDuration={200}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => handleToggleStaff(u)}
                                disabled={isSelf || togglingStaffId === u.id}
                              >
                                {u.is_staff ? (
                                  <ShieldOff className="h-4 w-4" />
                                ) : (
                                  <ShieldCheck className="h-4 w-4" />
                                )}
                                <span className="sr-only">
                                  {u.is_staff ? 'Quitar staff' : 'Otorgar staff'}
                                </span>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              {isSelf
                                ? 'No puedes modificar tu propio rol'
                                : u.is_staff
                                  ? 'Quitar rol de administrador'
                                  : 'Otorgar rol de administrador'}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider delayDuration={200}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className={
                                  u.is_active
                                    ? 'h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive'
                                    : 'h-8 w-8 text-emerald-600 hover:bg-emerald-500/10 hover:text-emerald-600'
                                }
                                onClick={() => handleToggleActive(u)}
                                disabled={isSelf || togglingActiveId === u.id}
                              >
                                {u.is_active ? (
                                  <UserX className="h-4 w-4" />
                                ) : (
                                  <UserCheck className="h-4 w-4" />
                                )}
                                <span className="sr-only">
                                  {u.is_active ? 'Desactivar' : 'Activar'} usuario
                                </span>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              {isSelf ? (
                                <span className="flex items-center gap-1">
                                  <AlertTriangle className="h-3 w-3" />
                                  No puedes desactivarte a ti mismo
                                </span>
                              ) : u.is_active ? (
                                'Desactivar usuario'
                              ) : (
                                'Activar usuario'
                              )}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </div>

      {!isLoadingUsers && totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Mostrando{' '}
            <span className="font-medium">
              {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, usersTotal)}
            </span>{' '}
            de <span className="font-medium">{usersTotal}</span> usuarios
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => handlePageChange(Math.max(1, page - 1))}
              disabled={page === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Página anterior</span>
            </Button>
            <span className="text-sm">
              {page} / {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Página siguiente</span>
            </Button>
          </div>
        </div>
      )}
    </AdminShell>
  )
}

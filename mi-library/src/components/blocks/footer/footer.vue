<template>
  <div class="space-y-10">
    <!-- 01: Landing footer -->
    <footer class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <div class="grid gap-6 px-6 py-8 md:grid-cols-2 lg:grid-cols-4">
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <div class="avatar avatar-sm avatar-rounded avatar-initials">K</div>
            <div>
              <p class="text-text text-sm font-semibold">KamUI</p>
              <p class="text-text/60 text-xs">Design system</p>
            </div>
          </div>
          <p class="text-text/70 text-sm">
            Crea interfaces modernas con componentes listos para producción.
          </p>
          <div class="flex gap-2">
            <button class="button button-ghost" type="button">Twitter</button>
            <button class="button button-ghost" type="button">GitHub</button>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-text text-sm font-semibold">Producto</p>
          <button class="button button-ghost" type="button">Features</button>
          <button class="button button-ghost" type="button">Precios</button>
          <button class="button button-ghost" type="button">Changelog</button>
        </div>
        <div class="space-y-2">
          <p class="text-text text-sm font-semibold">Recursos</p>
          <button class="button button-ghost" type="button">Docs</button>
          <button class="button button-ghost" type="button">Guides</button>
          <button class="button button-ghost" type="button">Soporte</button>
        </div>
        <div class="space-y-2">
          <p class="text-text text-sm font-semibold">Comunidad</p>
          <button class="button button-ghost" type="button">Blog</button>
          <button class="button button-ghost" type="button">Eventos</button>
          <button class="button button-ghost" type="button">Foro</button>
        </div>
      </div>
      <div
        class="flex flex-wrap items-center justify-between gap-3 border-t border-current/10 px-6 py-4"
      >
        <p class="text-text/60 text-xs">© 2026 KamUI. Todos los derechos.</p>
        <div class="flex gap-2">
          <button class="button button-ghost" type="button">Privacidad</button>
          <button class="button button-ghost" type="button">Términos</button>
        </div>
      </div>
    </footer>

    <!-- 02: E-commerce footer -->
    <footer class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <div class="grid gap-6 px-6 py-8 lg:grid-cols-4">
        <div class="space-y-3">
          <p class="text-text text-sm font-semibold">Store</p>
          <p class="text-text/70 text-sm">
            Envíos rápidos, devoluciones simples y compras seguras.
          </p>
          <span class="badge badge-success badge-pill badge-sm"
            >Entrega 24h</span
          >
        </div>
        <div class="space-y-2">
          <p class="text-text text-sm font-semibold">Compras</p>
          <button class="button button-ghost" type="button">Novedades</button>
          <button class="button button-ghost" type="button">Ofertas</button>
          <button class="button button-ghost" type="button">Gift cards</button>
        </div>
        <div class="space-y-2">
          <p class="text-text text-sm font-semibold">Atención</p>
          <button class="button button-ghost" type="button">Soporte</button>
          <button class="button button-ghost" type="button">Seguimiento</button>
          <button class="button button-ghost" type="button">
            Devoluciones
          </button>
        </div>
        <div class="space-y-2">
          <p class="text-text text-sm font-semibold">Cuenta</p>
          <button class="button button-ghost" type="button">Mis pedidos</button>
          <button class="button button-ghost" type="button">Wishlist</button>
          <button class="button button-ghost" type="button">Suscripción</button>
        </div>
      </div>
      <div
        class="flex flex-wrap items-center justify-between gap-3 border-t border-current/10 px-6 py-4"
      >
        <p class="text-text/60 text-xs">Pagos seguros · Visa · MasterCard</p>
        <div class="flex gap-2">
          <button class="button button-ghost" type="button">Facebook</button>
          <button class="button button-ghost" type="button">Instagram</button>
        </div>
      </div>
    </footer>

    <!-- 03: SaaS dashboard footer -->
    <footer class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <div class="flex flex-wrap items-center justify-between gap-4 px-6 py-6">
        <div class="flex items-center gap-3">
          <span class="avatar avatar-sm avatar-rounded avatar-initials">D</span>
          <div>
            <p class="text-text text-sm font-semibold">Dashboard</p>
            <p class="text-text/60 text-xs">Estado operativo</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="badge badge-success badge-pill badge-sm"
            >Uptime 99.9%</span
          >
          <span class="badge badge-info badge-pill badge-sm">Status OK</span>
        </div>
        <div class="flex gap-2">
          <button class="button button-ghost" type="button">Soporte</button>
          <button
            class="button button-outlined button-outlined-secondary"
            type="button"
          >
            Documentación
          </button>
        </div>
      </div>
    </footer>

    <!-- 04: Blog footer -->
    <footer class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <div class="grid gap-6 px-6 py-8 md:grid-cols-2">
        <div class="space-y-3">
          <p class="text-text text-sm font-semibold">Tech Blog</p>
          <p class="text-text/70 text-sm">
            Ideas, guías y tendencias para equipos de producto.
          </p>
        </div>
        <div class="space-y-3">
          <p class="text-text text-sm font-semibold">Newsletter</p>
          <div class="flex flex-wrap gap-2">
            <input
              class="form-input form-input-sm flex-1"
              placeholder="Tu email"
            />
            <button class="button button-primary" type="button">
              Suscribir
            </button>
          </div>
        </div>
      </div>
      <div
        class="flex flex-wrap items-center justify-between gap-3 border-t border-current/10 px-6 py-4"
      >
        <p class="text-text/60 text-xs">© 2026 Tech Blog</p>
        <div class="flex gap-2">
          <button class="button button-ghost" type="button">RSS</button>
          <button class="button button-ghost" type="button">LinkedIn</button>
        </div>
      </div>
    </footer>

    <!-- 05: Minimal footer -->
    <footer class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <div class="flex flex-wrap items-center justify-between gap-3 px-6 py-5">
        <p class="text-text/60 text-xs">© 2026 Minimal Studio</p>
        <div class="flex items-center gap-2">
          <button class="button button-ghost" type="button">Privacidad</button>
          <button class="button button-ghost" type="button">Términos</button>
        </div>
      </div>
    </footer>
  </div>
</template>

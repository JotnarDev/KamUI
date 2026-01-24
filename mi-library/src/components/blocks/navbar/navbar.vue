<template>
  <div class="space-y-10">
    <!-- 01: Landing Page -->
    <header class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <nav class="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-3">
            <div class="avatar avatar-sm avatar-rounded avatar-initials">K</div>
            <div>
              <p class="text-text text-sm font-semibold">KamUI</p>
              <p class="text-text/60 text-xs">Landing</p>
            </div>
          </div>
          <div class="hidden items-center gap-2 md:flex">
            <button class="button button-ghost" type="button">Features</button>
            <button class="button button-ghost" type="button">Precios</button>
            <button class="button button-ghost" type="button">Clientes</button>
            <button class="button button-ghost" type="button">Blog</button>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button class="button button-ghost" type="button">Login</button>
          <button class="button button-primary" type="button">Empezar</button>
        </div>
      </nav>
    </header>

    <!-- 02: E-commerce -->
    <header class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <nav class="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div class="flex items-center gap-4">
          <div class="avatar avatar-sm avatar-rounded avatar-initials">S</div>
          <div class="hidden items-center gap-2 md:flex">
            <button class="button button-ghost" type="button">Novedades</button>
            <button class="button button-ghost" type="button">Mujer</button>
            <button class="button button-ghost" type="button">Hombre</button>
            <button class="button button-ghost" type="button">Ofertas</button>
            <span class="badge badge-warning badge-pill badge-sm">-30%</span>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-end gap-3">
          <div class="hidden w-full max-w-xs lg:block">
            <input
              class="form-input form-input-sm"
              placeholder="Buscar productos"
            />
          </div>
          <button class="button button-ghost" type="button">Wishlist</button>
          <button class="button button-primary" type="button">Carrito</button>
        </div>
      </nav>
    </header>

    <!-- 03: Dashboard -->
    <header class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <nav class="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-3">
            <div class="avatar avatar-sm avatar-rounded avatar-initials">D</div>
            <span class="text-text text-sm font-semibold">Dashboard</span>
            <span class="badge badge-default badge-pill badge-sm">Pro</span>
          </div>
          <div class="hidden items-center gap-2 md:flex">
            <button class="button button-ghost" type="button">Resumen</button>
            <button class="button button-ghost" type="button">Reportes</button>
            <button class="button button-ghost" type="button">Alertas</button>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button
            class="button button-outlined button-outlined-secondary"
            type="button"
          >
            Exportar
          </button>
          <button class="button button-primary" type="button">
            Nuevo reporte
          </button>
          <span class="avatar avatar-sm avatar-rounded avatar-initials"
            >MG</span
          >
        </div>
      </nav>
    </header>

    <!-- 04: SaaS Marketing -->
    <header class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <nav class="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div class="flex items-center gap-4">
          <div class="avatar avatar-sm avatar-rounded avatar-initials">S</div>
          <div class="hidden items-center gap-2 md:flex">
            <button class="button button-ghost" type="button">Casos</button>
            <button class="button button-ghost" type="button">Seguridad</button>
            <button class="button button-ghost" type="button">
              Integraciones
            </button>
            <button class="button button-ghost" type="button">Docs</button>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button class="button button-ghost" type="button">Contactar</button>
          <button class="button button-primary" type="button">
            Agendar demo
          </button>
        </div>
      </nav>
    </header>

    <!-- 05: Documentation -->
    <header class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <nav class="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div class="flex items-center gap-4">
          <div class="avatar avatar-sm avatar-rounded avatar-initials">D</div>
          <div class="hidden items-center gap-2 md:flex">
            <button class="button button-ghost" type="button">Guías</button>
            <button class="button button-ghost" type="button">API</button>
            <button class="button button-ghost" type="button">SDKs</button>
          </div>
        </div>
        <div class="flex flex-1 items-center justify-end gap-3">
          <div class="hidden w-full max-w-xs lg:block">
            <input class="form-input form-input-sm" placeholder="Buscar docs" />
          </div>
          <button
            class="button button-outlined button-outlined-secondary"
            type="button"
          >
            Cambios
          </button>
        </div>
      </nav>
    </header>

    <!-- 06: Portfolio -->
    <header class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <nav class="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div class="flex items-center gap-3">
          <span class="text-text text-sm font-semibold">María Studio</span>
        </div>
        <div class="flex items-center gap-2">
          <button class="button button-ghost" type="button">Work</button>
          <button class="button button-ghost" type="button">Servicios</button>
          <button class="button button-ghost" type="button">Sobre mí</button>
          <button class="button button-primary" type="button">Contacto</button>
        </div>
      </nav>
    </header>

    <!-- 07: Marketplace -->
    <header class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <nav class="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div class="flex items-center gap-4">
          <div class="avatar avatar-sm avatar-rounded avatar-initials">M</div>
          <div class="dropdown group">
            <button class="dropdown-trigger" type="button">
              Categorías
              <svg class="dropdown-caret" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
            <div
              class="dropdown-menu hidden group-focus-within:block group-hover:block"
            >
              <button class="dropdown-item" type="button">UI Kits</button>
              <button class="dropdown-item" type="button">Templates</button>
              <button class="dropdown-item" type="button">Icons</button>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button class="button button-ghost" type="button">Vender</button>
          <button class="button button-primary" type="button">Comprar</button>
        </div>
      </nav>
    </header>

    <!-- 08: Blog -->
    <header class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <nav class="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div class="flex items-center gap-3">
          <span class="text-text text-sm font-semibold">Tech Blog</span>
          <span class="badge badge-info badge-pill badge-sm">Nuevo</span>
        </div>
        <div class="flex items-center gap-2">
          <button class="button button-ghost" type="button">Artículos</button>
          <button class="button button-ghost" type="button">News</button>
          <button class="button button-ghost" type="button">Newsletter</button>
        </div>
      </nav>
    </header>

    <!-- 09: App Header -->
    <header class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <nav class="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div class="flex items-center gap-3">
          <button class="button button-ghost" type="button">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <span class="text-text text-sm font-semibold">Workspace</span>
        </div>
        <div class="flex items-center gap-3">
          <button class="button button-ghost" type="button">
            Notificaciones
          </button>
          <span class="avatar avatar-sm avatar-rounded avatar-initials"
            >AL</span
          >
        </div>
      </nav>
    </header>

    <!-- 10: Minimal -->
    <header class="bg-bg-elevated w-full rounded-2xl border border-current/10">
      <nav class="flex items-center justify-between gap-4 px-6 py-4">
        <span class="text-text text-sm font-semibold">Minimal</span>
        <div class="flex items-center gap-2">
          <button class="button button-ghost" type="button">Login</button>
          <button class="button button-primary" type="button">Registro</button>
        </div>
      </nav>
    </header>
  </div>
</template>

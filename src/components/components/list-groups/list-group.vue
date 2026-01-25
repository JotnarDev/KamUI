<template>
  <div class="space-y-8 p-6">
    <h1 class="text-3xl font-bold">List Groups - Todas las Variantes</h1>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Base</h2>
      <div class="list-group">
        <button class="list-group-item" type="button">
          <span class="list-group-title">Perfil</span>
          <span class="list-group-meta">⌘P</span>
        </button>
        <button class="list-group-item list-group-item-active" type="button">
          <span class="list-group-title">Notificaciones</span>
          <span class="list-group-meta">3 nuevas</span>
        </button>
        <button class="list-group-item" type="button">
          <span class="list-group-title">Seguridad</span>
        </button>
        <button class="list-group-item list-group-item-disabled" type="button">
          <span class="list-group-title">Facturación</span>
        </button>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Con iconos</h2>
      <div class="list-group">
        <button class="list-group-item" type="button">
          <span class="list-group-content">
            <svg class="list-group-icon" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0"
              />
            </svg>
            <span>
              <div class="list-group-title">Cuenta</div>
              <div class="list-group-text">Datos personales y acceso</div>
            </span>
          </span>
          <span class="list-group-meta">Editar</span>
        </button>
        <button class="list-group-item" type="button">
          <span class="list-group-content">
            <svg class="list-group-icon" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6l4 2"
              />
            </svg>
            <span>
              <div class="list-group-title">Actividad</div>
              <div class="list-group-text">Historial reciente</div>
            </span>
          </span>
          <span class="list-group-meta">Ver</span>
        </button>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Con badges</h2>
      <div class="list-group">
        <button class="list-group-item" type="button">
          <span class="list-group-title">Mensajes</span>
          <span class="list-group-badge">8</span>
        </button>
        <button class="list-group-item" type="button">
          <span class="list-group-title">Tareas</span>
          <span class="list-group-badge">12</span>
        </button>
        <button class="list-group-item" type="button">
          <span class="list-group-title">Alertas</span>
          <span class="list-group-badge">2</span>
        </button>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Variantes</h2>
      <div class="space-y-4">
        <div class="list-group list-group-soft">
          <button class="list-group-item" type="button">Soft variant</button>
          <button class="list-group-item list-group-item-active" type="button">
            Activo
          </button>
        </div>
        <div class="list-group list-group-outlined">
          <button class="list-group-item" type="button">Outlined</button>
          <button class="list-group-item list-group-item-muted" type="button">
            Muted
          </button>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Tamaños</h2>
      <div class="space-y-4">
        <div class="list-group list-group-compact">
          <button class="list-group-item" type="button">Compacto</button>
          <button class="list-group-item" type="button">Item</button>
        </div>
        <div class="list-group">
          <button class="list-group-item" type="button">Default</button>
          <button class="list-group-item" type="button">Item</button>
        </div>
        <div class="list-group list-group-lg">
          <button class="list-group-item" type="button">Grande</button>
          <button class="list-group-item" type="button">Item</button>
        </div>
      </div>
    </section>
  </div>
</template>

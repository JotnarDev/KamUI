<template>
  <div class="space-y-8 p-6">
    <h1 class="text-3xl font-bold">
      Toasts / Notifications - Todas las Variantes
    </h1>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Base</h2>
      <div class="toast-stack">
        <div class="toast">
          <svg class="toast-icon" viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0Z"
            />
          </svg>
          <div class="toast-content">
            <div class="toast-title">Nueva actualización disponible</div>
            <p class="toast-message">Actualiza para obtener mejoras y fixes.</p>
            <div class="toast-actions">
              <button class="button button-sm button-primary" type="button">
                Actualizar
              </button>
              <a class="toast-link" href="#">Ver cambios</a>
            </div>
          </div>
          <button class="toast-close" type="button" aria-label="Close">
            ✕
          </button>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Variantes</h2>
      <div class="toast-stack">
        <div class="toast toast-success">
          <svg class="toast-icon" viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m5 13 4 4L19 7"
            />
          </svg>
          <div class="toast-content">
            <div class="toast-title">Pago confirmado</div>
            <p class="toast-message">Tu pedido se procesó correctamente.</p>
          </div>
          <button class="toast-close" type="button" aria-label="Close">
            ✕
          </button>
        </div>

        <div class="toast toast-warning">
          <svg class="toast-icon" viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3Z"
            />
          </svg>
          <div class="toast-content">
            <div class="toast-title">Espacio limitado</div>
            <p class="toast-message">Libera almacenamiento para continuar.</p>
          </div>
          <button class="toast-close" type="button" aria-label="Close">
            ✕
          </button>
        </div>

        <div class="toast toast-error">
          <svg class="toast-icon" viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0 2-2m-2 2-2-2m2 2 2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0Z"
            />
          </svg>
          <div class="toast-content">
            <div class="toast-title">No se pudo guardar</div>
            <p class="toast-message">
              Revisa tu conexión e inténtalo de nuevo.
            </p>
          </div>
          <button class="toast-close" type="button" aria-label="Close">
            ✕
          </button>
        </div>

        <div class="toast toast-info">
          <svg class="toast-icon" viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0Z"
            />
          </svg>
          <div class="toast-content">
            <div class="toast-title">Nueva invitación</div>
            <p class="toast-message">Tienes 3 invitaciones pendientes.</p>
          </div>
          <button class="toast-close" type="button" aria-label="Close">
            ✕
          </button>
        </div>

        <div class="toast toast-solid">
          <svg class="toast-icon" viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0Z"
            />
          </svg>
          <div class="toast-content">
            <div class="toast-title">Modo enfocado</div>
            <p class="toast-message">Silenciaste notificaciones por 1 hora.</p>
          </div>
          <button class="toast-close" type="button" aria-label="Close">
            ✕
          </button>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Tamaños</h2>
      <div class="toast-stack">
        <div class="toast toast-sm">
          <div class="toast-content">
            <div class="toast-title">Toast pequeño</div>
            <p class="toast-message">Texto corto para avisos rápidos.</p>
          </div>
        </div>
        <div class="toast">
          <div class="toast-content">
            <div class="toast-title">Toast default</div>
            <p class="toast-message">Notificación estándar del sistema.</p>
          </div>
        </div>
        <div class="toast toast-lg">
          <div class="toast-content">
            <div class="toast-title">Toast grande</div>
            <p class="toast-message">Ideal para mensajes con más contexto.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

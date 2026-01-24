<template>
  <div class="space-y-8 p-6">
    <h1 class="text-3xl font-bold">Popovers - Todas las Variantes</h1>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Base</h2>
      <div class="popover">
        <button class="button button-ghost" type="button">Mostrar</button>
        <div class="popover-panel popover-top">
          <div class="popover-title">Información</div>
          <p class="popover-body">Detalles rápidos sobre esta funcionalidad.</p>
          <div class="popover-arrow"></div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Posiciones</h2>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div class="popover">
          <button class="button button-ghost" type="button">Arriba</button>
          <div class="popover-panel popover-top">
            <div class="popover-title">Arriba</div>
            <p class="popover-body">Popover arriba del trigger.</p>
            <div class="popover-arrow"></div>
          </div>
        </div>
        <div class="popover">
          <button class="button button-ghost" type="button">Abajo</button>
          <div class="popover-panel popover-bottom">
            <div class="popover-title">Abajo</div>
            <p class="popover-body">Popover debajo del trigger.</p>
            <div class="popover-arrow"></div>
          </div>
        </div>
        <div class="popover">
          <button class="button button-ghost" type="button">Izquierda</button>
          <div class="popover-panel popover-left">
            <div class="popover-title">Izquierda</div>
            <p class="popover-body">Popover a la izquierda.</p>
            <div class="popover-arrow"></div>
          </div>
        </div>
        <div class="popover">
          <button class="button button-ghost" type="button">Derecha</button>
          <div class="popover-panel popover-right">
            <div class="popover-title">Derecha</div>
            <p class="popover-body">Popover a la derecha.</p>
            <div class="popover-arrow"></div>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Variantes</h2>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div class="popover">
          <button class="button button-ghost" type="button">Soft</button>
          <div class="popover-panel popover-soft">
            <div class="popover-title">Soft</div>
            <p class="popover-body">Fondo suave con tinte primary.</p>
            <div class="popover-arrow"></div>
          </div>
        </div>
        <div class="popover">
          <button class="button button-ghost" type="button">Compact</button>
          <div class="popover-panel popover-compact">
            <div class="popover-title">Compact</div>
            <p class="popover-body">Contenido reducido.</p>
            <div class="popover-arrow"></div>
          </div>
        </div>
        <div class="popover">
          <button class="button button-ghost" type="button">Elevated</button>
          <div class="popover-panel popover-elevated">
            <div class="popover-title">Elevated</div>
            <p class="popover-body">Sombra más profunda.</p>
            <div class="popover-arrow"></div>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Con acción</h2>
      <div class="popover">
        <button class="button button-ghost" type="button">Pro tip</button>
        <div class="popover-panel popover-bottom">
          <div class="popover-title">Pro tip</div>
          <p class="popover-body">
            Usa atajos para acelerar tu flujo de trabajo.
          </p>
          <button class="popover-action" type="button">
            <svg class="popover-icon" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v12m6-6H6"
              />
            </svg>
            Ver más
          </button>
          <div class="popover-arrow"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<template>
  <div class="space-y-8 p-6">
    <!-- ========================================
         TÍTULO Y SECCIONES
         ======================================== -->
    <h1 class="text-3xl font-bold">Botones - Todas las Variantes</h1>

    <!-- ========================================
         VARIANTES SÓLIDAS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Sólidos</h2>
      <div class="flex flex-wrap gap-3">
        <button type="button" class="button button-primary">Primary</button>
        <button type="button" class="button button-secondary">Secondary</button>
        <button type="button" class="button button-accent">Accent</button>
        <button type="button" class="button button-success">Success</button>
        <button type="button" class="button button-warning">Warning</button>
        <button type="button" class="button button-error">Danger</button>
        <button type="button" class="button button-info">Info</button>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTE GHOST
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Ghost</h2>
      <div class="flex flex-wrap gap-3">
        <button type="button" class="button button-ghost">Ghost</button>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTES OUTLINED
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Outlined</h2>
      <div class="flex flex-wrap gap-3">
        <button
          type="button"
          class="button button-outlined button-outlined-primary"
        >
          Primary
        </button>
        <button
          type="button"
          class="button button-outlined button-outlined-secondary"
        >
          Secondary
        </button>
        <button
          type="button"
          class="button button-outlined button-outlined-accent"
        >
          Accent
        </button>
        <button
          type="button"
          class="button button-outlined button-outlined-success"
        >
          Success
        </button>
        <button
          type="button"
          class="button button-outlined button-outlined-warning"
        >
          Warning
        </button>
        <button
          type="button"
          class="button button-outlined button-outlined-error"
        >
          Danger
        </button>
        <button
          type="button"
          class="button button-outlined button-outlined-info"
        >
          Info
        </button>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         TAMAÑOS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Tamaños</h2>
      <div class="flex flex-wrap gap-3">
        <button type="button" class="button button-primary button-sm">
          Small
        </button>
        <button type="button" class="button button-primary button-md">
          Medium
        </button>
        <button type="button" class="button button-primary button-lg">
          Large
        </button>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         PILL
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Pill</h2>
      <div class="flex flex-wrap gap-3">
        <button type="button" class="button button-primary button-pill">
          Primary
        </button>
        <button type="button" class="button button-success button-pill">
          Success
        </button>
        <button type="button" class="button button-warning button-pill">
          Warning
        </button>
        <button type="button" class="button button-error button-pill">
          Danger
        </button>
        <button type="button" class="button button-ghost button-pill">
          Ghost
        </button>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         CON ICONOS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Con Iconos</h2>
      <div class="flex flex-wrap gap-3">
        <button type="button" class="button button-success">
          <svg
            class="button-icon-left button-icon-medium"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Guardar
        </button>
        <button type="button" class="button button-warning">
          Editar
          <svg
            class="button-icon-right button-icon-medium"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         SOLO ICONO
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Solo Icono</h2>
      <div class="flex flex-wrap gap-3">
        <button type="button" class="button button-icon-only button-primary">
          <svg
            class="button-icon-medium"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v12m6-6H6"
            />
          </svg>
          <span class="sr-only">Agregar</span>
        </button>
        <button
          type="button"
          class="button button-icon-only button-outlined button-outlined-secondary"
        >
          <svg
            class="button-icon-medium"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span class="sr-only">Cerrar</span>
        </button>
        <button type="button" class="button button-icon-only button-ghost">
          <svg
            class="button-icon-medium"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
            />
          </svg>
          <span class="sr-only">Favorito</span>
        </button>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         GRUPO DE BOTONES
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Grupos</h2>
      <div class="button-group" role="group">
        <button type="button" class="button button-primary button-group-start">
          Profile
        </button>
        <button type="button" class="button button-primary button-group-middle">
          Settings
        </button>
        <button type="button" class="button button-primary button-group-end">
          Messages
        </button>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         ESTADOS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Estados</h2>
      <div class="flex flex-wrap gap-3">
        <button type="button" class="button button-success">Enabled</button>
        <button type="button" class="button button-success" disabled>
          Disabled
        </button>
      </div>
    </section>
  </div>
</template>

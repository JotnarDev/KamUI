<template>
  <div class="space-y-8 p-6">
    <!-- ========================================
         TÍTULO Y SECCIONES
         ======================================== -->
    <h1 class="text-3xl font-bold">Badges - Todas las Variantes</h1>

    <!-- ========================================
         TAMAÑOS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Tamaños</h2>
      <div class="flex flex-wrap items-center gap-4">
        <span class="badge badge-sm badge-default badge-rounded">Small</span>
        <span class="badge badge-md badge-default badge-rounded">Medium</span>
        <span class="badge badge-lg badge-default badge-rounded">Large</span>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         FORMAS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Formas</h2>
      <div class="flex flex-wrap items-center gap-4">
        <span class="badge badge-md badge-success badge-square">Square</span>
        <span class="badge badge-md badge-success badge-rounded">Rounded</span>
        <span class="badge badge-md badge-success badge-pill">Pill</span>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTES SOFT (Por defecto)
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Variantes Soft (Suaves)</h2>
      <div class="flex flex-wrap items-center gap-3">
        <span class="badge badge-md badge-default badge-pill">Default</span>
        <span class="badge badge-md badge-success badge-pill">Success</span>
        <span class="badge badge-md badge-warning badge-pill">Warning</span>
        <span class="badge badge-md badge-error badge-pill">Error</span>
        <span class="badge badge-md badge-info badge-pill">Info</span>
        <span class="badge badge-md badge-gray badge-pill">Gray</span>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTES SÓLIDAS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Variantes Sólidas</h2>
      <div class="flex flex-wrap items-center gap-3">
        <span class="badge badge-md badge-default-solid badge-pill"
          >Default</span
        >
        <span class="badge badge-md badge-success-solid badge-pill"
          >Success</span
        >
        <span class="badge badge-md badge-warning-solid badge-pill"
          >Warning</span
        >
        <span class="badge badge-md badge-error-solid badge-pill">Error</span>
        <span class="badge badge-md badge-info-solid badge-pill">Info</span>
        <span class="badge badge-md badge-gray-solid badge-pill">Gray</span>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTES OUTLINED
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Variantes Outlined</h2>
      <div class="flex flex-wrap items-center gap-3">
        <span class="badge badge-md badge-default-outlined badge-pill"
          >Default</span
        >
        <span class="badge badge-md badge-success-outlined badge-pill"
          >Success</span
        >
        <span class="badge badge-md badge-warning-outlined badge-pill"
          >Warning</span
        >
        <span class="badge badge-md badge-error-outlined badge-pill"
          >Error</span
        >
        <span class="badge badge-md badge-info-outlined badge-pill">Info</span>
        <span class="badge badge-md badge-gray-outlined badge-pill">Gray</span>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         CON BORDE
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Con Borde</h2>
      <div class="flex flex-wrap items-center gap-3">
        <span class="badge badge-md badge-default badge-bordered badge-pill"
          >Default</span
        >
        <span class="badge badge-md badge-success badge-bordered badge-pill"
          >Success</span
        >
        <span class="badge badge-md badge-warning badge-bordered badge-pill"
          >Warning</span
        >
        <span class="badge badge-md badge-error badge-bordered badge-pill"
          >Error</span
        >
        <span class="badge badge-md badge-info badge-bordered badge-pill"
          >Info</span
        >
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         CON ICONOS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Con Iconos</h2>
      <div class="flex flex-wrap items-center gap-3">
        <span class="badge badge-sm badge-icon badge-success badge-pill">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          2 mins ago
        </span>
        <span class="badge badge-md badge-icon badge-info badge-pill">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Information
        </span>
        <span class="badge badge-lg badge-icon badge-warning badge-pill">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          Warning
        </span>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         SOLO ICONOS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Solo Iconos</h2>
      <div class="flex flex-wrap items-center gap-3">
        <span class="badge badge-sm badge-icon-only badge-success badge-pill">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
        <span class="badge badge-md badge-icon-only badge-warning badge-pill">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01"
            />
          </svg>
        </span>
        <span class="badge badge-lg badge-icon-only badge-error badge-pill">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         CON PUNTO INDICADOR
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Con Punto Indicador</h2>
      <div class="flex flex-wrap items-center gap-3">
        <span class="badge badge-md badge-dot badge-success badge-pill"
          >Available</span
        >
        <span class="badge badge-md badge-dot badge-warning badge-pill"
          >Away</span
        >
        <span class="badge badge-md badge-dot badge-error badge-pill"
          >Busy</span
        >
        <span class="badge badge-md badge-dot badge-gray badge-pill"
          >Offline</span
        >
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         BADGES DISMISSIBLES (Con botón cerrar)
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">
        Dismissibles (Con botón cerrar)
      </h2>
      <div class="flex flex-wrap items-center gap-3">
        <span class="badge badge-md badge-dismissible badge-success badge-pill">
          Success
          <button type="button" class="badge-close" aria-label="Remove">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </span>
        <span class="badge badge-md badge-dismissible badge-warning badge-pill">
          Warning
          <button type="button" class="badge-close" aria-label="Remove">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </span>
        <span class="badge badge-md badge-dismissible badge-error badge-pill">
          Error
          <button type="button" class="badge-close" aria-label="Remove">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </span>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         CON AVATAR
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Con Avatar</h2>
      <div class="flex flex-wrap items-center gap-3">
        <span class="badge badge-md badge-icon badge-default badge-pill">
          <img
            class="size-5 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="User"
          />
          John Doe
        </span>
        <span
          class="badge badge-md badge-icon badge-dismissible badge-success badge-pill"
        >
          <img
            class="size-5 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
            alt="User"
          />
          Jane Smith
          <button type="button" class="badge-close" aria-label="Remove">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </span>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         BADGES INTERACTIVOS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">
        Interactivos (Links y Botones)
      </h2>
      <div class="flex flex-wrap items-center gap-3">
        <a href="#" class="badge badge-md badge-link badge-info badge-pill"
          >Clickable Link</a
        >
        <button class="badge badge-md badge-button badge-success badge-pill">
          Button Badge
        </button>
        <button class="badge badge-md badge-button badge-warning badge-pill">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         BADGES DE NOTIFICACIÓN
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Badges de Notificación</h2>
      <div class="flex flex-wrap items-center gap-6">
        <div class="relative">
          <button class="bg-primary rounded-lg px-4 py-2 text-white">
            <svg
              class="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-width="2"
                d="m3.5 5.5 7.893 6.036a1 1 0 001.214 0L20.5 5.5M4 19h16a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z"
              />
            </svg>
          </button>
          <span class="badge-notification absolute -top-2 -right-2">5</span>
        </div>

        <div class="relative">
          <button class="bg-success rounded-lg px-4 py-2 text-white">
            <svg
              class="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <span
            class="badge-notification badge-notification-sm absolute -top-1 -right-1"
            >99+</span
          >
        </div>

        <div class="relative">
          <button class="bg-info rounded-lg px-5 py-3 text-white">
            <svg
              class="size-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
          <span
            class="badge-notification badge-notification-lg absolute -top-2 -right-2"
            >20</span
          >
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         BADGES CON GRADIENTE
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Con Gradiente</h2>
      <div class="flex flex-wrap items-center gap-3">
        <span class="badge badge-md badge-gradient-primary badge-pill"
          >Primary</span
        >
        <span class="badge badge-md badge-gradient-success badge-pill"
          >Success</span
        >
        <span class="badge badge-md badge-gradient-warning badge-pill"
          >Warning</span
        >
        <span class="badge badge-md badge-gradient-error badge-pill"
          >Error</span
        >
        <span class="badge badge-md badge-gradient-info badge-pill">Info</span>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         GRUPOS DE BADGES
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Grupos de Badges</h2>
      <div class="badge-group">
        <span class="badge badge-sm badge-default badge-pill">HTML</span>
        <span class="badge badge-sm badge-info badge-pill">CSS</span>
        <span class="badge badge-sm badge-warning badge-pill">JavaScript</span>
        <span class="badge badge-sm badge-success badge-pill">Vue.js</span>
        <span class="badge badge-sm badge-error badge-pill">Tailwind</span>
        <span class="badge badge-sm badge-gray badge-pill">TypeScript</span>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         BADGES INLINE CON TEXTO
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Badges Inline con Texto</h2>
      <div class="space-y-3">
        <p class="text-base">
          Este es un texto con un
          <span class="badge badge-sm badge-success-solid badge-pill"
            >Badge Inline</span
          >
          dentro del párrafo.
        </p>
        <p class="text-base">
          Versión
          <span class="badge badge-sm badge-info badge-pill">v2.5.1</span>
          está disponible ahora.
        </p>
        <p class="text-base">
          Estado:
          <span class="badge badge-sm badge-dot badge-success badge-pill"
            >En línea</span
          >
        </p>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         COMBINACIONES COMPLEJAS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Combinaciones Complejas</h2>
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap items-center gap-2">
          <span
            class="badge badge-lg badge-icon badge-success-solid badge-pill"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Completed
          </span>
          <span
            class="badge badge-lg badge-icon badge-warning-outlined badge-rounded"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            In Progress
          </span>
          <span
            class="badge badge-lg badge-icon badge-error-solid badge-square"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Failed
          </span>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <span
            class="badge badge-md badge-dismissible badge-gradient-success badge-pill"
          >
            <img
              class="size-4 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="User"
            />
            Admin
            <button type="button" class="badge-close" aria-label="Remove">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         EN BOTONES
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Badges en Botones</h2>
      <div class="flex flex-wrap items-center gap-4">
        <button
          class="bg-primary hover:bg-primary/80 flex items-center gap-2 rounded-lg px-4 py-2 text-white"
        >
          Messages
          <span class="badge-notification">3</span>
        </button>
        <button
          class="bg-success hover:bg-success/80 flex items-center gap-2 rounded-lg px-4 py-2 text-white"
        >
          Notifications
          <span class="badge badge-sm badge-error-solid badge-pill">12</span>
        </button>
        <button
          class="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50"
        >
          Inbox
          <span class="badge badge-sm badge-info badge-pill">99+</span>
        </button>
      </div>
    </section>
  </div>
</template>

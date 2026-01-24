<template>
  <div class="space-y-8 p-6">
    <!-- ========================================
         TÍTULO Y SECCIONES
         ======================================== -->
    <h1 class="text-3xl font-bold">Alertas - Todas las Variantes</h1>

    <!-- ========================================
         BÁSICAS - Colores por defecto
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Alertas Básicas (Colores)</h2>

      <div class="alert alert-default mb-3" role="alert">
        <span class="font-medium">Default alert!</span> Esta es una alerta con
        el color primario.
      </div>

      <div class="alert alert-success mb-3" role="alert">
        <span class="font-medium">Success alert!</span> Tu acción se completó
        exitosamente.
      </div>

      <div class="alert alert-warning mb-3" role="alert">
        <span class="font-medium">Warning alert!</span> Debes tener cuidado con
        esta acción.
      </div>

      <div class="alert alert-error mb-3" role="alert">
        <span class="font-medium">Error alert!</span> Algo salió mal, por favor
        intenta de nuevo.
      </div>

      <div class="alert alert-info mb-3" role="alert">
        <span class="font-medium">Info alert!</span> Aquí hay información
        importante para ti.
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         CON ICONOS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Alertas con Iconos</h2>

      <div class="alert alert-w-icon alert-default mb-3" role="alert">
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p><span class="font-medium">Default!</span> Alerta con icono.</p>
      </div>

      <div class="alert alert-w-icon alert-success mb-3" role="alert">
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p><span class="font-medium">Success!</span> Operación completada.</p>
      </div>

      <div class="alert alert-w-icon alert-warning mb-3" role="alert">
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <p><span class="font-medium">Warning!</span> Ten cuidado.</p>
      </div>

      <div class="alert alert-w-icon alert-error mb-3" role="alert">
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p><span class="font-medium">Error!</span> Algo salió mal.</p>
      </div>

      <div class="alert alert-w-icon alert-info mb-3" role="alert">
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p><span class="font-medium">Info!</span> Información importante.</p>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         CON BORDE
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Alertas con Borde</h2>

      <div
        class="alert alert-w-icon alert-w-border alert-default mb-3"
        role="alert"
      >
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>
          <span class="font-medium">Default con borde!</span> Alerta con icono y
          borde.
        </p>
      </div>

      <div
        class="alert alert-w-icon alert-w-border alert-success mb-3"
        role="alert"
      >
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>
          <span class="font-medium">Success con borde!</span> Éxito con borde.
        </p>
      </div>

      <div
        class="alert alert-w-icon alert-w-border alert-warning mb-3"
        role="alert"
      >
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <p>
          <span class="font-medium">Warning con borde!</span> Advertencia con
          borde.
        </p>
      </div>

      <div
        class="alert alert-w-icon alert-w-border alert-error mb-3"
        role="alert"
      >
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>
          <span class="font-medium">Error con borde!</span> Error con borde.
        </p>
      </div>

      <div
        class="alert alert-w-icon alert-w-border alert-info mb-3"
        role="alert"
      >
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p><span class="font-medium">Info con borde!</span> Info con borde.</p>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTES SÓLIDAS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">
        Alertas Sólidas (Alto Contraste)
      </h2>

      <div class="alert alert-default-solid mb-3" role="alert">
        <span class="font-medium">Default Solid!</span> Alerta con fondo sólido.
      </div>

      <div class="alert alert-success-solid mb-3" role="alert">
        <span class="font-medium">Success Solid!</span> Éxito con fondo sólido.
      </div>

      <div class="alert alert-warning-solid mb-3" role="alert">
        <span class="font-medium">Warning Solid!</span> Advertencia con fondo
        sólido.
      </div>

      <div class="alert alert-error-solid mb-3" role="alert">
        <span class="font-medium">Error Solid!</span> Error con fondo sólido.
      </div>

      <div class="alert alert-info-solid mb-3" role="alert">
        <span class="font-medium">Info Solid!</span> Info con fondo sólido.
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTES OUTLINED
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Alertas Outlined (Solo Borde)</h2>

      <div class="alert alert-default-outlined mb-3" role="alert">
        <span class="font-medium">Default Outlined!</span> Solo borde, sin
        fondo.
      </div>

      <div class="alert alert-success-outlined mb-3" role="alert">
        <span class="font-medium">Success Outlined!</span> Solo borde de éxito.
      </div>

      <div class="alert alert-warning-outlined mb-3" role="alert">
        <span class="font-medium">Warning Outlined!</span> Solo borde de
        advertencia.
      </div>

      <div class="alert alert-error-outlined mb-3" role="alert">
        <span class="font-medium">Error Outlined!</span> Solo borde de error.
      </div>

      <div class="alert alert-info-outlined mb-3" role="alert">
        <span class="font-medium">Info Outlined!</span> Solo borde de info.
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         ALERTAS CON ACENTO (Borde Izquierdo)
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">
        Alertas con Acento (Borde Lateral)
      </h2>

      <div
        class="alert alert-accent alert-w-icon alert-default mb-3"
        role="alert"
      >
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>
          <span class="font-medium">Default Accent!</span> Con borde izquierdo
          grueso.
        </p>
      </div>

      <div
        class="alert alert-accent alert-w-icon alert-success mb-3"
        role="alert"
      >
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>
          <span class="font-medium">Success Accent!</span> Éxito con acento
          lateral.
        </p>
      </div>

      <div
        class="alert alert-accent alert-w-icon alert-warning mb-3"
        role="alert"
      >
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <p>
          <span class="font-medium">Warning Accent!</span> Advertencia con
          acento.
        </p>
      </div>

      <div
        class="alert alert-accent alert-w-icon alert-error mb-3"
        role="alert"
      >
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>
          <span class="font-medium">Error Accent!</span> Error con acento
          lateral.
        </p>
      </div>

      <div class="alert alert-accent alert-w-icon alert-info mb-3" role="alert">
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>
          <span class="font-medium">Info Accent!</span> Info con acento lateral.
        </p>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         ALERTAS CON ACENTO SUPERIOR
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Alertas con Acento Superior</h2>

      <div
        class="alert alert-accent-top alert-w-icon alert-success mb-3"
        role="alert"
      >
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>
          <span class="font-medium">Success Top Accent!</span> Con borde
          superior grueso.
        </p>
      </div>

      <div
        class="alert alert-accent-top alert-w-icon alert-warning mb-3"
        role="alert"
      >
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <p>
          <span class="font-medium">Warning Top Accent!</span> Borde superior de
          advertencia.
        </p>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         ALERTAS MINI (Compactas)
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Alertas Mini (Compactas)</h2>

      <div class="alert-mini alert-default mb-3" role="alert">
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Default mini alert</span>
      </div>

      <div class="alert-mini alert-success mb-3" role="alert">
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Success mini</span>
      </div>

      <div class="alert-mini alert-warning mb-3" role="alert">
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>Warning mini</span>
      </div>

      <div class="alert-mini alert-error mb-3" role="alert">
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error mini</span>
      </div>

      <div class="alert-mini alert-info mb-3" role="alert">
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Info mini</span>
      </div>

      <div class="alert-mini alert-success alert-w-border" role="alert">
        <span class="bg-success/30 rounded-full px-2 py-0.5">New</span>
        <span>Mini con badge y borde</span>
        <svg
          class="h-4 w-4 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m9 5 7 7-7 7"
          />
        </svg>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         ALERTAS CON CONTENIDO COMPLEJO
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">
        Alertas con Contenido Complejo
      </h2>

      <div
        class="alert alert-w-border alert-w-content alert-success mb-4"
        role="alert"
      >
        <div class="alert-heading">
          <div class="flex items-center gap-2">
            <svg
              class="alert-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="font-semibold">Requisitos de contraseña:</span>
          </div>
        </div>
        <div class="alert-body">
          <ul class="list-disc space-y-1 ps-5">
            <li>Al menos 10 caracteres (hasta 100 caracteres)</li>
            <li>Al menos una letra minúscula</li>
            <li>Inclusión de al menos un carácter especial, ej: ! @ # ?</li>
          </ul>
        </div>
      </div>

      <div class="alert alert-w-content alert-info mb-4" role="alert">
        <div class="alert-heading">
          <div class="flex items-center gap-2">
            <svg
              class="alert-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 class="font-semibold">Nueva actualización disponible</h3>
          </div>
          <button type="button" class="alert-close" aria-label="Close">
            <svg
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="alert-body">
          <p>
            Hay una nueva versión disponible. Esta actualización incluye mejoras
            de rendimiento y correcciones de errores.
          </p>
          <button
            type="button"
            class="bg-info hover:bg-info/80 mt-2 rounded-lg px-4 py-2 text-sm font-medium text-white"
          >
            Actualizar ahora
          </button>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         ALERTAS DISMISSIBLES (Con botón cerrar)
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Alertas Dismissibles</h2>

      <div class="alert alert-w-icon alert-success mb-3" role="alert">
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div class="flex-1">
          <span class="font-medium">Éxito!</span> Tu archivo se subió
          correctamente.
          <a href="#" class="underline hover:no-underline">Ver detalles</a>
        </div>
        <button type="button" class="alert-close" aria-label="Close">
          <svg
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div class="alert alert-w-icon alert-error mb-3" role="alert">
        <svg
          class="alert-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div class="flex-1">
          <span class="font-medium">Error!</span> No se pudo procesar tu
          solicitud.
        </div>
        <button type="button" class="alert-close" aria-label="Close">
          <svg
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </section>
  </div>
</template>

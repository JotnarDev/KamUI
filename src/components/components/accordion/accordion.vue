<template>
  <div class="space-y-8 p-6">
    <h1 class="text-3xl font-bold">
      Accordion / Collapse - Todas las Variantes
    </h1>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Base</h2>
      <div class="accordion">
        <div class="accordion-item">
          <button class="accordion-trigger" type="button">
            ¿Qué incluye el plan básico?
            <svg class="accordion-icon" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6 9 6 6 6-6"
              />
            </svg>
          </button>
          <div class="accordion-panel">
            Acceso a componentes principales, documentación y soporte estándar.
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-trigger" type="button">
            ¿Puedo actualizar más adelante?
            <svg class="accordion-icon" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6 9 6 6 6-6"
              />
            </svg>
          </button>
          <div class="accordion-panel">
            Sí, puedes cambiar de plan en cualquier momento desde tu panel.
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Variantes</h2>
      <div class="space-y-4">
        <div class="accordion accordion-soft">
          <div class="accordion-item">
            <button class="accordion-trigger" type="button">
              Accordion Soft
              <svg class="accordion-icon" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
            <div class="accordion-panel">Fondo suave con tinte primary.</div>
          </div>
        </div>

        <div class="accordion accordion-outlined">
          <div class="accordion-item">
            <button class="accordion-trigger" type="button">
              Accordion Outlined
              <svg class="accordion-icon" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
            <div class="accordion-panel">Solo borde, sin fondo.</div>
          </div>
        </div>

        <div class="accordion accordion-pill">
          <div class="accordion-item">
            <button class="accordion-trigger" type="button">
              Accordion Pill
              <svg class="accordion-icon" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
            <div class="accordion-panel">Bordes totalmente redondeados.</div>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Tamaños</h2>
      <div class="space-y-4">
        <div class="accordion accordion-compact">
          <div class="accordion-item">
            <button class="accordion-trigger" type="button">
              Compacto
              <svg class="accordion-icon" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
            <div class="accordion-panel">Menor padding y altura.</div>
          </div>
        </div>

        <div class="accordion">
          <div class="accordion-item">
            <button class="accordion-trigger" type="button">
              Default
              <svg class="accordion-icon" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
            <div class="accordion-panel">Tamaño estándar.</div>
          </div>
        </div>

        <div class="accordion accordion-lg">
          <div class="accordion-item">
            <button class="accordion-trigger" type="button">
              Grande
              <svg class="accordion-icon" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
            <div class="accordion-panel">Mayor espacio interno.</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

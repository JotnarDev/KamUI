<template>
  <div class="space-y-8 p-6">
    <h1 class="text-3xl font-bold">Stepper / Wizard - Todas las Variantes</h1>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Base</h2>
      <div class="stepper">
        <div class="stepper-item stepper-complete">
          <span class="stepper-index">1</span>
          <div>
            <div class="stepper-label">Datos</div>
            <div class="stepper-subtitle">Completado</div>
          </div>
        </div>
        <span class="stepper-line"></span>
        <div class="stepper-item stepper-active">
          <span class="stepper-index">2</span>
          <div>
            <div class="stepper-label">Envío</div>
            <div class="stepper-subtitle">Actual</div>
          </div>
        </div>
        <span class="stepper-line"></span>
        <div class="stepper-item stepper-muted">
          <span class="stepper-index">3</span>
          <div>
            <div class="stepper-label">Pago</div>
            <div class="stepper-subtitle">Pendiente</div>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Vertical</h2>
      <div class="stepper stepper-vertical">
        <div class="stepper-item stepper-complete">
          <span class="stepper-index">1</span>
          <div>
            <div class="stepper-label">Cuenta</div>
            <div class="stepper-subtitle">Verificada</div>
          </div>
        </div>
        <span class="stepper-line"></span>
        <div class="stepper-item stepper-active">
          <span class="stepper-index">2</span>
          <div>
            <div class="stepper-label">Perfil</div>
            <div class="stepper-subtitle">En progreso</div>
          </div>
        </div>
        <span class="stepper-line"></span>
        <div class="stepper-item stepper-muted">
          <span class="stepper-index">3</span>
          <div>
            <div class="stepper-label">Confirmación</div>
            <div class="stepper-subtitle">Pendiente</div>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Variantes</h2>
      <div class="space-y-4">
        <div class="stepper stepper-soft">
          <div class="stepper-item stepper-active">
            <span class="stepper-index">1</span>
            <div class="stepper-label">Soft</div>
          </div>
          <span class="stepper-line"></span>
          <div class="stepper-item stepper-muted">
            <span class="stepper-index">2</span>
            <div class="stepper-label">Soft</div>
          </div>
        </div>
        <div class="stepper stepper-outlined">
          <div class="stepper-item stepper-active">
            <span class="stepper-index">1</span>
            <div class="stepper-label">Outlined</div>
          </div>
          <span class="stepper-line"></span>
          <div class="stepper-item stepper-muted">
            <span class="stepper-index">2</span>
            <div class="stepper-label">Outlined</div>
          </div>
        </div>
        <div class="stepper stepper-pill">
          <div class="stepper-item stepper-active">
            <span class="stepper-index">1</span>
            <div class="stepper-label">Pill</div>
          </div>
          <span class="stepper-line"></span>
          <div class="stepper-item stepper-muted">
            <span class="stepper-index">2</span>
            <div class="stepper-label">Pill</div>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Tamaños</h2>
      <div class="space-y-4">
        <div class="stepper stepper-compact">
          <div class="stepper-item stepper-active">
            <span class="stepper-index">1</span>
            <div class="stepper-label">Compacto</div>
          </div>
          <span class="stepper-line"></span>
          <div class="stepper-item stepper-muted">
            <span class="stepper-index">2</span>
            <div class="stepper-label">Compacto</div>
          </div>
        </div>
        <div class="stepper">
          <div class="stepper-item stepper-active">
            <span class="stepper-index">1</span>
            <div class="stepper-label">Default</div>
          </div>
          <span class="stepper-line"></span>
          <div class="stepper-item stepper-muted">
            <span class="stepper-index">2</span>
            <div class="stepper-label">Default</div>
          </div>
        </div>
        <div class="stepper stepper-lg">
          <div class="stepper-item stepper-active">
            <span class="stepper-index">1</span>
            <div class="stepper-label">Grande</div>
          </div>
          <span class="stepper-line"></span>
          <div class="stepper-item stepper-muted">
            <span class="stepper-index">2</span>
            <div class="stepper-label">Grande</div>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Progress</h2>
      <div class="space-y-3">
        <div class="stepper-progress">
          <div class="stepper-progress-bar" style="width: 40%"></div>
        </div>
        <div class="stepper-progress">
          <div class="stepper-progress-bar" style="width: 75%"></div>
        </div>
      </div>
    </section>
  </div>
</template>

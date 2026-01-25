<template>
  <div class="space-y-8 p-6">
    <h1 class="text-3xl font-bold">Progress Bars - Todas las Variantes</h1>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Base</h2>
      <div class="space-y-3">
        <div class="progress">
          <div class="progress-bar" style="width: 35%"></div>
        </div>
        <div class="progress">
          <div class="progress-bar" style="width: 65%"></div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Tamaños</h2>
      <div class="space-y-4">
        <div class="progress progress-sm">
          <div class="progress-bar" style="width: 25%"></div>
        </div>
        <div class="progress progress-md">
          <div class="progress-bar" style="width: 50%"></div>
        </div>
        <div class="progress progress-lg">
          <div class="progress-bar" style="width: 75%"></div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Variantes</h2>
      <div class="space-y-4">
        <div class="progress progress-primary">
          <div class="progress-bar" style="width: 45%"></div>
        </div>
        <div class="progress progress-secondary">
          <div class="progress-bar" style="width: 55%"></div>
        </div>
        <div class="progress progress-accent">
          <div class="progress-bar" style="width: 65%"></div>
        </div>
        <div class="progress progress-success">
          <div class="progress-bar" style="width: 80%"></div>
        </div>
        <div class="progress progress-warning">
          <div class="progress-bar" style="width: 60%"></div>
        </div>
        <div class="progress progress-error">
          <div class="progress-bar" style="width: 35%"></div>
        </div>
        <div class="progress progress-info">
          <div class="progress-bar" style="width: 50%"></div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Striped & Animated</h2>
      <div class="space-y-4">
        <div class="progress progress-striped progress-success">
          <div class="progress-bar" style="width: 70%"></div>
        </div>
        <div class="progress progress-striped progress-animated progress-info">
          <div class="progress-bar" style="width: 55%"></div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Con etiqueta</h2>
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <span class="progress-label">Subiendo archivos</span>
          <span class="progress-label">72%</span>
        </div>
        <div class="progress progress-pill">
          <div class="progress-bar" style="width: 72%"></div>
        </div>
      </div>
    </section>
  </div>
</template>

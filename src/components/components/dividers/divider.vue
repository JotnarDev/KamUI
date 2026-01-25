<template>
  <div class="space-y-8 p-6">
    <h1 class="text-3xl font-bold">
      Dividers / Separators - Todas las Variantes
    </h1>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Base</h2>
      <div class="divider"></div>
      <div class="divider divider-tight"></div>
      <div class="divider divider-loose"></div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Con etiqueta</h2>
      <div class="divider-with-label">
        <span class="divider-label">Sección</span>
      </div>
      <div class="divider-with-label">
        <span class="divider-label">Más información</span>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Estilos</h2>
      <div class="divider divider-solid"></div>
      <div class="divider divider-dashed"></div>
      <div class="divider divider-dotted"></div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Colores</h2>
      <div class="divider divider-primary"></div>
      <div class="divider divider-secondary"></div>
      <div class="divider divider-accent"></div>
      <div class="divider divider-success"></div>
      <div class="divider divider-warning"></div>
      <div class="divider divider-error"></div>
      <div class="divider divider-info"></div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Vertical</h2>
      <div class="flex flex-wrap items-center">
        <span class="text-text/70 text-sm">Item A</span>
        <span class="divider-vertical"></span>
        <span class="text-text/70 text-sm">Item B</span>
        <span class="divider-vertical divider-dashed"></span>
        <span class="text-text/70 text-sm">Item C</span>
      </div>
    </section>
  </div>
</template>

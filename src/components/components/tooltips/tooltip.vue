<template>
  <div class="space-y-8 p-6">
    <h1 class="text-3xl font-bold">Tooltips - Todas las Variantes</h1>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Base</h2>
      <div class="flex flex-wrap gap-6">
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Hover me
          </button>
          <div class="tooltip-panel tooltip-top">
            Tooltip arriba
            <span class="tooltip-arrow"></span>
          </div>
        </div>
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Info
          </button>
          <div class="tooltip-panel tooltip-bottom">
            Tooltip abajo
            <span class="tooltip-arrow"></span>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Posiciones</h2>
      <div class="flex flex-wrap gap-6">
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Arriba
          </button>
          <div class="tooltip-panel tooltip-top">
            Top
            <span class="tooltip-arrow"></span>
          </div>
        </div>
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Abajo
          </button>
          <div class="tooltip-panel tooltip-bottom">
            Bottom
            <span class="tooltip-arrow"></span>
          </div>
        </div>
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Izquierda
          </button>
          <div class="tooltip-panel tooltip-left">
            Left
            <span class="tooltip-arrow"></span>
          </div>
        </div>
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Derecha
          </button>
          <div class="tooltip-panel tooltip-right">
            Right
            <span class="tooltip-arrow"></span>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Variantes</h2>
      <div class="flex flex-wrap gap-6">
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Soft
          </button>
          <div class="tooltip-panel tooltip-top tooltip-soft">
            Soft
            <span class="tooltip-arrow"></span>
          </div>
        </div>
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Outlined
          </button>
          <div class="tooltip-panel tooltip-top tooltip-outlined">
            Outlined
            <span class="tooltip-arrow"></span>
          </div>
        </div>
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Success
          </button>
          <div class="tooltip-panel tooltip-top tooltip-success">
            Success
            <span class="tooltip-arrow"></span>
          </div>
        </div>
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Warning
          </button>
          <div class="tooltip-panel tooltip-top tooltip-warning">
            Warning
            <span class="tooltip-arrow"></span>
          </div>
        </div>
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Error
          </button>
          <div class="tooltip-panel tooltip-top tooltip-error">
            Error
            <span class="tooltip-arrow"></span>
          </div>
        </div>
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Info
          </button>
          <div class="tooltip-panel tooltip-top tooltip-info">
            Info
            <span class="tooltip-arrow"></span>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Tamaños</h2>
      <div class="flex flex-wrap gap-6">
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Small
          </button>
          <div class="tooltip-panel tooltip-top tooltip-sm">
            Small
            <span class="tooltip-arrow"></span>
          </div>
        </div>
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Default
          </button>
          <div class="tooltip-panel tooltip-top">
            Default
            <span class="tooltip-arrow"></span>
          </div>
        </div>
        <div class="tooltip">
          <button class="button button-ghost tooltip-trigger" type="button">
            Large
          </button>
          <div class="tooltip-panel tooltip-top tooltip-lg">
            Large
            <span class="tooltip-arrow"></span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<template>
  <div class="space-y-8 p-6">
    <h1 class="text-3xl font-bold">Dropdowns - Todas las Variantes</h1>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Base</h2>
      <div class="dropdown">
        <button
          class="dropdown-trigger"
          type="button"
          @click="toggleBase"
          :aria-expanded="isBaseOpen"
        >
          Opciones
          <svg class="dropdown-caret" viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m6 9 6 6 6-6"
            />
          </svg>
        </button>
        <div class="dropdown-menu" v-show="isBaseOpen">
          <div class="dropdown-label">Cuenta</div>
          <button class="dropdown-item" type="button">
            <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19a4 4 0 0 0-6 0m3-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
              />
            </svg>
            Perfil
          </button>
          <button class="dropdown-item" type="button">
            <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6l4 2"
              />
            </svg>
            Actividad
          </button>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item dropdown-item-danger" type="button">
            Cerrar sesión
          </button>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Estados</h2>
      <div class="dropdown">
        <button
          class="dropdown-trigger"
          type="button"
          @click="toggleState"
          :aria-expanded="isStateOpen"
        >
          Estados
        </button>
        <div class="dropdown-menu" v-show="isStateOpen">
          <button class="dropdown-item dropdown-item-active" type="button">
            Activo
          </button>
          <button class="dropdown-item" type="button">Pendiente</button>
          <button class="dropdown-item dropdown-item-muted" type="button">
            Archivado
          </button>
          <button class="dropdown-item dropdown-item-success" type="button">
            Completado
          </button>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Tamaños</h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div class="dropdown dropdown-sm">
          <button
            class="dropdown-trigger"
            type="button"
            @click="toggleSmall"
            :aria-expanded="isSmallOpen"
          >
            Small
          </button>
          <div class="dropdown-menu" v-show="isSmallOpen">
            <button class="dropdown-item" type="button">Editar</button>
            <button class="dropdown-item" type="button">Duplicar</button>
          </div>
        </div>
        <div class="dropdown">
          <button
            class="dropdown-trigger"
            type="button"
            @click="toggleMedium"
            :aria-expanded="isMediumOpen"
          >
            Medium
          </button>
          <div class="dropdown-menu" v-show="isMediumOpen">
            <button class="dropdown-item" type="button">Editar</button>
            <button class="dropdown-item" type="button">Duplicar</button>
          </div>
        </div>
        <div class="dropdown dropdown-lg">
          <button
            class="dropdown-trigger"
            type="button"
            @click="toggleLarge"
            :aria-expanded="isLargeOpen"
          >
            Large
          </button>
          <div class="dropdown-menu" v-show="isLargeOpen">
            <button class="dropdown-item" type="button">Editar</button>
            <button class="dropdown-item" type="button">Duplicar</button>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Alineación</h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div class="dropdown">
          <button
            class="dropdown-trigger"
            type="button"
            @click="toggleLeft"
            :aria-expanded="isLeftOpen"
          >
            Left
          </button>
          <div class="dropdown-menu" v-show="isLeftOpen">
            <button class="dropdown-item" type="button">Nueva</button>
            <button class="dropdown-item" type="button">Compartir</button>
          </div>
        </div>
        <div class="dropdown dropdown-right">
          <button
            class="dropdown-trigger"
            type="button"
            @click="toggleRight"
            :aria-expanded="isRightOpen"
          >
            Right
          </button>
          <div class="dropdown-menu" v-show="isRightOpen">
            <button class="dropdown-item" type="button">Nueva</button>
            <button class="dropdown-item" type="button">Compartir</button>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Con secciones</h2>
      <div class="dropdown dropdown-elevated">
        <button
          class="dropdown-trigger"
          type="button"
          @click="toggleSectioned"
          :aria-expanded="isSectionedOpen"
        >
          Proyecto
        </button>
        <div class="dropdown-menu" v-show="isSectionedOpen">
          <div class="dropdown-label">Acciones</div>
          <button class="dropdown-item" type="button">Nuevo sprint</button>
          <button class="dropdown-item" type="button">Invitar equipo</button>
          <div class="dropdown-divider"></div>
          <div class="dropdown-label">Preferencias</div>
          <button class="dropdown-item" type="button">Notificaciones</button>
          <button class="dropdown-item" type="button">Permisos</button>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Selección</h2>
      <div class="dropdown dropdown-soft">
        <button
          class="dropdown-trigger"
          type="button"
          @click="toggleFilters"
          :aria-expanded="isFiltersOpen"
        >
          Filtros
        </button>
        <div class="dropdown-menu" v-show="isFiltersOpen">
          <button class="dropdown-item" type="button">
            <span>Solo activos</span>
            <svg class="dropdown-check" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
          <button class="dropdown-item" type="button">Con entrega</button>
          <button class="dropdown-item" type="button">Urgentes</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isBaseOpen = ref(true);
const isStateOpen = ref(true);
const isSmallOpen = ref(true);
const isMediumOpen = ref(true);
const isLargeOpen = ref(true);
const isLeftOpen = ref(true);
const isRightOpen = ref(true);
const isSectionedOpen = ref(true);
const isFiltersOpen = ref(true);

const toggleBase = () => {
  isBaseOpen.value = !isBaseOpen.value;
};
const toggleState = () => {
  isStateOpen.value = !isStateOpen.value;
};
const toggleSmall = () => {
  isSmallOpen.value = !isSmallOpen.value;
};
const toggleMedium = () => {
  isMediumOpen.value = !isMediumOpen.value;
};
const toggleLarge = () => {
  isLargeOpen.value = !isLargeOpen.value;
};
const toggleLeft = () => {
  isLeftOpen.value = !isLeftOpen.value;
};
const toggleRight = () => {
  isRightOpen.value = !isRightOpen.value;
};
const toggleSectioned = () => {
  isSectionedOpen.value = !isSectionedOpen.value;
};
const toggleFilters = () => {
  isFiltersOpen.value = !isFiltersOpen.value;
};
</script>

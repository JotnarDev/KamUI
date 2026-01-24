<template>
  <div class="space-y-10">
    <!-- 01: Dashboard (iconos, submenus, colapsable) -->
    <section class="space-y-4">
      <div class="flex items-center gap-2">
        <button class="button button-ghost" type="button" @click="toggleDash">
          {{ isDashCollapsed ? 'Expandir' : 'Colapsar' }}
        </button>
        <button
          class="button button-ghost"
          type="button"
          @click="toggleDashHidden"
        >
          {{ isDashHidden ? 'Mostrar' : 'Ocultar' }}
        </button>
      </div>
      <aside
        class="bg-bg-elevated rounded-2xl border border-current/10 p-4"
        :class="isDashCollapsed ? 'w-20' : 'w-64'"
        v-show="!isDashHidden"
      >
        <div class="mb-6 flex items-center gap-3">
          <span class="avatar avatar-sm avatar-rounded avatar-initials">D</span>
          <div v-show="!isDashCollapsed">
            <p class="text-text text-sm font-semibold">Dashboard</p>
            <p class="text-text/60 text-xs">Panel</p>
          </div>
        </div>

        <nav class="space-y-1">
          <button
            class="button button-ghost w-full justify-start"
            type="button"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 12l8-8 8 8v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
              />
            </svg>
            <span v-show="!isDashCollapsed">Inicio</span>
          </button>

          <button
            class="button button-ghost w-full justify-start"
            type="button"
            @click="toggleDashAnalytics"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3v18h18M7 15v2m5-8v10m5-6v6"
              />
            </svg>
            <span v-show="!isDashCollapsed">Analytics</span>
          </button>
          <div
            class="ml-8 space-y-1"
            v-show="dashAnalyticsOpen && !isDashCollapsed"
          >
            <button
              class="button button-ghost w-full justify-start"
              type="button"
            >
              Overview
            </button>
            <button
              class="button button-ghost w-full justify-start"
              type="button"
            >
              Reportes
            </button>
          </div>

          <button
            class="button button-ghost w-full justify-start"
            type="button"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
              />
            </svg>
            <span v-show="!isDashCollapsed">Tareas</span>
          </button>
        </nav>
      </aside>
    </section>

    <!-- 02: E-commerce (iconos, badges, submenus) -->
    <section class="space-y-4">
      <div class="flex items-center gap-2">
        <button class="button button-ghost" type="button" @click="toggleShop">
          {{ isShopCollapsed ? 'Expandir' : 'Colapsar' }}
        </button>
        <button
          class="button button-ghost"
          type="button"
          @click="toggleShopHidden"
        >
          {{ isShopHidden ? 'Mostrar' : 'Ocultar' }}
        </button>
      </div>
      <aside
        class="bg-bg-elevated rounded-2xl border border-current/10 p-4"
        :class="isShopCollapsed ? 'w-20' : 'w-64'"
        v-show="!isShopHidden"
      >
        <div class="mb-6 flex items-center gap-3">
          <span class="avatar avatar-sm avatar-rounded avatar-initials">S</span>
          <div v-show="!isShopCollapsed">
            <p class="text-text text-sm font-semibold">Store</p>
            <p class="text-text/60 text-xs">E-commerce</p>
          </div>
        </div>

        <nav class="space-y-1">
          <button
            class="button button-ghost w-full justify-start"
            type="button"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7h18l-1.5 12h-15L3 7Z"
              />
            </svg>
            <span v-show="!isShopCollapsed">Productos</span>
          </button>

          <button
            class="button button-ghost w-full justify-start"
            type="button"
            @click="toggleShopOrders"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 4h12v16H6z"
              />
            </svg>
            <span v-show="!isShopCollapsed">Pedidos</span>
            <span
              v-show="!isShopCollapsed"
              class="badge badge-warning badge-pill badge-sm"
            >
              4
            </span>
          </button>
          <div
            class="ml-8 space-y-1"
            v-show="shopOrdersOpen && !isShopCollapsed"
          >
            <button
              class="button button-ghost w-full justify-start"
              type="button"
            >
              Pendientes
            </button>
            <button
              class="button button-ghost w-full justify-start"
              type="button"
            >
              Enviados
            </button>
          </div>

          <button
            class="button button-ghost w-full justify-start"
            type="button"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v12m-6-6h12"
              />
            </svg>
            <span v-show="!isShopCollapsed">Cupones</span>
          </button>
        </nav>
      </aside>
    </section>

    <!-- 03: Documentación (sin iconos) -->
    <section class="space-y-4">
      <div class="flex items-center gap-2">
        <button class="button button-ghost" type="button" @click="toggleDocs">
          {{ isDocsCollapsed ? 'Expandir' : 'Colapsar' }}
        </button>
        <button
          class="button button-ghost"
          type="button"
          @click="toggleDocsHidden"
        >
          {{ isDocsHidden ? 'Mostrar' : 'Ocultar' }}
        </button>
      </div>
      <aside
        class="bg-bg-elevated rounded-2xl border border-current/10 p-4"
        :class="isDocsCollapsed ? 'w-32' : 'w-72'"
        v-show="!isDocsHidden"
      >
        <div class="mb-6">
          <p class="text-text text-sm font-semibold">Docs</p>
          <p class="text-text/60 text-xs" v-show="!isDocsCollapsed">
            Centro de ayuda
          </p>
        </div>

        <nav class="space-y-1">
          <button
            class="button button-ghost w-full justify-start"
            type="button"
          >
            Guías
          </button>
          <button
            class="button button-ghost w-full justify-start"
            type="button"
            @click="toggleDocsApi"
          >
            API
          </button>
          <div class="ml-6 space-y-1" v-show="docsApiOpen && !isDocsCollapsed">
            <button
              class="button button-ghost w-full justify-start"
              type="button"
            >
              Autenticación
            </button>
            <button
              class="button button-ghost w-full justify-start"
              type="button"
            >
              Webhooks
            </button>
          </div>
          <button
            class="button button-ghost w-full justify-start"
            type="button"
          >
            SDKs
          </button>
        </nav>
      </aside>
    </section>

    <!-- 04: Minimal con iconos (ocultar) -->
    <section class="space-y-4">
      <div class="flex items-center gap-2">
        <button
          class="button button-ghost"
          type="button"
          @click="toggleMinimalHidden"
        >
          {{ isMinimalHidden ? 'Mostrar' : 'Ocultar' }}
        </button>
      </div>
      <aside
        class="bg-bg-elevated w-56 rounded-2xl border border-current/10 p-4"
        v-show="!isMinimalHidden"
      >
        <div class="mb-4 flex items-center gap-3">
          <span class="avatar avatar-sm avatar-rounded avatar-initials">M</span>
          <p class="text-text text-sm font-semibold">Minimal</p>
        </div>
        <nav class="space-y-1">
          <button
            class="button button-ghost w-full justify-start"
            type="button"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v18m9-9H3"
              />
            </svg>
            Nuevo
          </button>
          <button
            class="button button-ghost w-full justify-start"
            type="button"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Menú
          </button>
        </nav>
      </aside>
    </section>

    <!-- 05: Icon-only (colapsable) -->
    <section class="space-y-4">
      <div class="flex items-center gap-2">
        <button
          class="button button-ghost"
          type="button"
          @click="toggleIconOnly"
        >
          {{ isIconOnlyCollapsed ? 'Expandir' : 'Colapsar' }}
        </button>
      </div>
      <aside
        class="bg-bg-elevated rounded-2xl border border-current/10 p-4"
        :class="isIconOnlyCollapsed ? 'w-20' : 'w-56'"
      >
        <div class="mb-4 flex items-center gap-3">
          <span class="avatar avatar-sm avatar-rounded avatar-initials">I</span>
          <p
            class="text-text text-sm font-semibold"
            v-show="!isIconOnlyCollapsed"
          >
            Icon only
          </p>
        </div>
        <nav class="space-y-1">
          <button
            class="button button-ghost w-full justify-start"
            type="button"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14"
              />
            </svg>
            <span v-show="!isIconOnlyCollapsed">Actividad</span>
          </button>
          <button
            class="button button-ghost w-full justify-start"
            type="button"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v14"
              />
            </svg>
            <span v-show="!isIconOnlyCollapsed">Agregar</span>
          </button>
          <button
            class="button button-ghost w-full justify-start"
            type="button"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span v-show="!isIconOnlyCollapsed">Cerrar</span>
          </button>
        </nav>
      </aside>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isDashCollapsed = ref(false);
const isDashHidden = ref(false);
const dashAnalyticsOpen = ref(true);

const isShopCollapsed = ref(false);
const isShopHidden = ref(false);
const shopOrdersOpen = ref(true);

const isDocsCollapsed = ref(false);
const isDocsHidden = ref(false);
const docsApiOpen = ref(true);

const isMinimalHidden = ref(false);

const isIconOnlyCollapsed = ref(true);

const toggleDash = () => {
  isDashCollapsed.value = !isDashCollapsed.value;
};
const toggleDashHidden = () => {
  isDashHidden.value = !isDashHidden.value;
};
const toggleDashAnalytics = () => {
  dashAnalyticsOpen.value = !dashAnalyticsOpen.value;
};

const toggleShop = () => {
  isShopCollapsed.value = !isShopCollapsed.value;
};
const toggleShopHidden = () => {
  isShopHidden.value = !isShopHidden.value;
};
const toggleShopOrders = () => {
  shopOrdersOpen.value = !shopOrdersOpen.value;
};

const toggleDocs = () => {
  isDocsCollapsed.value = !isDocsCollapsed.value;
};
const toggleDocsHidden = () => {
  isDocsHidden.value = !isDocsHidden.value;
};
const toggleDocsApi = () => {
  docsApiOpen.value = !docsApiOpen.value;
};

const toggleMinimalHidden = () => {
  isMinimalHidden.value = !isMinimalHidden.value;
};

const toggleIconOnly = () => {
  isIconOnlyCollapsed.value = !isIconOnlyCollapsed.value;
};
</script>

<template>
  <div class="space-y-8 p-6">
    <h1 class="text-3xl font-bold">Tabs - Todas las Variantes</h1>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Base</h2>
      <div class="tabs">
        <div class="tab-list">
          <button
            class="tab"
            :class="{ 'tab-active': baseTab === 'resumen' }"
            type="button"
            @click="baseTab = 'resumen'"
          >
            Resumen
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': baseTab === 'actividad' }"
            type="button"
            @click="baseTab = 'actividad'"
          >
            Actividad
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': baseTab === 'equipo' }"
            type="button"
            @click="baseTab = 'equipo'"
          >
            Equipo
          </button>
          <button class="tab tab-disabled" type="button" disabled>
            Archivado
          </button>
        </div>
        <div class="tab-panel" v-show="baseTab === 'resumen'">
          Contenido del resumen del proyecto.
        </div>
        <div class="tab-panel" v-show="baseTab === 'actividad'">
          Actividad reciente del proyecto.
        </div>
        <div class="tab-panel" v-show="baseTab === 'equipo'">
          Miembros y roles del equipo.
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Underline</h2>
      <div class="tabs tabs-underline">
        <div class="tab-list">
          <button
            class="tab"
            :class="{ 'tab-active': underlineTab === 'pendientes' }"
            type="button"
            @click="underlineTab = 'pendientes'"
          >
            Pendientes
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': underlineTab === 'curso' }"
            type="button"
            @click="underlineTab = 'curso'"
          >
            En curso
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': underlineTab === 'cerrados' }"
            type="button"
            @click="underlineTab = 'cerrados'"
          >
            Cerrados
          </button>
        </div>
        <div class="tab-panel" v-show="underlineTab === 'pendientes'">
          Lista de tareas pendientes.
        </div>
        <div class="tab-panel" v-show="underlineTab === 'curso'">
          Tareas actualmente en curso.
        </div>
        <div class="tab-panel" v-show="underlineTab === 'cerrados'">
          Historial de tareas cerradas.
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Pill</h2>
      <div class="tabs tabs-pill">
        <div class="tab-list">
          <button
            class="tab"
            :class="{ 'tab-active': pillTab === 'general' }"
            type="button"
            @click="pillTab = 'general'"
          >
            General
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': pillTab === 'seguridad' }"
            type="button"
            @click="pillTab = 'seguridad'"
          >
            Seguridad
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': pillTab === 'facturacion' }"
            type="button"
            @click="pillTab = 'facturacion'"
          >
            Facturación
          </button>
        </div>
        <div class="tab-panel" v-show="pillTab === 'general'">
          Opciones generales de la cuenta.
        </div>
        <div class="tab-panel" v-show="pillTab === 'seguridad'">
          Preferencias de seguridad y acceso.
        </div>
        <div class="tab-panel" v-show="pillTab === 'facturacion'">
          Planes y métodos de pago.
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Soft</h2>
      <div class="tabs tabs-soft">
        <div class="tab-list">
          <button
            class="tab"
            :class="{ 'tab-active': softTab === 'vision' }"
            type="button"
            @click="softTab = 'vision'"
          >
            Visión
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': softTab === 'roadmap' }"
            type="button"
            @click="softTab = 'roadmap'"
          >
            Roadmap
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': softTab === 'kpis' }"
            type="button"
            @click="softTab = 'kpis'"
          >
            KPIs
          </button>
        </div>
        <div class="tab-panel" v-show="softTab === 'vision'">
          Panel con enfoque suave en primary.
        </div>
        <div class="tab-panel" v-show="softTab === 'roadmap'">
          Planificación y roadmap del producto.
        </div>
        <div class="tab-panel" v-show="softTab === 'kpis'">
          KPIs y métricas clave del negocio.
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Outlined</h2>
      <div class="tabs tabs-outlined">
        <div class="tab-list">
          <button
            class="tab"
            :class="{ 'tab-active': outlinedTab === 'hoy' }"
            type="button"
            @click="outlinedTab = 'hoy'"
          >
            Hoy
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': outlinedTab === 'semana' }"
            type="button"
            @click="outlinedTab = 'semana'"
          >
            Semana
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': outlinedTab === 'mes' }"
            type="button"
            @click="outlinedTab = 'mes'"
          >
            Mes
          </button>
        </div>
        <div class="tab-panel" v-show="outlinedTab === 'hoy'">
          Actividad de hoy.
        </div>
        <div class="tab-panel" v-show="outlinedTab === 'semana'">
          Resumen de actividad semanal.
        </div>
        <div class="tab-panel" v-show="outlinedTab === 'mes'">
          Resumen de actividad mensual.
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Con iconos y badges</h2>
      <div class="tabs">
        <div class="tab-list">
          <button
            class="tab"
            :class="{ 'tab-active': iconTab === 'nuevo' }"
            type="button"
            @click="iconTab = 'nuevo'"
          >
            <svg class="tab-icon" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v14m7-7H5"
              />
            </svg>
            Nuevo
            <span class="tab-badge">3</span>
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': iconTab === 'historial' }"
            type="button"
            @click="iconTab = 'historial'"
          >
            <svg class="tab-icon" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6l4 2"
              />
            </svg>
            Historial
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': iconTab === 'equipo' }"
            type="button"
            @click="iconTab = 'equipo'"
          >
            <svg class="tab-icon" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 0 1 0 8M8 15a4 4 0 1 1 0-8"
              />
            </svg>
            Equipo
          </button>
        </div>
        <div class="tab-panel" v-show="iconTab === 'nuevo'">
          Panel con íconos y badges.
        </div>
        <div class="tab-panel" v-show="iconTab === 'historial'">
          Historial de cambios recientes.
        </div>
        <div class="tab-panel" v-show="iconTab === 'equipo'">
          Accesos y miembros del equipo.
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Tamaños</h2>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div class="tabs tab-sm">
          <div class="tab-list">
            <button
              class="tab"
              :class="{ 'tab-active': sizeSmallTab === 'small' }"
              type="button"
              @click="sizeSmallTab = 'small'"
            >
              Small
            </button>
            <button
              class="tab"
              :class="{ 'tab-active': sizeSmallTab === 'docs' }"
              type="button"
              @click="sizeSmallTab = 'docs'"
            >
              Docs
            </button>
          </div>
          <div class="tab-panel" v-show="sizeSmallTab === 'small'">
            Tabs pequeñas.
          </div>
          <div class="tab-panel" v-show="sizeSmallTab === 'docs'">
            Documentación rápida.
          </div>
        </div>

        <div class="tabs">
          <div class="tab-list">
            <button
              class="tab"
              :class="{ 'tab-active': sizeMediumTab === 'medium' }"
              type="button"
              @click="sizeMediumTab = 'medium'"
            >
              Medium
            </button>
            <button
              class="tab"
              :class="{ 'tab-active': sizeMediumTab === 'docs' }"
              type="button"
              @click="sizeMediumTab = 'docs'"
            >
              Docs
            </button>
          </div>
          <div class="tab-panel" v-show="sizeMediumTab === 'medium'">
            Tabs medianas.
          </div>
          <div class="tab-panel" v-show="sizeMediumTab === 'docs'">
            Guías y documentación.
          </div>
        </div>

        <div class="tabs tab-lg">
          <div class="tab-list">
            <button
              class="tab"
              :class="{ 'tab-active': sizeLargeTab === 'large' }"
              type="button"
              @click="sizeLargeTab = 'large'"
            >
              Large
            </button>
            <button
              class="tab"
              :class="{ 'tab-active': sizeLargeTab === 'docs' }"
              type="button"
              @click="sizeLargeTab = 'docs'"
            >
              Docs
            </button>
          </div>
          <div class="tab-panel" v-show="sizeLargeTab === 'large'">
            Tabs grandes.
          </div>
          <div class="tab-panel" v-show="sizeLargeTab === 'docs'">
            Documentación avanzada.
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Full width</h2>
      <div class="tabs tabs-full">
        <div class="tab-list">
          <button
            class="tab"
            :class="{ 'tab-active': fullTab === 'resumen' }"
            type="button"
            @click="fullTab = 'resumen'"
          >
            Resumen
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': fullTab === 'tareas' }"
            type="button"
            @click="fullTab = 'tareas'"
          >
            Tareas
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': fullTab === 'calendario' }"
            type="button"
            @click="fullTab = 'calendario'"
          >
            Calendario
          </button>
        </div>
        <div class="tab-panel" v-show="fullTab === 'resumen'">
          Tabs ocupando todo el ancho.
        </div>
        <div class="tab-panel" v-show="fullTab === 'tareas'">
          Vista de tareas asignadas.
        </div>
        <div class="tab-panel" v-show="fullTab === 'calendario'">
          Calendario con eventos del equipo.
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Vertical</h2>
      <div class="tabs tabs-vertical">
        <div class="tab-list">
          <button
            class="tab"
            :class="{ 'tab-active': verticalTab === 'general' }"
            type="button"
            @click="verticalTab = 'general'"
          >
            General
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': verticalTab === 'integraciones' }"
            type="button"
            @click="verticalTab = 'integraciones'"
          >
            Integraciones
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': verticalTab === 'facturacion' }"
            type="button"
            @click="verticalTab = 'facturacion'"
          >
            Facturación
          </button>
        </div>
        <div class="tab-panel" v-show="verticalTab === 'general'">
          Configura el plan, integraciones y medios de pago.
        </div>
        <div class="tab-panel" v-show="verticalTab === 'integraciones'">
          Conecta herramientas y automatizaciones.
        </div>
        <div class="tab-panel" v-show="verticalTab === 'facturacion'">
          Ajusta ciclos de cobro y facturación.
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const baseTab = ref('resumen');
const underlineTab = ref('pendientes');
const pillTab = ref('general');
const softTab = ref('vision');
const outlinedTab = ref('semana');
const iconTab = ref('nuevo');
const sizeSmallTab = ref('small');
const sizeMediumTab = ref('medium');
const sizeLargeTab = ref('large');
const fullTab = ref('resumen');
const verticalTab = ref('general');
</script>

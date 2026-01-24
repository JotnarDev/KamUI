<template>
  <div class="space-y-8 p-6">
    <h1 class="text-3xl font-bold">Modals - Todas las Variantes</h1>

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Base</h2>
      <button @click="openBaseModal">Abrir Modal</button>
      <div class="modal" v-if="isBaseModalOpen">
        <div class="modal-panel">
          <div class="modal-header">
            <h3 class="modal-title">Crear proyecto</h3>
            <button class="modal-close" type="button" @click="closeBaseModal">
              ✕
            </button>
          </div>
          <div class="modal-body">
            Configura el nombre, la visibilidad y los accesos del nuevo
            proyecto.
          </div>
          <div class="modal-footer">
            <button
              class="button button-ghost"
              type="button"
              @click="closeBaseModal"
            >
              Cancelar
            </button>
            <button class="button button-primary" type="button">Guardar</button>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Tamaños</h2>
      <button @click="openSizeModal">Abrir Modal</button>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div class="modal modal-sm" v-if="isSizeModalOpen">
          <div class="modal-panel">
            <div class="modal-header">
              <h3 class="modal-title">Small</h3>
              <button class="modal-close" type="button" @click="closeSizeModal">
                ✕
              </button>
            </div>
            <div class="modal-body">Modal compacto para acciones rápidas.</div>
            <div class="modal-footer">
              <button
                class="button button-ghost"
                type="button"
                @click="closeSizeModal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>

        <div class="modal" v-if="isSizeModalOpen">
          <div class="modal-panel">
            <div class="modal-header">
              <h3 class="modal-title">Medium</h3>
              <button class="modal-close" type="button" @click="closeSizeModal">
                ✕
              </button>
            </div>
            <div class="modal-body">
              Ideal para flujos estándar y confirmaciones.
            </div>
            <div class="modal-footer">
              <button
                class="button button-ghost"
                type="button"
                @click="closeSizeModal"
              >
                Cerrar
              </button>
              <button class="button button-primary" type="button">Listo</button>
            </div>
          </div>
        </div>

        <div class="modal modal-lg" v-if="isSizeModalOpen">
          <div class="modal-panel">
            <div class="modal-header">
              <h3 class="modal-title">Large</h3>
              <button class="modal-close" type="button" @click="closeSizeModal">
                ✕
              </button>
            </div>
            <div class="modal-body">
              Modal amplio para formularios o listas detalladas.
            </div>
            <div class="modal-footer">
              <button
                class="button button-ghost"
                type="button"
                @click="closeSizeModal"
              >
                Cancelar
              </button>
              <button class="button button-primary" type="button">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">XL</h2>
      <button @click="openXlModal">Abrir Modal</button>
      <div class="modal modal-xl" v-if="isXlModalOpen">
        <div class="modal-panel">
          <div class="modal-header">
            <h3 class="modal-title">Resumen de proyecto</h3>
            <button class="modal-close" type="button" @click="closeXlModal">
              ✕
            </button>
          </div>
          <div class="modal-body">
            Aquí puedes mostrar tablas, formularios complejos o un resumen con
            métricas clave del proyecto.
            <div class="modal-divider"></div>
            <p class="text-text/70">
              Estado: En progreso · 12 tareas abiertas · 4 bloqueadas
            </p>
          </div>
          <div class="modal-footer">
            <button
              class="button button-ghost"
              type="button"
              @click="closeXlModal"
            >
              Cerrar
            </button>
            <button class="button button-primary" type="button">
              Compartir
            </button>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Variantes de estilo</h2>
      <button @click="openStyleModal">Abrir Modal</button>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div class="modal modal-elevated" v-if="isStyleModalOpen">
          <div class="modal-panel">
            <div class="modal-header">
              <h3 class="modal-title">Elevated</h3>
              <button
                class="modal-close"
                type="button"
                @click="closeStyleModal"
              >
                ✕
              </button>
            </div>
            <div class="modal-body">
              Modal con sombras suaves y ring de profundidad.
            </div>
            <div class="modal-footer">
              <button
                class="button button-ghost"
                type="button"
                @click="closeStyleModal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>

        <div class="modal modal-soft" v-if="isStyleModalOpen">
          <div class="modal-panel">
            <div class="modal-header">
              <h3 class="modal-title">Soft</h3>
              <button
                class="modal-close"
                type="button"
                @click="closeStyleModal"
              >
                ✕
              </button>
            </div>
            <div class="modal-body">
              Variante suave con fondo tintado en primary.
            </div>
            <div class="modal-footer">
              <button
                class="button button-ghost"
                type="button"
                @click="closeStyleModal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>

        <div class="modal modal-outline" v-if="isStyleModalOpen">
          <div class="modal-panel">
            <div class="modal-header">
              <h3 class="modal-title">Outline</h3>
              <button
                class="modal-close"
                type="button"
                @click="closeStyleModal"
              >
                ✕
              </button>
            </div>
            <div class="modal-body">Modal transparente con borde primary.</div>
            <div class="modal-footer">
              <button
                class="button button-ghost"
                type="button"
                @click="closeStyleModal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>

        <div class="modal modal-centered" v-if="isStyleModalOpen">
          <div class="modal-panel">
            <div class="modal-header">
              <h3 class="modal-title">Centered</h3>
              <button
                class="modal-close"
                type="button"
                @click="closeStyleModal"
              >
                ✕
              </button>
            </div>
            <div class="modal-body">
              Modal centrado, perfecto para confirmaciones rápidas.
            </div>
            <div class="modal-footer">
              <button
                class="button button-ghost"
                type="button"
                @click="closeStyleModal"
              >
                Cerrar
              </button>
              <button class="button button-primary" type="button">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Estados</h2>
      <button @click="openStateModal">Abrir Modal</button>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div class="modal modal-success" v-if="isStateModalOpen">
          <div class="modal-panel">
            <div class="modal-header">
              <h3 class="modal-title">Éxito</h3>
              <button
                class="modal-close"
                type="button"
                @click="closeStateModal"
              >
                ✕
              </button>
            </div>
            <div class="modal-body">
              Operación completada correctamente. Puedes continuar.
            </div>
            <div class="modal-footer">
              <button
                class="button button-ghost"
                type="button"
                @click="closeStateModal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>

        <div class="modal modal-warning" v-if="isStateModalOpen">
          <div class="modal-panel">
            <div class="modal-header">
              <h3 class="modal-title">Advertencia</h3>
              <button
                class="modal-close"
                type="button"
                @click="closeStateModal"
              >
                ✕
              </button>
            </div>
            <div class="modal-body">
              Hay cambios sin guardar. ¿Deseas continuar?
            </div>
            <div class="modal-footer">
              <button
                class="button button-ghost"
                type="button"
                @click="closeStateModal"
              >
                Cancelar
              </button>
              <button class="button button-warning" type="button">
                Continuar
              </button>
            </div>
          </div>
        </div>

        <div class="modal modal-error" v-if="isStateModalOpen">
          <div class="modal-panel">
            <div class="modal-header">
              <h3 class="modal-title">Error</h3>
              <button
                class="modal-close"
                type="button"
                @click="closeStateModal"
              >
                ✕
              </button>
            </div>
            <div class="modal-body">
              No pudimos completar la acción. Intenta nuevamente.
            </div>
            <div class="modal-footer">
              <button
                class="button button-ghost"
                type="button"
                @click="closeStateModal"
              >
                Cerrar
              </button>
              <button class="button button-error" type="button">
                Reintentar
              </button>
            </div>
          </div>
        </div>

        <div class="modal modal-info" v-if="isStateModalOpen">
          <div class="modal-panel">
            <div class="modal-header">
              <h3 class="modal-title">Info</h3>
              <button
                class="modal-close"
                type="button"
                @click="closeStateModal"
              >
                ✕
              </button>
            </div>
            <div class="modal-body">
              Recuerda revisar los accesos del equipo antes de continuar.
            </div>
            <div class="modal-footer">
              <button
                class="button button-ghost"
                type="button"
                @click="closeStateModal"
              >
                Cerrar
              </button>
              <button class="button button-info" type="button">
                Entendido
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// funcionalidad para abrir y cerrar el modal
import { ref } from 'vue';

const isBaseModalOpen = ref(false);
const isSizeModalOpen = ref(false);
const isXlModalOpen = ref(false);
const isStyleModalOpen = ref(false);
const isStateModalOpen = ref(false);

const openBaseModal = () => {
  isBaseModalOpen.value = true;
};
const closeBaseModal = () => {
  isBaseModalOpen.value = false;
};

const openSizeModal = () => {
  isSizeModalOpen.value = true;
};
const closeSizeModal = () => {
  isSizeModalOpen.value = false;
};

const openXlModal = () => {
  isXlModalOpen.value = true;
};
const closeXlModal = () => {
  isXlModalOpen.value = false;
};

const openStyleModal = () => {
  isStyleModalOpen.value = true;
};
const closeStyleModal = () => {
  isStyleModalOpen.value = false;
};

const openStateModal = () => {
  isStateModalOpen.value = true;
};
const closeStateModal = () => {
  isStateModalOpen.value = false;
};
</script>

<template>
  <div class="bg-bg text-text">
    <div class="mx-auto max-w-6xl space-y-12 px-6 py-10">
      <header class="space-y-3">
        <p class="text-text/60 text-sm">KamUI · UI Library</p>
        <h1 class="text-3xl font-bold md:text-4xl">
          Demo de componentes con explicación y ejemplos
        </h1>
        <p class="text-text/70">
          Esta página muestra todos los componentes disponibles, describe su
          propósito y ofrece ejemplos prácticos listos para usar.
        </p>
      </header>

      <nav
        class="bg-bg-elevated grid gap-3 rounded-2xl border border-current/10 p-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <a class="button button-ghost justify-start" href="#alerts">
          Alertas
        </a>
        <a class="button button-ghost justify-start" href="#avatars">
          Avatares
        </a>
        <a class="button button-ghost justify-start" href="#badges">Badges</a>
        <a class="button button-ghost justify-start" href="#breadcrumbs">
          Breadcrumbs
        </a>
        <a class="button button-ghost justify-start" href="#buttons">
          Botones
        </a>
        <a class="button button-ghost justify-start" href="#cards">Cards</a>
        <a class="button button-ghost justify-start" href="#dropdowns">
          Dropdowns
        </a>
        <a class="button button-ghost justify-start" href="#forms">Forms</a>
        <a class="button button-ghost justify-start" href="#modals">Modals</a>
        <a class="button button-ghost justify-start" href="#popovers">
          Popovers
        </a>
        <a class="button button-ghost justify-start" href="#pagination">
          Paginación
        </a>
        <a class="button button-ghost justify-start" href="#tooltips">
          Tooltips
        </a>
        <a class="button button-ghost justify-start" href="#progress">
          Progress Bars
        </a>
        <a class="button button-ghost justify-start" href="#spinners">
          Spinners / Loaders
        </a>
        <a class="button button-ghost justify-start" href="#toasts">
          Toasts / Notifications
        </a>
        <a class="button button-ghost justify-start" href="#accordion">
          Accordion / Collapse
        </a>
        <a class="button button-ghost justify-start" href="#dividers">
          Dividers / Separators
        </a>
        <a class="button button-ghost justify-start" href="#list-groups">
          List Groups
        </a>
        <a class="button button-ghost justify-start" href="#stepper">
          Stepper / Wizard
        </a>
        <a class="button button-ghost justify-start" href="#tables">Tablas</a>
        <a class="button button-ghost justify-start" href="#tabs">Tabs</a>
        <a class="button button-ghost justify-start" href="#typography">
          Tipografía
        </a>
        <a class="button button-ghost justify-start" href="#navbar">Navbar</a>
        <a class="button button-ghost justify-start" href="#sidebar">Sidebar</a>
        <a class="button button-ghost justify-start" href="#footer">Footer</a>
      </nav>

      <section id="alerts" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Alertas</h2>
          <p class="text-text/70">
            Comunican estados del sistema (éxito, error, warning o información)
            con variantes sólidas, suaves u outlined.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;div class=&quot;alert alert-success&quot; role=&quot;alert&quot;&gt;
  Tu acción se completó.
&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <AlertDemo />
        </div>
      </section>

      <section id="avatars" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Avatares</h2>
          <p class="text-text/70">
            Representan usuarios con imágenes, iniciales o iconos, y soportan
            tamaños, bordes y estados.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;img class=&quot;avatar avatar-lg avatar-rounded&quot; src=&quot;...&quot; alt=&quot;User&quot; /&gt;
&lt;div class=&quot;avatar avatar-initials avatar-md&quot;&gt;JL&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <AvatarDemo />
        </div>
      </section>

      <section id="badges" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Badges</h2>
          <p class="text-text/70">
            Etiquetas compactas para estados, categorías o contadores con
            estilos sólidos, soft u outlined.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;span class=&quot;badge badge-md badge-success badge-pill&quot;&gt;Success&lt;/span&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <BadgeDemo />
        </div>
      </section>

      <section id="breadcrumbs" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Breadcrumbs</h2>
          <p class="text-text/70">
            Ayudan a la navegación jerárquica mostrando la ruta actual.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;ol class=&quot;breadcrumb breadcrumb-list&quot;&gt;
  &lt;li&gt;&lt;a class=&quot;breadcrumb-item&quot; href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
  &lt;li class=&quot;breadcrumb-separator&quot;&gt;/&lt;/li&gt;
  &lt;li aria-current=&quot;page&quot;&gt;&lt;span class=&quot;breadcrumb-current-item&quot;&gt;Docs&lt;/span&gt;&lt;/li&gt;
&lt;/ol&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <BreadcrumbDemo />
        </div>
      </section>

      <section id="buttons" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Botones</h2>
          <p class="text-text/70">
            CTA principales, secundarios y variantes con tamaños, íconos y
            estilos ghost u outlined.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;button class=&quot;button button-primary&quot;&gt;Primary&lt;/button&gt;
&lt;button class=&quot;button button-outlined button-outlined-secondary&quot;&gt;Secondary&lt;/button&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <ButtonsDemo />
        </div>
      </section>

      <section id="cards" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Cards</h2>
          <p class="text-text/70">
            Contenedores para contenido modular con variantes básicas, soft y
            outlined.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;div class=&quot;card&quot;&gt;
  &lt;div class=&quot;card-header&quot;&gt;Título&lt;/div&gt;
  &lt;div class=&quot;card-body&quot;&gt;Contenido&lt;/div&gt;
  &lt;div class=&quot;card-footer&quot;&gt;Acciones&lt;/div&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <CardDemo />
        </div>
      </section>

      <section id="dropdowns" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Dropdowns</h2>
          <p class="text-text/70">
            Menús contextuales para acciones rápidas con estados y tamaños.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;div class=&quot;dropdown&quot;&gt;
  &lt;button class=&quot;dropdown-trigger&quot; type=&quot;button&quot;&gt;Opciones&lt;/button&gt;
  &lt;div class=&quot;dropdown-menu&quot;&gt;
    &lt;button class=&quot;dropdown-item&quot;&gt;Editar&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <DropdownDemo />
        </div>
      </section>

      <section id="forms" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Forms</h2>
          <p class="text-text/70">
            Inputs consistentes con tamaños, estados y controles avanzados.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;input class=&quot;form-input form-input-md&quot; placeholder=&quot;Email&quot; /&gt;
&lt;label class=&quot;form-switch&quot;&gt;
  &lt;input type=&quot;checkbox&quot; class=&quot;form-switch-input peer&quot; /&gt;
  &lt;span class=&quot;form-switch-track&quot;&gt;&lt;span class=&quot;form-switch-thumb&quot;&gt;&lt;/span&gt;&lt;/span&gt;
  &lt;span class=&quot;form-check-label&quot;&gt;Activar&lt;/span&gt;
&lt;/label&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <FormsDemo />
        </div>
      </section>

      <section id="modals" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Modals</h2>
          <p class="text-text/70">
            Diálogos para confirmaciones o flujos complejos con tamaños y
            variantes.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;div class=&quot;modal&quot;&gt;
  &lt;div class=&quot;modal-panel&quot;&gt;
    &lt;div class=&quot;modal-header&quot;&gt;Título&lt;/div&gt;
    &lt;div class=&quot;modal-body&quot;&gt;Contenido&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <ModalDemo />
        </div>
      </section>

      <section id="popovers" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Popovers</h2>
          <p class="text-text/70">
            Tips y micro-información contextual anclada a un elemento.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;div class=&quot;popover&quot;&gt;
  &lt;button class=&quot;button button-ghost&quot;&gt;Info&lt;/button&gt;
  &lt;div class=&quot;popover-panel popover-top&quot;&gt;Contenido&lt;/div&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <PopoverDemo />
        </div>
      </section>

      <section id="pagination" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Paginación</h2>
          <p class="text-text/70">
            Navegación de listas extensas con variantes, tamaños y estados.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;nav class=&quot;pagination&quot; aria-label=&quot;Pagination&quot;&gt;
  &lt;ul class=&quot;pagination-list&quot;&gt;
    &lt;li&gt;&lt;a class=&quot;pagination-link pagination-link-active&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class=&quot;pagination-link&quot; href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <PaginationDemo />
        </div>
      </section>

      <section id="tooltips" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Tooltips</h2>
          <p class="text-text/70">
            Microayuda contextual con variantes, tamaños y posiciones.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;div class=&quot;tooltip&quot;&gt;
  &lt;button class=&quot;button button-ghost tooltip-trigger&quot;&gt;Info&lt;/button&gt;
  &lt;div class=&quot;tooltip-panel tooltip-top&quot;&gt;
    Tooltip arriba
    &lt;span class=&quot;tooltip-arrow&quot;&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <TooltipDemo />
        </div>
      </section>

      <section id="progress" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Progress Bars</h2>
          <p class="text-text/70">
            Indicadores de avance con tamaños, variantes y estilos striped.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;div class=&quot;progress progress-success&quot;&gt;
  &lt;div class=&quot;progress-bar&quot; style=&quot;width: 70%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <ProgressDemo />
        </div>
      </section>

      <section id="spinners" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Spinners / Loaders</h2>
          <p class="text-text/70">
            Indicadores de carga en variantes ring, dual, dots y bar.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;div class=&quot;spinner spinner-primary&quot;&gt;
  &lt;div class=&quot;spinner-ring&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <SpinnersDemo />
        </div>
      </section>

      <section id="toasts" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Toasts / Notifications</h2>
          <p class="text-text/70">
            Avisos breves con variantes, tamaños y acciones opcionales.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;div class=&quot;toast toast-success&quot;&gt;
  &lt;div class=&quot;toast-content&quot;&gt;
    &lt;div class=&quot;toast-title&quot;&gt;Éxito&lt;/div&gt;
    &lt;p class=&quot;toast-message&quot;&gt;Operación completada.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <ToastsDemo />
        </div>
      </section>

      <section id="accordion" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Accordion / Collapse</h2>
          <p class="text-text/70">
            Secciones colapsables con variantes y tamaños consistentes.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;div class=&quot;accordion&quot;&gt;
  &lt;div class=&quot;accordion-item&quot;&gt;
    &lt;button class=&quot;accordion-trigger&quot;&gt;Título&lt;/button&gt;
    &lt;div class=&quot;accordion-panel&quot;&gt;Contenido&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <AccordionDemo />
        </div>
      </section>

      <section id="dividers" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Dividers / Separators</h2>
          <p class="text-text/70">
            Separadores horizontales y verticales con estilos y colores.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;div class=&quot;divider divider-dashed&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;divider-with-label&quot;&gt;&lt;span class=&quot;divider-label&quot;&gt;Sección&lt;/span&gt;&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <DividersDemo />
        </div>
      </section>

      <section id="list-groups" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">List Groups</h2>
          <p class="text-text/70">
            Listas con estados, iconos, badges y variantes de estilo.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;div class=&quot;list-group&quot;&gt;
  &lt;button class=&quot;list-group-item list-group-item-active&quot;&gt;Activo&lt;/button&gt;
  &lt;button class=&quot;list-group-item&quot;&gt;Item&lt;/button&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <ListGroupsDemo />
        </div>
      </section>

      <section id="stepper" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Stepper / Wizard</h2>
          <p class="text-text/70">
            Flujo por pasos con estados, tamaños y variante vertical.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;div class=&quot;stepper&quot;&gt;
  &lt;div class=&quot;stepper-item stepper-active&quot;&gt;
    &lt;span class=&quot;stepper-index&quot;&gt;1&lt;/span&gt;
    &lt;div class=&quot;stepper-label&quot;&gt;Paso&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <StepperDemo />
        </div>
      </section>

      <section id="tables" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Tablas</h2>
          <p class="text-text/70">
            Presentación de datos con variantes striped, bordered y compact.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;table class=&quot;table table-striped&quot;&gt;
  &lt;thead class=&quot;table-head&quot;&gt;...&lt;/thead&gt;
  &lt;tbody&gt;...&lt;/tbody&gt;
&lt;/table&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <TableDemo />
        </div>
      </section>

      <section id="tabs" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Tabs</h2>
          <p class="text-text/70">
            Navegación por secciones con estilos underline, pill y outlined.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;div class=&quot;tabs&quot;&gt;
  &lt;div class=&quot;tab-list&quot;&gt;
    &lt;button class=&quot;tab tab-active&quot;&gt;Resumen&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;tab-panel&quot;&gt;Contenido&lt;/div&gt;
&lt;/div&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10">
          <TabsDemo />
        </div>
      </section>

      <section id="typography" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Tipografía</h2>
          <p class="text-text/70">
            Jerarquía de títulos, párrafos y blockquotes para contenido
            editorial.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;h1 class=&quot;heading-1 typo&quot;&gt;Heading 1&lt;/h1&gt;
&lt;p class=&quot;paragraph paragraph-base&quot;&gt;Texto base&lt;/p&gt;
&lt;blockquote class=&quot;blockquote&quot;&gt;...&lt;/blockquote&gt;
          </pre>
        </div>
        <div
          class="bg-bg-elevated space-y-6 rounded-2xl border border-current/10 p-6"
        >
          <HeadingDemo />
          <ParagraphDemo />
          <BlockquoteDemo />
        </div>
      </section>

      <section id="navbar" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Navbar</h2>
          <p class="text-text/70">
            Cabeceras listas para landing, dashboards y e-commerce con botones y
            elementos de navegación.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;header class=&quot;bg-bg-elevated rounded-2xl&quot;&gt;
  &lt;nav class=&quot;flex items-center justify-between&quot;&gt;...&lt;/nav&gt;
&lt;/header&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10 p-6">
          <NavbarDemo />
        </div>
      </section>

      <section id="sidebar" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Sidebar</h2>
          <p class="text-text/70">
            Barras laterales colapsables con iconos, badges y submenús.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;aside class=&quot;bg-bg-elevated rounded-2xl&quot;&gt;
  &lt;nav&gt;...&lt;/nav&gt;
&lt;/aside&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10 p-6">
          <SidebarDemo />
        </div>
      </section>

      <section id="footer" class="scroll-mt-24 space-y-4">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Footer</h2>
          <p class="text-text/70">
            Pies de página para landing, blog y tiendas con enlaces y CTA.
          </p>
          <pre class="rounded-xl bg-gray-950 p-4 text-xs text-white/90">
&lt;footer class=&quot;bg-bg-elevated rounded-2xl&quot;&gt;
  &lt;div class=&quot;grid gap-6&quot;&gt;...&lt;/div&gt;
&lt;/footer&gt;
          </pre>
        </div>
        <div class="bg-bg-elevated rounded-2xl border border-current/10 p-6">
          <FooterDemo />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import AlertDemo from '../components/alerts/alert.vue';
import AvatarDemo from '../components/avatars/avatar.vue';
import BadgeDemo from '../components/badges/badge.vue';
import BreadcrumbDemo from '../components/breadcrumbs/breadcrumb.vue';
import ButtonsDemo from '../components/buttons/button.vue';
import CardDemo from '../components/cards/card.vue';
import DropdownDemo from '../components/dropdown/dropdown.vue';
import FormsDemo from '../components/forms/form.vue';
import ModalDemo from '../components/modals/modal.vue';
import PopoverDemo from '../components/popovers/popover.vue';
import PaginationDemo from '../components/pagination/pagination.vue';
import TooltipDemo from '../components/tooltips/tooltip.vue';
import ProgressDemo from '../components/progress/progress.vue';
import SpinnersDemo from '../components/spinners/spinner.vue';
import ToastsDemo from '../components/toasts/toast.vue';
import AccordionDemo from '../components/accordion/accordion.vue';
import DividersDemo from '../components/dividers/divider.vue';
import ListGroupsDemo from '../components/list-groups/list-group.vue';
import StepperDemo from '../components/stepper/stepper.vue';
import TableDemo from '../components/tables/table.vue';
import TabsDemo from '../components/tabs/tab.vue';
import HeadingDemo from '../components/typography/heading.vue';
import ParagraphDemo from '../components/typography/paragraph.vue';
import BlockquoteDemo from '../components/typography/blockquote.vue';
import NavbarDemo from '../blocks/navbar/navbar.vue';
import SidebarDemo from '../blocks/sidebar/sidebar.vue';
import FooterDemo from '../blocks/footer/footer.vue';
</script>

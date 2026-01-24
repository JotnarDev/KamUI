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
import TableDemo from '../components/tables/table.vue';
import TabsDemo from '../components/tabs/tab.vue';
import HeadingDemo from '../components/typography/heading.vue';
import ParagraphDemo from '../components/typography/paragraph.vue';
import BlockquoteDemo from '../components/typography/blockquote.vue';
import NavbarDemo from '../blocks/navbar/navbar.vue';
import SidebarDemo from '../blocks/sidebar/sidebar.vue';
import FooterDemo from '../blocks/footer/footer.vue';
</script>

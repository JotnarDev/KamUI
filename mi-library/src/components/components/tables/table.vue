<template>
  <div class="space-y-8 p-6">
    <!-- ========================================
         TÍTULO
         ======================================== -->
    <h1 class="text-3xl font-bold">Tablas - Todas las Variantes</h1>

    <!-- ========================================
         BASE
         ======================================== -->
    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Base</h2>
      <div class="table-wrapper">
        <table class="table">
          <caption class="table-caption">
            Listado de usuarios
          </caption>
          <thead class="table-head">
            <tr>
              <th>Usuario</th>
              <th>Rol</th>
              <th>Estado</th>
              <th class="text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row">
              <td class="table-cell">Camila R.</td>
              <td class="table-cell">Admin</td>
              <td class="table-cell">Activo</td>
              <td class="table-cell text-right">Editar</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">Javier P.</td>
              <td class="table-cell">Editor</td>
              <td class="table-cell">Pendiente</td>
              <td class="table-cell text-right">Editar</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">Sofía G.</td>
              <td class="table-cell">Viewer</td>
              <td class="table-cell">Inactivo</td>
              <td class="table-cell text-right">Editar</td>
            </tr>
          </tbody>
          <tfoot class="table-foot">
            <tr>
              <td class="table-cell" colspan="4">3 resultados</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         STRIPED + HOVER
         ======================================== -->
    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Striped + Hover</h2>
      <div class="table-wrapper">
        <table class="table-striped table-hover table">
          <thead class="table-head">
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th class="text-right">SKU</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row">
              <td class="table-cell">Auriculares</td>
              <td class="table-cell">$120</td>
              <td class="table-cell">45</td>
              <td class="table-cell text-right">AU-204</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">Teclado</td>
              <td class="table-cell">$80</td>
              <td class="table-cell">20</td>
              <td class="table-cell text-right">TK-110</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">Mouse</td>
              <td class="table-cell">$35</td>
              <td class="table-cell">78</td>
              <td class="table-cell text-right">MS-501</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         BORDERED
         ======================================== -->
    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Bordered</h2>
      <div class="table-wrapper">
        <table class="table-bordered table">
          <thead class="table-head">
            <tr>
              <th>Orden</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th class="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row">
              <td class="table-cell">#9031</td>
              <td class="table-cell">Laura M.</td>
              <td class="table-cell">12/01/2026</td>
              <td class="table-cell text-right">$420</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">#9032</td>
              <td class="table-cell">Juan R.</td>
              <td class="table-cell">12/01/2026</td>
              <td class="table-cell text-right">$980</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">#9033</td>
              <td class="table-cell">Marta L.</td>
              <td class="table-cell">13/01/2026</td>
              <td class="table-cell text-right">$245</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         COMPACT
         ======================================== -->
    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Compact</h2>
      <div class="table-wrapper">
        <table class="table-compact table-hover table">
          <thead class="table-head">
            <tr>
              <th>Ticket</th>
              <th>Prioridad</th>
              <th>Área</th>
              <th class="text-right">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row">
              <td class="table-cell">#4001</td>
              <td class="table-cell">Alta</td>
              <td class="table-cell">Soporte</td>
              <td class="table-cell text-right">Abierto</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">#4002</td>
              <td class="table-cell">Media</td>
              <td class="table-cell">Ventas</td>
              <td class="table-cell text-right">En curso</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">#4003</td>
              <td class="table-cell">Baja</td>
              <td class="table-cell">Marketing</td>
              <td class="table-cell text-right">Cerrado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         TAMAÑOS
         ======================================== -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Tamaños</h2>

      <div class="space-y-3">
        <h3 class="text-lg font-semibold">Small</h3>
        <div class="table-wrapper">
          <table class="table-sm table-striped table">
            <thead class="table-head">
              <tr>
                <th>Nombre</th>
                <th>Equipo</th>
                <th class="text-right">Puntos</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-row">
                <td class="table-cell">Diego</td>
                <td class="table-cell">A</td>
                <td class="table-cell text-right">86</td>
              </tr>
              <tr class="table-row">
                <td class="table-cell">María</td>
                <td class="table-cell">B</td>
                <td class="table-cell text-right">74</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="space-y-3">
        <h3 class="text-lg font-semibold">Large</h3>
        <div class="table-wrapper">
          <table class="table-lg table">
            <thead class="table-head">
              <tr>
                <th>Curso</th>
                <th>Profesor</th>
                <th class="text-right">Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-row">
                <td class="table-cell">UX Avanzado</td>
                <td class="table-cell">Lucía G.</td>
                <td class="table-cell text-right">6 semanas</td>
              </tr>
              <tr class="table-row">
                <td class="table-cell">UI Systems</td>
                <td class="table-cell">Pedro F.</td>
                <td class="table-cell text-right">4 semanas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         STICKY HEADER
         ======================================== -->
    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Sticky header</h2>
      <div class="table-wrapper table-sticky max-h-64">
        <table class="table">
          <thead class="table-head">
            <tr>
              <th>País</th>
              <th>Capital</th>
              <th class="text-right">Población</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row">
              <td class="table-cell">Argentina</td>
              <td class="table-cell">Buenos Aires</td>
              <td class="table-cell text-right">46M</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">Brasil</td>
              <td class="table-cell">Brasilia</td>
              <td class="table-cell text-right">214M</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">Chile</td>
              <td class="table-cell">Santiago</td>
              <td class="table-cell text-right">19M</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">Colombia</td>
              <td class="table-cell">Bogotá</td>
              <td class="table-cell text-right">52M</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">España</td>
              <td class="table-cell">Madrid</td>
              <td class="table-cell text-right">47M</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">México</td>
              <td class="table-cell">Ciudad de México</td>
              <td class="table-cell text-right">128M</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">Perú</td>
              <td class="table-cell">Lima</td>
              <td class="table-cell text-right">33M</td>
            </tr>
            <tr class="table-row">
              <td class="table-cell">Uruguay</td>
              <td class="table-cell">Montevideo</td>
              <td class="table-cell text-right">3.5M</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

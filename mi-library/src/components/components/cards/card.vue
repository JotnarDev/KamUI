<template>
  <div class="space-y-8 p-6">
    <!-- ========================================
         TÍTULO Y SECCIONES
         ======================================== -->
    <h1 class="text-3xl font-bold">Cards - Todas las Variantes</h1>

    <!-- ========================================
         BÁSICA CON IMAGEN
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Básica con Imagen</h2>
      <div class="card card-hover max-w-sm">
        <img
          class="card-img"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        />
        <div class="card-header">Streamlining your design process today.</div>
        <div class="card-body">
          In today’s fast-paced digital landscape, fostering seamless
          collaboration among Developers and IT Operations.
        </div>
        <div class="card-footer">
          <button class="button button-md button-primary">Read more</button>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         BÁSICA SIN IMAGEN
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Básica sin Imagen</h2>
      <div class="card max-w-sm">
        <div class="card-header">Product Updates</div>
        <div class="card-body">
          Discover the latest improvements, new features, and performance
          upgrades.
        </div>
        <div class="card-footer">Updated 2 hours ago</div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         IMAGEN CON BORDES SUAVES
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Imagen con Bordes Suaves</h2>
      <div class="card max-w-sm">
        <div class="card-body">
          <img
            class="card-img-alt"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </div>
        <div class="card-header">Streamlining your design process today.</div>
        <div class="card-body">
          Short description for a compact design with image placed inside the
          body.
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTE OUTLINED
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Outlined</h2>
      <div class="card card-outline max-w-sm">
        <div class="card-header">Outlined Card</div>
        <div class="card-body">
          This card uses the outlined style with transparent background.
        </div>
        <div class="card-footer">Footer text</div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTE SOFT
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Soft</h2>
      <div class="card card-soft max-w-sm">
        <div class="card-header">Soft Background</div>
        <div class="card-body">
          Subtle background tone ideal for highlights and feature callouts.
        </div>
        <div class="card-footer">Footer text</div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTE COMPACTA
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Compacta</h2>
      <div class="card card-compact max-w-sm">
        <div class="card-header">Compact card</div>
        <div class="card-body">
          Reduced padding and smaller typography for dense layouts.
        </div>
        <div class="card-footer">Compact footer</div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         CON DIVIDER
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Con Divider</h2>
      <div class="card max-w-sm">
        <div class="card-header">Account Summary</div>
        <div class="card-body">
          Quick overview of your account and latest activity.
          <div class="card-divider"></div>
          <p>Last login: 3 hours ago</p>
        </div>
        <div class="card-footer">
          <button class="button button-md button-primary">Manage</button>
        </div>
      </div>
    </section>
  </div>
</template>

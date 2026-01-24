<template>
  <div class="space-y-8 p-6">
    <!-- ========================================
         TÍTULO Y SECCIONES
         ======================================== -->
    <h1 class="text-3xl font-bold">Avatares - Todas las Variantes</h1>

    <!-- ========================================
         TAMAÑOS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Tamaños</h2>
      <div class="flex items-end justify-center gap-4">
        <img
          class="avatar avatar-xs"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="Extra small"
        />
        <img
          class="avatar avatar-sm"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="Small"
        />
        <img
          class="avatar avatar-md"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="Medium"
        />
        <img
          class="avatar avatar-lg"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="Large"
        />
        <img
          class="avatar avatar-xl"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="Extra large"
        />
        <img
          class="avatar avatar-2xl"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="2XL"
        />
        <img
          class="avatar avatar-3xl"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="3XL"
        />
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         FORMAS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Formas</h2>
      <div class="flex items-center justify-center gap-6">
        <div class="text-center">
          <img
            class="avatar avatar-lg"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Circular"
          />
          <p class="mt-2 text-sm">Circular (default)</p>
        </div>
        <div class="text-center">
          <img
            class="avatar avatar-lg avatar-square"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Square"
          />
          <p class="mt-2 text-sm">Square</p>
        </div>
        <div class="text-center">
          <img
            class="avatar avatar-lg avatar-rounded"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Rounded"
          />
          <p class="mt-2 text-sm">Rounded</p>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         CON BORDES Y SOMBRAS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Bordes y Sombras</h2>
      <div class="flex items-center justify-center gap-6">
        <div class="text-center">
          <img
            class="avatar avatar-lg avatar-bordered"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Bordered"
          />
          <p class="mt-2 text-sm">Con borde</p>
        </div>
        <div class="text-center">
          <img
            class="avatar avatar-lg avatar-shadow"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Shadow"
          />
          <p class="mt-2 text-sm">Con sombra</p>
        </div>
        <div class="text-center">
          <img
            class="avatar avatar-lg avatar-bordered avatar-shadow"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Bordered & Shadow"
          />
          <p class="mt-2 text-sm">Borde + Sombra</p>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         AVATARES CON ICONOS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Avatares con Iconos</h2>
      <div class="flex items-end justify-center gap-4">
        <div class="avatar avatar-icon avatar-xs">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="avatar avatar-icon avatar-sm">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="avatar avatar-icon avatar-md">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="avatar avatar-icon avatar-lg">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="avatar avatar-icon avatar-xl">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         AVATARES CON INICIALES
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Avatares con Iniciales</h2>
      <div class="flex items-end justify-center gap-4">
        <div class="avatar avatar-initials avatar-xs">JL</div>
        <div class="avatar avatar-initials avatar-sm">JL</div>
        <div class="avatar avatar-initials avatar-md">JL</div>
        <div class="avatar avatar-initials avatar-lg">JL</div>
        <div class="avatar avatar-initials avatar-xl">JL</div>
        <div class="avatar avatar-initials avatar-2xl">JL</div>
        <div class="avatar avatar-initials avatar-3xl">JL</div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTES DE COLOR
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Variantes de Color (Sólidas)</h2>
      <div class="flex items-center justify-center gap-4">
        <div class="avatar avatar-initials avatar-lg avatar-primary">PR</div>
        <div class="avatar avatar-initials avatar-lg avatar-success">SU</div>
        <div class="avatar avatar-initials avatar-lg avatar-warning">WA</div>
        <div class="avatar avatar-initials avatar-lg avatar-error">ER</div>
        <div class="avatar avatar-initials avatar-lg avatar-info">IN</div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTES SOFT
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Variantes Soft (Suaves)</h2>
      <div class="flex items-center justify-center gap-4">
        <div class="avatar avatar-initials avatar-lg avatar-primary-soft">
          PR
        </div>
        <div class="avatar avatar-initials avatar-lg avatar-success-soft">
          SU
        </div>
        <div class="avatar avatar-initials avatar-lg avatar-warning-soft">
          WA
        </div>
        <div class="avatar avatar-initials avatar-lg avatar-error-soft">ER</div>
        <div class="avatar avatar-initials avatar-lg avatar-info-soft">IN</div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         CON ICONOS Y COLORES
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Iconos con Colores</h2>
      <div class="flex items-center justify-center gap-4">
        <div class="avatar avatar-icon avatar-lg avatar-primary-soft">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="avatar avatar-icon avatar-lg avatar-success-soft">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="avatar avatar-icon avatar-lg avatar-warning-soft">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="avatar avatar-icon avatar-lg avatar-error-soft">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="avatar avatar-icon avatar-lg avatar-info-soft">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         AVATARES CON STATUS - ARRIBA
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">
        Con Indicador de Status (Arriba)
      </h2>
      <div class="flex items-center justify-center gap-6">
        <div class="relative">
          <img
            class="h-10 w-10 rounded-full"
            s
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt=""
          />
          <span
            class="bg-success border-buffer absolute top-0 left-7 h-3.5 w-3.5 rounded-full border-2"
          ></span>
        </div>
        <div class="relative">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Available"
            class="avatar avatar-lg"
          />
          <span
            class="avatar-status avatar-status-top avatar-status-available"
          ></span>
        </div>
        <div class="relative">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
            alt="Away"
            class="avatar avatar-lg"
          />
          <span
            class="avatar-status avatar-status-top avatar-status-away"
          ></span>
        </div>
        <div class="relative">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            alt="Busy"
            class="avatar avatar-lg"
          />
          <span
            class="avatar-status avatar-status-top avatar-status-busy"
          ></span>
        </div>
        <div class="relative">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
            alt="Offline"
            class="avatar avatar-lg"
          />
          <span
            class="avatar-status avatar-status-top avatar-status-offline"
          ></span>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         AVATARES CON STATUS - ABAJO
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">
        Con Indicador de Status (Abajo)
      </h2>
      <div class="flex items-center justify-center gap-6">
        <div class="relative">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Available"
            class="avatar avatar-lg"
          />
          <span
            class="avatar-status avatar-status-bottom avatar-status-available"
          ></span>
        </div>
        <div class="relative">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
            alt="Away"
            class="avatar avatar-lg"
          />
          <span
            class="avatar-status avatar-status-bottom avatar-status-away"
          ></span>
        </div>
        <div class="relative">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            alt="Busy"
            class="avatar avatar-lg"
          />
          <span
            class="avatar-status avatar-status-bottom avatar-status-busy"
          ></span>
        </div>
        <div class="relative">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
            alt="Offline"
            class="avatar avatar-lg"
          />
          <span
            class="avatar-status avatar-status-bottom avatar-status-offline"
          ></span>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         STATUS CON FORMAS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Status con Diferentes Formas</h2>
      <div class="flex items-center justify-center gap-6">
        <div class="relative">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Circular"
            class="avatar avatar-lg"
          />
          <span
            class="avatar-status avatar-status-bottom avatar-status-available"
          ></span>
        </div>
        <div class="relative">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
            alt="Square"
            class="avatar avatar-lg avatar-square"
          />
          <span
            class="avatar-status avatar-status-bottom avatar-status-away"
          ></span>
        </div>
        <div class="relative">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            alt="Rounded"
            class="avatar avatar-lg avatar-rounded"
          />
          <span
            class="avatar-status avatar-status-bottom avatar-status-busy"
          ></span>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         GRUPOS DE AVATARES
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Grupos de Avatares</h2>
      <div class="flex flex-col items-center gap-6">
        <div>
          <p class="mb-2 text-sm font-medium">Grupo simple:</p>
          <div class="avatar-group">
            <img
              class="avatar avatar-md"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt=""
            />
            <img
              class="avatar avatar-md"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt=""
            />
            <img
              class="avatar avatar-md"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt=""
            />
            <img
              class="avatar avatar-md"
              src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              alt=""
            />
          </div>
        </div>

        <div>
          <p class="mb-2 text-sm font-medium">Grupo apilado (stacked):</p>
          <div class="avatar-group-stacked">
            <img
              class="avatar avatar-md"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt=""
            />
            <img
              class="avatar avatar-md"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt=""
            />
            <img
              class="avatar avatar-md"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt=""
            />
            <img
              class="avatar avatar-md"
              src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              alt=""
            />
          </div>
        </div>

        <div>
          <p class="mb-2 text-sm font-medium">Con contador:</p>
          <div class="avatar-group-stacked">
            <img
              class="avatar avatar-md"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt=""
            />
            <img
              class="avatar avatar-md"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt=""
            />
            <img
              class="avatar avatar-md"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt=""
            />
            <a href="#" class="avatar avatar-md avatar-group-counter">+99</a>
          </div>
        </div>

        <div>
          <p class="mb-2 text-sm font-medium">Grupo grande:</p>
          <div class="avatar-group-stacked">
            <img
              class="avatar avatar-lg"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt=""
            />
            <img
              class="avatar avatar-lg"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt=""
            />
            <img
              class="avatar avatar-lg"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt=""
            />
            <div class="avatar avatar-lg avatar-group-counter">+5</div>
          </div>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         AVATAR PLACEHOLDER
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Avatar Placeholder</h2>
      <div class="flex items-center justify-center gap-4">
        <div class="avatar avatar-placeholder avatar-sm">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="avatar avatar-placeholder avatar-md">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="avatar avatar-placeholder avatar-lg">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         COMBINACIONES COMPLEJAS
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Combinaciones Complejas</h2>
      <div class="flex items-center justify-center gap-6">
        <div class="relative">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Bordered + Shadow"
            class="avatar avatar-xl avatar-bordered avatar-shadow"
          />
          <span
            class="avatar-status avatar-status-bottom avatar-status-available"
          ></span>
        </div>
        <div class="relative">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
            alt="Square + Bordered + Shadow"
            class="avatar avatar-xl avatar-square avatar-bordered avatar-shadow"
          />
          <span
            class="avatar-status avatar-status-bottom avatar-status-away"
          ></span>
        </div>
        <div class="relative">
          <div
            class="avatar avatar-initials avatar-xl avatar-success avatar-rounded avatar-shadow"
          >
            MK
          </div>
          <span
            class="avatar-status avatar-status-bottom avatar-status-busy"
          ></span>
        </div>
      </div>
    </section>
  </div>
</template>

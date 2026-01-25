<template>
  <div class="space-y-8 p-6">
    <!-- ========================================
         TÍTULO Y SECCIONES
         ======================================== -->
    <h1 class="text-3xl font-bold">Breadcrumbs - Todas las Variantes</h1>

    <!-- ========================================
         BÁSICO
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Básico</h2>
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb breadcrumb-list">
          <li>
            <a href="#" class="breadcrumb-item breadcrumb-link">
              <svg
                class="breadcrumb-icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                />
              </svg>
              Home
            </a>
          </li>
          <li class="breadcrumb-separator" aria-hidden="true">/</li>
          <li>
            <a href="#" class="breadcrumb-item">Projects</a>
          </li>
          <li class="breadcrumb-separator" aria-hidden="true">/</li>
          <li aria-current="page">
            <span class="breadcrumb-current-item">KamUI</span>
          </li>
        </ol>
      </nav>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         CON ICONO SEPARADOR
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Separador con Icono</h2>
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb breadcrumb-list">
          <li>
            <a href="#" class="breadcrumb-item breadcrumb-link">
              <svg
                class="breadcrumb-icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                />
              </svg>
              Home
            </a>
          </li>
          <li class="breadcrumb-separator" aria-hidden="true">
            <svg
              class="breadcrumb-next-icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </li>
          <li>
            <a href="#" class="breadcrumb-item">Projects</a>
          </li>
          <li class="breadcrumb-separator" aria-hidden="true">
            <svg
              class="breadcrumb-next-icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </li>
          <li aria-current="page">
            <span class="breadcrumb-current-item">KamUI</span>
          </li>
        </ol>
      </nav>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTES DE TAMAÑO
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Tamaños</h2>
      <div class="space-y-4">
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb breadcrumb-list breadcrumb-sm">
            <li>
              <a href="#" class="breadcrumb-item breadcrumb-link">Home</a>
            </li>
            <li class="breadcrumb-separator" aria-hidden="true">/</li>
            <li>
              <a href="#" class="breadcrumb-item">Docs</a>
            </li>
            <li class="breadcrumb-separator" aria-hidden="true">/</li>
            <li aria-current="page">
              <span class="breadcrumb-current-item">Small</span>
            </li>
          </ol>
        </nav>

        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb breadcrumb-list">
            <li>
              <a href="#" class="breadcrumb-item breadcrumb-link">Home</a>
            </li>
            <li class="breadcrumb-separator" aria-hidden="true">/</li>
            <li>
              <a href="#" class="breadcrumb-item">Docs</a>
            </li>
            <li class="breadcrumb-separator" aria-hidden="true">/</li>
            <li aria-current="page">
              <span class="breadcrumb-current-item">Default</span>
            </li>
          </ol>
        </nav>

        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb breadcrumb-list breadcrumb-lg">
            <li>
              <a href="#" class="breadcrumb-item breadcrumb-link">Home</a>
            </li>
            <li class="breadcrumb-separator" aria-hidden="true">/</li>
            <li>
              <a href="#" class="breadcrumb-item">Docs</a>
            </li>
            <li class="breadcrumb-separator" aria-hidden="true">/</li>
            <li aria-current="page">
              <span class="breadcrumb-current-item">Large</span>
            </li>
          </ol>
        </nav>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTE SOLID
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Solid</h2>
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb breadcrumb-list breadcrumb-solid">
          <li>
            <a href="#" class="breadcrumb-item breadcrumb-link">Home</a>
          </li>
          <li class="breadcrumb-separator" aria-hidden="true">/</li>
          <li>
            <a href="#" class="breadcrumb-item">Dashboard</a>
          </li>
          <li class="breadcrumb-separator" aria-hidden="true">/</li>
          <li aria-current="page">
            <span class="breadcrumb-current-item">Overview</span>
          </li>
        </ol>
      </nav>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTE OUTLINED
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Outlined</h2>
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb breadcrumb-list breadcrumb-outlined">
          <li>
            <a href="#" class="breadcrumb-item breadcrumb-link">Home</a>
          </li>
          <li class="breadcrumb-separator" aria-hidden="true">/</li>
          <li>
            <a href="#" class="breadcrumb-item">Settings</a>
          </li>
          <li class="breadcrumb-separator" aria-hidden="true">/</li>
          <li aria-current="page">
            <span class="breadcrumb-current-item">Profile</span>
          </li>
        </ol>
      </nav>
    </section>

    <hr class="my-6 border-gray-300" />

    <!-- ========================================
         VARIANTE PILL
         ======================================== -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Pill</h2>
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb breadcrumb-list breadcrumb-pill">
          <li>
            <a href="#" class="breadcrumb-item breadcrumb-link">Home</a>
          </li>
          <li class="breadcrumb-separator" aria-hidden="true">/</li>
          <li>
            <a href="#" class="breadcrumb-item">Components</a>
          </li>
          <li class="breadcrumb-separator" aria-hidden="true">/</li>
          <li aria-current="page">
            <span class="breadcrumb-current-item">Breadcrumb</span>
          </li>
        </ol>
      </nav>
    </section>
  </div>
</template>

<template>
  <div class="space-y-8 p-6">
    <h1 class="text-3xl font-bold">Paginación - Todas las Variantes</h1>

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Base</h2>
      <nav class="pagination" aria-label="Pagination">
        <ul class="pagination-list">
          <li class="pagination-item">
            <a class="pagination-link pagination-link-active" href="#">1</a>
          </li>
          <li class="pagination-item">
            <a class="pagination-link" href="#">2</a>
          </li>
          <li class="pagination-item">
            <a class="pagination-link" href="#">3</a>
          </li>
          <li class="pagination-item">
            <span class="pagination-ellipsis">…</span>
          </li>
          <li class="pagination-item">
            <a class="pagination-link" href="#">12</a>
          </li>
        </ul>
      </nav>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-3">
      <h2 class="text-2xl font-semibold">Con controles</h2>
      <nav class="pagination" aria-label="Pagination">
        <div class="pagination-control">
          <button class="pagination-link" type="button">
            <svg class="pagination-icon" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 18-6-6 6-6"
              />
            </svg>
            Anterior
          </button>
        </div>
        <ul class="pagination-list">
          <li class="pagination-item">
            <a class="pagination-link" href="#">1</a>
          </li>
          <li class="pagination-item">
            <a class="pagination-link pagination-link-active" href="#">2</a>
          </li>
          <li class="pagination-item">
            <a class="pagination-link" href="#">3</a>
          </li>
          <li class="pagination-item">
            <a class="pagination-link" href="#">4</a>
          </li>
        </ul>
        <div class="pagination-control">
          <button class="pagination-link" type="button">
            Siguiente
            <svg class="pagination-icon" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 6 6 6-6 6"
              />
            </svg>
          </button>
        </div>
      </nav>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Tamaños</h2>
      <div class="space-y-3">
        <nav class="pagination pagination-sm" aria-label="Pagination small">
          <ul class="pagination-list">
            <li class="pagination-item">
              <a class="pagination-link pagination-link-active" href="#">1</a>
            </li>
            <li class="pagination-item">
              <a class="pagination-link" href="#">2</a>
            </li>
            <li class="pagination-item">
              <a class="pagination-link" href="#">3</a>
            </li>
          </ul>
        </nav>

        <nav class="pagination pagination-md" aria-label="Pagination medium">
          <ul class="pagination-list">
            <li class="pagination-item">
              <a class="pagination-link pagination-link-active" href="#">1</a>
            </li>
            <li class="pagination-item">
              <a class="pagination-link" href="#">2</a>
            </li>
            <li class="pagination-item">
              <a class="pagination-link" href="#">3</a>
            </li>
          </ul>
        </nav>

        <nav class="pagination pagination-lg" aria-label="Pagination large">
          <ul class="pagination-list">
            <li class="pagination-item">
              <a class="pagination-link pagination-link-active" href="#">1</a>
            </li>
            <li class="pagination-item">
              <a class="pagination-link" href="#">2</a>
            </li>
            <li class="pagination-item">
              <a class="pagination-link" href="#">3</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Variantes</h2>
      <div class="space-y-4">
        <nav class="pagination pagination-soft" aria-label="Pagination soft">
          <ul class="pagination-list">
            <li class="pagination-item">
              <a class="pagination-link" href="#">1</a>
            </li>
            <li class="pagination-item">
              <a class="pagination-link pagination-link-active" href="#">2</a>
            </li>
            <li class="pagination-item">
              <a class="pagination-link" href="#">3</a>
            </li>
          </ul>
        </nav>

        <nav
          class="pagination pagination-outlined"
          aria-label="Pagination outlined"
        >
          <ul class="pagination-list">
            <li class="pagination-item">
              <a class="pagination-link" href="#">1</a>
            </li>
            <li class="pagination-item">
              <a class="pagination-link pagination-link-active" href="#">2</a>
            </li>
            <li class="pagination-item">
              <a class="pagination-link" href="#">3</a>
            </li>
          </ul>
        </nav>

        <nav class="pagination pagination-solid" aria-label="Pagination solid">
          <ul class="pagination-list">
            <li class="pagination-item">
              <a class="pagination-link" href="#">1</a>
            </li>
            <li class="pagination-item">
              <a class="pagination-link pagination-link-active" href="#">2</a>
            </li>
            <li class="pagination-item">
              <a class="pagination-link" href="#">3</a>
            </li>
          </ul>
        </nav>

        <nav class="pagination pagination-pill" aria-label="Pagination pill">
          <ul class="pagination-list">
            <li class="pagination-item">
              <a class="pagination-link" href="#">1</a>
            </li>
            <li class="pagination-item">
              <a class="pagination-link pagination-link-active" href="#">2</a>
            </li>
            <li class="pagination-item">
              <a class="pagination-link" href="#">3</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <hr class="my-6 border-gray-300" />

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Estados</h2>
      <nav class="pagination" aria-label="Pagination disabled">
        <button class="pagination-link pagination-link-disabled" disabled>
          Anterior
        </button>
        <ul class="pagination-list">
          <li class="pagination-item">
            <a class="pagination-link pagination-link-active" href="#">1</a>
          </li>
          <li class="pagination-item">
            <a class="pagination-link" href="#">2</a>
          </li>
          <li class="pagination-item">
            <a class="pagination-link" href="#">3</a>
          </li>
        </ul>
        <button class="pagination-link" type="button">Siguiente</button>
      </nav>
    </section>
  </div>
</template>

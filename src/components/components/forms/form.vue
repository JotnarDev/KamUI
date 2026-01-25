<template>
  <div class="form-page">
    <div class="form-wrapper">
      <div>
        <h1 class="form-title">Forms - Todas las Variantes</h1>
        <p class="form-subtitle">
          Estilos optimizados y consistentes para inputs, selects, checks y más.
        </p>
      </div>

      <!-- ========================================
           FLOATING LABELS
           ======================================== -->
      <section class="form-surface form-section">
        <h2 class="form-section-title">Floating Labels</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="form-floating">
            <input
              id="floating-email"
              type="email"
              class="form-floating-input peer"
              placeholder="Email"
            />
            <label for="floating-email" class="form-floating-label">
              Email
            </label>
          </div>
          <div class="form-floating">
            <input
              id="floating-password"
              type="password"
              class="form-floating-input peer"
              placeholder="Password"
            />
            <label for="floating-password" class="form-floating-label">
              Password
            </label>
          </div>
        </div>
      </section>

      <!-- ========================================
           INPUT SIZES
           ======================================== -->
      <section class="form-surface form-section">
        <h2 class="form-section-title">Sizes</h2>
        <div class="space-y-3">
          <input class="form-input form-input-sm" placeholder="Small" />
          <input class="form-input form-input-md" placeholder="Medium" />
          <input class="form-input form-input-lg" placeholder="Large" />
          <input class="form-input form-input-xl" placeholder="Extra Large" />
        </div>
      </section>

      <!-- ========================================
           STATES
           ======================================== -->
      <section class="form-surface form-section">
        <h2 class="form-section-title">States</h2>
        <div class="space-y-4">
          <div>
            <label class="form-label">Success</label>
            <input
              class="form-input form-input-success"
              placeholder="Success"
            />
            <p class="form-success-text">Todo correcto.</p>
          </div>
          <div>
            <label class="form-label">Error</label>
            <input class="form-input form-input-error" placeholder="Error" />
            <p class="form-error-text">Hubo un problema.</p>
          </div>
          <div>
            <label class="form-label">Disabled</label>
            <input
              class="form-input form-input-disabled"
              placeholder="Disabled"
              disabled
            />
          </div>
        </div>
      </section>

      <!-- ========================================
           ICON INPUT
           ======================================== -->
      <section class="form-surface form-section">
        <h2 class="form-section-title">Input con Icono</h2>
        <div class="form-input-icon-wrap">
          <svg class="form-input-icon" viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5"
            />
          </svg>
          <input class="form-input-icon-input" placeholder="name@KamUI.com" />
        </div>
      </section>

      <!-- ========================================
           INPUT GROUP
           ======================================== -->
      <section class="form-surface form-section">
        <h2 class="form-section-title">Input Group</h2>
        <div class="form-input-group">
          <span class="form-addon">@</span>
          <input class="form-input" placeholder="username" />
        </div>
      </section>

      <!-- ========================================
           TEXTAREA & SELECT
           ======================================== -->
      <section class="form-surface form-section">
        <h2 class="form-section-title">Textarea & Select</h2>
        <div class="space-y-4">
          <textarea
            class="form-textarea"
            placeholder="Write your thoughts..."
          ></textarea>
          <select class="form-select">
            <option selected>Choose a country</option>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
          </select>
        </div>
      </section>

      <!-- ========================================
           CHECKBOX & RADIO
           ======================================== -->
      <section class="form-surface form-section">
        <h2 class="form-section-title">Checkbox & Radio</h2>
        <div class="space-y-3">
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox" checked />
            <span class="form-check-label">I agree to the terms</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox" />
            <span class="form-check-label">Send me updates</span>
          </label>
          <label class="flex items-center">
            <input type="radio" class="form-radio" name="plan" checked />
            <span class="form-check-label">Basic plan</span>
          </label>
          <label class="flex items-center">
            <input type="radio" class="form-radio" name="plan" />
            <span class="form-check-label">Pro plan</span>
          </label>
        </div>
      </section>

      <!-- ========================================
           SWITCH
           ======================================== -->
      <section class="form-surface form-section">
        <h2 class="form-section-title">Switch</h2>
        <label class="form-switch">
          <input type="checkbox" class="form-switch-input peer" />
          <span class="form-switch-track">
            <span class="form-switch-thumb"></span>
          </span>
          <span class="form-check-label">Enable notifications</span>
        </label>
      </section>

      <!-- ========================================
           FILE INPUT
           ======================================== -->
      <section class="form-surface form-section">
        <h2 class="form-section-title">File Input</h2>
        <input class="form-file" type="file" />
      </section>
    </div>
  </div>
</template>

<template>
  <div id="app" class="p-6">
    <h1 class="text-3xl font-bold underline text-center text-blue-600">
      Welcome to Mi Library!
    </h1>
    <p class="mt-4 text-gray-700">
      This is a sample application using Tailwind CSS with Vite and Vue.js.
    </p>
  </div>
  <div
    class="bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10"
  >
    <div class="bg-gray-100 p-2 dark:bg-white/10">
      <alert />
      <avatar />
      <badge />
      <breadcrumb />
      <buttons />
      <card />
      <forms />
      <kbds />
      <heading />
      <paragraph />
      <blockquotes />
    </div>
  </div>
</template>

<script setup>
import alert from "./components/components/alerts/alert.vue";
import avatar from "./components/components/avatars/avatar.vue";
import badge from "./components/components/badges/badge.vue";
import breadcrumb from "./components/components/breadcrumbs/breadcrumb.vue";
import buttons from "./components/components/buttons/button.vue";
import card from "./components/components/cards/card.vue";
import forms from "./components/components/forms/form.vue";
import kbds from "./components/components/kbds/kbd.vue";
import blockquotes from "./components/components/typography/blockquote.vue";
import heading from "./components/components/typography/heading.vue";
import paragraph from "./components/components/typography/paragraph.vue";
</script>

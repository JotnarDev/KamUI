<template>
  <div id="app" class="p-6">
    <navbar />
    <sidebar />
    <h1 class="text-center text-3xl font-bold text-blue-600 underline">
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
      <heading />
      <paragraph />
      <blockquotes />
      <tables />
      <dropdown />
      <modal />
      <tabs />
      <popover />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import alert from './components/components/alerts/alert.vue';
import avatar from './components/components/avatars/avatar.vue';
import badge from './components/components/badges/badge.vue';
import breadcrumb from './components/components/breadcrumbs/breadcrumb.vue';
import buttons from './components/components/buttons/button.vue';
import card from './components/components/cards/card.vue';
import forms from './components/components/forms/form.vue';
import blockquotes from './components/components/typography/blockquote.vue';
import heading from './components/components/typography/heading.vue';
import paragraph from './components/components/typography/paragraph.vue';
import tables from './components/components/tables/table.vue';
import dropdown from './components/components/dropdown/dropdown.vue';
import modal from './components/components/modals/modal.vue';
import tabs from './components/components/tabs/tab.vue';
import popover from './components/components/popovers/popover.vue';
import Navbar from './components/blocks/navbar/navbar.vue';
import Footer from './components/blocks/footer/footer.vue';
import Sidebar from './components/blocks/sidebar/sidebar.vue';
</script>

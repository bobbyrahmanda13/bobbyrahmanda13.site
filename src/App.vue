<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { useMeta } from 'vue-meta';

useMeta({
  title: 'Bobby Rahmanda',
  description: 'Web Personal Bobby Rahmanda',
  meta: [
    {
      property: 'og:type',
      content: 'article',
    },
    {
      property: 'og:title',
      content:
        'I like to make time for productivity and study it to improve my skills and workflow',
    },
    {
      property: 'site_name',
      content: 'bobby rahmanda',
    },
    {
      property: 'og:url',
      content: 'https://bobbyrahmanda.vercel.app/',
    },
    {
      property: 'og:description',
      content:
        'Personal web from bobby rahmanda contains about the portfolio, hardware, software used, and about me ',
    },
  ],
});
</script>

<template>
  <metainfo />
  <div class="border-y-2 min-h-screen border-white">
    <Navbar />

    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component"></component>
      </transition>
    </router-view>

    <Footer />
  </div>
</template>

<style scoped>
/* .fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
} */
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>

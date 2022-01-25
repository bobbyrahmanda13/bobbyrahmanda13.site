<template>
  <div class="py-20 text-center">
    <h2 class="font-extrabold text-4xl">Project</h2>
    <div class="mt-10">
      <div class="flex justify-center items-center max-w-xl mx-auto">
        <div class="flex">
          <!-- flex items-center h-10 px-2 py-2 text-center text-indigo-600 bg-transparent border-b-2 border-indigo-500 sm:px-4 -px-1 dark:border-indigo-400 dark:text-indigo-300 whitespace-nowrap focus:outline-none -->
          <button
            @click.prevent="tabProject = 'sourceCode'"
            :class="{
              'hover:text-white text-white bg-blue-800': tabProject === 'sourceCode',
              'hover:text-blue-800': tabProject === 'Design',
            }"
            class="flex items-center h-10 px-10 bg-transparent focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mx-1 sm:w-6 sm:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>

            <span class="mx-1 text-md font-bold sm:text-base">Source Code</span>
          </button>

          <button
            @click.prevent="tabProject = 'Design'"
            :class="{
              'hover:text-primary-white text-primary-white bg-blue-800 ': tabProject === 'Design',
              'hover:text-blue-800': tabProject === 'sourceCode',
            }"
            class="flex items-center h-10 px-10 bg-transparent focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mx-1 sm:w-6 sm:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>

            <span class="mx-1 text-md font-bold sm:text-base">Design</span>
          </button>
        </div>
      </div>
      <transition name="slide-fade">
        <SourceCode v-if="tabProject === 'sourceCode'" />
        <Design v-else />
      </transition>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import SourceCode from '@/components/SourceCode.vue';
import Design from '@/components/Design.vue';
import { useMeta } from 'vue-meta';

useMeta({
  title: 'Project',
  description: 'the result of a project I created',
  og: {
    locale: 'en_US',
    type: 'website',
    title: 'Web Personal Bobby Rahmanda',
    description:
      'Personal web from bobby rahmanda contains about the portfolio, hardware, software used, and about me',
    url: 'https://bobbyrahmanda.vercel.app/project',
    site_name: 'bobby rahmanda',
  },
});

const tabProject = ref('sourceCode');
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
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

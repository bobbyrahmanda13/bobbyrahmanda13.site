<template>
  <div class="py-8">
    <!-- navbar goes her -->
    <nav class="backdrop-blur-md fixed inset-x-0 top-0">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <!-- logo -->
          <div class="  ">
            <h1 class="font-bold flex items-center py-5 px-2">Bobby Rahmanda</h1>
          </div>

          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <router-link :to="{ name: 'home' }" class="py-5 px-2 hover:text-primary"
              >Home</router-link
            >
            <router-link :to="{ name: 'project' }" class="py-5 px-2 hover:text-primary"
              >Project</router-link
            >
            <router-link :to="{ name: 'about' }" class="py-5 px-2 hover:text-primary"
              >About</router-link
            >
          </div>

          <!-- secondary nav
          <div class="hidden md:flex items-center space-x-1">
            <a href="#" class="py-5 px-3">Login</a>
            <a
              href="#"
              class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >Signup</a
            >
          </div> -->

          <!-- mobile button goes here -->
          <div class="md:hidden flex items-center">
            <button @click="toggleMobileMenu" class="fill-white">
              <img class="" v-if="!mobileMenu" src="../assets/icons/icons8-menu.svg" alt="menu" />
              <img class="" v-else src="../assets/icons/icons8-close.svg" alt="close" />
            </button>
          </div>
        </div>
      </div>
      <!-- mobile menu -->
      <transition name="fade">
        <div class="text-center md:hidden" v-show="mobileMenu" :class="{ hidden: !mobileMenu }">
          <router-link
            :to="{ name: 'home' }"
            class="block py-3 px-4 text-sm hover:text-primary"
            @click.prevent="toggleMobileMenu"
            >Home</router-link
          >
          <router-link
            :to="{ name: 'project' }"
            class="block py-3 hover:text-primary px-4 text-sm"
            @click.prevent="toggleMobileMenu"
            >Project</router-link
          >
          <router-link
            :to="{ name: 'about' }"
            class="block py-3 px-4 text-sm hover:text-primary"
            @click.prevent="toggleMobileMenu"
            >About</router-link
          >
        </div>
      </transition>
    </nav>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const mobileMenu = ref(false);

function toggleMobileMenu() {
  mobileMenu.value = !mobileMenu.value;
}
</script>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>

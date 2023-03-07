<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navbar.vue';

</script>
<template>
  
<Navbar/>

    <router-view  v-slot="{ Component }">
    <transition  name="slide" mode="out-in" >

      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease-out;
  z-index: 2;
}

.slide-enter-to {
  z-index: 2;
  opacity: 1;
  transform: translateY(0%);
}

.slide-leave {
  z-index: 1;
  opacity: 1;
  transform: translateY(0%);
}

.slide-enter {
  z-index: 2;
  opacity: 0;
  transform: translateY(100%);
}

.slide-leave-to {
  z-index: 1;
  opacity: 0;
  transform: translateY(-10%);
}

</style>

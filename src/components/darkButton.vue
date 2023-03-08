<template>
  <button type="button" @click="toggleDark()"
    class="rounded-full dark:bg-gray-900 bg-yellow-50 p-1 ml-5 text-gray-900 dark:text-white hover:text-amber-600 hover:bg-gray-900 dark:hover:bg-white  dark:hover:transform dark:hover:scale-125 dark:duration-300 dark:hover:rotate-45 hover:transform hover:scale-125 duration-300 hover:rotate-45" 
    >
    {{ buttonText }}
  </button>
</template>

<script>
import { useDark, useToggle } from '@vueuse/core';


export default {
  name: 'MyComponent',
  data() {
    return {
      isDark: useDark(),
      buttonText = '🌙',
    }
  },
  methods: {
    toggleDark() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.documentElement.classList.add('dark');
        this.buttonText = '🌙';
      } else {
        document.documentElement.classList.remove('dark');
        this.buttonText = '☀️';
      }
    }
  }
}
</script>

<template>
  <button type="button" @click="toggleDark()"
    class="rounded-full dark:bg-gray-900 bg-yellow-50 text-md p-3 ml-5 text-gray-900 dark:hover:text-amber-600 dark:text-white hover:text-amber-600 hover:bg-gray-900 dark:hover:bg-white  dark:hover:transform dark:hover:scale-125 dark:duration-300 dark:hover:rotate-45 hover:transform hover:scale-125 duration-300 hover:rotate-45" 
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
    }
  },
  computed: {
    buttonText() {
      return this.isDark ? '☀️' : '🌙';
    }
  },
  methods: {
    toggleDark() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}
</script>

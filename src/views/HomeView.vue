<template>
  <div class="min-h-screen flex flex-col md:justify-center items-center bg-yellow-50 dark:bg-gray-900 dark:text-white overflow-hidden">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class=" hi title-font lg:text-7xl text-3xl md:text-5xl mb-4 font-medium text-gray-900 dark:text-white">Hi
          <br class=" hidden lg:inline-block">
        </h1>
        <h2 class="name title-font lg:text-7xl md:text-5xl  text-3xl mb-4 font-medium text-gray-900 dark:text-white">I am Oussama</h2>
        <p class="description mb-8 leading-relaxed lg:text-4xl md:text-2xl text-xl dark:text-white">an enthusiastic web developer</p>
      </div>
      <a class="lg:max-w-xl lg:w-full w-1/2 mb-10 md:mb-0 " href="https://github.com/0m3ga13/" target="_blank">
        <img class="imagecontainer shadow-lg object-cover object-center rounded lg:w-3/4 rounded-3xl" alt="Oussama-Barka"
          src="https://avatars.githubusercontent.com/u/62702326?s=800&v=4">
      </a>
    </div>
    <router-link to="/projects" class="max-sm:hidden sm:fixed bottom-5 transition-colors duration-300">
      <svg class="w-15 h-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </router-link>
    <router-link to="/projects" class="sm:hidden max-sm:fixed bottom-5 transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="dark:text-white w-15 h-10 animate-bounce bi bi-arrow-up"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
      </svg>
    </router-link>
  </div>
</template>

<style>
.imagecontainer {
  transition: transform 0.4s ease-in;
}

.imagecontainer:hover {
  transform: translateX(-50px);
}

.hi {
  opacity: 0;
  animation: drop 0.2s linear forwards;
  color: black;
}

.name {
  opacity: 0;
  animation: drop 1s linear forwards;
  color: black;
}

.description {
  opacity: 0;
  animation: drop 1.5s linear forwards;
  color: black;

}

@keyframes drop {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }

  50% {
    transform: translateX(0px);
    opacity: 1;
  }

  65% {
    transform: translateX(-17px);
    opacity: 1;
  }

  75% {
    transform: translateX(-22px);
    opacity: 1;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>



<script>
export default {
  methods: {
    handleScroll() {
    // Calculate the current scroll position as a percentage of the total scrollable distance
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    // If the scroll position is greater than 50%, push to the /contact route
    if (scrollPercent > 80) {
      this.$router.push('/projects');
      console.log('projects')
      console.log('up from home'+scrollPercent)
  
  }},
  debounce(func, wait) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      const later = function () {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
},
mounted() {
  window.addEventListener('scroll', this.debounce(this.handleScroll, 100));
},
beforeDestroy() {
  window.removeEventListener('scroll', this.handleScroll);
},
};
</script>

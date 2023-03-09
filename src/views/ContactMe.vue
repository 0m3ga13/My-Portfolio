<template>
  <div class="min-h-screen max-h-full  flex flex-col justify-center dark:bg-gray-900 dark:text-white items-center bg-yellow-50">
    <div class="absolute mb-48 md:mb-32 md:mt-10 ">
      <div class="relative bg-white dark:bg-black dark:border-black/50 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs z-10"
        :style="{ left: containerLeft, transition: 'left 1s' }">

        <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
          src="https://media.licdn.com/dms/image/C4E03AQF5mTvMbEiUkg/profile-displayphoto-shrink_800_800/0/1653662430008?e=1683763200&v=beta&t=D5NSepCEGC5nm8u9XH3d6MLN2R1V1i6FIEugo9MyCos"
          alt="web developer">
        <h1 class="text-lg text-gray-700 dark:text-gray-200">Oussama BARKA </h1>
        <h3 class="text-sm text-gray-400 dark:text-gray-600"> web developer </h3>
        <p class="text-xs text-gray-600 mt-4 dark:text-gray-400"> My passion for web development fuels my creative spirit, inspiring me to
          design and build visually stunning websites that engage and captivate users. </p>
        <button @click="moveContainerLeft"
          class="bg-yellow-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Contact
          Me</button>
      </div>

    </div>
    <div class="sticky ml-48 mb-48 ">
      <a class="ml-3 text-gray-500" href="https://www.facebook.com/ome.ga.351" target="_blank" rel="noopener noreferrer">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10"
          viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500" href="https://twitter.com/oussamabarka1" target="_blank" rel="noopener noreferrer">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10"
          viewBox="0 0 24 24">
          <path
            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
          </path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500" href="https://www.instagram.com/b.oussama.13/" target="_blank"
        rel="noopener noreferrer">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          class="w-10 h-10" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500" href="https://www.linkedin.com/in/oussama13" target="_blank"
        rel="noopener noreferrer">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"
          class="w-10 h-10" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
          </path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
      <a class="ml-3 text-gray-500" href="https://github.com/0m3ga13/" target="_blank" rel="noopener noreferrer">
        <svg width="40" height="40" viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet">

          <g fill="#6b7280">

            <path
              d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />

            <path
              d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />

          </g>

        </svg>

      </a>

    </div>
    <router-link to="/downloads" class="max-sm:hidden sm:fixed bottom-5 transition-colors duration-300">
      <svg class="w-15 h-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </router-link>
    <router-link to="/downloads" class="sm:hidden max-sm:fixed bottom-5 transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-15 h-10 animate-bounce bi bi-arrow-up"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
      </svg>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      containerLeft: "0px",
      lastScrollTop: 0,      scrollingToTop: false, 
      
    };
  },
  methods: {
    moveContainerLeft() {
      this.containerLeft = "-100px";
    },
    handleScroll() {
    // Calculate the current scroll position as a percentage of the total scrollable distance
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    // If the scroll position is greater than 50%, push to the /contact route
    if (scrollPercent > 80) {
      this.$router.push('/Downloads');
      console.log('downloads')
      console.log('Up from contact' + scrollPercent)
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    }
    },
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

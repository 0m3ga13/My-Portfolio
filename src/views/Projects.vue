<template>
  <div class="min-h-screen flex flex-col  items-center bg-yellow-50 dark:bg-gray-900 dark:text-white overflow-hidden">
    <div class=" container mx-auto flex px-5 py-24 sm:py-10 md:flex-row flex-col items-center">
      <h1 class="projects text-4xl sm:text-7xl dark:text-white">My Projects</h1>
      <swiper :modules="modules" navigation
        class="mySwiper border dark:text-white dark:bg-black dark:border-black/90 shadow-lg rounded-3xl bg-white md:w-1/2  w-full lg:h-auto h-80 object-scale-down object-center rounded sm:mt-0 mt-10">
        <swiper-slide v-for="item in projects">
          <div @click="showOptions">

            <img :src=item.image alt="image slide 1" />

            <div v-if="showOptionsFlag" class="options">
              <a :href="item.demosrc" target="_blank">View Demo</a>
              <a :href="item.codesrc" target="_blank">View Code</a>
            </div>
          </div>
          <h1 class=" text-gray-900 dark:text-white pt-5 pb-3 text-xl sm:text-3xl text-center">
            {{ item.name }}
          </h1>
          <p class=" text-gray-600 text-l px-5 pb-2 text-center sm:text-md">{{ item.Description }}</p>
        </swiper-slide>

      </swiper>
    </div>
    <router-link to="/contact" class="max-sm:hidden sm:fixed bottom-5 transition-colors duration-300">
      <svg class="w-15 h-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </router-link>
    <router-link to="/contact" class="sm:hidden max-sm:fixed bottom-5 transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-15 h-10 animate-bounce bi bi-arrow-up" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/> </svg>
    </router-link>
  </div>
</template>
  
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation, Scrollbar],
      showOptionsFlag: false,
      lastScrollTop: 0,
      scrollingToTop: false,

      projects: [
        { name: 'Ecommerce Website', Description: 'a responsive website, using Vue and Tailwind.', image: 'https://github.com/0m3ga13/0m3ga13.github.io/blob/main/src/assets/img/electronics.png?raw=true', demosrc: 'https://masterpurple.netlify.app/', codesrc: 'https://github.com/0m3ga13/Ecommerce-Website' },
        { name: 'Business Website', Description: 'a MEVN stack website with a REST API', image: 'https://github.com/0m3ga13/0m3ga13.github.io/blob/main/src/assets/img/cominox.png?raw=true', demosrc: 'https://cominox.netlify.app/', codesrc: 'https://github.com/0m3ga13/cominox' },
        { name: 'face recognition app', Description: 'Python script to detect faces in a video and store their names, using OpenCV', image: 'https://source.unsplash.com/OfwiURcZwYw/1600x900', demosrc: 'https://github.com/0m3ga13/present_students_names', codesrc: 'https://github.com/0m3ga13/present_students_names' },
        { name: 'this portfolio', Description: 'Dynamic portfolio using Vue and Tailwind', image: 'https://github.com/0m3ga13/0m3ga13.github.io/blob/main/src/assets/img/portfolio.png?raw=true', demosrc: 'https://github.com/0m3ga13/present_students_names', codesrc: 'https://github.com/0m3ga13/present_students_names' },
        { name: 'Business Landing Page', Description: 'a simple landing page for a business', image: 'https://github.com/0m3ga13/0m3ga13.github.io/blob/main/src/assets/img/obsidex.png?raw=true', demosrc: 'https://github.com/0m3ga13/Obsidex-Landing-Page', codesrc: 'https://github.com/0m3ga13/Obsidex-Landing-Page' },
        { name: 'Influencer Contact Page', Description: 'Basic Arabic page for contacts', image: 'https://github.com/0m3ga13/0m3ga13.github.io/blob/main/src/assets/img/sid.png?raw=true', demosrc: 'https://oussama-sid.netlify.app/', codesrc: 'https://github.com/0m3ga13/Oussama-sid' },
        { name: 'Final Year Project', Description: 'Finding the best Methods to exploit Granitic Blocs', image: 'https://source.unsplash.com/Mk2ls9UBO2E/1600x900', demosrc: 'https://drive.google.com/file/d/12tcPy8aJYO8lJNjzxtfmzHbSv0xuqFmi/view?usp=sharing', codesrc: 'https://drive.google.com/file/d/12tcPy8aJYO8lJNjzxtfmzHbSv0xuqFmi/view?usp=sharing' },

      ],
    }
  },
  methods: {
    showOptions() {
      this.showOptionsFlag = !this.showOptionsFlag;
      console.log(this.showOptionsFlag)
    },
    handleScroll() {
    // Calculate the current scroll position as a percentage of the total scrollable distance
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    // If the scroll position is greater than 50%, push to the /contact route
    if (scrollPercent > 80) {
      this.$router.push('/contact');
      console.log('contact ')
      console.log('up from projects'+scrollPercent)
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
  window.addEventListener('scroll',this.debounce(this.handleScroll, 100));
},
beforeDestroy() {
  window.removeEventListener('scroll', this.handleScroll);
},
};
</script>
  
<style>
.swiper {

  --swiper-navigation-color: white;
  --swiper-navigation-size: 30px;
}

.swiper-button-prev,
.swiper-button-next {
  top: 50%;
}

.swiper-button-prev {
  left: 20px;
}

.swiper-button-next {
  right: 20px;
}

.projects {
  opacity: 0;
  animation: drop 1.5s linear forwards;
  color: black;

}

.options {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 1.5rem;
}

.options a {
  margin: 10px;
  padding: 10px;
  font-size: 18px;
  color: #fff;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border-bottom: 1px solid #fff;
  padding-bottom: 3px;
}

@keyframes drop {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }

  50% {
    transform: translateY(0px);
    opacity: 1;
  }

  65% {
    transform: translateY(-17px);
    opacity: 1;
  }

  75% {
    transform: translateY(-22px);
    opacity: 1;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>

<template>
    <header class="sticky bg-yellow-50 z-50  text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
    <router-link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"  stroke-width="1" class="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24"> <g> <path fill-rule="nonzero" d="M14 20v-2.157c1.863-1.192 3.5-3.875 3.5-6.959 0-3.073-2-6.029-5.5-6.029s-5.5 2.956-5.5 6.03c0 3.083 1.637 5.766 3.5 6.958V20H3v-2h4.76C5.666 16.505 4 13.989 4 10.884 4 6.247 7.5 3 12 3s8 3.247 8 7.884c0 3.105-1.666 5.621-3.76 7.116H21v2h-7z"/> </g> </svg>
      <span class="ml-3 text-xl">Oussama</span>
    </router-link>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base  justify-center">
      <router-link to="/" class="px-5 py-2 hover:text-gray-900" :class="{ 'bg-gray-600 text-white rounded': $route.path === '/' }">
 Home </router-link>
      <router-link to="/projects" class="px-5 py-2 hover:text-gray-900" :class="{ 'bg-gray-600 text-white rounded': $route.path === '/projects' }">My projects</router-link>
      <router-link to="/contact" class="px-5 py-2 hover:text-gray-900" :class="{ 'bg-gray-600 text-white rounded': $route.path === '/contact' }">Contact Me</router-link>
      <router-link to="/Downloads" class="px-5 py-2 hover:text-gray-900" :class="{ 'bg-gray-600 text-white rounded': $route.path === '/Downloads' }">Downloads</router-link>
    </nav>
  </div>
</header>
</template>
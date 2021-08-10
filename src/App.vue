<template>
  <header class="sm:h-12 outline fixed w-full z-10 bg-white">
    <div
      class="
        flex flex-col-reverse
        items-center
        justify-between
        sm:flex-row sm:justify-start
      "
    >
      <router-link
        :to="{ name: 'Home' }"
        class="
          sm:flex
          hidden
          justify-center
          max-w-[7rem]
          items-center
          w-full
          h-12
          px-4
          py-2
        "
      >
        <img src="./img/turon-logo.svg" alt="Turon Wines" />
      </router-link>
      <nav class="">
        <ul class="flex flex-col sm:flex-row items-center w-full">
          <li>
            <router-link
              :to="{ name: 'Wines' }"
              class="
                px-4
                py-3
                block
                hover:text-gray-300
                transition-colors
                duration-200
              "
              >Wines</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'About' }" class="px-4 py-3 block"
              >About</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Contact' }" class="px-4 py-3 block"
              >Contact</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'News' }" class="px-4 py-3 block"
              >News</router-link
            >
          </li>
        </ul>
      </nav>
      <div
        class="
          flex
          self-end
          sm:hidden
          justify-center
          items-center
          px-4
          pt-4
          block
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  </header>

  <div class="grid grid-rows-container min-h-screen pt-12">
    <div v-cloak>
      <!-- <transition name="fade" mode="out-in"> -->
      <!-- TODO: try vue transiton hooks -->
      <router-view></router-view>
      <!-- </transition> -->
    </div>

    <footer class="outline text-xl font-mono">Footer</footer>
  </div>
</template>

<style>
/*** TRANSITIONS ***/
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>

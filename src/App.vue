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

      <nav>
        <!--       <nav
        :class="[menuOpen ? 'nav-transition-open' : '']"
        class="nav-transition-close"
      > -->

        <ul
          :class="[menuOpen ? 'flex' : 'hidden']"
          class="
            flex-col
            items-center
            w-full
            h-screen
            sm:flex sm:flex-row sm:h-full
          "
        >
          <li v-for="(item, index) in navItems" :key="index">
            <router-link :to="{ name: item.name }" class="px-4 py-3 block">{{
              item.name
            }}</router-link>
          </li>
        </ul>
      </nav>

      <div
        class="self-end sm:hidden justify-center items-center p-4 block"
        @click="toggleMenu"
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

<script>
const navItems = [
  { name: "Wines", link: "Wines", current: true },
  { name: "About", link: "About", current: true },
  { name: "Contact", link: "Contact", current: true },
  { name: "News", link: "News", current: true },
]

export default {
  data() {
    return {
      navItems,
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      console.log("toggle", this.menuOpen)
    },
  },
}
</script>

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

.nav-transition-close {
  height: 0;
  opacity: 0;
  transition: height 300ms 200ms, opacity 200ms 0ms;
}
.nav-transition-open {
  height: 100vh;
  opacity: 1;
  transition: height 400ms 0ms, opacity 200ms 300ms;
}
</style>

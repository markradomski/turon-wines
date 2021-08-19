<template>
  <header class="h-12 fixed w-full z-10 bg-white border-b border-black">
    <div class="flex items-center justify-between sm:justify-start">
      <router-link
        :to="{ name: 'Home' }"
        @click="closeMenu"
        class="
          flex
          justify-center
          max-w-[7rem]
          items-center
          w-full
          h-12
          px-4
          py-2
        "
      >
        <img src="../img/turon-logo.svg" alt="Turon Wines" />
      </router-link>
      <nav class="hidden sm:flex">
        <ul class="items-center flex">
          <li v-for="(item, index) in settings.navItems" :key="index">
            <router-link :to="{ name: item.name }" class="px-4 py-3 block">{{
              item.name
            }}</router-link>
          </li>
        </ul>
      </nav>

      <div
        class="self-end flex justify-center items-center sm:hidden h-12 w-12"
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

  <!-- mobile menu -->
  <nav
    class="
      fixed
      flex
      items-center
      justify-center
      bg-white
      top-12
      left-0
      right-0
      bottom-0
      transition-transform
      duration-300
      sm:hidden
    "
    :class="[menuOpen ? 'translate-x-0' : '-translate-x-full']"
  >
    <ul class="items-center flex flex-col w-full">
      <li v-for="(item, index) in settings.navItems" :key="index">
        <router-link
          :to="{ name: item.name }"
          @click="toggleMenu"
          class="px-4 py-3 block"
          >{{ item.name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    foo: {
      type: String,
      default: "bar",
    },
    settings: {
      type: Object,
      required: true,
      navItems: { type: [Object], required: true },
      isOpen: { type: Boolean, required: false, default: false },
    },
  },

  data() {
    return {
      test: this.settings,
      menuOpen: this.settings.isOpen,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    },
  },
}
</script>

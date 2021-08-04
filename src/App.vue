<template>
  <div class="grid grid-rows-layout min-h-screen">
    <header class="h-12">
      <div class="flex items-center justify-between">
        <router-link
          :to="{ name: 'Home' }"
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
          <img src="./assets/img/turon-logo.svg" alt="Turon Wines" />
        </router-link>
        <nav>
          <ul class="flex items-center w-full">
            <li>
              <router-link
                :to="{ name: 'Wines' }"
                class="
                  px-4
                  py-3
                  hover:text-gray-300
                  transition-colors
                  duration-200
                "
                >Wines</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'About' }" class="px-4 py-3"
                >About</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'Contact' }" class="px-4 py-3"
                >Contact</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'News' }" class="px-4 py-3"
                >News</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex justify-center items-center h-12 px-4">
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

    <router-view />
    <footer class="h-foo">Footer</footer>
  </div>
</template>

<style></style>

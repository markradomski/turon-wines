<template>
  <Header :settings="headerSettings" />

  <div class="grid grid-rows-container min-h-screen pt-12">
    <div v-cloak>
      <!-- <transition name="fade" mode="out-in"> -->
      <!-- TODO: try vue transiton hooks -->
      <router-view></router-view>
      <!-- </transition> -->
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

const navItems = [
  { name: "Wines", link: "Wines", current: true },
  { name: "About", link: "About", current: true },
  { name: "Contact", link: "Contact", current: true },
  { name: "News", link: "News", current: true },
]

const headerSettings = {
  navItems,
}

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      headerSettings,
    }
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
</style>

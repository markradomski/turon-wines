import { createRouter, createWebHistory } from "vue-router"
import NProgress from "nprogress"
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import NotFound from "@/views/NotFound.vue"
import NetworkError from "@/views/NetworkError.vue"
import WineLayout from "@/views/wine/Layout.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/wines",
    name: "Wines",
    component: () =>
      import(/* webpackChunkName: "wines" */ "@/views/Wines.vue"),
  },
  {
    path: "/wines/:id",
    name: "WineLayout",
    component: WineLayout,
    children: [
      {
        path: "",
        name: "WineDetails",
        component: () =>
          import(/* webpackChunkName: "wine-id" */ "@/views/wine/Details.vue"),
      },
    ],
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "@/views/Contact.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import(/* webpackChunkName: "news" */ "@/views/News.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    component: About,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFound,
    props: true,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkError,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// Progress bar

NProgress.configure({
  showSpinner: false,
  minimum: 0.1,
  easing: "ease",
  speed: 500,
})

let progressBarTimeout = null
const PROGRESS_DELAY = 50

const startProgressBar = () => {
  clearTimeout(progressBarTimeout)
  progressBarTimeout = setTimeout(NProgress.start, PROGRESS_DELAY)
}

const stopProgressBar = () => {
  clearTimeout(progressBarTimeout)
  NProgress.done()
}

router.beforeEach(() => {
  startProgressBar()
})

router.afterEach(() => {
  stopProgressBar()
})

export default router

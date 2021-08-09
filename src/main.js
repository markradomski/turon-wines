import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
//import store from "./store"

import "./css/tailwind.css"
import "./css/index.css"
import "nprogress/nprogress.css"

createApp(App).use(router).mount("#app")

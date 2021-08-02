import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
//import store from "./store"

import "./tailwind.css"
import "./index.css"

createApp(App).use(router).mount("#app")
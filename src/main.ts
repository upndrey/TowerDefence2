import { createPinia } from 'pinia'
import { TroisJSVuePlugin } from 'troisjs';
import { createApp } from 'vue'

import App from './app.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

app.use(TroisJSVuePlugin);

app.use(router)

app.mount('#app')

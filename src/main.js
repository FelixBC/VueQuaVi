// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import router from './plugins/routes.js'

const myApp = createApp(App)

// Assumes you have a <div id="app"></div> in your index.html
myApp.use(router)
myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})
myApp.mount('#app')



// 引入 Vue 3
import { createApp } from 'vue';

// 引入組件
import App from './App.vue';

import Slot from './Slot.vue';
import NamedSlot from './NamedSlot.vue';

//  = = = router
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter(
  {
    history: createMemoryHistory(),
    routes: [
      {
        path: '/slot',
        component: Slot
      },
      {
        path: '/named',
        component: NamedSlot
      },
    ],
  }
)
//  = = =

//  = = = pinia
import { createPinia } from 'pinia';
const pinia = createPinia();
//  = = =


// 創建 Vue 應用實例並掛載到 #app 元素
createApp(App)
  //  = = = router
  .use(router)
  //  = = =
  //  = = = pinia
  .use(pinia)
  //  = = =
  .mount('#app')
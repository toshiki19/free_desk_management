import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

let app;

onAuthStateChanged(auth, user => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.use(createPinia());
    app.mount('#app');
  }

  if (user) {
    if (router.currentRoute.value.path === '/login') {
      router.push('/');
    }
  } else {
    router.push('/login');
  }
});

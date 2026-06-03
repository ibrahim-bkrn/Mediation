import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'

function setVh() {
  if (window.innerWidth <= 768) {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
  }
}
setVh()
window.addEventListener('orientationchange', () => setTimeout(setVh, 200))

createApp(App).mount('#app')

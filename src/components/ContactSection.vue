<template>
  <section id="contact" class="section contact">
    <svg class="contact-deco" aria-hidden="true" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <circle cx="300" cy="300" r="280" fill="none" stroke="#a0896a" stroke-width="1" opacity="0.12"/>
      <circle cx="300" cy="300" r="200" fill="none" stroke="#a0896a" stroke-width="1" opacity="0.07"/>
    </svg>
    <h2>{{ data.title }}</h2>
    <p class="intro">{{ data.intro }}</p>
    <button class="contact-button" @click="handleContact">Envoyer un message</button>
  </section>
</template>

<script setup>
defineProps({
  data: Object
})

const handleContact = () => {
  window.location.href = 'mailto:Imane@deviiiens.fr?subject=Contact - Médiation et savoir'
}
</script>

<style scoped>
.section {
  margin: 6rem 0;
  padding: 3rem 0;
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
  animation-delay: 0.9s;
}

.contact {
  text-align: center;
  position: relative;
  overflow: hidden;
}

.contact-deco {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  pointer-events: none;
  z-index: 0;
}

h2, .intro, .contact-button {
  position: relative;
  z-index: 1;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.intro {
  font-size: 1.3rem;
  color: #666666;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.contact-button {
  padding: 0.8rem 2rem;
  border: 1px solid #1a1a1a;
  background: transparent;
  color: #1a1a1a;
  font-size: 1.05rem;
  cursor: pointer;
  border-radius: 0;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.contact-button:hover {
  background: #1a1a1a;
  color: #ffffff;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .section {
    padding: 5vw 0;
  }
  h2 {
    font-size: 1.4rem;
  }
  .intro {
    font-size: 1.05rem;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 8vw 0;
  }
  h2 {
    font-size: 1.2rem;
  }
  .intro {
    font-size: 1.05rem;
  }
}
</style>

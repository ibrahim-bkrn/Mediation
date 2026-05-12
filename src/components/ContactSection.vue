<template>
  <section id="contact" class="section contact">
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
  window.location.href = 'mailto:?subject=Contact - Médiation et savoir'
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
}

h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  letter-spacing: -0.01em;
}

.intro {
  font-size: 1.05rem;
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

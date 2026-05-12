<template>
  <section id="hero" class="hero" role="main">
    <h1 class="hero-title" aria-label="Médiation, savoir et transformation des interactions">
      <span class="line"><span>Médiation, savoir</span></span>
      <span class="line"><span>et transformation des interactions</span></span>
      <span class="line"><span></span></span>
    </h1>

    <div class="hero-identity" aria-label="Identité de l'enseignante">
      <span class="hero-identity-name">HABBOUB KAJIOU Imane <span class="hero-identity-sep" aria-hidden="true">—</span></span>
      <span class="hero-identity-title">Enseignante chercheuse, doctorat en science de l'information et de la communication</span>
    </div>

    <div class="hero-divider" aria-hidden="true"></div>

    <p class="hero-subtitle">
      Nous sommes au service du savoir.<br>
      Le savoir est une exigence,<br>
      une médiation et une responsabilité.
    </p>

    <p class="hero-intro">{{ data.intro }}</p>
  </section>
</template>

<script setup>
defineProps({
  data: Object
})
</script>

<style scoped>
.hero {
  padding: 4vw 8vw 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: auto;
}

.hero-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  font-size: clamp(2.8rem, 5vw, 7rem);
  line-height: 0.98;
  letter-spacing: -0.03em;
  color: #1a1a1a;
  max-width: 100%;
  opacity: 0;
  animation: revealUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards;
}

.hero-title .line {
  display: block;
  overflow: hidden;
}

.hero-title .line span {
  display: block;
  transform: translateY(110%);
  animation: slideUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hero-title .line:nth-child(1) span { animation-delay: 0.4s; }
.hero-title .line:nth-child(2) span { animation-delay: 0.52s; }
.hero-title .line:nth-child(3) span { animation-delay: 0.64s; }

.hero-identity {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  margin-top: 1.2rem;
  opacity: 0;
  animation: fadeIn 0.7s ease 0.8s forwards;
}

.hero-identity-name {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.6rem, 3vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #1e3a5f;
  line-height: 1.1;
}

.hero-identity-sep {
  color: #cccccc;
  font-weight: 300;
  font-size: 1rem;
}

.hero-identity-title {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.15em;
  color: #888888;
  text-transform: uppercase;
}

.hero-divider {
  width: 2rem;
  height: 1px;
  background: #e5e5e5;
  margin: clamp(1.5rem, 3vw, 3rem) 0 clamp(1rem, 2vw, 2rem);
  opacity: 0;
  animation: fadeIn 0.6s ease 0.9s forwards;
}

.hero-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #666666;
  max-width: 480px;
  line-height: 1.9;
  opacity: 0;
  animation: fadeIn 0.7s ease 1s forwards;
}

.hero-intro {
  margin-top: clamp(1rem, 2vw, 2rem);
  max-width: 1200px;
  font-size: 1rem;
  line-height: 1.8;
  color: #666666;
  opacity: 0;
  animation: fadeIn 0.7s ease 1.1s forwards;
}

@keyframes revealUp {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(110%); }
  to   { transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .hero {
    padding: 8vw 6vw 5vw;
  }

  .hero-title {
    letter-spacing: -0.02em;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 10vw 6vw 6vw;
  }

  .hero-title {
    font-size: clamp(2.6rem, 10vw, 4.5rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-title,
  .hero-title .line span,
  .hero-divider,
  .hero-subtitle,
  .hero-intro {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>

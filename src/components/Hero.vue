<template>
  <section id="hero" class="hero" role="main">
    <h1 class="hero-title" aria-label="Médiation, savoir et transformation des interactions">
      <span class="line"><span>Médiation, savoir</span></span>
      <span class="line"><span>et transformation</span></span>
      <span class="line"><span>des interactions</span></span>
    </h1>

    <div class="hero-divider" aria-hidden="true"></div>

    <p class="hero-subtitle">
      Nous sommes au service du savoir.<br>
      Le savoir est une exigence,<br>
      une médiation et une responsabilité.
    </p>

    <p class="hero-intro">{{ data.intro }}</p>

    <div class="scroll-hint" aria-hidden="true">
      <div class="scroll-hint-inner">
        <span class="scroll-hint-label">Défiler</span>
        <span class="scroll-hint-arrow">↓</span>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  data: Object
})
</script>

<style scoped>
.hero {
  padding: 10vw 8vw 6vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;
}

.hero-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  font-size: clamp(4.5rem, 8vw, 13rem);
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

.hero-title .line:nth-child(3) {
  text-align: center;
}

.hero-divider {
  width: 2rem;
  height: 1px;
  background: #e5e5e5;
  margin: clamp(2rem, 4vw, 4rem) 0 clamp(1.4rem, 2.5vw, 2.5rem);
  opacity: 0;
  animation: fadeIn 0.6s ease 0.9s forwards;
}

.hero-subtitle {
  font-family: 'Inter', sans-serif;
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
  margin-top: clamp(1.5rem, 3vw, 3rem);
  max-width: 1200px;
  font-size: 1rem;
  line-height: 1.8;
  color: #666666;
  opacity: 0;
  animation: fadeIn 0.7s ease 1.1s forwards;
}

.scroll-hint {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: clamp(3rem, 6vw, 6rem);
  opacity: 0;
  animation: fadeIn 0.6s ease 1.3s forwards;
}

.scroll-hint-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.scroll-hint-label {
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #aaaaaa;
}

.scroll-hint-arrow {
  font-size: 14px;
  color: #aaaaaa;
  animation: pulse 2.5s ease-in-out 1.5s infinite;
  line-height: 1;
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

@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: translateY(0); }
  50%       { opacity: 0.8; transform: translateY(3px); }
}

@media (max-width: 768px) {
  .hero {
    padding: 10vw 6vw 8vw;
    min-height: 80vh;
  }

  .hero-title {
    letter-spacing: -0.02em;
  }

  .hero-intro{
    font-size: 1rem;
    margin-top: 60px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 12vw 6vw 10vw;
    min-height: auto;
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
  .hero-intro,
  .scroll-hint {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>

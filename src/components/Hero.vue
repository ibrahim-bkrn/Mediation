<template>
  <section id="hero" class="hero" role="main">
    <!-- cercles haut droite -->
    <svg class="hero-deco hero-deco--tr" aria-hidden="true" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <circle cx="540" cy="80" r="180" fill="none" stroke="#a0896a" stroke-width="1" opacity="0.15"/>
      <circle cx="540" cy="80" r="100" fill="none" stroke="#1e3a5f" stroke-width="1" opacity="0.1"/>
    </svg>
    <!-- arc bas gauche -->
    <svg class="hero-deco hero-deco--bl" aria-hidden="true" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="400" r="220" fill="none" stroke="#1e3a5f" stroke-width="1" opacity="0.08"/>
      <circle cx="0" cy="400" r="140" fill="none" stroke="#a0896a" stroke-width="1" opacity="0.12"/>
    </svg>
    <h1 class="hero-title" aria-label="Médiation, savoir et transformation des interactions">
      <span class="line"><span>Médiation, savoir</span></span>
      <span class="line"><span>et transformation des interactions</span></span>
      <span class="line"><span></span></span>
    </h1>

    <div class="hero-identity" aria-label="Identité de l'enseignante">
      <div class="hero-identity-name-row">
        <span class="hero-identity-name">HABBOUB KAJIOU Imane <span class="hero-identity-sep" aria-hidden="true">—</span></span>
        <svg class="hero-deco-name" aria-hidden="true" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="2" fill="#1a1a1a" opacity="0.3"/>
          <circle cx="60" cy="10" r="1.5" fill="#1a1a1a" opacity="0.25"/>
          <circle cx="100" cy="30" r="2" fill="#1a1a1a" opacity="0.2"/>
          <circle cx="140" cy="15" r="1.5" fill="#1a1a1a" opacity="0.3"/>
          <circle cx="180" cy="40" r="2.5" fill="#1a1a1a" opacity="0.15"/>
          <line x1="20" y1="20" x2="60" y2="10" stroke="#1a1a1a" stroke-width="0.5" opacity="0.15"/>
          <line x1="60" y1="10" x2="100" y2="30" stroke="#1a1a1a" stroke-width="0.5" opacity="0.15"/>
          <line x1="100" y1="30" x2="140" y2="15" stroke="#1a1a1a" stroke-width="0.5" opacity="0.15"/>
          <line x1="140" y1="15" x2="180" y2="40" stroke="#1a1a1a" stroke-width="0.5" opacity="0.15"/>
        </svg>
      </div>
      <span class="hero-identity-title">Enseignante chercheuse, doctorat en science de l'information et de la communication</span>
    </div>

    <div class="hero-subtitle-wrapper">
      <a href="mailto:Imane@deviiiens.fr?subject=Contact - Deviens." class="hero-cta">Prendre contact</a>
      <p class="hero-subtitle">
        Nous sommes au service du savoir.<br>
        Le savoir est une exigence,<br>
        une médiation et une responsabilité.
      </p>
    </div>
    
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
  padding: 7vw 8vw 6vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: auto;
  position: relative;
  overflow: hidden;
}

.hero-deco {
  position: absolute;
  pointer-events: none;
}

.hero-identity-name-row {
  display: flex;
  align-items: center;
  width: 100%;
}

.hero-deco-name {
  margin-left: auto;
  width: 160px;
  height: auto;
  flex-shrink: 0;
  pointer-events: none;
}

.hero-deco--tr {
  top: -60px;
  right: -60px;
  width: 500px;
  height: 500px;
}

.hero-deco--bl {
  bottom: -80px;
  left: -80px;
  width: 380px;
  height: 380px;
}


.hero-deco--rect {
  bottom: -30px;
  right: 15vw;
  width: 180px;
  height: 180px;
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
  margin-top: clamp(2rem, 4vw, 4rem);
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
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.15em;
  color: #888888;
  text-transform: uppercase;
}

.hero-divider {
  width: 2rem;
  height: 1px;
  background: #e5e5e5;
  margin: clamp(2.5rem, 4vw, 5rem) 0 clamp(2rem, 3vw, 4rem);
  opacity: 0;
  animation: fadeIn 0.6s ease 0.9s forwards;
}

.hero-intro {
  margin-top: 130px;
  max-width: 1300px;
  font-size: 1.4rem;
  line-height: 1.8;
  color: #666666;
  opacity: 0;
  animation: fadeIn 0.7s ease 1.1s forwards;
}

.hero-subtitle-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  gap: 2rem;
  width: 100%;
  margin-top: clamp(5rem, 8vw, 10rem);
  opacity: 0;
  animation: fadeIn 0.7s ease 1.2s forwards;
}

.hero-cta {
  display: inline-block;
  padding: 0.75rem 1.8rem;
  border: 1px solid #1a1a1a;
  color: #1a1a1a;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.25s ease, color 0.25s ease;
  border-radius: 5px;
}

.hero-cta:hover {
  background: #1a1a1a;
  color: #ffffff;
}

.hero-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #666666;
  max-width: 480px;
  line-height: 1.9;
  text-align: right;
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
    padding: 10vw 6vw 8vw;
  }

  .hero-title {
    letter-spacing: -0.02em;
  }


  .hero-deco--tr {
    width: 300px;
    height: 300px;
    top: -30px;
    right: -30px;
  }

  .hero-deco--bl {
    width: 220px;
    height: 220px;
  }

}

@media (max-width: 480px) {
  .hero {
    padding: 10vw 5vw 6vw;
  }

  .hero-title {
    font-size: clamp(2rem, 9vw, 3.5rem);
  }

  .hero-identity-name {
    font-size: clamp(1.2rem, 6vw, 2rem);
  }

  .hero-identity-title {
    font-size: 10px;
    letter-spacing: 0.08em;
  }

  .hero-deco--tr,
  .hero-deco--bl {
    display: none;
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

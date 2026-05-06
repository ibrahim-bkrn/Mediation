<template>
  <section class="section">
    <div class="section-header">
      <span class="section-number">07 —</span>
      <h2>Manifeste</h2>
    </div>

    <hr class="section-divider" />

    <div class="manifesto">
      <div class="manifesto-body">
        <p>Dans un monde marqué par l'accélération, la dispersion et la mise en récit permanente de soi, il devient nécessaire de réaffirmer une position claire :</p>

        <p>le savoir ne doit pas être mis au service de l'ego, mais au service de la compréhension du monde.</p>

        <p>Nous défendons une approche exigeante de la transmission, fondée sur la rigueur, la structuration et la clarté.</p>

        <p>Nous considérons que penser est un acte. Que comprendre est un engagement. Et que transmettre suppose une éthique.</p>

        <p class="closing">Nous sommes au service du savoir.</p>
      </div>

      <img src="/src/assets/quote-svgrepo-com.svg" class="quote-close" alt="" aria-hidden="true" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  data: Object
})
</script>

<style scoped>
.section {
  padding: 8vw 0;
}

.section-header {
  margin-bottom: clamp(2rem, 4vw, 4rem);
}

.section-number {
  display: block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #aaaaaa;
  margin-bottom: 1.2rem;
}

h2 {
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: #1a1a1a;
}

.section-divider {
  border: none;
  border-top: 1px solid #e5e5e5;
  margin-bottom: clamp(2rem, 4vw, 4rem);
}

.manifesto {
  position: relative;
  padding: 0 3rem;
}

.quote-open,
.quote-close {
  width: clamp(3rem, 6vw, 5rem);
  height: auto;
  position: absolute;
  opacity: 0.15;
}

.quote-open {
  top: -1rem;
  left: 0;
  transform: rotate(180deg);
}

.quote-close {
  bottom: -3rem;
  right: 0;
}

.manifesto-body {
  max-width: 840px;
}

.manifesto-body p {
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  line-height: 1.6;
  color: #1a1a1a;
  margin-bottom: 1.8rem;
}

.manifesto-body p:last-child {
  margin-bottom: 0;
}

.closing {
  font-weight: 700;
  font-size: clamp(1.2rem, 2.2vw, 1.7rem) !important;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .section {
    padding: 5vw 0;
  }
  h2 {
    font-size: 1.4rem;
  }
  .manifesto-body p {
    font-size: 1rem;
  }
  .manifesto {
    padding: 0 2rem;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 8vw 0;
  }
  h2 {
    font-size: 1.2rem;
  }
  .manifesto-body p {
    font-size: 0.95rem;
  }
}
</style>

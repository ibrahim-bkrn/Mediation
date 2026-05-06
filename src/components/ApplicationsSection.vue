<template>
  <section class="section">
    <div class="section-header">
      <span class="section-number">06 —</span>
      <h2>Applications et interventions</h2>
    </div>

    <hr class="section-divider" />

    <p class="intro">{{ data.intro }}</p>

    <div class="interventions">
      <div
        v-for="(item, index) in data.items"
        :key="index"
        class="intervention-row"
      >
        <span class="intervention-index">{{ String(index + 1).padStart(2, '0') }}</span>
        <span class="intervention-name">{{ item }}</span>
      </div>
    </div>

    <p class="conclusion">{{ data.conclusion }}</p>
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

.intro {
  font-size: 0.9rem;
  line-height: 1.85;
  color: #1a1a1a;
  max-width: 840px;
  margin-bottom: clamp(2rem, 4vw, 4rem);
}

.interventions {
  border-top: 1px solid #e5e5e5;
  margin-bottom: clamp(2rem, 4vw, 4rem);
}

.intervention-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.2rem 0.5rem;
  border-bottom: 1px solid #e5e5e5;
  transition: background 0.2s ease;
}

.intervention-row:hover {
  background: #1a1a1a;
}

.intervention-index {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.15em;
  color: #aaaaaa;
  flex-shrink: 0;
  transition: color 0.2s ease;
}

.intervention-name {
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 600;
  color: #1a1a1a;
  flex: 1;
  transition: color 0.2s ease, font-style 0.2s ease;
}

.intervention-row:hover .intervention-index,
.intervention-row:hover .intervention-name {
  color: #ffffff;
}

.conclusion {
  font-size: 0.9rem;
  line-height: 1.85;
  color: #666666;
  max-width: 840px;
}

@media (max-width: 768px) {
  .section {
    padding: 5vw 0;
  }
  h2 {
    font-size: 1.4rem;
  }
  .intro,
  .conclusion {
    font-size: 1rem;
  }
  .intervention-name {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 8vw 0;
  }
  h2 {
    font-size: 1.2rem;
  }
  .intro,
  .conclusion {
    font-size: 0.95rem;
  }
}
</style>

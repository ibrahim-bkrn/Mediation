<template>
  <section id="enseignement" class="section">
    <div class="section-header">
      <span class="section-number">05 —</span>
      <h2>Enseignements</h2>
    </div>
    <div class="disciplines">
      <div
        v-for="(discipline, index) in data.disciplines"
        :key="index"
        class="discipline-row"
      >
        <span class="discipline-index">{{ String(index + 1).padStart(2, '0') }}</span>
        <span class="discipline-name">{{ discipline }}</span>
      </div>
    </div>
    <p class="subtitle">{{ data.subtitle }}</p>
  </section>
</template>

<script setup>
defineProps({
  data: Object
})
</script>

<style scoped>
.section {
  padding: 7vw 0;
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
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: #1a1a1a;
}

.disciplines {
  border-top: 1px solid #e5e5e5;
  margin-bottom: clamp(2rem, 4vw, 4rem);
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.discipline-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.2rem 0.5rem;
  border-bottom: 1px solid #e5e5e5;
  cursor: default;
  transition: background 0.2s ease;
}

.discipline-row:nth-child(odd) {
  border-right: 1px solid #e5e5e5;
  padding-right: 2rem;
}

.discipline-row:hover {
  background: #1a1a1a;
}

.discipline-index {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.15em;
  color: #aaaaaa;
  flex-shrink: 0;
  transition: color 0.2s ease;
}

.discipline-name {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.2rem, 1.8vw, 1.4rem);
  font-weight: 600;
  color: #1a1a1a;
  flex: 1;
  transition: color 0.2s ease;
}

.discipline-row:hover .discipline-index,
.discipline-row:hover .discipline-name {
  color: #ffffff;
}

.subtitle {
  font-size: 1.3rem;
  line-height: 1.85;
  color: #666666;
  max-width: 1040px;
}

@media (max-width: 768px) {
  .disciplines {
    grid-template-columns: 1fr;
  }
  .discipline-row:nth-child(odd) {
    border-right: none;
    padding-right: 0.5rem;
  }
  h2 {
    font-size: 1.4rem;
  }
}
</style>

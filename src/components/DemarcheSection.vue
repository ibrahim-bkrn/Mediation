<template>
  <section class="section">
    <div class="section-layout">
      <div class="section-left">
        <div class="section-header">
          <span class="section-number">03 —</span>
          <h2>Une démarche ancrée dans le terrain</h2>
        </div>
        <div class="section-body">
          <p v-for="(paragraph, index) in data.paragraphs" :key="index">{{ paragraph }}</p>
        </div>
      </div>
      <div class="section-right" aria-hidden="true">
        <img class="sticky-illustration" src="@/assets/visuels/undraw_sticky-note.svg" alt="" />
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
.section {
  padding: 7vw 0;
}

.section-layout {
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 4rem;
  align-items: center;
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

.section-body p {
  font-size: 1.3rem;
  line-height: 1.85;
  color: #1a1a1a;
  margin-bottom: 1.8rem;
}

.section-body p:last-child {
  margin-bottom: 0;
}

.section-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sticky-illustration {
  width: 180px;
  height: auto;
  opacity: 0.75;
}

@media (max-width: 900px) {
  .section-layout {
    grid-template-columns: 1fr;
  }
  .section-right {
    display: none;
  }
}

@media (max-width: 768px) {
  .section-body p { font-size: 1.05rem; }
}

@media (max-width: 480px) {
  h2 { font-size: 1.6rem; }
  .section-body p { font-size: 1rem; }
}
</style>

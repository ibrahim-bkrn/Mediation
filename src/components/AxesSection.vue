<template>
  <section class="section">
    <div class="section-header">
      <span class="section-number">02 —</span>
      <h2>Axes de recherche</h2>
    </div>
    <div class="axes-body">
      <div class="axes-list">
        <div v-for="(axis, index) in data.items" :key="index" class="axis-item">
          <div class="axis-row">
            <h3 class="axis-title">{{ axis.title }}</h3>
          </div>
          <p class="axis-description">{{ axis.description }}</p>
        </div>
      </div>
      <div class="axes-visual" aria-hidden="true">
        <img src="@/assets/visuels/undraw_environmental-study_c69w.svg" alt="" />
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
  grid-template-columns: 1fr 280px;
  gap: 4rem;
  align-items: start;
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

.axes-body {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 5rem;
  align-items: center;
}

.axes-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 4rem;
}

.axes-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.axes-visual img {
  width: 100%;
  height: auto;
  opacity: 0.85;
}

.axis-item {
  border-bottom: 1px solid #e5e5e5;
  padding: 1.6rem 0;
}

.axis-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 0.8rem;
}

.axis-title {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  color: #1a1a1a;
}

.axis-description {
  font-size: 1rem;
  line-height: 1.8;
  color: #666666;
  max-width: 860px;
}

.section-right {
  position: sticky;
  top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
}

.axis-numbers {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.axis-num {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2.5rem, 4vw, 4.5rem);
  font-weight: 700;
  color: #a0896a;
  opacity: 0.18;
  line-height: 1;
  letter-spacing: -0.04em;
}

@media (max-width: 900px) {
  .section-layout { grid-template-columns: 1fr; }
  .axes-body { grid-template-columns: 1fr; }
  .axes-visual { display: none; }
  .axes-list { grid-template-columns: 1fr; }
}
</style>

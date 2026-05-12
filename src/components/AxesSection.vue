<template>
  <section class="section">
    <div class="section-header">
      <span class="section-number">02 —</span>
      <h2>Axes de recherche</h2>
    </div>

    <hr class="section-divider" />

    <div class="axes-list">
      <div v-for="(axis, index) in data.items" :key="index" class="axis-item">
        <div class="axis-row">
          <h3 class="axis-title">{{ axis.title }}</h3>
        </div>
        <p class="axis-description">{{ axis.description }}</p>
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
  padding: 4vw 0;
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

.section-divider {
  border: none;
  margin-bottom: 0;
}

.axes-list {
  display: flex;
  flex-direction: column;
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
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: 600;
  line-height: 1.3;
  color: #1a1a1a;
}

.axis-arrow {
  font-size: 1.05rem;
  color: #aaaaaa;
  flex-shrink: 0;
}

.axis-description {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #666666;
  max-width: 860px;
}

@media (max-width: 768px) {
  .section {
    padding: 5vw 0;
  }
  h2 {
    font-size: 1.4rem;
  }
  .axis-description {
    font-size: 1.05rem;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 4vw 0;
  }
  h2 {
    font-size: 1.2rem;
  }
  .axis-description {
    font-size: 1.05rem;
  }
}
</style>

<template>
  <section class="section">
    <div class="section-layout">
      <div class="section-left">
        <div class="section-header">
          <span class="section-number">04 —</span>
          <h2>Une posture au service du savoir</h2>
        </div>
        <div class="section-body">
          <p v-for="(paragraph, index) in data.paragraphs" :key="index">{{ paragraph }}</p>
          <p class="objectives-intro">Dans l'enseignement comme dans la recherche, l'objectif est de :</p>
          <ul class="objectives">
            <li v-for="(objective, index) in data.objectives" :key="index">
              <span class="dash">—</span> {{ objective }}
            </li>
          </ul>
          <p>{{ data.conclusion }}</p>
        </div>
      </div>
      <div class="section-right" aria-hidden="true">
        <div class="objectives-visual">
          <div v-for="(objective, index) in data.objectives" :key="index" class="obj-block">
            <span class="obj-num">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="obj-text">{{ objective }}</span>
          </div>
        </div>
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
  grid-template-columns: 1fr 300px;
  gap: 5rem;
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

.section-body p {
  font-size: 1.3rem;
  line-height: 1.85;
  color: #1a1a1a;
  margin-bottom: 1.8rem;
}

.objectives-intro {
  font-weight: 500;
}

.objectives {
  list-style: none;
  padding: 0;
  margin: 0 0 1.8rem 0;
}

.objectives li {
  font-size: 1.3rem;
  line-height: 1.85;
  color: #1a1a1a;
  margin-bottom: 0.6rem;
}

.dash {
  color: #aaaaaa;
  margin-right: 0.5rem;
}

.section-right {
  position: sticky;
  top: 4rem;
  padding-top: 5rem;
}

.objectives-visual {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.obj-block {
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0;
  border-bottom: 1px solid #e5e5e5;
  gap: 0.3rem;
}

.obj-num {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: #a0896a;
}

.obj-text {
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.4;
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
  .section-body p, .objectives li { font-size: 1.05rem; }
}

@media (max-width: 480px) {
  h2 { font-size: 1.6rem; }
  .section-body p, .objectives li { font-size: 1rem; }
}
</style>

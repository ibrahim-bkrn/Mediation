<template>
  <section class="section">
    <div class="section-header">
      <span class="section-number">04 —</span>
      <h2>Une posture au service du savoir</h2>
    </div>

    <hr class="section-divider" />

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
  border-top: 1px solid #e5e5e5;
  margin-bottom: clamp(2rem, 4vw, 4rem);
}

.section-body {
  max-width: 840px;
}

.section-body p {
  font-size: 1.05rem;
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
  font-size: 1.05rem;
  line-height: 1.85;
  color: #1a1a1a;
  margin-bottom: 0.6rem;
}

.dash {
  color: #aaaaaa;
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .section {
    padding: 5vw 0;
  }
  h2 {
    font-size: 1.4rem;
  }
  .section-body p {
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
  .section-body p {
    font-size: 1.05rem;
  }
}
</style>

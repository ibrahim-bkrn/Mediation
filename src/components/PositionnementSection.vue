<template>
  <section id="recherche" class="section">
    <div class="section-layout">
      <div class="section-left">
        <div class="section-header">
          <span class="section-number">01 —</span>
          <h2>Une recherche située en Sciences de <br>l'Information et de la Communication</h2>
        </div>
        <div class="section-body">
          <p>Ce travail s'inscrit dans une approche des Sciences de l'Information et de la Communication attentive aux dispositifs, aux régimes d'énonciation et aux conditions sociales de production du sens.</p>
          <p>Il ne s'agit pas seulement d'analyser les discours, mais de comprendre ce qui les rend possibles : les structures sociales, les cadres institutionnels et les inégalités face au temps, à la parole et à la projection.</p>
          <p class="hypothesis">La recherche repose sur une hypothèse centrale :<br>
          <em>le sens n'est pas une donnée universelle, mais une construction socialement située.</em></p>
        </div>
      </div>
      <div class="section-right">
        <img class="section-illustration" src="@/assets/visuels/undraw_researching_49yy.svg" alt="" aria-hidden="true" />
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
  grid-template-columns: 1fr 380px;
  gap: 5rem;
  align-items: center;
}

.section-right {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.section-illustration {
  width: 100%;
  height: auto;
  opacity: 0.88;
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
  max-width: 1200px;
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

.hypothesis {
  font-size: 1.3rem !important;
}

.hypothesis em {
  font-style: italic;
  color: #1a1a1a;
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
  .section {
    padding: 5vw 0;
  }
  h2 {
    font-size: 20px;
  }
  .section-body p {
    font-size: 1.05rem;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 7vw 0;
  }
  h2 {
    font-size: 1.2rem;
  }
  .section-body p {
    font-size: 1.05rem;
  }
}
</style>

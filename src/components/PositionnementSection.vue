<template>
  <section id="recherche" class="section">
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
  </section>
</template>

<script setup>
defineProps({
  data: Object
})
</script>

<style scoped>

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


.section-body {
  max-width: 1200px;
}

.section-body p {
  font-size: 0.9rem;
  line-height: 1.85;
  color: #1a1a1a;
  margin-bottom: 1.8rem;
}

.section-body p:last-child {
  margin-bottom: 0;
}

.hypothesis {
  font-size: 1.05rem !important;
}

.hypothesis em {
  font-style: italic;
  color: #1a1a1a;
}

@media (max-width: 768px) {
  .section {
    padding: 5vw 0;
  }
  h2 {
    font-size: 1.4rem;
  }
  .section-body p {
    font-size: 1rem;
  }

  h2{
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 8vw 0;
  }
  h2 {
    font-size: 1.2rem;
  }
  .section-body p {
    font-size: 0.95rem;
  }
}
</style>

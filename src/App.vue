<template>
  <div id="app" class="app">
    <Header />
    <Hero :data="content.hero" />
    <main class="main-content">
      <PositionnementSection :data="content.positionnement" />
      <AxesSection :data="content.axes" />
      <DemarcheSection :data="content.demarche" />
      <PostureSection :data="content.posture" />
      <EnseignementSection :data="content.enseignement" />
      <ApplicationsSection :data="content.applications" />
      <ManifestoSection :data="content.manifesto" />
      <ContactSection :data="content.contact" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import PositionnementSection from './components/PositionnementSection.vue'
import AxesSection from './components/AxesSection.vue'
import DemarcheSection from './components/DemarcheSection.vue'
import PostureSection from './components/PostureSection.vue'
import EnseignementSection from './components/EnseignementSection.vue'
import ApplicationsSection from './components/ApplicationsSection.vue'
import ManifestoSection from './components/ManifestoSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

const content = ref({
  hero: {
    title: 'Médiation, savoir et transformation des interactions',
    subtitle: 'Nous sommes au service du savoir.\nLe savoir est une exigence, une médiation et une responsabilité.',
    intro: "Cette plateforme présente un travail de recherche et d'enseignement consacré à la compréhension des transformations du lien social, des dispositifs communicationnels et des formes contemporaines de réflexivité dans l'enseignement supérieur."
  },
  positionnement: {
    title: "Une recherche située en Sciences de l'Information et de la Communication",
    paragraphs: [
      "Ce travail s'inscrit dans une approche des Sciences de l'Information et de la Communication attentive aux dispositifs, aux régimes d'énonciation et aux conditions sociales de production du sens.",
      "Il ne s'agit pas seulement d'analyser les discours, mais de comprendre ce qui les rend possibles : les structures sociales, les cadres institutionnels et les inégalités face au temps, à la parole et à la projection.",
      "La recherche repose sur une hypothèse centrale : le sens n'est pas une donnée universelle, mais une construction socialement située."
    ]
  },
  axes: {
    title: 'Axes de recherche',
    items: [
      {
        title: "Médiation des interactions en enseignement supérieur",
        description: "Analyse des dispositifs qui structurent la relation pédagogique, la parole étudiante et les formes de reconnaissance."
      },
      {
        title: "Perte de sens et reconfigurations contemporaines",
        description: "Étude des discours de désenchantement et de leur inscription dans des cadres sociaux spécifiques."
      },
      {
        title: "Temps, réflexivité et capital sécuritaire",
        description: "Compréhension des inégalités face à la suspension, à la projection et à la possibilité même de s'interroger."
      },
      {
        title: "Savoir, reconnaissance et trajectoires sociales",
        description: "Le savoir comme médiation, comme outil de légitimation et comme dispositif d'appartenance."
      },
      {
        title: "Communication éthique, influence et plaidoyer",
        description: "Réflexion sur les formes contemporaines d'influence et leurs implications sociales et politiques."
      },
      {
        title: "Interculturalité et médiation sociale",
        description: "Étude des interactions entre systèmes de valeurs, normes sociales et dispositifs d'intégration."
      }
    ]
  },
  demarche: {
    title: 'Une démarche ancrée dans le terrain',
    paragraphs: [
      "La recherche repose sur une enquête qualitative menée auprès d'étudiants en Master 2.",
      "Le terrain est envisagé comme un espace de production de discours, mais aussi comme un lieu de tension entre différents rapports au savoir, au temps et à l'avenir.",
      "Le carnet de recherche constitue un dispositif central. Il permet de transformer l'expérience du terrain en matériau analytique, en assumant une posture réflexive située.",
      "Ce choix méthodologique vise à rendre visibles les conditions sociales de production du sens."
    ]
  },
  posture: {
    title: 'Une posture au service du savoir',
    paragraphs: [
      "Cette démarche repose sur un principe simple : nous ne sommes pas au service de nous-mêmes, mais au service du savoir.",
      "Le savoir n'est pas un outil de mise en scène. Il est une exigence de rigueur, de transmission et de responsabilité."
    ],
    objectives: [
      'Structurer la pensée',
      'Rendre intelligible la complexité',
      "Former à l'exigence intellectuelle",
      "Transmettre des cadres d'analyse durables"
    ],
    conclusion: "La pédagogie s'inscrit dans une relation exigeante, où l'étudiant est invité à se mettre au service du savoir à son tour."
  },
  enseignement: {
    title: 'Enseignements',
    disciplines: [
      'Communication psychosociale',
      'Sciences humaines et sociales',
      'Méthodologie du mémoire',
      'Art oratoire et structuration du discours',
      "Communication éthique et stratégie d'influence",
      'Socio-psychologie des organisations',
      'Culture de la communication',
      'Neurosciences et cognition (approche pédagogique)'
    ],
    subtitle: "Les enseignements visent à développer des capacités d'analyse, de structuration et de prise de position argumentée."
  },
  applications: {
    title: 'Applications et interventions',
    intro: 'Les travaux de recherche donnent lieu à des interventions dans différents contextes :',
    items: [
      'Accompagnement pédagogique',
      'Structuration de dispositifs de formation',
      'Conduite du changement',
      'Gestion de crise',
      'Réflexion stratégique en communication',
      'Médiation interculturelle'
    ],
    conclusion: "L'objectif est de relier les apports théoriques aux réalités du terrain."
  },
  manifesto: {
    title: 'Manifeste',
    text: `Le savoir n'est pas un accessoire.
Il n'est ni un ornement, ni un outil de distinction.

Il est une médiation.
Une exigence.
Une responsabilité.

Dans un monde marqué par l'accélération, la dispersion et la mise en récit permanente de soi, il devient nécessaire de réaffirmer une position claire :

le savoir ne doit pas être mis au service de l'ego,
mais au service de la compréhension du monde.

Nous défendons une approche exigeante de la transmission,
fondée sur la rigueur, la structuration et la clarté.

Nous considérons que penser est un acte.
Que comprendre est un engagement.
Et que transmettre suppose une éthique.

Nous sommes au service du savoir.`
  },
  contact: {
    title: 'Contact',
    intro: "Pour toute demande liée à l'enseignement, à la recherche ou à des interventions professionnelles"
  }
})
</script>

<style scoped>
#app {
  background: #ffffff;
  color: #1a1a1a;
  font-family: 'Inter', sans-serif;
}

.main-content {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .main-content {
    padding: 0 1.5rem;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 0 1rem;
  }
}
</style>

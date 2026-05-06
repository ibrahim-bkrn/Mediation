<template>
  <header class="header">
    <nav class="nav">
      <a href="#hero" @click="smoothScroll" class="nav-logo">Médiation & Savoir</a>
      <ul class="nav-links">
        <li><a href="#hero" @click="smoothScroll">Accueil</a></li>
        <li><a href="#recherche" @click="smoothScroll">Recherche</a></li>
        <li><a href="#enseignement" @click="smoothScroll">Enseignement</a></li>
        <li><a href="#contact" @click="smoothScroll">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const smoothScroll = (event) => {
  event.preventDefault()
  const target = event.currentTarget.getAttribute('href')
  const element = document.querySelector(target)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.header {
  border-bottom: 1px solid #e5e5e5;
  animation: fadeDown 0.6s ease 0.1s both;
}

.nav {
  padding: 1.6rem 8vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #1a1a1a;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-logo:hover {
  color: #1e3a5f;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2.4rem;
  padding: 0;
  margin: 0;
}

.nav-links a {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #666666;
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
  cursor: pointer;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 1px;
  background: #1e3a5f;
  transition: width 0.25s ease;
}

.nav-links a:hover {
  color: #1e3a5f;
}

.nav-links a:hover::after {
  width: 100%;
}

@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .nav {
    padding: 1.2rem 6vw;
    gap: 1.6rem;
  }

  .nav-links {
    gap: 1.6rem;
  }
}

@media (max-width: 480px) {
  .nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .nav-links {
    gap: 1.2rem;
    flex-wrap: wrap;
  }
}
</style>

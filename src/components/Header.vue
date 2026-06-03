<template>
  <header class="header">
    <div class="nav">
      <div class="nav-identity">
        <span class="nav-identity-name">Imane HABBOUB KAJIOU</span>
        <span class="nav-identity-title">Enseignante chercheuse</span>
      </div>
      <h2 class="nav-logo">Deviiiens.</h2>
    </div>
  </header>
</template>

<style scoped>
.header {
  border-bottom: 1px solid #e5e5e5;
  animation: fadeDown 0.6s ease 0.1s both;
}

.nav {
  padding: 1.4rem 8vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.nav-logo:hover {
  opacity: 0.6;
}

.nav-identity {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}

.nav-identity-name {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #1a1a1a;
  line-height: 1;
}

.nav-identity-title {
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #888888;
  line-height: 1;
}

@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .nav {
    padding: 1.2rem 6vw;
  }

  .nav-identity-name {
    font-size: 12px;
    letter-spacing: 0.08em;
  }

  .nav-logo {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .nav {
    padding: 1rem 5vw;
  }

  .nav-identity-name {
    font-size: 10px;
    letter-spacing: 0.06em;
  }

  .nav-identity-title {
    font-size: 9px;
    letter-spacing: 0.06em;
  }
}
</style>

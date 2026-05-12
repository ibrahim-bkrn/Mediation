<template>
  <header class="header">
    <div class="nav">
      <div class="nav-identity">
        <span class="nav-identity-name">HABBOUB KAJIOU Imane</span>
        <span class="nav-identity-title">Enseignante chercheuse</span>
      </div>
      <a href="#hero" class="nav-logo">Deviens.</a>
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
}

@media (max-width: 480px) {
  .nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }

  .nav-identity {
    align-items: flex-start;
  }
}
</style>

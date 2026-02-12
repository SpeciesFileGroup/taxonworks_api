<template>
  <header class="app-header">
    <div class="app-header__left">
      <LogoTaxonWorks
        alt="TaxonWorks"
        class="app-header__logo"
      />
      <h1 class="app-header__title">API Documentation</h1>
    </div>
    <a
      class="app-header__github-link"
      href="https://github.com/SpeciesFileGroup/taxonworks_api"
      title="GitHub Repository"
    >
      <LogoGitHub class="app-header__github-logo" />
    </a>
  </header>
</template>

<script setup>
import LogoGitHub from './Logo/GitHub.vue'
import LogoTaxonWorks from './Logo/TaxonWorks.vue'
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  background: #1a5276;
  color: #fff;
  border-bottom: 2px solid #154360;
}

.app-header__left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.app-header__logo {
  height: 32px;
  width: auto;
}

.app-header__github-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.app-header__github-logo {
  height: 28px;
  width: 28px;
  color: white;
  cursor: pointer;
}

.app-header__title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
}
</style>

<template>
  <header class="app-header">
    <div class="app-header__left">
      <LogoTaxonWorks
        alt="TaxonWorks"
        class="app-header__logo"
      />
      <div class="app-header__title">API Documentation</div>
    </div>
    <div class="app-header__links">
      <a href="https://www.speciesfilegroup.org/">Species File Group</a>
      <a
        class="app-header__github-link"
        href="https://github.com/SpeciesFileGroup/taxonworks_api"
        title="GitHub Repository"
      >
        <LogoGitHub class="app-header__github-logo" />
      </a>
    </div>
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
  background: var(--color-primary);
  color: var(--color-text-on-primary);
  border-bottom: 2px solid var(--color-primary-dark);
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
  height: 20px;
  width: 20px;
  color: var(--color-text-on-primary);
  cursor: pointer;
}

.app-header__title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
}

.app-header__links {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  gap: 1rem;

  a {
    color: var(--color-text-on-primary);
    text-decoration: none;

    transition: color 0.2s;

    &:hover {
      color: var(--color-text-on-primary-hover);
    }
  }
}
</style>

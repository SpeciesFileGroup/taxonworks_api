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
      <a href="http://www.speciesfilegroup.org/">Species File Group</a>
      <AppHeaderSubmenu
        label="GitHub"
        :submenu="GITHUB_REPOSITORIES"
      />
    </div>
  </header>
</template>

<script setup>
import LogoTaxonWorks from './Logo/TaxonWorks.vue'
import AppHeaderSubmenu from './AppHeaderSubmenu.vue'

const GITHUB_REPOSITORIES = [
  {
    label: 'Code',
    href: 'https://github.com/SpeciesFileGroup/taxonworks'
  },
  {
    label: 'Docs',
    href: 'https://github.com/SpeciesFileGroup/taxonworks_docs'
  },
  {
    label: 'API',
    href: 'https://github.com/SpeciesFileGroup/taxonworks_api'
  }
]
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

.app-header__title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
}

.app-header__links {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  gap: 1.5rem;

  a {
    color: var(--color-text-on-primary);
    text-decoration: none;

    transition: color 0.2s;

    &:hover {
      color: var(--color-accent);
    }
  }
}
</style>

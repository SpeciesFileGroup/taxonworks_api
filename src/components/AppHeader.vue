<template>
  <header class="app-header">
    <img
      :src="taxonworksLogo"
      alt="TaxonWorks"
      class="app-header__logo"
    />
    <h1 class="app-header__title">API Documentation</h1>
  </header>
</template>

<script setup>
import taxonworksLogo from '../assets/images/taxonworks_logo.svg'
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  background: #1a5276;
  color: #fff;
  border-bottom: 2px solid #154360;
}

.app-header__logo {
  height: 42px;
  width: auto;
}

.app-header__title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
}
</style>

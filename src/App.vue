<template>
  <AppHeader />
  <div class="app-body">
    <ResourceSelector
      v-model="selectedResource"
      :resources="resources"
    />
    <OverviewPage v-if="selectedResource === 'overview'" />
    <SwaggerViewer
      v-else
      :spec="spec"
      :error="error"
    />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import ResourceSelector from './components/ResourceSelector.vue'
import SwaggerViewer from './components/SwaggerViewer.vue'
import OverviewPage from './components/OverviewPage.vue'
import { useOpenApiSpec } from './composables/useOpenApiSpec.js'

const { spec, error, resources, loadSpec } = useOpenApiSpec()

function getInitialResource() {
  const params = new URLSearchParams(window.location.search)
  const fromUrl = params.get('resource')
  if (fromUrl === 'overview') return 'overview'
  if (fromUrl && resources.find((r) => r.id === fromUrl)) {
    return fromUrl
  }
  return 'overview'
}

const selectedResource = ref(getInitialResource())

watch(selectedResource, (id) => {
  const url = new URL(window.location)

  if (id === 'overview') {
    spec.value = null
    error.value = null
    url.searchParams.delete('resource')
    window.history.replaceState({}, '', url)
    return
  }

  const resource = resources.find((r) => r.id === id)
  if (resource) {
    loadSpec(resource.filename)
    url.searchParams.set('resource', id)
    window.history.replaceState({}, '', url)
  }
})

onMounted(() => {
  const resource = resources.find((r) => r.id === selectedResource.value)
  if (resource) {
    loadSpec(resource.filename)
  }
})
</script>

<style scoped>
.app-body {
  flex: 1;
  display: flex;
  overflow: hidden;
}
</style>

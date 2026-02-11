<template>
  <AppHeader />
  <div class="app-body">
    <ResourceSelector
      v-model="selectedResource"
      :resources="resources"
    />
    <SwaggerViewer
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
import { useOpenApiSpec } from './composables/useOpenApiSpec.js'

const { spec, error, resources, loadSpec } = useOpenApiSpec()

function getInitialResource() {
  const params = new URLSearchParams(window.location.search)
  const fromUrl = params.get('resource')
  if (fromUrl && resources.find((r) => r.id === fromUrl)) {
    return fromUrl
  }
  return resources[0].id
}

const selectedResource = ref(getInitialResource())

watch(selectedResource, (id) => {
  const resource = resources.find((r) => r.id === id)
  if (resource) {
    loadSpec(resource.filename)
    const url = new URL(window.location)
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

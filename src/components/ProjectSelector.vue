<template>
  <label class="project-selector">
    <select
      v-model="selectedProjectToken"
      :disabled="loading || !!fetchError"
    >
      <option value="">
        {{ placeholder }}
      </option>
      <option
        v-for="project in projects"
        :key="project.project_token"
        :value="project.project_token"
      >
        {{ project.name }}
      </option>
    </select>
    <small class="project-selector__hint">
      Select a project to authorize automatically, or use the
      <strong>Authorize</strong> button to set a token manually.
    </small>
  </label>
</template>

<script setup>
import { computed } from 'vue'
import { useProjects } from '../composables/useProjects.js'

const { projects, loading, fetchError, selectedProjectToken } = useProjects()

const placeholder = computed(() => {
  if (loading.value) return 'Loading projects…'
  if (fetchError.value) return 'Failed to load projects'
  return 'Select a project…'
})
</script>

<style scoped>
.project-selector {
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
}

.project-selector__select {
  font-family: inherit;
  font-size: 0.875rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid #41444e;
  background: #f7f7f7;
  color: #3b4151;
  cursor: pointer;
  max-width: 100%;
}

.project-selector__select:disabled {
  cursor: default;
  opacity: 0.7;
}

.project-selector__hint {
  margin-top: 0.35rem;
  font-size: 0.75rem;
  line-height: 1.4;
  color: #6b6b6b;
}
</style>

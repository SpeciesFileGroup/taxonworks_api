<template>
  <aside class="resource-selector">
    <div class="resource-selector__overview">
      <button
        class="resource-selector__item resource-selector__overview-btn"
        :class="{
          'resource-selector__item--active': currentResource === 'overview'
        }"
        @click="() => (currentResource = 'overview')"
      >
        Overview
      </button>
    </div>
    <div class="resource-selector__search">
      <input
        v-model="search"
        type="text"
        placeholder="Filter resources..."
        class="resource-selector__input"
      />
    </div>
    <nav class="resource-selector__list">
      <button
        v-for="r in filtered"
        :key="r.id"
        class="resource-selector__item"
        :class="{ 'resource-selector__item--active': r.id === currentResource }"
        @click="() => (currentResource = r.id)"
      >
        {{ r.label }}
      </button>
    </nav>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  resources: { type: Array, required: true }
})

const currentResource = defineModel({
  type: String,
  default: null
})

const search = ref('')

const filtered = computed(() => {
  const q = search.value.toLowerCase()
  if (!q) return props.resources
  return props.resources.filter((r) => r.label.toLowerCase().includes(q))
})
</script>

<style scoped>
.resource-selector {
  width: 260px;
  min-width: 260px;
  background: var(--color-bg-surface);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.resource-selector__overview {
  padding: 0.75rem 0rem 0;
}

.resource-selector__overview-btn {
  font-weight: 600;
  color: var(--color-primary);
}

.resource-selector__search {
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border);
}

.resource-selector__input {
  width: 100%;
  padding: 0.5rem 0.625rem;
  border: 1px solid var(--color-border-input);
  border-radius: 4px;
  font-size: 0.875rem;
  box-sizing: border-box;
}

.resource-selector__input:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 2px var(--color-accent-alpha);
}

.resource-selector__list {
  flex: 1;
  overflow-y: auto;
  padding: 0.25rem 0;
}

.resource-selector__item {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: none;
  background: none;
  text-align: left;
  font-size: 0.875rem;
  color: var(--color-text);
  cursor: pointer;
  transition: background-color 0.15s;
}

.resource-selector__item:hover {
  background: var(--color-bg-hover);
}

.resource-selector__item--active {
  background: var(--color-bg-active);
  font-weight: 600;
  color: var(--color-primary);
}
</style>

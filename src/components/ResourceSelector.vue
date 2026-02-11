<template>
  <aside class="resource-selector">
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
  background: #f5f7fa;
  border-right: 1px solid #dfe3e8;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.resource-selector__search {
  padding: 0.75rem;
  border-bottom: 1px solid #dfe3e8;
}

.resource-selector__input {
  width: 100%;
  padding: 0.5rem 0.625rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.875rem;
  box-sizing: border-box;
}

.resource-selector__input:focus {
  outline: none;
  border-color: #5b9bd5;
  box-shadow: 0 0 0 2px rgba(91, 155, 213, 0.25);
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
  color: #333;
  cursor: pointer;
  transition: background-color 0.15s;
}

.resource-selector__item:hover {
  background: #e8ecf1;
}

.resource-selector__item--active {
  background: #d6e4f0;
  font-weight: 600;
  color: #1a5276;
}
</style>

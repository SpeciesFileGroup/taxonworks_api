<template>
  <div
    class="menu-wrapper"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <button class="btn-submenu">
      {{ label }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class=""
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
    <ul
      v-if="open"
      class="submenu"
    >
      <li
        v-for="{ label, href } in submenu"
        :key="href"
      >
        <a
          :href="href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  label: {
    type: String,
    required: true
  },
  submenu: {
    type: Array,
    default: () => []
  }
})

const open = ref(false)
</script>

<style scoped>
.menu-wrapper {
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}

.btn-submenu {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  padding: 8px 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--color-text-on-primary);
  font-size: 0.875rem;
  font-family: inherit;
  transition: color 0.2s;
  font-weight: 500;

  &:hover {
    color: var(--color-accent);
  }

  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s;
  }
}

.submenu {
  position: absolute;
  right: 0;
  top: 100%;
  margin: 0;
  padding: 0.5rem 0;
  list-style: none;
  background: var(--color-primary-dark);
  border-radius: 4px;

  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.submenu li {
  cursor: pointer;
}
.submenu li a {
  padding: 0.25rem 1.5rem;
  color: var(--color-text-on-primary);
  text-decoration: none;
  width: 100%;
  display: block;
}
.submenu li:hover {
  a {
    color: var(--color-accent);
  }
}
</style>

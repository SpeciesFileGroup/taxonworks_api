<template>
  <div class="swagger-viewer">
    <div
      v-if="error"
      class="swagger-viewer__error"
    >
      {{ error }}
    </div>
    <div
      ref="swaggerEl"
      class="swagger-viewer__container"
    ></div>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeUnmount, onMounted } from 'vue'
import { SwaggerUIBundle } from 'swagger-ui-dist'
import 'swagger-ui-dist/swagger-ui.css'

const props = defineProps({
  spec: { type: Object, default: null },
  error: { type: String, default: null }
})

const swaggerEl = ref(null)
let ui = null

function destroyUi() {
  if (ui) {
    if (swaggerEl.value) {
      swaggerEl.value.innerHTML = ''
    }
    ui = null
  }
}

watch(
  () => props.spec,
  (newSpec) => {
    if (!newSpec || !swaggerEl.value) return

    loadSpec(newSpec)
  }
)

function loadSpec(spec) {
  destroyUi()

  ui = SwaggerUIBundle({
    domNode: swaggerEl.value,
    spec,
    layout: 'BaseLayout',
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl]
  })
}

onMounted(() => {
  if (props.spec) {
    loadSpec(props.spec)
  }
})
onBeforeUnmount(destroyUi)
</script>

<style scoped>
.swagger-viewer {
  flex: 1;
  overflow-y: auto;
  min-width: 0;
}

.swagger-viewer__error {
  padding: 1rem;
  color: var(--color-error);
  font-weight: 600;
}

.swagger-viewer__container {
  padding: 0 1rem 2rem;
}

:deep(.swagger-ui .info .title) {
  margin: 0 0 0.5rem;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-primary);
}

:deep(.swagger-ui .info h2) {
  margin: 2rem 0 0.75rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-primary);
}

:deep(.swagger-ui .opblock-tag) {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primary);
}

:deep(.swagger-ui .info__contact) {
  display: none;
}
</style>

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
    <Teleport
      v-if="selectorTarget"
      :to="selectorTarget"
    >
      <ProjectSelector />
    </Teleport>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeUnmount, onMounted } from 'vue'
import SwaggerUIBundle from 'swagger-ui-dist/swagger-ui-bundle.js'
import 'swagger-ui-dist/swagger-ui.css'
import { useProjects } from '../composables/useProjects.js'
import ProjectSelector from './ProjectSelector.vue'

const props = defineProps({
  spec: { type: Object, default: null },
  error: { type: String, default: null }
})

const { selectedProjectToken, setApiBase } = useProjects()

const swaggerEl = ref(null)
// Mount node injected into Swagger's `.scheme-container`, below the servers
// dropdown. The ProjectSelector is teleported here once Swagger renders.
const selectorTarget = ref(null)
let ui = null

// Every endpoint in this API has a global security requirement (token or
// project_token). Disable "Try it out" until the user is authorized — i.e.
// until a project token has been selected — so requests can't be fired off
// only to fail with a 401.
function gateTryItOutPlugin() {
  return {
    wrapComponents: {
      TryItOutButton: (Original, system) => (componentProps) => {
        const React = system.React
        const authorized = system.authSelectors.authorized()
        const isAuthorized = authorized && authorized.size > 0

        // Once authorized, or while try-out mode is already active, behave
        // exactly like the stock button.
        if (isAuthorized || componentProps.enabled) {
          return React.createElement(Original, componentProps)
        }

        return React.createElement(
          'div',
          { className: 'try-out' },
          React.createElement(
            'button',
            {
              className: 'btn try-out__btn',
              disabled: true,
              title: 'Select a project above to enable "Try it out"'
            },
            'Try it out '
          )
        )
      }
    }
  }
}

// `onComplete` can fire before React has committed the `.scheme-container`
// (it renders together with the servers dropdown), so retry across a few
// animation frames until the node exists.
function mountProjectSelector(attempt = 0) {
  // Place the selector inside the Servers block so it renders directly below
  // the servers dropdown (and above the Authorize button).
  const serverContainer = swaggerEl.value?.querySelector(
    '.scheme-container .schemes-server-container'
  )
  if (!serverContainer) {
    if (attempt < 30) {
      requestAnimationFrame(() => mountProjectSelector(attempt + 1))
    }
    return
  }

  let host = serverContainer.querySelector('#tw-project-selector')
  if (!host) {
    host = document.createElement('div')
    host.id = 'tw-project-selector'
    serverContainer.appendChild(host)
  }
  selectorTarget.value = host

  // Drive the project list from the currently selected server, and reload it
  // whenever the user picks a different server. The DOM (and its listener) is
  // recreated on each spec load, so no manual cleanup is needed.
  const serverSelect = serverContainer.querySelector('#servers')
  if (serverSelect) {
    setApiBase(serverSelect.value)
    serverSelect.addEventListener('change', (e) => setApiBase(e.target.value))
  }
}

// Pre-fill (or clear) the project_token field in Swagger's "Authorize" form
// from the project chosen in the header selector.
function applyProjectToken() {
  if (!ui) return

  const token = selectedProjectToken.value
  if (token) {
    ui.preauthorizeApiKey('projectTokenAuth', token)
  } else {
    // logout() throws in swagger-ui 5 when nothing is authorized yet, so only
    // clear when there is an existing authorization.
    const authorized = ui.authSelectors?.authorized?.()
    if (authorized?.size) {
      ui.authActions.logout(['projectTokenAuth'])
    }
  }
}

// Re-apply whenever the user picks a different project.
watch(selectedProjectToken, applyProjectToken)

function destroyUi() {
  if (ui) {
    // Detach the teleport before Swagger's DOM (and our mount node) is wiped.
    selectorTarget.value = null
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
    plugins: [SwaggerUIBundle.plugins.DownloadUrl, gateTryItOutPlugin],
    onComplete: () => {
      applyProjectToken()
      mountProjectSelector()
    }
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

/* Stack the servers dropdown and the injected project selector vertically. */
:deep(.swagger-ui .scheme-container .schemes-server-container) {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

:deep(.swagger-ui .scheme-container .auth-wrapper) {
  padding-bottom: 1.5rem;
}
</style>

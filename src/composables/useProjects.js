import { ref } from 'vue'

// The API root of each server (e.g. https://sfg.taxonworks.org/api/v1) returns
// the list of open projects together with their project_token, no auth needed.
// project_tokens are server-specific, so the list is keyed by server base URL.
const cache = new Map()

const projects = ref([])
const loading = ref(false)
const fetchError = ref(null)
const selectedProjectToken = ref('')
const apiBase = ref('')

async function loadProjects() {
  const base = apiBase.value
  if (!base) return

  if (cache.has(base)) {
    projects.value = cache.get(base)
    return
  }

  loading.value = true
  fetchError.value = null

  try {
    const res = await fetch(base)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const data = await res.json()

    const list = (data.open_projects || [])
      .filter((p) => p.project_token)
      .sort((a, b) => a.name.localeCompare(b.name))

    cache.set(base, list)
    projects.value = list
  } catch (e) {
    fetchError.value = `Could not load projects: ${e.message}`
    projects.value = []
  } finally {
    loading.value = false
  }
}

// Point the selector at a server. Switching servers clears the current
// selection, since a project_token from one server is invalid on another.
function setApiBase(base) {
  if (!base || base === apiBase.value) return

  apiBase.value = base
  selectedProjectToken.value = ''
  loadProjects()
}

export function useProjects() {
  return {
    projects,
    loading,
    fetchError,
    selectedProjectToken,
    setApiBase
  }
}

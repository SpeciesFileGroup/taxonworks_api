import { ref } from 'vue'
import yaml from 'js-yaml'

const yamlModules = import.meta.glob('/docs/openapi/*.yaml', {
  eager: true,
  query: '?raw',
  import: 'default'
})

const specCache = new Map()

function toLabel(name) {
  return name
    .replace(/_/g, ' ')
    .replace(/\bdwc\b/gi, 'DWC')
    .replace(/\b\w/g, (l) => l.toUpperCase())
}

export const resources = Object.keys(yamlModules)
  .map((path) => {
    const filename = path.split('/').pop()
    const id = filename.replace('.yaml', '')

    return {
      id,
      filename,
      label: toLabel(id)
    }
  })
  .sort((a, b) => a.label.localeCompare(b.label))

export function useOpenApiSpec() {
  const spec = ref(null)
  const error = ref(null)

  function loadSpec(filename) {
    error.value = null

    const key = `/docs/openapi/${filename}`

    if (specCache.has(key)) {
      spec.value = specCache.get(key)
      return
    }

    const raw = yamlModules[key]

    if (!raw) {
      error.value = `Spec file not found: ${filename}`
      spec.value = null
      return
    }

    try {
      const parsed = yaml.load(raw)

      if (!parsed.externalDocs) {
        const resource = filename.replace('.yaml', '').replaceAll('_', '-')

        parsed.externalDocs = {
          description: 'Data Model Documentation',
          url: `https://docs.taxonworks.org/develop/Data/models.html#${resource}`
        }
      }

      specCache.set(key, parsed)
      spec.value = parsed
    } catch (e) {
      error.value = `Failed to parse ${filename}: ${e.message}`
      spec.value = null
    }
  }

  return {
    spec,
    error,
    loadSpec,
    resources
  }
}

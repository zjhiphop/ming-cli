// Register all components to global scope to avoid duplicate import inside every use case
import { defineAsyncComponent } from 'vue'

const components = import.meta.glob('./**/*.vue')

export default function install(app) {
  for (const [key, value] of Object.entries(components)) {
    const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
    app.component(name, defineAsyncComponent(value))
  }
}

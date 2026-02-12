[![docs](https://github.com/SpeciesFileGroup/taxonworks_api/workflows/docs/badge.svg?branch=main)](https://github.com/SpeciesFileGroup/taxonworks_api/actions?query=workflow%3Adocs)

# taxonworks_api

Documentation for the [TaxonWorks](http://taxonworks.org) workbench API, served at [https://api.taxonworks.org](https://api.taxonworks.org). Application code is [here](https://github.com/SpeciesFileGroup/taxonworks).

This is a Vue 3 single-page application that renders OpenAPI 3.0 specifications using Swagger UI.

## Prerequisites

- [Node.js](https://nodejs.org/) 22+
- npm (included with Node.js)

## Running locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/SpeciesFileGroup/taxonworks_api.git
cd taxonworks_api
npm install
```

Start the development server:

```bash
npm run dev
```

This launches a Vite dev server with hot-reload. Open the URL printed in the terminal (typically `http://localhost:5173`).

To preview a production build locally:

```bash
npm run build
npm run preview
```

## Updating the documentation

API specifications live in `docs/openapi/` as individual YAML files (one per resource). To add or update a resource:

1. Create or edit the corresponding YAML file in `docs/openapi/` (e.g., `docs/openapi/otu.yaml`). Each file must be a valid [OpenAPI 3.0](https://spec.openapis.org/oas/v3.0.3) document.
2. New files are automatically discovered and listed in the resource selector — no additional wiring is needed.
3. Use the dev server (`npm run dev`) to verify your changes render correctly in Swagger UI.
4. Commit your changes to the `development` branch.

### Spec conventions

- Follow OpenAPI 3.0.3 strictly.
- Include `project_token` or `user_token` + `project_id` authentication parameters where applicable.
- Document pagination with `page` and `per` query parameters.
- Provide request and response examples.
- Reference the TaxonWorks source (routes, controllers, jbuilder views, models, and `lib/queries/**/filter.rb`) as the source of truth for endpoint behavior.

## Deploying

1. Ensure all changes are committed and pushed to the `development` branch.
2. Merge `development` into `main`.
3. GitHub Actions automatically builds the site and deploys it to GitHub Pages at [api.taxonworks.org](https://api.taxonworks.org).

No manual build or upload step is required. The workflow (`.github/workflows/docs.yml`) runs `npm ci && npm run build` and publishes the `dist/` directory.

## Project structure

```
docs/openapi/       # OpenAPI 3.0 YAML specs (one per resource)
src/                # Vue 3 application source
  components/       # Vue components (header, resource selector, Swagger viewer)
  composables/      # Vue composables (spec loading/parsing)
  styles/           # Global CSS
dist/               # Build output (git-ignored)
.github/workflows/  # CI/CD (GitHub Actions)
```

## Changelog

See [CHANGELOG.md](/CHANGELOG.md). Note this changelog documents changes in the documentation, not the underlying code.

## Contributing

See [CONTRIBUTING.md](/CONTRIBUTING.md).

## License

[https://opensource.org/licenses/MIT](/LICENSE.md).

## Code of conduct

Please see [CODE_OF_CONDUCT.md](/CODE_OF_CONDUCT.md).

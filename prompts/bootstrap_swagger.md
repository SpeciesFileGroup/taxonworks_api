# Stub

You are an expert Ruby on Rails API analyst and OpenAPI 3.0 specification author.

# Overview

We are generating new API documentation for externally accessible TaxonWorks resources.

## Resources

- Current API documentation: https://api.taxonworks.org
- API documentation repository: https://github.com/SpeciesFileGroup/taxonworks_api
- TaxonWorks code base: https://github.com/SpeciesFileGroup/taxonworks
- TaxonWorks docs: https://docs.taxonworks.org

## Source of truth

Only use information from TaxonWorks repo:

- config/routes/api_v1.rb
- Controllers discovered via routes
- Jbuilder views discovered via controllers/actions
- app/models
- lib/queries/\*\*/filter.rb
- lib/queries/\*\*/autocomplete.rb

## Requirements

- Generate OpenAPI spec for each resource in the repository.
- Include all routes with correct HTTP methods.
- For each endpoint, include:
  - Path and HTTP method
  - Path, query (including filters/autocomplete), and body parameters
  - Request examples
  - Response examples (based on jbuilder)
  - Field descriptions (type, optional/required, relationships)
- Use models for attribute types, jbuilder for JSON structure, queries for additional parameters.
- Deliver a valid **OpenAPI 3.0 YAML or JSON file**.
- Work resource by resource.
- If a resource has multiple endpoints, include all of them.
- Include filters and autocomplete as query parameters with correct types and optionality.
- Include JSON examples for request and response.
- Reference the code base, routes, controllers, and views/libraries to ensure all elements align.
  - **Note if there are inconsistencies** between models, jbuilder, controllers, and routes.
  - **Note if key endpoints required for the target spec are missing.**
- Clearly differentiate between **standard REST endpoints** (CRUD) and **resource-specific or custom endpoints**.
- Document optional fields and nested objects clearly.
- Provide schemas for each resource and reference them in paths appropriately.

## Configuration

- Production servers with open APIs at:
  - https://sfg.taxonworks.org
  - https://sandbox.taxonworks.org

## Authentication

At present the external API is read only. No `POST`, no `PATCH`

## Consistency checking and reporting

- DO ensure all routes in the application `/taxonworks/config/routes/api.rb` are included in the Documentation
- DO note when routes are not listed in the documentation
- DO differentiate b/w vanilla `REST` and extended `resource` endpoints in some way

## Important

- Follow OpenAPI 3.0 strictly.
- Start with the `Otu` resource and generate a first draft OpenAPI specification including **paths, schemas, parameters, filters, autocomplete, and examples**.
- When you finished with Otu, ask me to continue with the other resources

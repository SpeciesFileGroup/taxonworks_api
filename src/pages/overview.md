# TaxonWorks API

A RESTful JSON-backed API for accessing and managing biodiversity data in [TaxonWorks](https://taxonworks.org).

_Select a resource from the sidebar to explore its endpoints._

---

## Authentication

All API requests require authentication. Include **one** of the following combinations as query parameters or HTTP headers:

| Method        | Parameters             | Use case                                    |
| ------------- | ---------------------- | ------------------------------------------- |
| Project token | `project_token`        | Public/read-only access scoped to a project |
| User token    | `token` + `project_id` | Full read access on behalf of a user        |

Tokens are generated inside the TaxonWorks application under _Account > API access_ and _Project > API access_.

## Pagination

List endpoints are paginated. Control pagination with these query parameters:

| Parameter | Default | Description              |
| --------- | ------- | ------------------------ |
| `page`    | 1       | Page number              |
| `per`     | 50      | Items per page (max 250) |

Pagination metadata is returned in the response headers: `Pagination-Total`, `Pagination-Total-Pages`, `Pagination-Page`, and `Pagination-Per-Page`.

## Servers

- [sfg.taxonworks.org](https://sfg.taxonworks.org) — Species File Group production instance
- [sandbox.taxonworks.org](https://sandbox.taxonworks.org) — Public sandbox for testing

## Resources

- [TaxonWorks project site](https://taxonworks.org)
- [Documentation](https://docs.taxonworks.org)
- [Source code (GitHub)](https://github.com/SpeciesFileGroup/taxonworks)
- [API docs source (GitHub)](https://github.com/SpeciesFileGroup/taxonworks_api)

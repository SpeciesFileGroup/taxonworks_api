<template>
  <div class="container">
    <div class="overview">
      <section class="overview__hero">
        <h1 class="overview__title">TaxonWorks API</h1>
        <p class="overview__subtitle">
          A RESTful JSON-backed API for accessing and managing biodiversity data
          in
          <a
            href="https://taxonworks.org"
            target="_blank"
            rel="noopener"
            >TaxonWorks</a
          >.
        </p>
        <p class="overview__cta">
          Select a resource from the sidebar to explore its endpoints.
        </p>
      </section>

      <section class="overview__section">
        <h2 class="overview__heading">Authentication</h2>
        <p>
          All API requests require authentication. Include
          <strong>one</strong> of the following combinations as query parameters
          or HTTP headers:
        </p>
        <table class="overview__table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Parameters</th>
              <th>Use case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Project token</td>
              <td><code>project_token</code></td>
              <td>Public/read-only access scoped to a project</td>
            </tr>
            <tr>
              <td>User token</td>
              <td><code>token</code> + <code>project_id</code></td>
              <td>Full read/write access on behalf of a user</td>
            </tr>
          </tbody>
        </table>
        <p>
          Tokens are generated inside the TaxonWorks application under
          <em>Account &gt; API access</em>.
        </p>
      </section>

      <section class="overview__section">
        <h2 class="overview__heading">Pagination</h2>
        <p>
          List endpoints are paginated. Control pagination with these query
          parameters:
        </p>
        <table class="overview__table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>page</code></td>
              <td>1</td>
              <td>Page number</td>
            </tr>
            <tr>
              <td><code>per</code></td>
              <td>50</td>
              <td>Items per page (max 250)</td>
            </tr>
          </tbody>
        </table>
        <p>
          Pagination metadata is returned in the response headers:
          <code>Pagination-Total</code>, <code>Pagination-Total-Pages</code>,
          <code>Pagination-Page</code>, and <code>Pagination-Per-Page</code>.
        </p>
      </section>

      <section class="overview__section">
        <h2 class="overview__heading">Servers</h2>
        <ul class="overview__server-list">
          <li>
            <a
              href="https://sfg.taxonworks.org"
              target="_blank"
              rel="noopener"
            >
              sfg.taxonworks.org
            </a>
            — Species File Group production instance
          </li>
          <li>
            <a
              href="https://sandbox.taxonworks.org"
              target="_blank"
              rel="noopener"
            >
              sandbox.taxonworks.org
            </a>
            — Public sandbox for testing
          </li>
        </ul>
      </section>

      <section class="overview__section">
        <h2 class="overview__heading">Resources</h2>
        <ul class="overview__link-list">
          <li>
            <a
              href="https://taxonworks.org"
              target="_blank"
              rel="noopener"
            >
              TaxonWorks project site
            </a>
          </li>
          <li>
            <a
              href="https://docs.taxonworks.org"
              target="_blank"
              rel="noopener"
            >
              Documentation
            </a>
          </li>
          <li>
            <a
              href="https://github.com/SpeciesFileGroup/taxonworks"
              target="_blank"
              rel="noopener"
            >
              Source code (GitHub)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/SpeciesFileGroup/taxonworks_api"
              target="_blank"
              rel="noopener"
            >
              API docs source (GitHub)
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1420px;
  max-width: 1420px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.overview {
  flex: 1;
  overflow-y: auto;
  min-width: 0;
  width: 100%;
}

.overview__hero {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #dfe3e8;
}

.overview__title {
  margin: 0 0 0.5rem;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a5276;
}

.overview__subtitle {
  margin: 0 0 1rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #444;
}

.overview__cta {
  margin: 0;
  font-size: 0.95rem;
  color: #666;
  font-style: italic;
}

.overview__section {
  margin-bottom: 2rem;
}

.overview__heading {
  margin: 0 0 0.75rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a5276;
}

.overview__section p {
  margin: 0 0 0.75rem;
  line-height: 1.6;
  color: #333;
  font-size: 0.925rem;
}

.overview__section code {
  background: #f0f3f7;
  padding: 0.15rem 0.4rem;
  border-radius: 3px;
  font-size: 0.85rem;
  color: #1a5276;
}

.overview__table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.overview__table th,
.overview__table td {
  text-align: left;
  padding: 0.5rem 0.75rem;
  border: 1px solid #dfe3e8;
}

.overview__table th {
  background: #f5f7fa;
  font-weight: 600;
  color: #1a5276;
}

.overview__table td {
  color: #333;
}

.overview__server-list,
.overview__link-list {
  margin: 0;
  padding-left: 1.25rem;
  line-height: 1.8;
  font-size: 0.925rem;
  color: #333;
}

.overview a {
  color: #5b9bd5;
  text-decoration: none;
}

.overview a:hover {
  text-decoration: underline;
  color: #1a5276;
}
</style>

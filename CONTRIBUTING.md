
# Contributing

* Issues pertaining to the documentation itself can be opened in this repository.
* Issues pertaining to code behind the API are [in the core repository, labeled as TaxonWorks issues](https://github.com/SpeciesFileGroup/taxonworks/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3AAPI).

Contributing follows standard Git practices.

Please follow the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). 

## Workflow

### Overview

Development happens on `development`, or lands there as a precursor to merging in `main`.

API documentation is decoupled from code generation, i.e. we use RAML strictly to build out the HTML documentation at present.

Most routes will correspond to filter code in `lib/queries/`, i.e. we expose `/<model>.json` endpoints via a new parallel route.

Many existing patterns/example exist for TaxonNames (i.e. see controller, routes, etc.).

#### Add Routes

See [config/routes/api_v1.rb](https://github.com/SpeciesFileGroup/taxonworks/blob/development/config/routes/api_v1.rb)

#### Add corresponding actions

Add the controller action to the corresponding controllers.

#### Add the query

Simply duplicate the `index` method that hits the Filter model.

You can also duplicate the parameter filtering method (e.g. `filter_params`) to limit params to expose.

#### Update the RAML

Document the permitted params, and route in the RAML.

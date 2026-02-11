[![docs](https://github.com/SpeciesFileGroup/taxonworks_api/workflows/docs/badge.svg?branch=main)](https://github.com/SpeciesFileGroup/taxonworks_api/actions?query=workflow%3Adocs)

# taxonworks_api

Documentation for the [TaxonWorks](http://taxonworks.org) workbench API, served at [https://api.taxonworks.org](https://api.taxonworks.org). Application code is [here](https://github.com/SpeciesFileGroup/taxonworks).

## Building

Documentation uses RAML, it is built with [gulp](https://gulpjs.com/):

Clone this repository, then:

```
npm install

npx gulp apidoc
```

Documentation is in `/docs`. Open `/docs/index.html` to view locally, or see [running an api console](https://api.taxonworks.org/#/running-an-api-console).

## Deploying

Merge `development` into `main`. Github actions do the rest.

## Changelog

See [CHANGELOG.md](/CHANGELONG.md). Note this changelog documents changes in the documentation, not the underlying code.

## Contributing

See [CONTRIBUTING.md](/CONTRIBUTING.md).

## License

[https://opensource.org/licenses/MIT](/LICENSE.md).

## Code of conduct

Please see [CODE_OF_CONDUCT.md](/CODE_OF_CONDUCT.md).

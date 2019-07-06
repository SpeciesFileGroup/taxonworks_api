[![Build Status](https://travis-ci.org/SpeciesFileGroup/taxonworks_api.svg?branch=master)](https://travis-ci.org/SpeciesFileGroup/taxonworks_api)

# taxonworks_api

Documentation for the [TaxonWorks](http://taxonworks.org) workbench API, served at [https://api.taxonworks.org](https://api.taxonworks.org).  Application code is [here](https://github.com/SpeciesFileGroup/taxonworks).

## Building

Documentation uses RAML, it is built with [gulp](https://gulpjs.com/):

Clone this repository, then: 

```
npm install

npx gulp apidoc
```

Documentation is in `/docs`.  Open `/docs/index.html` to view locally, or see [running an api console](https://api.taxonworks.org/#/running-an-api-console). 

## Contributing

See [CONTRIBUTING.md](/CONTRIBUTING.md).

## License

[https://opensource.org/licenses/NCSA](/LICENSE.md).

## Code of conduct

Please see [CODE_OF_CONDUCT.md](/CODE_OF_CONDUCT.md). 

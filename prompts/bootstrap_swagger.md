
# Stub

# Overview

We are generating new API documentation for externally accessible TaxonWorks resources.

## Resources

* Current API documentation: https://api.taxonworks.org
* API documentation repository: https://github.com/SpeciesFileGroup/taxonworks_api
* TaxonWorks code base: https://github.com/SpeciesFileGroup/taxonworks
* TaxonWorks docs: https://docs.taxonworks.org

... instructions here ...

## Configuration

* Production servers with open APIs at:
  * https://sfg.taxonworks.org
  * https://sandbox.taxonworks.org

## Authentication

At present the external API is read only.  No `POST`, no `PATCH`

## Consistency checking and reporting

* DO ensure all routes in the application `/taxonworks/config/routes/api.rb` are included in the Documentation
* DO note when routes are not listed in the documentation
* DO differentiate b/w vanilla `REST` and extended `resource` endpoints in some way

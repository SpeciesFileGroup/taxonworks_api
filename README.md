[![Build Status](https://travis-ci.org/devarsh1997/taxonworks_api.svg?branch=master)](https://travis-ci.org/devarsh1997/taxonworks_api)

# taxonworks_api

Documentation for the TaxonWorks workbench API.

[http://api.taxonworks.org](http://api.taxonworks.org)

# Building

Documentation is built with [gulp](https://gulpjs.com/).

```
npm install
```

Regenerate documentation locally with `npx gulp apidoc`.

# Roadmap

_We are currently working on v1.  Endpoints on sandboxes are available for testing._

## api/v1

* Echoes functionality from existing interfaces in TaxonWorks
* Mostly RESTful
* Endpoints here have had demonstrable utility in TaxonWorks UI/UX
* Prone to change, should be considered experimental, but useful

## api/v2

* Refining v1 
* Eliminate nesting responses

## api/v3

* Focus on caching/backend/performance
* Potential migration to non-Rails middle layer

# In application

* Many of the endpoints that will appear on api/ are available in app by appending `.json` to the URL 
* Various tasks, particularly the filters expose these URLs so you can copy/paste them in your browser

# In development

* You can use `rake routes` to get a list of all endpoints, filtering by those that default to JSON gives you a broader picture of what is availble.

# Building this documentation

Documentation is built with [gulp](https://gulpjs.com/). To regenerate documentation just `npx gulp apidoc`.

# Running api-console

Allows to explore documentation but also try out the API right from the documentation page against a local rails server (localhost:3000).

Use `npm install` if you haven't already. Then just run `npm start -- --open` (`-- --open` is optional, it will make your browser open the URL the console is being served from).

Once it is ready to explore you should see something like this:
```bash
$ npm start -- --open

(OUTPUT OMITTED)

API console build ready.
Thanks for using our API tools!

Files in this directory are available under the following URLs
        applications: http://127.0.0.1:8081
```
Remember to have a taxonworks instance running at localhost:3000 (`rails s` where you have taxonworks repo cloned) before sending API requests though the console.

**NOTE**: It might display a white screen when the browser opens the URL (specially true with Firefox, Chrome seems inmune to this problem). Refresh a few times until it shows the documentation.

# Other

We ran a much more intensive experiment, the matrix_row_coder, you can see how we mocked API calls here: https://github.com/SpeciesFileGroup/matrix_row_coder/tree/master/src/request/mockRequests.

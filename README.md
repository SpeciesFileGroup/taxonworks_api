[![Build Status](https://travis-ci.org/SpeciesFileGroup/taxonworks_api.svg?branch=master)](https://travis-ci.org/SpeciesFileGroup/taxonworks_api)

# taxonworks_api

Documentation for the [TaxonWorks](http://taxonworks.org) workbench API, served at [http://api.taxonworks.org](http://api.taxonworks.org).  Application code is [here](https://github.com/SpeciesFileGroup/taxonworks).

## Building

Documentation uses RAML, it is built with [gulp](https://gulpjs.com/):

Clone the repository, then: 

```
npm install

npx gulp apidoc
```

Documentation is in `/docs`.  Open `/docs/index.html` to view locally.

## Contributing

See [CONTRIBUTING.md](/CONTRIBUTING.md)

## License

[https://opensource.org/licenses/NCSA](/LICENSE.md).

-- TODO: remove to RAML
# Experimenting with endpoints not in `/api/v1/`

You can add existing internal endpoints to `api/v1` for the purposes of experimenting by aliasing them in the `config/routes.rb` file relatively easily.  To get a resources CRUD just add that resource to API scope as you would see it above in the application endpoint

```Ruby

  scope :api, :defaults => { :format => :json }, :constraints => { id: /\d+/ } do
    scope  '/v1' do
    
    # Add TaxonNames endpoints
    resources taxon_names
    
    # ...
    
    end
  end
```

# Getting a list of all the endpoints

From your endpoint you can do `rake routes` to get a list of all endpoints.

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

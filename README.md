# taxonworks_api

Documentation for the TaxonWorks API.

# Status

TLDR - We have lots of non externally documented, non /API/VI nodes that could be aliased for experimenting. Once we do a major branch merge in the near future we will turn our focus to getting those endpoints cleaned up, and exposed in a proper fashion here.  

See the issues here as to our present thinking/considerations and next steps.

Issues pertaining to implementation (actual code) also exist as [TaxonWorks issues](https://github.com/SpeciesFileGroup/taxonworks/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3AAPI)

## Details

The `api/v1` endpoints exist as an early proof of concept, they included our tests for tokenized user access to the API.  They are not particularly useful.

We ran a much more intensive experiment, the matrix_row_coder, you can see how we mocked API calls here: https://github.com/SpeciesFileGroup/matrix_row_coder/tree/master/src/request/mockRequests.

Recently, all of the VUE.js based views are JSON endpoint based. Unfortunately these are not yet documented beyond their use in the code.  If you experiment with the `Edit taxon name` task, watching the server log, you'll get a feel for the requests there. 

There exist JSON responses for many of the basic CRUD requests inside the application, just append '.json' to the request.

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



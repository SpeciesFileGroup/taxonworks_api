<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>TaxonWorks API Client Example - Listing Taxon Names</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }
        </style>
    </head>
    <body>
      <h1>Names listing</h1>
      <div>
        Navigation: 
          <a href="?page=1">First</a> |
          @if ($pagination['prev'])
          <a href="?page={{$pagination['prev']}}">Prev</a> |
          @endif
          @if ($pagination['next'])
          <a href="?page={{$pagination['next']}}">Next</a> |
          @endif
          <a href="?page={{$pagination['last']}}">Last</a> |
          <a href="javascript:history.back()">Go Back</a>
        <ul style="list-style: none;">
        @foreach ($names as $name)
          <li><a href="/{{ $name['id'] }}">{!! $name["cached_html"] !!} {{ $name["cached_author_year"] }}</a></li>
        @endforeach
        </ul>
      </div>
    </body>
</html>

<?php

use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

function get_names($page = null, $parent_id = null) {
  $client = new Client([
    // Base URI is used with relative requests
    'base_uri' => env('TW_API_PROTOCOL', 'https').'://'.env('TW_API_HOST').'/api/v1/',
    'timeout'  => 10.0
  ]);
  $params = array(
    'token' => env('TW_API_TOKEN'),
    'project_token' => env('TW_API_PROJECT_TOKEN')
  );

  if ($page) $params['page'] = $page;
  if ($parent_id) $params['parent_id[]'] = $parent_id;

  $response = $client->request('GET', 'taxon_names', ['query' => $params]);

  return array(
    'body' => $response->getBody(),
    'pagination' => array(
      'prev' => $response->getHeader('Pagination-Previous-Page')[0],
      'next' => $response->getHeader('Pagination-Next-Page')[0],
      'page' => $response->getHeader('Pagination-Page')[0],
      'last' => $response->getHeader('Pagination-Total-Pages')[0]
    )
  );
}

Route::get('/', function (Request $request) {
  $response = get_names($request->query('page'));

  return view('index', [
    'names' => json_decode($response['body'], true),
    'pagination' => $response['pagination']
  ]);
});

Route::get('/{id}', function (Request $request, $id) {
  $response = get_names($request->query('page'), $id);

  return view('index', [
    'names' => json_decode($response['body'], true),
    'pagination' => $response['pagination']
  ]);
});

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OutletController;
use App\Http\Controllers\MenuController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Get all outlets
Route::get('/outlets', [OutletController::class, 'getOutlet']);

// Get specific outlet
Route::get('outlet/{id}', [OutletController::class, 'getOutletById']);

// Get the menu
Route::get('/menu', [MenuController::class, 'getMenu']);

// Get specific menu item
Route::get('menu/{id}' , [MenuController:: class, 'getMenuById']);
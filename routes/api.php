<?php

use App\Http\Controllers\Api\Admin\CategoryController;
use App\Http\Controllers\Api\Admin\ContactController;
use App\Http\Controllers\Api\Admin\PermissionController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Models\Category;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/login', [App\Http\Controllers\Api\Auth\AuthController::class, 'authenticate']);
Route::post('/register', [App\Http\Controllers\Api\Auth\AuthController::class, 'register']);
Route::post('/contact', [App\Http\Controllers\ContactController::class, 'store']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/auth/user', function (Request $request) {
        return ['data' => $request->user()];
    });
    Route::delete('/logout', [App\Http\Controllers\Api\Auth\AuthController::class, 'logout']);
});

/**
 * Admin routes
 */

// contact routes
Route::group(['prefix' => 'admin', 'middleware' => 'auth:sanctum'], function () {
    Route::get('contact', [ContactController::class, 'index'])
        ->middleware([sprintf('can:%s', Contact::SHOW_CONTACTS)]);
    Route::delete('contact/{id}', [ContactController::class, 'index'])
        ->middleware([sprintf('can:%s', Contact::DELETE_CONTACTS)]);
    Route::get('contact/{id}', [ContactController::class, 'show'])
        ->middleware([sprintf('can:%s', Contact::SHOW_CONTACTS)])
        ->where('id', '[0-9]+');
});

// category routes
Route::group(['prefix' => 'admin', 'middleware' => 'auth:sanctum'], function () {
    Route::get('category', [CategoryController::class, 'index']);
    Route::post('category', [CategoryController::class, 'store'])
        ->middleware([sprintf('can:%s', Category::CREATE_PERMISSION)]);
    Route::delete('category/{id}', [CategoryController::class, 'destroy'])
        ->middleware([sprintf('can:%s', Category::DELETE_PERMISSION)]);
    Route::get('category/{id}', [CategoryController::class, 'show'])
        ->where('id', '[0-9]+');
    Route::patch('category/{id}', [CategoryController::class, 'update'])
        ->where('id', '[0-9]+');
});

// permission routes
Route::group(['prefix' => 'admin', 'middleware' => 'auth:sanctum'], function () {
    Route::get('permission', [PermissionController::class, 'index']);
    Route::patch('permission', [PermissionController::class, 'update']);
});

// user routes
Route::group(['prefix' => 'admin', 'middleware' => 'auth:sanctum'], function () {
    Route::get('users', [UserController::class, 'index']);
    Route::get('users/{id}', [UserController::class, 'show'])
        ->where('id', '[0-9]+');
});

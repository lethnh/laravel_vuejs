<?php

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

/**
 * Backend
 */
Route::get('/dashboard/{vue?}', function () {
    return view('admin.app');
})->where('vue', '[\/\w\.-]*')->name('admin');

/**
 * Frontend
 */
Route::get('/{vue?}', function () {
    return view('front.app');
})->where('vue', '[\/\w\.-]*')->name('home');

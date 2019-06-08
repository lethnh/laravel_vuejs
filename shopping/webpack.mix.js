const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/*
|--------------------------------------------------------------------------
| Front
|--------------------------------------------------------------------------
*/
mix.js('resources/assets/front/js/app.js', 'public/front/js/')
.sass('resources/assets/front/sass/app.scss', 'public/front/css/')

.options({
    processCssUrls: false
})

.version();


/*
|--------------------------------------------------------------------------
| Admin
|--------------------------------------------------------------------------
*/
// mix.js('resources/assets/admin/js/app.js', 'public/admin/js/')
// .sass('resources/assets/admin/sass/app.scss', 'public/admin/css/')

// .options({
//     processCssUrls: false
// })

// .version();

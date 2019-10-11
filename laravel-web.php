file routes/web.php

<?php

Route::get('/', function () {
    return view('insertform');
});


Route :: post('/insert','Controller@insert');


/*Route::get('/blog', 'BlogController@index');
Route::get('/blog/{id}', 'BlogController@show');

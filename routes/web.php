<?php
/*
    Project: dashboard_laravel_10
    User: MD Shefat Masum
    Github: https://github.com/Md-shefat-masum
    Date: 24 July 2023
    Time: 19:31:10
    Path: routes\web.php
    Task List: custom scripts, cart managment
*/


use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::get('/', function () {
    return view('frontend.home');
});

Route::get('/about', function () {
    return view('frontend.pages.about');
});

Route::get('/contact', function () {
    return view('frontend.pages.contact');
});



Route::get('/dashboard/login', function () {
    return view('backend.login');
})->name('dashboard_login');

Route::middleware('dashboard_check_auth')->get('/dashboard', function () {
    return view('backend.dashboard');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::prefix('/')
    ->group(function () {
        Route::get('/tlog', function () {
            $user = \App\Models\User::find(1);
            $token = $user->createToken('accessToken');
            dd($token->accessToken);
            return response("login")->withCookie(cookie("end_time", json_encode([
                "end_time" => Carbon\Carbon::now()->addMinute(15)->toDateTimeString(),
                "update_time" => Carbon\Carbon::now()->toDateTimeString(),
                "token" => encrypt(12345678),
            ]), 20, '/', '', false, false, true));
        });
        Route::get('/t1', function () {
            $c = cookie();
            // dd($c);

            cookie()->queue('loged_time', "5000", 5);
            return response(view('home'));
            dd(request()->cookie());
            return 0;
        });
    });

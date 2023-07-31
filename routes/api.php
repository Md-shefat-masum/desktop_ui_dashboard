<?php

use App\Http\Controllers\Admin\ContactMessageController;
use App\Http\Controllers\Auth\ApiLoginController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\Auth\UserRoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cookie;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')
    ->group(
        function () {
            Route::controller(ApiLoginController::class)->prefix('/user')
                ->middleware(['guest:api'])
                ->group(function () {
                    Route::post('/get-token', 'get_token');
                    Route::post('/api-login', 'login');
                    Route::post('/api-register', 'register');
                    Route::get('/auth-check', 'auth_check');
                    Route::post('/forget-mail', 'forget_mail');
                    Route::post('/check-code', 'check_code');
                    Route::post('/logout-from-all-devices', 'logout_from_all_devices');
                });

            Route::middleware(['auth:api'])->group(function () {
                Route::controller(ApiLoginController::class)
                    ->prefix('/user')
                    ->group(function () {
                        Route::post('/api-logout', 'logout');
                        Route::post('/user_info', 'user_info');
                        Route::post('/check-auth', 'check_auth');
                        Route::post('/user_update', 'user_update');
                        Route::post('/update_password', 'update_password');
                        Route::post('/find-user-info', 'find_user_info');
                    });

                Route::post('/user/update-profile', [ProfileController::class, 'update_profile']);

                Route::controller(UserController::class)->prefix('/user')
                    ->group(function () {
                        Route::get('/all', 'all');
                        Route::get('/{id}', 'show');
                        Route::post('/store', 'store');
                        Route::post('/canvas-store', 'canvas_store');
                        Route::post('/update', 'update');
                        Route::post('/soft-delete', 'soft_delete');
                        Route::post('/destroy', 'destroy');
                        Route::post('/restore', 'restore');
                        Route::post('/bulk-import', 'bulk_import');
                    });

                Route::controller(UserRoleController::class)->prefix('user-role')
                    ->group(function () {
                        Route::get('/all', 'all');
                        Route::get('/{id}', 'show');
                        Route::post('/store', 'store');
                        Route::post('/canvas-store', 'canvas_store');
                        Route::post('/update', 'update');
                        Route::post('/canvas-update', 'canvas_update');
                        Route::post('/soft-delete', 'soft_delete');
                        Route::post('/destroy', 'destroy');
                        Route::post('/restore', 'restore');
                        Route::post('/bulk-import', 'bulk_import');
                    });

                Route::controller(ContactMessageController::class)->prefix('contact-message')
                    ->group(function () {
                        Route::get('/all', 'all');
                        Route::get('/{id}', 'show');
                        Route::post('/store', 'store');
                        Route::post('/canvas-store', 'canvas_store');
                        Route::post('/update', 'update');
                        Route::post('/canvas-update', 'canvas_update');
                        Route::post('/soft-delete', 'soft_delete');
                        Route::post('/destroy', 'destroy');
                        Route::post('/restore', 'restore');
                        Route::post('/bulk-import', 'bulk_import');
                    });
            });
        }
    );


Route::prefix('/')
    ->middleware(['auth:api', 'dashboard_auth'])
    ->group(function () {
        Route::get('/t1', function () {
            return collect(auth()->user()->tokens)->map(function($i){return $i->id;});
        });
    });

Route::get('/tlog', function () {
    $user = \App\Models\User::find(1);
    $token = $user->createToken('accessToken');
    $user->token = $token->accessToken;

    $auth_c = cookie("SESSION-TOKEN",json_encode([
        "end_time" => Carbon::now()->addMinute(15)->toDateTimeString(),
        "update_time" => Carbon::now()->toDateTimeString(),
        "token" => \Illuminate\Support\Facades\Hash::make($user->id),
    ]), Carbon::now()->addMinute(15)->format('i'), '/','',true,true,true);

    $token_c = cookie("AXRF-TOKEN",$token->accessToken,Carbon::now()->addMinute(15)->format('i'),'/','',false, false, true);

    return response()->json($user)->withCookie($auth_c)->withCookie($token_c);
});

<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie as FacadesCookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Response;

class DashboardAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        $auth_session = request()->cookie("SESSION-TOKEN");
        $axrf_token = request()->cookie("AXRF-TOKEN");
        $user = auth()->user();

        if ((!$auth_session && !$axrf_token) || ($axrf_token && !$auth_session) || ($auth_session && !$axrf_token) || (!$auth_session || !$axrf_token)) {
            $auth_c = cookie("SESSION-TOKEN");
            $token_c = cookie("AXRF-TOKEN");
            return redirect()->route('dashboard_login')->withCookie($auth_c)->withCookie($token_c);
        }

        try {
            $user_id = auth()->user()->id;

            $auth_session = json_decode($auth_session);
            $token_id = $auth_session->token;
            $check_token = Hash::check($user_id, $token_id);

            $end_time = Carbon::parse($auth_session->end_time);
            $check_token_time_over = Carbon::now() > $end_time;
            $time_diff = Carbon::now()->diffInMinutes($end_time, false);

            if (!$check_token_time_over && $time_diff <= 10) {
                auth()->user()->token()->revoke();
                $token_c = cookie("AXRF-TOKEN", auth()->user()->createToken('accessToken')->accessToken,15,'/','',false,false,true);
                $auth_c = cookie("SESSION-TOKEN", json_encode([
                    "end_time" => Carbon::now()->addMinute(15)->toDateTimeString(),
                    "update_time" => Carbon::now()->toDateTimeString(),
                    "token" => \Illuminate\Support\Facades\Hash::make(auth()->user()->id),
                ]), Carbon::now()->addMinute(15)->format('i'), '/', '', true, true, false);

                return $next($request)->withCookie($auth_c)->withCookie($token_c);
            }

            if ($check_token_time_over || !$check_token) {
                auth()->user()->token()->revoke();
                $auth_c = cookie("SESSION-TOKEN");
                $token_c = cookie("AXRF-TOKEN");
                return response()->json("unauthorized", 401)->withCookie($auth_c)->withCookie($token_c);
            }
        } catch (\Throwable $th) {
            return response()->json(["unauthorized", $th->getMessage()], 401);
        }

        $auth_c = cookie("SESSION-TOKEN", json_encode([
            "end_time" => Carbon::now()->addMinute(15)->toDateTimeString(),
            "update_time" => Carbon::now()->toDateTimeString(),
            "token" => \Illuminate\Support\Facades\Hash::make(auth()->user()->id),
        ]), Carbon::now()->addMinute(15)->format('i'), '/');

        return $next($request)->withCookie($auth_c);

        // return response()->json("unauthorized", 401);

        // dd($check_token_time, $auth_session);

    }
}

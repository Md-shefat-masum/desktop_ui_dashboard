<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie as FacadesCookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Response;

class DashboardCheckAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        $session_token = request()->cookie("SESSION-TOKEN");
        $axrf_token = request()->cookie("AXRF-TOKEN");

        if(!$session_token || !$axrf_token){
            return redirect()->route('dashboard_login');
        }

        try {
            $session_token = json_decode($session_token);
            $end_time = Carbon::parse($session_token->end_time);
            $check_token_time_over = Carbon::now() > $end_time;

            if ($check_token_time_over) {
                $auth_c = cookie("SESSION-TOKEN");
                $token_c = cookie("AXRF-TOKEN");
                return redirect()->route('dashboard_login')->withCookie($auth_c)->withCookie($token_c);
            }

        } catch (\Throwable $th) {
            $auth_c = cookie("SESSION-TOKEN");
                $token_c = cookie("AXRF-TOKEN");
                return redirect()->route('dashboard_login')->withCookie($auth_c)->withCookie($token_c);
        }

        return $next($request);
    }
}

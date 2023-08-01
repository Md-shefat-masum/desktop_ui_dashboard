<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dashbaord</title>
    <link rel="stylesheet" href="/assets/fonts/google_icon/google_icons.css">
    <link rel="stylesheet" href="/assets/styles/style.css">
    <script src="{{ asset('js/plugins/sweetalert.js') }}"></script>
    @vite('resources/js/dashboard/main.js')
</head>
<body>
    <div id="dashboard"></div>
</body>
</html>

</html>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Software</title>
    <link rel="stylesheet" href="/assets/fonts/google_icon/google_icons.css">
    <link rel="stylesheet" href="/assets/styles/style.css">
</head>
<body>
    <div id="dashboard"></div>
    @vite(['resources/js/dashboard/main.js'])
</body>
</html>
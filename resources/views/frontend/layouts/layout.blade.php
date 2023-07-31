<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @if(!isset($seo))
        @include('frontend.layouts.includes.meta',['seo'=> (object) [
            'title' => 'website'
        ]])
    @else
        @include('frontend.layouts.includes.meta',['seo'=>(object) $seo])
    @endif
    <link rel="stylesheet" href="/css/plugins/bootstrap.css">
    <script src="/js/plugins/turbolinks.min.js"></script>
    <script src="/js/plugins/axios.js"></script>
    <script src="/js/frontend.js" defer></script>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/contact">contact</a></li>
            <li><a href="/login">login</a></li>
        </ul>
    </nav>
    @yield('contents')
</body>
</html>

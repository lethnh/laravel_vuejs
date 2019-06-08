<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <title>Admin</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto:500,400,300,700' rel='stylesheet' type='text/css'>

    <link href="{{mix("/admin/css/app.css")}}" rel="stylesheet" type="text/css">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="shortcut icon" href="/assets/img/favicons/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="/assets/img/favicons/mstile-144x144.png">
    <meta name="msapplication-config" content="/assets/img/favicons/browserconfig.xml">
    <meta name="theme-color" content="#333333">
</head>

<body class="layout-default skin-default">
    <div id="app" class="site-wrapper">
        <div class="mobile-menu-overlay" @click.prevent="$utils.toggleSidebar"></div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
    <script type="text/javascript" src="{{ mix("/admin/js/app.js") }}"></script>
    <script src="https://kit.fontawesome.com/a5cc250143.js"></script>
</body>

</html> 
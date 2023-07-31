<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>login</title>
    <link rel="stylesheet" href="/assets/fonts/google_icon/google_icons.css">
    <link rel="stylesheet" href="{{ asset('css/login/login.css') }}">
</head>

<body>
    <div class="main_body">
        <div id="login">
            <div class="container">
                <div class="login_form">
                    <div class="heading">
                        <h2>LOGIN</h2>
                    </div>
                    <div class="bg1"></div>
                    <div class="bg2"></div>
                    <div class="bg3"></div>
                    <div class="form_content">
                        <form action="#" autocomplete="false">
                            <div class="form_group">
                                <div class="input_body">
                                    <span class="material-symbols-outlined">
                                        person
                                    </span>
                                    <input type="email" value="" placeholder="email" name="email" id="email">
                                </div>
                                <label for="email">
                                    <div class="text">Email</div>
                                </label>
                            </div>
                            <div class="form_group">
                                <div class="input_body">
                                    <span class="material-symbols-outlined">
                                        key
                                    </span>
                                    <input type="password" placeholder="password" name="password" id="password">
                                </div>
                                <label for="password">
                                    <div class="text">password</div>
                                </label>
                            </div>
                            <div class="form_group button_group">
                                <div class="buttons">
                                    <button type="reset">
                                        <div class="text">reset</div>
                                    </button>
                                    <button type="submit">
                                        <div class="text">submit</div>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>

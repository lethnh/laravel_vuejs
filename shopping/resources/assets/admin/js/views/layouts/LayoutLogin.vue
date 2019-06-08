<template>
    <div class="login-page login-3">
        <div class="site-wrapper">
            <div class="login-box">
                <div class="box-wrapper">
                    <div class="logo-main">
                        <router-link :to="{ name: 'dashboard' }">
                            <img src="/admin/img/logo.png">
                        </router-link>
                    </div>
                    <router-view/>
                    <div class="page-copyright">
                        <p>Powered by
                            <a href="/" target="_blank">GiSoft</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="content-box">
                <h1>
                    <b>Cloud Activist</b> dashboard <br>
                    Hi.
                </h1>
            </div>
        </div>
    </div>
</template>

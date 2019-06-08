<template>
  <div>
    <header class="main_menu home_menu">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg navbar-light">
              <router-link to="/" class="navbar-brand">
                <img src="/front/img/logo.png" alt="logo">
              </router-link>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div
                class="collapse navbar-collapse main-menu-item justify-content-end"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="food_menu.html">Menu</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="chefs.html">Chefs</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >Blog</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="blog.html">Blog</a>
                      <a class="dropdown-item" href="single-blog.html">Single blog</a>
                      <a class="dropdown-item" href="elements.html">Elements</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              <div class="menu_btn">
                <a href="#" class="btn_1 d-none d-sm-block">book a tabel</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- Header part end-->

    <section class="banner_part">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="banner_text">
              <div class="banner_text_iner">
                <h5>Expensive but the best</h5>
                <h1>Deliciousness jumping into the mouth</h1>
                <p>
                  Together creeping heaven upon third dominion be upon won't darkness rule land
                  behold it created good saw after she'd Our set living. Signs midst dominion
                  creepeth morning
                </p>
                <div class="banner_btn">
                  <div class="banner_btn_iner">
                    <a href="#" class="btn_2">
                      Reservation
                      <img src="/front/img/icon/left_1.svg" alt>
                    </a>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                    class="popup-youtube video_popup"
                  >
                    <span>
                      <img src="/front/img/icon/play.svg" alt>
                    </span> Watch our story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
</style>
<script type="text/babel">
import Auth from "../../../services/auth";
import Ls from "../../../services/ls";

export default {
  props: ["cash"],
  data() {
    return {
      authenticated: false,
      name: null,
      avatarUrl: null
    };
  },
  methods: {
    logout() {
      Auth.logout().then(() => {
        this.authenticated = false;
        this.name = Ls.remove("auth.userName");
        this.avatarUrl = Ls.remove("auth.userImage");
        this.$router.replace("/login");
      });
    }
  },
  mounted() {
    this.authenticated = Ls.get("auth.token") ? true : false;
    this.name = Ls.get("auth.userName");
    this.avatarUrl = Ls.get("auth.userImage");
  }
};
</script>


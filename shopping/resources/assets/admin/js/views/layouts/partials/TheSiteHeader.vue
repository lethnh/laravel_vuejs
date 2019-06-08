<template>
  <header class="site-header">
    <a href="#" class="brand-main">
    </a>
    <a
      href="#"
      class="nav-toggle"
      @click="onNavToggle"
    >
      <div class="hamburger hamburger--arrowturn">
        <div class="hamburger-box">
          <div class="hamburger-inner"/>
        </div>
      </div>
    </a>
    <ul class="action-list">
      <li>
        <v-dropdown :show-arrow="false">
          <a slot="activator" href="#">
            <i class="icon-fa icon-fa-plus"/>
          </a>
          <v-dropdown-item>
            <a href="#">
              <i class="icon-fa icon-fa-edit"/>  __('New Post') 
            </a>
          </v-dropdown-item>
          <v-dropdown-item>
            <a href="#">
              <i class="icon-fa icon-fa-tag"/>  __('New Project') 
            </a>
          </v-dropdown-item>
        </v-dropdown>
      </li>
      <li>
        <v-dropdown :show-arrow="false">
          <a
            slot="activator"
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            class="avatar"
          >
            <img src="/admin/img/avatar-default.png" alt="Avatar">
          </a>
          <v-dropdown-item>
            <router-link class="dropdown-item" to="/admin/settings">
              <i class="icon-fa icon-fa-cogs"/>  __('Settings') 
            </router-link>
          </v-dropdown-item>
          <v-dropdown-item>
            <a
              href="#"
              class="dropdown-item"
              @click.prevent="logout"
            >
              <i class="icon-fa icon-fa-sign-out"/>  __('Logout') 
            </a>
          </v-dropdown-item>
        </v-dropdown>
      </li>
    </ul>
  </header>
</template>
<script type="text/babel">
// import Auth from '../../../services/auth'

export default {
  methods: {
    onNavToggle () {
      this.$utils.toggleSidebar()
    },
    logout () {
      Auth.logout().then(() => {
        this.$router.replace('/dashboard/login')
      })
    }
  }
}
</script>

<style>
  .site-header {
    background-color: transparent;
    position: relative;
  }
</style>
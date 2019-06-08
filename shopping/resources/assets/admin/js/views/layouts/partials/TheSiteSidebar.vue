<template>
  <div class="sidebar-left">
    <div class="sidebar-body scroll-pane">
      <div class="side-nav">
        <v-collapse accordion>
          <v-collapse-item
            v-for="menu in menus"
            :active-url="$router.resolve({ name: menu.route }).href"
            :key="menu.route"
          >
            <router-link slot="item-title" :to="({ name: menu.route })">
              <i :class="menu.icon"/>
              {{ menu.text }}
            </router-link>
          </v-collapse-item>
        </v-collapse>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
export default {
  data() {
    return {
      menus: [
        {
          route: "dashboard",
          icon: "fas fa-tachometer-alt",
          text: "Dashboard"
        },
        {
          route: "users",
          icon: "fas fa-users",
          text: "Users"
        }, {
          route: "products",
          icon: "fas fa-archive",
          text: "Products"
        }
      ]
    };
  }
};
</script>

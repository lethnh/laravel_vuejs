<template>
  <div class="template-container">
    <site-header/>
    <div class="content bg-content">
      <div class="container-fluid">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
    <site-footer/>
  </div>
</template>
<script type="text/babel">
import SiteHeader from "./partials/Header.vue";
import SiteFooter from "./partials/Footer.vue";

export default {
  data() {
    return {
      cash: 0
    };
  },
  components: {
    SiteHeader,
    SiteFooter
  },
  methods: {
    updateCash(cash) {
      this.cash = cash;
    }
  }
};
</script>


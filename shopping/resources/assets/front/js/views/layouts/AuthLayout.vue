<template>
  <div class="auth-page">
    <site-header/>
    <div class="content bg-content">
      <div class="container p-3">
        <router-view/>
      </div>
    </div>
    <site-footer/>
  </div>
</template>
<script type="text/babel">
import SiteHeader from './partials/Header.vue'
import SiteFooter from './partials/Footer.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>
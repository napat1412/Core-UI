<template>
  <div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import auth from '@/auth'
export default {
  name: "Callback",
  data() {
    return {
      path: ""
    }
  },
  mounted() {
    auth.login()
    if (this.$route.query.hasOwnProperty('path')) {
      this.path = this.$route.query.path
    }
  },
  computed: mapState(['isAuthenticated']),
  watch: {
    isAuthenticated(newValue, oldValue) {
      if (newValue === true) {
        if (this.path === "") {
          this.$router.push({ name: 'Home' })
        } else {
          this.$router.push({ path: this.path })
        }
      }
    },
  },
}
</script>

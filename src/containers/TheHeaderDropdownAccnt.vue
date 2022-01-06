<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div v-if="isAuthenticated == true" class="c-avatar">
          <!-- <img
            src="img/avatars/6.jpg"
            class="c-avatar-img "
          /> -->
          <button type="button" class="btn btn-primary rounded-pill">{{ avatarName }}</button>
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Account</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-bell"/> Updates
      <CBadge color="info" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-envelope-open" /> Messages
      <CBadge color="success" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-task" /> Tasks
      <CBadge color="danger" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-comment-square" /> Comments
      <CBadge color="warning" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>Settings</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-user" /> Profile
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-settings" /> Settings
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-dollar" /> Payments
      <CBadge color="secondary" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-file" /> Projects
      <CBadge color="primary" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem>
      <CIcon name="cil-shield-alt" /> Lock Account
    </CDropdownItem>
    <CDropdownItem v-on:click="onLogoutClicked">
      <CIcon name="cil-lock-locked" /> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import auth from '@/auth.js'
export default {
  name: 'TheHeaderDropdownAccnt',
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated
    },
    avatarName() {
      return this.$store.state.user.firstname[0].toUpperCase() + this.$store.state.user.lastname[0].toUpperCase()
    }
  },
  data () {
    return { 
      itemsCount: 42
    }
  },
  methods: {
    onLogoutClicked() {
      auth.logout()
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>
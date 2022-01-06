<template>
  <div>
    <CCard>
      <CCardHeader>
        <strong>User Information</strong>
      </CCardHeader>
      <CCardBody>
        <CForm>
          <CInput
            label="IsAuthenticated"
            :placeholder="isAuthenticated"
            horizontal
            disabled
          />
          <CInput
            label="IsAdministrator"
            :placeholder="user.isAdministrator"
            horizontal
            disabled
          />
          <CInput
            label="Firstname"
            :placeholder="user.firstname"
            horizontal
            disabled
          />
          <CInput
            label="Lastname"
            :placeholder="user.lastname"
            horizontal
            disabled
          />
          <CInput
            label="E-mail"
            :placeholder="user.email"
            horizontal
            disabled
          />
          <CInput
            label="Groups"
            :placeholder="user.groups"
            horizontal
            disabled
          />
          <CInput
            label="Roles"
            :placeholder="user.roles"
            horizontal
            disabled
          />
        </CForm>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  name: 'RequireLogin',
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated
    },
    user () {
      return this.$store.state.user
    }
  },
  methods: {
  }
}
</script>

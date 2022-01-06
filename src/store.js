import Vue from 'vue'
import Vuex from 'vuex'
import config from '@/config'

Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  // endpointLogin: '',
  // endpointLogout: '',
  isAuthenticated: false,
  user: {
    isAdministrator: false,
    sub: "",
    roles: [],
    groups: [],
    firstname: "",
    lastname: "",
    email: ""
  }
}

const mutations = {
  set (state, [variable, value]) {
    state[variable] = value
  },
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  logout(state) {
    state.isAuthenticated = false
    state.user.isAdministrator = false
    state.user.sub = ""
    state.user.roles = []
    state.user.groups = []
    state.user.firstname = ""
    state.user.lastname = ""
    state.user.email = ""
  },
  login(state, tokenParsed) {
    state.isAuthenticated = true
    state.user.sub = tokenParsed.sub
    state.user.groups = tokenParsed.groups
    state.user.firstname = tokenParsed.given_name
    state.user.lastname = tokenParsed.family_name
    state.user.email = tokenParsed.email
    if (tokenParsed.resource_access.hasOwnProperty(config.keycloak.resourceAccess)) {
      let roles = tokenParsed.resource_access[config.keycloak.resourceAccess].roles
      state.user.roles = roles
      if (roles.includes(config.keycloak.adminRole)) {
        state.user.isAdministrator = true
      }
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})
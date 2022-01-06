import Keycloak from 'keycloak-js'
import store from '@/store'
import config from '@/config'

let initOptions = {
  realm: config.keycloak.realm,
  url: config.keycloak.serverUrl,
  clientId: config.keycloak.clientId,
  onLoad: 'check-sso'
}

let keycloak = Keycloak(initOptions)

export default {
  login () {
    keycloak.init({ checkLoginIframe: false }).then((auth) => {
      if (!auth) {
        // Pass Query String: path to redirectUri and use for redirect back to current page after login by callback 
        keycloak.login({ redirectUri: window.location.protocol+'//'+window.location.host+'/pages/callback?path='+window.location.pathname })
      } else {
        if (keycloak.token && keycloak.idToken && keycloak.token != '' && keycloak.idToken != '') {
          store.commit("login", keycloak.tokenParsed)
          // Token Refresh
          setInterval(() => {
            keycloak.updateToken(70).then((refreshed) => {
              if (refreshed) {
                console.log('Token refreshed' + refreshed);
              } else {
                console.log('Token not refreshed, valid for '
                  + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
              }
            }).catch(() => {
              console.log('Failed to refresh token');
            })
          }, 6000)

          // let resource_access = keycloak.tokenParsed.resource_access
          // console.log("--> log: get username : " + keycloak.subject)
          // console.log("--> log: User has logged in: " + keycloak.subject)
          // console.log("--> log: TokenParsed: " + JSON.stringify(keycloak.tokenParsed))
          // console.log("--> log: User name: " + keycloak.tokenParsed.preferred_username)
          // if (resource_access.hasOwnProperty("ceph-s3-backend")) {
          //   console.log("--> log: Roles: " + JSON.stringify(resource_access["ceph-s3-backend"]))
          //   console.log("--> log: Roles: " + JSON.stringify(resource_access["ceph-s3-backend"].roles))
          // }
        } else {
          store.commit("logout")
        }
      }
    }).catch(() => {
      console.log("Authenticated Failed")
    })
  },

  logout () {
    store.commit("logout")
    // ### if you need to logout from keycloak, use keycloak.logout() ###
    // keycloak.logout()
  },

  onChange () {
  }
}
var config = {};

config.backend = {};
config.keycloak = {};

config.backend.api_endpoint = process.env.BACKEND_API_ENDPOINT || 'http://203.185.97.25:8080';

config.keycloak.serverUrl = process.env.KEYCLOAK_SERVERURL || 'https://id.meca.in.th/auth';
config.keycloak.realm = process.env.KEYCLOAK_REALM || 'dataplatform';
// config.keycloak.clientId = process.env.KEYCLOAK_CLIENT_ID || 'mecas-cloud-control-backend';
config.keycloak.clientId = process.env.KEYCLOAK_CLIENT_ID || 'ceph-s3-frontend';
config.keycloak.resourceAccess = process.env.KEYCLOAK_RESOURCE_ACCESS || 'ceph-s3-backend';
config.keycloak.adminRole = process.env.KEYCLOAK_ADMIN_ROLE || 's3-admin';


// ### Example: Process config variable from ENV ###
// function setupIpPool() {
//   const mecas_ippools_start = process.env.MECAS_IPPOOLS_START || "100.64.0.100, 100.64.1.100";
//   const mecas_ippools_end = process.env.MECAS_IPPOOLS_END || "100.64.0.250, 100.64.1.250";
//   let validPools = []
//   validPools.push({
//     beginIP: new Address4('100.64.0.100'),
//     endIP: new Address4('100.64.0.250')
//   })
//   return validPools
// }
// config.mecas.portset.ippools = setupIpPool()


module.exports = config;
export const config = {
    appId: 'app_id',
    redirectUri: 'http://localhost:3000', //url de redireccionamiento (debo coincidir con el panel de admin en Azure)
    scopes: ['user.read'], //Permiso
    authority: 'https://login.microsoftonline.com/nombreusuariopropietario.onmicrosoft.com'
    // authority: 'https://login.microsoftonline.com/microsoftOauth/",'
};
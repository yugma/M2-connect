// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: 'AIzaSyDZDbmd0p8nUSb8kV2OQhL7_lu7SzwQKYk',
    authDomain: 'm2-connect.firebaseapp.com',
    databaseURL: 'https://m2-connect.firebaseio.com',
    projectId: 'm2-connect',
    storageBucket: '',
    messagingSenderId: '780318527032'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

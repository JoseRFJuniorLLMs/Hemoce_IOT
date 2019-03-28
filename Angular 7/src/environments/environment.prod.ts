// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebaseConfig : {
    apiKey: "AIzaSyAN36l7pR-CDmUMCx0Zk9z92Shl37bvah0",
    authDomain: "hemoce-iot.firebaseapp.com",
    databaseURL: "https://hemoce-iot.firebaseio.com",
    projectId: "hemoce-iot",
    storageBucket: "hemoce-iot.appspot.com",
    messagingSenderId: "638554938479"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

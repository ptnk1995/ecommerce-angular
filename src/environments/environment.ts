// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api_url: 'https://at-supershop.herokuapp.com',
  // api_url: 'http://0.0.0.0:3000',
  // api_url: 'http://172.17.19.139:3000',
  errors: [{code: 'ms1',message: 'You are logged in!'}, 
            {code: 'ms2', message: 'You must login!'}]
};

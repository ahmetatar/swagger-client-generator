module.exports.prompts = [
  {
    type: 'list',
    name: 'language',
    message: 'For which language would you like to generate?',
    choices: [
      {
        name: 'Angular',
        value: 'typescript-angular',
      },
      {
        name: 'Fetch',
        value: 'typescript-fetch',
      },
      {
        name: 'Axios',
        value: 'typescript-axios',
      },
    ],
  },
  {
    type: 'input',
    name: 'output',
    message: 'Enter output directory, where the generated files should be written to',
  },
  {
    type: 'input',
    name: 'input',
    message: 'Enter swagger spec location, URL or file',
    default: 'swagger.yml',
  },
  {
    type: 'input',
    name: 'packageName',
    message: 'Enter name under which you want to publish generated npm package',
  },
  {
    type: 'input',
    name: 'packageVersion',
    message: ' The version of the generated npm package',
    default: '1.0.0',
  },
  {
    type: 'input',
    name: 'angularVersion',
    message: 'Enter version of angular that will be required by the generated package.json',
    default: '12.0.0',
  },
];

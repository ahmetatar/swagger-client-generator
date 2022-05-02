const Generator = require('yeoman-generator');
const { prompts } = require('./options');
const fs = require('fs');

if (!process.env.SWAGGER_CODEGEN_CLI) {
  throw new Error('Swagger codegen cli not found. Please make sure to set environment variable correctly');
}
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async prompting() {
    this.answers = await this.prompt(prompts);
  }

  async writing() {
    this.removeDir();
    await this.generate();
  }

  /**
   * Delete previously created files in the out directory
   */
  removeDir() {
    const dir = this.destinationPath(this.answers.output);

    fs.rm(dir, { recursive: true, force: true }, (err) => {
      if (err) {
        return this.log('An error occured deleting directory');
      }

      this.log(`${dir} directory is deleted`);
    });
  }

  /**
   * Build additional properties like npm package name, version etc.
   */
  buildAdditionalProperties() {
    let additionalProps = '';
    additionalProps += this.answers.packageName ? `npmName=${this.answers.packageName},` : '';
    additionalProps += this.answers.packageVersion ? `npmVersion=${this.answers.packageVersion},` : '';
    additionalProps += this.answers.angularVersion ? `ngVersion=${this.answers.angularVersion}` : '';

    return additionalProps;
   }

  /**
   * It starts the generation process using the swagger spec file.
   * The jar file set with the SWAGGER_CODEGEN_CLI environment variable is used.
   */
  async generate() {
    const additionalProps = this.buildAdditionalProperties();

    await this.spawnCommand('java', [
      '-jar',
      process.env.SWAGGER_CODEGEN_CLI,
      'generate',
      '-i',
      this.destinationPath(this.answers.input),
      '-o',
      this.destinationPath(this.answers.output),
      '-l',
      this.answers.language,
      '--additional-properties',
      additionalProps,
    ]);
  }
};

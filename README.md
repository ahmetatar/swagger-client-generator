## Open API v3 Client Code Generator
This package is a yeoman generator for swagger codegen CLI. Requires the installation of an appropriate version of the [CLI](https://mvnrepository.com/artifact/io.swagger.codegen.v3/swagger-codegen-cli). 

After copying the jar file to a directory of your choice, set the environment variable **SWAGGER_CODEGEN_CLI** to the directory where the cli file is located.

Then you need to install the generator globally with yarn or npm;

```shell
npm i generator-swagger-client -g
```

or

```shell
yarn global add generator-swagger-client
```

Generator currently only supports building client libraries for Angular, Axios and Fetch. You can place the open api spec file (swagger.yml by default) in the directory where you want to create the client library and then run the generator. Or you can provide a url as input. The generator will create the appropriate client library after receiving a set of questions as input.

```shell
yo swagger-client
```

![image](https://user-images.githubusercontent.com/3602465/166308499-a2688095-6e02-4f52-b821-cad3e33e84b9.png)

Make sure you run build before publishing the package to the registry after production is complete.

```shell
yarn install or npm install
yarn build
```

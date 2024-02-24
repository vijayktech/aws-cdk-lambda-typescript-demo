# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template


Install ESBuild for build TS files
	`npm i -D esbuild`

**Create a resource in the AWS Cloud.**
`npx cdk bootstrap`

**To deploy the Lambda**
`npx cdk deploy`

**To invoke Lambda**
```
 aws lambda invoke --function-name <function-name> <some-file-to-write-output>
```
Eg:

```
aws lambda invoke --function-name my-hello-lambda response.txt
```

**API Gateway added to Lambda, so can check in browser below URL**
 https://4caugtwzu73u7oh52u3tgsqsvu0rlocs.lambda-url.ap-south-1.on.aws/

To test Lambda in local 
```
sam local invoke -t ./cdk.out/<stack-template.json> <function-name>
```
Eg: 
```
sam local invoke -t ./cdk.out/AwsCdkLambdaTypescriptDemoStack.template.json my-hello-lambda
```
To Clean up Resources
```
npx cdk destroy
```
